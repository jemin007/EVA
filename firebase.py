import firebase_admin
from firebase_admin import credentials, firestore
from pydantic import BaseModel
from passlib.context import CryptContext

# Firebase Initialization
cred = credentials.Certificate("eva-firebase.json")
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

# Firestore Initialization
db = firestore.client()

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Pydantic models for data validation
class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str


# Function to hash password
def hash_password(password: str) -> str:
    return pwd_context.hash(password)


# Function to verify password
def verify_password(plain_password, hashed_password) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


# Firestore CRUD Operations for User
def create_user(user: UserCreate):
    user_ref = db.collection("users").document(user.email)  # Using email as the document ID
    if user_ref.get().exists:
        return {"error": "User already exists"}

    user_ref.set({
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
        "hashed_password": hash_password(user.password)
    })
    return {"message": "User created successfully"}


def get_user_by_email(email: str):
    user_ref = db.collection("users").document(email)
    user = user_ref.get()
    if user.exists:
        return user.to_dict()
    return {"error": "User not found"}
