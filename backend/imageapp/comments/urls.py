"""Comments URLs"""

# Django
from django.urls import path, include

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from imageapp.comments.views import CommentViewSet, CommentsViewSet

router = DefaultRouter()
router.register(r'comments/(?P<post_id>[a-z0-9]+)', CommentViewSet, basename='comments')
router.register(r'comments', CommentsViewSet, basename='commentsAll')

urlpatterns = router.urls