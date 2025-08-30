from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime
import logging
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Email configuration
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
FROM_EMAIL = os.getenv("FROM_EMAIL")
TO_EMAIL = os.getenv("TO_EMAIL")

def send_contact_email(contact_data: dict):
    """Send contact form submission via email"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = FROM_EMAIL
        msg['To'] = TO_EMAIL
        msg['Subject'] = f"Portfolio Contact: {contact_data['subject']}"
        
        # Create email body
        body = f"""
New contact form submission from your portfolio website:

Name: {contact_data['name']}
Email: {contact_data['email']}
Subject: {contact_data['subject']}

Message:
{contact_data['message']}

---
Submitted on: {contact_data['created_at']}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        text = msg.as_string()
        server.sendmail(FROM_EMAIL, TO_EMAIL, text)
        server.quit()
        
        logger.info(f"Email sent successfully to {TO_EMAIL}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        return False

# Initialize FastAPI app
app = FastAPI(
    title="Portfolio API",
    description="A modern portfolio backend with contact form and portfolio data",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage (for demo purposes)
data_store = {
    "contacts": [],
    "projects": [],
    "skills": [],
    "experience": []
}

# Data file path
DATA_FILE = "portfolio_data.json"

def load_data():
    """Load data from JSON file if it exists"""
    global data_store
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r') as f:
                data_store = json.load(f)
                logger.info("Data loaded from file")
        except Exception as e:
            logger.error(f"Error loading data: {e}")

def save_data():
    """Save data to JSON file"""
    try:
        with open(DATA_FILE, 'w') as f:
            json.dump(data_store, f, indent=2, default=str)
        logger.info("Data saved to file")
    except Exception as e:
        logger.error(f"Error saving data: {e}")

# Load data on startup
load_data()

# Pydantic models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

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

# Initialize with sample data if empty
if not data_store["projects"]:
    data_store["projects"] = [
        {
            "id": "1",
            "title": "E-Commerce Platform",
            "description": "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            "technologies": ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
            "github_url": "https://github.com/username/ecommerce-platform",
            "live_url": "https://ecommerce-demo.vercel.app",
            "featured": True,
            "created_at": str(datetime.now())
        },
        {
            "id": "2",
            "title": "Task Management Dashboard",
            "description": "A collaborative project management tool with real-time updates and team collaboration features.",
            "technologies": ["React", "TypeScript", "Socket.io", "Tailwind CSS", "Chart.js"],
            "github_url": "https://github.com/username/task-management",
            "live_url": "https://taskflow-demo.netlify.app",
            "featured": True,
            "created_at": str(datetime.now())
        },
        {
            "id": "3",
            "title": "AI Content Generator",
            "description": "An AI-powered content generation tool using OpenAI API for blogs, social media, and marketing copy.",
            "technologies": ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Stripe"],
            "github_url": "https://github.com/username/ai-content-generator",
            "live_url": "https://ai-content-gen.vercel.app",
            "featured": False,
            "created_at": str(datetime.now())
        },
        {
            "id": "4",
            "title": "Weather Analytics App",
            "description": "A weather forecasting application with detailed analytics and data visualization.",
            "technologies": ["Vue.js", "D3.js", "Weather API", "Chart.js", "PWA"],
            "github_url": "https://github.com/username/weather-analytics",
            "live_url": "https://weather-analytics.netlify.app",
            "featured": False,
            "created_at": str(datetime.now())
        },
        {
            "id": "5",
            "title": "Blockchain Voting System",
            "description": "A secure, transparent voting system built on blockchain technology.",
            "technologies": ["Solidity", "Web3.js", "React", "MetaMask", "IPFS"],
            "github_url": "https://github.com/username/blockchain-voting",
            "live_url": "https://blockchain-vote.vercel.app",
            "featured": False,
            "created_at": str(datetime.now())
        },
        {
            "id": "6",
            "title": "Real-time Chat Application",
            "description": "A modern chat application with real-time messaging, file sharing, and video calls.",
            "technologies": ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB"],
            "github_url": "https://github.com/username/chat-app",
            "live_url": "https://realtime-chat-demo.herokuapp.com",
            "featured": False,
            "created_at": str(datetime.now())
        }
    ]

if not data_store["skills"]:
    data_store["skills"] = {
        "Frontend": [
            {"name": "React", "level": 95, "color": "#61DAFB"},
            {"name": "TypeScript", "level": 90, "color": "#3178C6"},
            {"name": "Next.js", "level": 85, "color": "#000000"},
            {"name": "JavaScript", "level": 95, "color": "#F7DF1E"},
            {"name": "Tailwind CSS", "level": 90, "color": "#06B6D4"},
            {"name": "HTML5", "level": 95, "color": "#E34F26"},
            {"name": "CSS3", "level": 90, "color": "#1572B6"}
        ],
        "Backend": [
            {"name": "Node.js", "level": 90, "color": "#339933"},
            {"name": "Python", "level": 85, "color": "#3776AB"},
            {"name": "Express.js", "level": 85, "color": "#000000"},
            {"name": "GraphQL", "level": 80, "color": "#E10098"}
        ],
        "Database": [
            {"name": "MongoDB", "level": 85, "color": "#47A248"},
            {"name": "PostgreSQL", "level": 80, "color": "#4169E1"},
            {"name": "Redis", "level": 75, "color": "#DC382D"},
            {"name": "Firebase", "level": 80, "color": "#FFCA28"}
        ],
        "Tools & Cloud": [
            {"name": "Git", "level": 90, "color": "#F05032"},
            {"name": "Docker", "level": 75, "color": "#2496ED"},
            {"name": "AWS", "level": 70, "color": "#FF9900"},
            {"name": "Vercel", "level": 85, "color": "#000000"},
            {"name": "Figma", "level": 80, "color": "#F24E1E"}
        ]
    }

if not data_store["experience"]:
    data_store["experience"] = [
        {
            "id": "1",
            "title": "Senior Full Stack Developer",
            "company": "Tech Solutions Inc.",
            "location": "Remote",
            "duration": "2023 - Present",
            "description": [
                "Led development of scalable web applications using React, Node.js, and MongoDB",
                "Implemented CI/CD pipelines reducing deployment time by 70%",
                "Mentored junior developers and conducted code reviews",
                "Architected microservices infrastructure handling 1M+ daily requests"
            ],
            "technologies": ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"]
        },
        {
            "id": "2",
            "title": "Full Stack Developer",
            "company": "Digital Innovations Ltd.",
            "location": "New York, NY",
            "duration": "2022 - 2023",
            "description": [
                "Developed and maintained multiple client projects using modern web technologies",
                "Collaborated with UI/UX designers to implement pixel-perfect designs",
                "Optimized application performance resulting in 40% faster load times",
                "Integrated third-party APIs and payment systems"
            ],
            "technologies": ["Vue.js", "Python", "PostgreSQL", "Redis", "GraphQL"]
        },
        {
            "id": "3",
            "title": "Frontend Developer",
            "company": "StartupFlow",
            "location": "San Francisco, CA",
            "duration": "2021 - 2022",
            "description": [
                "Built responsive web applications with React and modern CSS frameworks",
                "Collaborated with backend team to design and implement RESTful APIs",
                "Implemented state management solutions using Redux and Context API",
                "Participated in agile development processes and sprint planning"
            ],
            "technologies": ["React", "Redux", "Tailwind CSS", "JavaScript", "REST APIs"]
        },
        {
            "id": "4",
            "title": "Junior Web Developer",
            "company": "WebCraft Agency",
            "location": "Austin, TX",
            "duration": "2020 - 2021",
            "description": [
                "Developed responsive websites for small to medium businesses",
                "Learned and applied modern web development best practices",
                "Worked with content management systems and e-commerce platforms",
                "Provided technical support and maintenance for client websites"
            ],
            "technologies": ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"]
        }
    ]

# Save initial data
save_data()

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Portfolio API is running!",
        "version": "1.0.0",
        "status": "healthy",
        "endpoints": {
            "contact": "/api/contact",
            "projects": "/api/projects",
            "skills": "/api/skills",
            "experience": "/api/experience",
            "analytics": "/api/analytics"
        }
    }

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": str(datetime.now()),
        "data_loaded": len(data_store["projects"]) > 0
    }

