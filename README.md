# 🚀 Modern Portfolio Website

A stunning, professional portfolio website built with **React.js**, **Tailwind CSS**, **FastAPI**, and **MongoDB**. Features smooth animations, responsive design, and a powerful backend for contact form handling.

## ✨ Features

### Frontend
- 🎨 **Modern Design**: Clean, professional design with stunning animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Fast loading with smooth animations using Framer Motion
- 🎭 **Interactive Elements**: Hover effects, smooth scrolling, and engaging transitions
- 🌟 **Professional Sections**:
  - Hero section with animated profile
  - About me with statistics
  - Skills showcase with progress bars
  - Work experience timeline
  - Projects gallery with filtering
  - Contact form with validation
  - Footer with social links

### Backend
- 🚀 **FastAPI**: High-performance Python web framework
- 📝 **Contact Form**: Secure contact form handling with email validation
- 📊 **Analytics**: Basic analytics for contact submissions and projects
- 🔐 **CORS Support**: Configured for frontend integration
- 💾 **Data Persistence**: JSON-based storage (easily upgradeable to MongoDB)
- 📚 **API Documentation**: Auto-generated Swagger/OpenAPI docs

## 🛠️ Tech Stack

### Frontend
- **React.js** (with TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **Axios** for API calls

### Backend
- **FastAPI** (Python)
- **Pydantic** for data validation
- **Uvicorn** ASGI server
- **Python-multipart** for form handling
- **Email-validator** for email validation

### Database (Optional)
- **MongoDB** with Motor (async driver)
- **JSON file storage** (current implementation)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Backend Setup**
   ```bash
   cd backend
   
   # Create virtual environment
   python -m venv .venv
   
   # Activate virtual environment
   # On Windows:
   .venv\Scripts\activate
   # On macOS/Linux:
   source .venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Start the server
   python -m uvicorn main_simple:app --host 0.0.0.0 --port 8000 --reload
   ```
   The backend will run on `http://localhost:8000`

4. **View API Documentation**
   Open `http://localhost:8000/docs` to see the interactive API documentation.

## 📁 Project Structure

```
portfolio-website/
├── frontend/                 # React.js frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ParticleBackground.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # FastAPI backend
│   ├── main_simple.py      # Main application file
│   ├── requirements.txt    # Python dependencies
│   ├── .env.example       # Environment variables template
│   └── portfolio_data.json # Data storage file
└── README.md
```

## 🎨 Customization

### Frontend Customization

1. **Update Personal Information**
   - Edit `src/components/Hero.tsx` for name and title
   - Update `src/components/About.tsx` for personal description
   - Modify `src/components/Experience.tsx` for work history
   - Edit `src/components/Footer.tsx` for contact details

2. **Change Colors and Styling**
   - Edit `tailwind.config.js` for color scheme
   - Update `src/index.css` for global styles
   - Modify component classes for specific styling

3. **Add/Remove Sections**
   - Components are modular and can be easily added/removed
   - Update `src/App.tsx` to include/exclude sections

### Backend Customization

1. **Database Integration**
   - Replace `main_simple.py` with `main.py` for MongoDB integration
   - Update connection strings in `.env` file

2. **Add Authentication**
   - Implement JWT authentication for admin features
   - Add protected routes for content management

3. **Email Notifications**
   - Configure SMTP settings in `.env`
   - Implement email sending for contact form submissions

## 📧 Contact Form Integration

The contact form automatically sends data to the backend API. To receive email notifications:

1. **Configure Email Settings** (Optional)
   ```bash
   # In backend/.env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

2. **Test the Contact Form**
   - Fill out the form on the website
   - Check the backend logs for submission confirmation
   - View submissions at `http://localhost:8000/api/contacts`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Backend Deployment (Railway/Heroku)

1. **Prepare for deployment**
   - Ensure all environment variables are set
   - Update CORS origins for production domain

2. **Deploy to Railway**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Deploy
   railway login
   railway init
   railway up
   ```

## 🔧 Environment Variables

### Backend (.env)
```bash
MONGODB_URL=mongodb://localhost:27017    # Optional: MongoDB connection
DATABASE_NAME=portfolio_db               # Database name
SECRET_KEY=your-secret-key              # JWT secret (if using auth)
DEBUG=True                              # Development mode
```

## 📊 API Endpoints

### Public Endpoints
- `GET /` - API health check
- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get skills by category
- `GET /api/experience` - Get work experience
- `GET /api/analytics` - Get basic analytics

### Admin Endpoints (Future)
- `GET /api/contacts` - View all contact submissions
- `POST /api/projects` - Add new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Features to Add

- [ ] Dark/Light theme toggle
- [ ] Blog section with CMS
- [ ] Project filtering and search
- [ ] Admin dashboard for content management
- [ ] Email notifications for contact form
- [ ] Google Analytics integration
- [ ] SEO optimization
- [ ] Progressive Web App (PWA) features
- [ ] Internationalization (i18n)
- [ ] Advanced animations and micro-interactions

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourprofile)

---

⭐ **Don't forget to star this repository if you found it helpful!**

Made with ❤️ and lots of ☕
