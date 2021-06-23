""" Followers model """

# Django
from django.db import models

# Models
from imageapp.users.models import User

class Follower(models.Model):
    follower_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="follower")
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")

    accepted = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)