# Contact form endpoints
@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactMessage):
    try:
        # Create contact entry
        contact_entry = {
            "id": str(len(data_store["contacts"]) + 1),
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "message": contact.message,
            "created_at": str(datetime.now())
        }
        
        # Send email notification
        email_sent = send_contact_email(contact_entry)
        
        # Add to storage
        data_store["contacts"].append(contact_entry)
        save_data()
        
        logger.info(f"New contact form submission from {contact.email}")
        
        if email_sent:
            return ContactResponse(
                success=True,
                message="Thank you for your message! I'll get back to you soon.",
                id=contact_entry["id"]
            )
        else:
            return ContactResponse(
                success=True,
                message="Message received but email notification failed. I'll still get back to you soon!",
                id=contact_entry["id"]
            )
            
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@app.get("/api/contacts")
async def get_contacts(skip: int = 0, limit: int = 10):
    """Get all contact messages"""
    try:
        contacts = data_store["contacts"]
        total = len(contacts)
        
        # Sort by creation date (newest first) and paginate
        sorted_contacts = sorted(contacts, key=lambda x: x["created_at"], reverse=True)
        paginated_contacts = sorted_contacts[skip:skip + limit]
        
        return {
            "contacts": paginated_contacts,
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
        return {"projects": data_store["projects"]}
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")

@app.get("/api/skills")
async def get_skills():
    """Get all skills grouped by category"""
    try:
        return {"skills": data_store["skills"]}
    except Exception as e:
        logger.error(f"Error fetching skills: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch skills")

@app.get("/api/experience")
async def get_experience():
    """Get work experience"""
    try:
        return {"experience": data_store["experience"]}
    except Exception as e:
        logger.error(f"Error fetching experience: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch experience")

# Analytics endpoint
@app.get("/api/analytics")
async def get_analytics():
    """Get basic analytics"""
    try:
        total_contacts = len(data_store["contacts"])
        total_projects = len(data_store["projects"])
        featured_projects = len([p for p in data_store["projects"] if p.get("featured", False)])
        
        # Recent contacts (last 30 days) - simplified for demo
        recent_contacts = total_contacts  # In real app, filter by date
        
        return {
            "total_contacts": total_contacts,
            "total_projects": total_projects,
            "featured_projects": featured_projects,
            "recent_contacts": recent_contacts,
            "last_updated": str(datetime.now())
        }
    except Exception as e:
        logger.error(f"Error fetching analytics: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch analytics")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main_simple:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
