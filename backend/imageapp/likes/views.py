"""Likes Views"""

# Django REST Framework
from rest_framework import viewsets, mixins, status
from rest_framework.response import Response

# Serializers
from .serializers import LikesSerializer

# Model
from imageapp.likes.models import Like

class LikeViewset(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikesSerializer