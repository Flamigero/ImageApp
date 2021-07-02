"""Likes Serializers"""

# Django REST Framework
from rest_framework import serializers

# Models
from imageapp.likes.models import Like

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['pk', 'user_id', 'post_id']