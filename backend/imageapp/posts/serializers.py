""" Posts serializers"""

# Django REST Framework
from rest_framework import serializers

# Models
from imageapp.users.models import User
from imageapp.posts.models import Post

# Serializers
from imageapp.users.serializers import UserModelSerializer

class PostSerializer(serializers.Serializer):
    pk = serializers.IntegerField()
    user_id = UserModelSerializer()
    photo = serializers.ImageField()
    description = serializers.CharField()

    created_at = serializers.DateTimeField()
    updated_at = serializers.DateTimeField()


class PostCreateSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    photo = serializers.ImageField()
    description = serializers.CharField()

    def validate_user_id(self, user):
        queryset = User.objects.filter(pk=user)

        if len(queryset) == 0:
            raise serializers.ValidationError("User don't exist")
        
        return user

    def create(self, validated_data):
        user = User.objects.filter(pk=validated_data['user_id'])[0]
        validated_data.pop('user_id')
        validated_data['user_id']=user
        post = Post.objects.create(**validated_data)
        return post
"""
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('user_id', 'photo', 'description')
"""