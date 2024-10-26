
import os
from typing import List, Dict, Any
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
from langchain.chains import LLMChain
from langchain_core.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    MessagesPlaceholder,
)
from langchain_core.messages import SystemMessage
from langchain.chains.conversation.memory import ConversationBufferWindowMemory
from langchain_groq import ChatGroq
from dotenv import load_dotenv
import logging
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
from docx import Document
from docx.shared import Inches, Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH

# Load environment variables from a .env file
load_dotenv()

# Initialize environment variable
groq_api_key = "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"

if not groq_api_key:
    raise ValueError("GROQ_API_KEY environment variable not set")

# In-memory storage
conversation_states = {}
chat_history = []
last_responses = {}  # New dictionary to store the last response for each user

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

# Initialize Groq client
model = 'llama3-70b-8192'
groq_chat = ChatGroq(
    groq_api_key=groq_api_key, 
    model_name=model
)

# Setup conversation memory
conversational_memory_length = 20
memory = ConversationBufferWindowMemory(k=conversational_memory_length, memory_key="chat_history", return_messages=True)

# Setup system prompt
system_prompt = (
    'You are Educational Virtual Assistant (EVA) that is an AI-powered platform designed to streamline and enhance '
    'the educational process for educators and students. Act as an interviewer and always respond with a follow-up '
    'question to gather more information from the user, and stop responding questions after giving the final response. Do not provide direct answers, but instead ask follow-up questions '
    'to help the user refine their input. Remember to stay focused on educational topics and assist the user in creating '
    'tailored prompts for their needs. Avoid asking more than 7 questions before generating the final response. Provide the final answer after gathered the minimum details and make sure to provide all the answers as well for the assignments, quizzes or rubrics.'
)

# Create a directory for storing Word documents
DOCUMENT_DIR = os.path.join(os.path.dirname(__file__), "generated_documents")
os.makedirs(DOCUMENT_DIR, exist_ok=True)

class Query(BaseModel):
    question: str
    user_id: str

class DocumentRequest(BaseModel):
    user_id: str

def create_word_document(user_id: str, questions: str, response: str) -> str:
    doc = Document()
    
    # Add title
    title = doc.add_heading('Educational Virtual Assistant (EVA) Response', level=0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER

    # Add user information
    doc.add_paragraph(f"User ID: {user_id}")
    doc.add_paragraph(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

    # Add questions section
    doc.add_heading('Questions:', level=1)
    doc.add_paragraph(questions)

    # Add response section
    doc.add_heading('Response:', level=1)
    
    # Split the response into paragraphs and add them to the document
    paragraphs = response.split('\n')
    for para in paragraphs:
        if para.strip():
            p = doc.add_paragraph()
            if para.strip().startswith(('•', '-', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
                p.style = 'List Bullet'
            p.add_run(para.strip())

    # Save the document
    filename = f"eva_response_{user_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.docx"
    filepath = os.path.join(DOCUMENT_DIR, filename)
    doc.save(filepath)
    return filepath

def cleanup_old_files(max_age_hours=24):
    """Remove files older than the specified age."""
    current_time = datetime.now()
    for filename in os.listdir(DOCUMENT_DIR):
        file_path = os.path.join(DOCUMENT_DIR, filename)
        file_modified_time = datetime.fromtimestamp(os.path.getmtime(file_path))
        if current_time - file_modified_time > timedelta(hours=max_age_hours):
            os.remove(file_path)
            logging.info(f"Removed old file: {filename}")

@app.post("/chat/")
async def chat(query: Query):
    user_question = query.question
    user_id = query.user_id

    if not user_question:
        raise HTTPException(status_code=400, detail="Question must not be empty")

    try:
        # Retrieve or initialize conversation state
        state = conversation_states.get(user_id, {
            "user_id": user_id,
            "conversation_turns": 0,
            "conversation_data": []
        })

        logging.info(f"Initial state for user {user_id}: {state}")

        # Construct chat prompt template
        prompt = ChatPromptTemplate.from_messages(
            [
                SystemMessage(content=system_prompt),
                MessagesPlaceholder(variable_name="chat_history"),
                HumanMessagePromptTemplate.from_template("{human_input}"),
            ]
        )

        # Create conversation chain
        conversation = LLMChain(
            llm=groq_chat,
            prompt=prompt,
            verbose=False,
            memory=memory,
        )

        # Save the user's response
        state["conversation_data"].append({"response": user_question})
        state["conversation_turns"] += 1

        logging.info(f"Updated state for user {user_id}: {state}")

        # Generate response
        combined_input = " ".join([qa["response"] for qa in state["conversation_data"]])
        final_prompt = f"{system_prompt}\n{combined_input}"
        response = conversation.run(human_input=final_prompt)

        # Save the response
        last_responses[user_id] = {
            "questions": combined_input,
            "response": response
        }

        conversation_states[user_id] = state
        return {"response": response, "status": "success"}

    except Exception as e:
        logging.error(f"Error during chat processing: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

@app.post("/generate_document/")
async def generate_document(request: DocumentRequest):
    user_id = request.user_id

    if user_id not in last_responses:
        raise HTTPException(status_code=400, detail="No response available for this user")

    try:
        last_response = last_responses[user_id]
        filepath = create_word_document(user_id, last_response["questions"], last_response["response"])

        # Cleanup old files
        cleanup_old_files()

        return FileResponse(filepath, filename=os.path.basename(filepath), media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document")

    except Exception as e:
        logging.error(f"Error generating document: {e}")
        raise HTTPException(status_code=500, detail="Error generating document")

@app.post("/new_chat/")
async def new_chat(request: DocumentRequest):
    user_id = request.user_id

    try:
        # Clear the conversation state for this user
        if user_id in conversation_states:
            del conversation_states[user_id]
        
        # Clear the last response for this user
        if user_id in last_responses:
            del last_responses[user_id]
        
        # Clear the conversation memory
        memory.clear()

        return {"status": "success", "message": "New chat session started"}

    except Exception as e:
        logging.error(f"Error starting new chat: {e}")
        raise HTTPException(status_code=500, detail="Error starting new chat")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)