"""Comments views"""

# Django REST Framework
from rest_framework import mixins, viewsets, status
from rest_framework.response import Response

# Serializers
from .serializers import CommentModelSerializer

# Models
from imageapp.comments.models import Comment

class CommentViewSet(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    serializer_class = CommentModelSerializer

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        queryset = Comment.objects.filter(post_id=post_id)
        return queryset

class CommentsViewSet(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      viewsets.GenericViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentModelSerializer