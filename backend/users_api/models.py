from django.db import models

# Create your models here.

class User(models.Model):
    """
    User model representing a person in our system.
    This will become a 'users_api_user' table in MySQL.
    """
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']  # Newest first
        db_table = 'users_api_user'

    def __str__(self):
        return f"{self.name} ({self.email})"