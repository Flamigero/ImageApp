""" Posts serializers"""

# Django REST Framework
from rest_framework import serializers

# Models
from imageapp.users.models import User

class PostSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    photo = serializers.ImageField()
    description = serializers.CharField()

    created_at = serializers.DateTimeField()
    updated_at = serializers.DateTimeField()

class PostCreateSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    #photo = serializers.ImageField()
    description = serializers.CharField()

    def validate_user_id(self, user):
        queryset = User.objects.filter(pk=user)

        if len(queryset) == 0:
            raise serializers.ValidationError("User don't exist")