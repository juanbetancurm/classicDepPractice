 # Full-Stack Classic Deployment Practice

> **Learning Objective:** Quick Review to Strongly Understand classical deployment patterns before moving to practice containerization and cloud-native architectures. The idea is to (after
finishing the practices) develop a friendly manual for students to go from classic deployment to modern automate deploy by multiple hands on tasks in parallel with their theoretical practice.

## 🎯 Project Overview

A hands-on project to learn the complete deployment lifecycle of a full-stack application using traditional deployment methods in my laptop.

### Technology Stack

**Database:** MySQL 8.0
**Backend:** Django 5.1 + Django REST Framework
**Frontend:** React 18 + Vite
**Server:** Nginx + Gunicorn
**OS:** Ubuntu 22.04/24.04 (VM)

### Architecture
Internet → Nginx (Reverse Proxy) → Gunicorn (WSGI) → Django (API) → MySQL
             ↓
          React SPA (Static Files)

## 📁 Project Structure
devops-deployment-project/
├── backend/                 # Django REST API
│   ├── venv/               # Python virtual environment
│   ├── users_project/      # Django project config
│   ├── users_api/          # Django app (business logic)
│   ├── manage.py
│   └── requirements.txt    # Python dependencies
├── frontend/               # React application
├── deployment/             # Server configuration
│   ├── nginx/
│   └── gunicorn/
├── docs/                   # Documentation
└── .gitignore

## 🚀 Quick Start

### Prerequisites

Ubuntu 22.04+ (VM or bare metal)
Python 3.10+
MySQL 8.0+
Git

### Backend Setup
bash
# Navigate to backend
cd backend

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver 0.0.0.0:8000

### Database Setup
# See DATABASE_SETUP.md for detailed instructions
mysql -u root -p < docs/database-init.sql

## 📚 Learning Resources

Database setup: DATABASE_SETUP.md
Backend setup: BACKEND_SETUP.md
Frontend setup: FRONTEND_SETUP.md
Deployment guide: DEPLOYMENT.md

## 🔄 Git Workflow

This project uses **Gitflow** branching strategy:

main - Production-ready code
develop - Integration branch
feature/* - Feature development
release/* - Release preparation
hotfix/* - Emergency fixes

## 📝 DevOps Learnings

This project demonstrates:

1. **Environment Management** - Virtual environments, dependencies
2. **Database Migrations** - Schema versioning and reproducibility
3. **API Design** - RESTful APIs and service contracts
4. **Configuration Management** - Settings, environment variables
5. **Version Control** - Gitflow workflow
6. **Manual Deployment** - Understanding before automation
7. **Server Configuration** - Nginx, Gunicorn, process management

## 📄 License

Educational project - Free to use and modify

## 👤 Author

Juan Betancur - DevOps Student 2026

---