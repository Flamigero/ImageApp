"""Comments serializers"""

# Django REST Framework
from rest_framework import serializers

# Models
from imageapp.comments.models import Comment

class CommentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['pk', 'user_id', 'post_id', 'content']