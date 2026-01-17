# Backend (Django) Configuration

## Technology Stack
Python 3.10+
Django 5.1.4
Django REST Framework 3.15.2
MySQL Connector (mysqlclient)

## Project Structure
backend/
├── venv/                    # Virtual environment
├── manage.py                # Django CLI
├── requirements.txt         # Python dependencies
├── users_project/           # Django project (config)
│   └── settings.py
└── users_api/               # Django app (business logic)
    ├── models.py            # Database models
    ├── serializers.py       # JSON converters
    ├── views.py             # API endpoints
    └── urls.py              # URL routing

## Running the Backend

# Activate virtual environment
source venv/bin/activate

# Run server
python manage.py runserver 0.0.0.0:8000

## API Endpoints

| Method | URL              | Description    |
|--------|------------------|----------------|
| GET    | /api/users/      | List all users |
| POST   | /api/users/      | Create user    |
| GET    | /api/users/{id}/ | Get user       |
| PUT    | /api/users/{id}/ | Update user    |
| DELETE | /api/users/{id}/ | Delete user    |

## Database Migrations

# Create migration after model changes
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# View migration status
python manage.py showmigrations

## Troubleshooting

# Check database connection
python manage.py check --database default

# View Django logs (server must be running)
# Check terminal where runserver is running

# Access Django shell
python manage.py shell
