# EVA - Academic Content Assistant

EVA is an intelligent academic content assistant that helps users create various types of academic materials through natural conversation. Built with FastAPI and powered by Groq's LLM, EVA provides a user-friendly interface for generating course outlines, lesson plans, assignments, rubrics, and grading systems.

## Features

- 🤖 AI-powered academic content generation
- 📝 Document creation in Word format
- 🔐 Secure user authentication
- 💬 Natural conversation interface
- 📚 Support for multiple academic content types
- 🔄 Conversation history management
- 🎯 Customizable academic standards
- 🎨 Modern and responsive user interface

## Tech Stack

### Backend
- **Framework**: FastAPI
- **Authentication**: Supabase
- **AI Model**: Groq (llama-3.2-90b-vision-preview)


### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **HTTP Client**: Axios
- **Markdown Support**: React Markdown
- **UI Components**: Lucide React

## Prerequisites

- Python 3.8+
- Node.js 18+
- Groq API Key
- Supabase Account

## Installation

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/jemin007/EVA
```

2. Create and activate a virtual environment:
```bash
python -m venv tgenv
source tgenv/bin/activate  # On Windows: tgenv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
GROQ_API_KEY=your_groq_api_key
DOCUMENT_DIR="documents"
supabase_url = your_subase_url
supabase_key = "your_supabase_key
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd aidiCapstoneProject/tasigroup
```

2. Install dependencies:
```bash
npm install

npm build


```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:8000
```

## Project Structure

```
.
├── main.py              # Main FastAPI application
├── requirements.txt     # Backend dependencies
├── .env                 # Backend environment variables
├── generated_documents/ # Generated Word documents
├── aidiCapstoneProject/
│   └── tasigroup/      # Frontend project
│       ├── src/        # Source files
│       ├── public/     # Static assets
│       ├── dist/       # Build output
│       └── package.json # Frontend dependencies
└── documents/          # Additional documentation
```

## Running the Application

### Backend
```bash
python main.py --run

uvicorn main:app --reload
```

### Frontend
```bash
cd aidiCapstoneProject/tasigroup
npm run dev

```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:8000`.

## API Endpoints

### Authentication
- `POST /signup/` - User registration
- `POST /login/` - User authentication
- `GET /protected/` - Protected route example

### Content Generation
- `POST /chat/` - Chat with EVA
- `POST /generate_document/` - Generate Word document
- `POST /reset_conversation` - Reset conversation history

## Frontend Features

- Modern and responsive UI with Tailwind CSS
- Real-time chat interface
- Document preview and download
- Markdown support for content display
- User authentication flow
- Conversation history management
- Error handling and loading states

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- CORS protection
- Environment variable management
- Secure API key handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository or contact the development team.

## Acknowledgments

- Groq for providing the AI model
- FastAPI for the web framework
- Supabase for authentication services
- React and Vite for the frontend framework
