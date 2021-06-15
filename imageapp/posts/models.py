""" Post model """

# Django
from django.db import models

# Models
from imageapp.users.models import User

class Post(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    photo = models.ImageField("Post image", upload_to='posts')
    description = models.CharField("Post description", max_length=120)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)