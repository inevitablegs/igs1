from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime
import os
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="Portfolio API",
    description="A modern portfolio backend with contact form and admin features",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "portfolio_db")

client = AsyncIOMotorClient(MONGODB_URL)
database = client[DATABASE_NAME]

# Security
security = HTTPBearer()

# Pydantic models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
    created_at: Optional[datetime] = None

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

class Project(BaseModel):
    title: str
    description: str
    technologies: List[str]
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    featured: bool = False
    created_at: Optional[datetime] = None

class Skill(BaseModel):
    name: str
    category: str
    level: int  # 1-100
    icon: Optional[str] = None

class Experience(BaseModel):
    title: str
    company: str
    location: str
    start_date: str
    end_date: Optional[str] = None
    description: List[str]
    technologies: List[str]

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Portfolio API is running!",
        "version": "1.0.0",
        "status": "healthy"
    }

@app.get("/health")
async def health_check():
    try:
        # Test database connection
        await client.admin.command('ping')
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.utcnow()
        }
    except Exception as e:
        logger.error(f"Health check failed: {e}")
        raise HTTPException(status_code=503, detail="Service unavailable")

# Contact form endpoints
@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactMessage):
    try:
        # Add timestamp
        contact.created_at = datetime.utcnow()
        
        # Insert into database
        contact_dict = contact.dict()
        result = await database.contacts.insert_one(contact_dict)
        
        logger.info(f"New contact form submission from {contact.email}")
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon.",
            id=str(result.inserted_id)
        )
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@app.get("/api/contacts")
async def get_contacts(skip: int = 0, limit: int = 10):
    """Get all contact messages (admin only in production)"""
    try:
        cursor = database.contacts.find().sort("created_at", -1).skip(skip).limit(limit)
        contacts = await cursor.to_list(length=limit)
        
        # Convert ObjectId to string
        for contact in contacts:
            contact["_id"] = str(contact["_id"])
        
        total = await database.contacts.count_documents({})
        
        return {
            "contacts": contacts,
            "total": total,
            "skip": skip,
            "limit": limit
        }
    except Exception as e:
        logger.error(f"Error fetching contacts: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch contacts")

# Portfolio data endpoints
@app.get("/api/projects")
async def get_projects():
    """Get all projects"""
    try:
        cursor = database.projects.find().sort("created_at", -1)
        projects = await cursor.to_list(length=None)
        
        for project in projects:
            project["_id"] = str(project["_id"])
        
        return {"projects": projects}
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")

@app.post("/api/projects")
async def create_project(project: Project):
    """Create a new project"""
    try:
        project.created_at = datetime.utcnow()
        project_dict = project.dict()
        result = await database.projects.insert_one(project_dict)
        
        return {
            "success": True,
            "message": "Project created successfully",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Error creating project: {e}")
        raise HTTPException(status_code=500, detail="Failed to create project")

@app.get("/api/skills")
async def get_skills():
    """Get all skills grouped by category"""
    try:
        cursor = database.skills.find().sort("category", 1)
        skills = await cursor.to_list(length=None)
        
        for skill in skills:
            skill["_id"] = str(skill["_id"])
        
        # Group by category
        grouped_skills = {}
        for skill in skills:
            category = skill["category"]
            if category not in grouped_skills:
                grouped_skills[category] = []
            grouped_skills[category].append(skill)
        
        return {"skills": grouped_skills}
    except Exception as e:
        logger.error(f"Error fetching skills: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch skills")

@app.get("/api/experience")
async def get_experience():
    """Get work experience"""
    try:
        cursor = database.experience.find().sort("start_date", -1)
        experience = await cursor.to_list(length=None)
        
        for exp in experience:
            exp["_id"] = str(exp["_id"])
        
        return {"experience": experience}
    except Exception as e:
        logger.error(f"Error fetching experience: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch experience")

# Analytics endpoint
@app.get("/api/analytics")
async def get_analytics():
    """Get basic analytics"""
    try:
        total_contacts = await database.contacts.count_documents({})
        total_projects = await database.projects.count_documents({})
        featured_projects = await database.projects.count_documents({"featured": True})
        
        # Recent contacts (last 30 days)
        thirty_days_ago = datetime.utcnow().replace(day=datetime.utcnow().day - 30)
        recent_contacts = await database.contacts.count_documents({
            "created_at": {"$gte": thirty_days_ago}
        })
        
        return {
            "total_contacts": total_contacts,
            "total_projects": total_projects,
            "featured_projects": featured_projects,
            "recent_contacts": recent_contacts,
            "last_updated": datetime.utcnow()
        }
    except Exception as e:
        logger.error(f"Error fetching analytics: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch analytics")

# Error handlers
@app.exception_handler(404)
async def not_found_handler(request, exc):
    return {"error": "Endpoint not found", "status_code": 404}

@app.exception_handler(500)
async def internal_error_handler(request, exc):
    logger.error(f"Internal server error: {exc}")
    return {"error": "Internal server error", "status_code": 500}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
