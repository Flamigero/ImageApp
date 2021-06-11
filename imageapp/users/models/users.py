"""
User model
"""

# Django
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator

class User(AbstractUser):
    """
    User model

    Extend from Django's Abstact User, change the username
    field to email and add extra fields.
    """

    name = models.CharField(
        verbose_name='User name',
        max_length=255
    )

    email = models.EmailField(
        verbose_name='Email address',
        max_length=255,
        unique=True,
        error_messages={
            'unique': 'A user with that email already exists.'
        }
    )

    bio = models.TextField(
        verbose_name='User Biography'
    )

    created = models.DateTimeField(
        verbose_name='Created at',
        auto_now_add=True
    )

    modified = models.DateTimeField(
        verbose_name='Modified at',
        auto_now_add=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'username']

    def __str__(self):
        return self.username

    def get_short_name(self):
        return self.username