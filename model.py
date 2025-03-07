import os
from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
from passlib.context import CryptContext

# MySQL Database Configuration
DATABASE_URL = "mysql+pymysql://root:!Nepal@2025@localhost:3306/evadb"  # Update this
engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Define User and Pricing models
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    final_response = Column(Text)
    document_url = Column(String)

# Create all tables in the MySQL database
Base.metadata.create_all(bind=engine)

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

# CRUD Operations for User and Pricing
def create_user(db: Session, user: UserCreate):
    db_user = User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        hashed_password=hash_password(user.password)
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
