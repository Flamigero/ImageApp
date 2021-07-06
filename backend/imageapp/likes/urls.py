"""Likes URLs"""

# Django
from django.urls import path, include

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from imageapp.likes.views import LikeViewset

router = DefaultRouter()
router.register(r'likes', LikeViewset, basename='likesAll')

urlpatterns = router.urls