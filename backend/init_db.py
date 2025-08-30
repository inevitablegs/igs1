from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import asyncio
import os
from dotenv import load_dotenv

load_dotenv()

# Database configuration
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "portfolio_db")

async def init_database():
    """Initialize database with sample data"""
    client = AsyncIOMotorClient(MONGODB_URL)
    db = client[DATABASE_NAME]
    
    # Sample projects
    sample_projects = [
        {
            "title": "E-Commerce Platform",
            "description": "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            "technologies": ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
            "github_url": "https://github.com/username/ecommerce-platform",
            "live_url": "https://ecommerce-demo.vercel.app",
            "featured": True,
            "created_at": datetime.utcnow()
        },
        {
            "title": "Task Management Dashboard",
            "description": "A collaborative project management tool with real-time updates and team collaboration features.",
            "technologies": ["React", "TypeScript", "Socket.io", "Tailwind CSS", "Chart.js"],
            "github_url": "https://github.com/username/task-management",
            "live_url": "https://taskflow-demo.netlify.app",
            "featured": True,
            "created_at": datetime.utcnow()
        },
        {
            "title": "AI Content Generator",
            "description": "An AI-powered content generation tool using OpenAI API for blogs, social media, and marketing copy.",
            "technologies": ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Stripe"],
            "github_url": "https://github.com/username/ai-content-generator",
            "live_url": "https://ai-content-gen.vercel.app",
            "featured": False,
            "created_at": datetime.utcnow()
        }
    ]
    
    # Sample skills
    sample_skills = [
        # Frontend
        {"name": "React", "category": "Frontend", "level": 95},
        {"name": "TypeScript", "category": "Frontend", "level": 90},
        {"name": "Next.js", "category": "Frontend", "level": 85},
        {"name": "JavaScript", "category": "Frontend", "level": 95},
        {"name": "Tailwind CSS", "category": "Frontend", "level": 90},
        {"name": "HTML5", "category": "Frontend", "level": 95},
        {"name": "CSS3", "category": "Frontend", "level": 90},
        
        # Backend
        {"name": "Node.js", "category": "Backend", "level": 90},
        {"name": "Python", "category": "Backend", "level": 85},
        {"name": "FastAPI", "category": "Backend", "level": 85},
        {"name": "Express.js", "category": "Backend", "level": 85},
        {"name": "GraphQL", "category": "Backend", "level": 80},
        
        # Database
        {"name": "MongoDB", "category": "Database", "level": 85},
        {"name": "PostgreSQL", "category": "Database", "level": 80},
        {"name": "Redis", "category": "Database", "level": 75},
        {"name": "Firebase", "category": "Database", "level": 80},
        
        # Tools & Cloud
        {"name": "Git", "category": "Tools", "level": 90},
        {"name": "Docker", "category": "Tools", "level": 75},
        {"name": "AWS", "category": "Tools", "level": 70},
        {"name": "Vercel", "category": "Tools", "level": 85},
    ]
    
    # Sample experience
    sample_experience = [
        {
            "title": "Senior Full Stack Developer",
            "company": "Tech Solutions Inc.",
            "location": "Remote",
            "start_date": "2023-01",
            "end_date": None,
            "description": [
                "Led development of scalable web applications using React, Node.js, and MongoDB",
                "Implemented CI/CD pipelines reducing deployment time by 70%",
                "Mentored junior developers and conducted code reviews",
                "Architected microservices infrastructure handling 1M+ daily requests"
            ],
            "technologies": ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"]
        },
        {
            "title": "Full Stack Developer",
            "company": "Digital Innovations Ltd.",
            "location": "New York, NY",
            "start_date": "2022-01",
            "end_date": "2023-01",
            "description": [
                "Developed and maintained multiple client projects using modern web technologies",
                "Collaborated with UI/UX designers to implement pixel-perfect designs",
                "Optimized application performance resulting in 40% faster load times",
                "Integrated third-party APIs and payment systems"
            ],
            "technologies": ["Vue.js", "Python", "PostgreSQL", "Redis", "GraphQL"]
        }
    ]
    
    try:
        # Insert sample data
        if await db.projects.count_documents({}) == 0:
            await db.projects.insert_many(sample_projects)
            print("✅ Sample projects inserted")
        
        if await db.skills.count_documents({}) == 0:
            await db.skills.insert_many(sample_skills)
            print("✅ Sample skills inserted")
        
        if await db.experience.count_documents({}) == 0:
            await db.experience.insert_many(sample_experience)
            print("✅ Sample experience inserted")
        
        # Create indexes
        await db.contacts.create_index([("created_at", -1)])
        await db.projects.create_index([("created_at", -1)])
        await db.projects.create_index([("featured", -1)])
        await db.skills.create_index([("category", 1)])
        
        print("✅ Database initialized successfully!")
        
    except Exception as e:
        print(f"❌ Error initializing database: {e}")
    
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(init_database())
