from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed, created, edited, or deleted.
    
    Provides:
    - GET /api/users/       → List all users
    - POST /api/users/      → Create a new user
    - GET /api/users/{id}/  → Get a specific user
    - PUT /api/users/{id}/  → Update a user
    - DELETE /api/users/{id}/ → Delete a user
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer