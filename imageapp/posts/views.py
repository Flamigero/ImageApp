"""Posts views"""

# Django
from django.shortcuts import get_object_or_404, get_list_or_404

# Django REST Framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets

# Models
from imageapp.posts.models import Post

# Serializers
from imageapp.posts.serializers import PostSerializer, PostCreateSerializer

class ListPostsAPIView(APIView):
    """
    View to list all posts 
    """

    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data)

class ListPostsGeneric(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostAllViewSet(viewsets.ViewSet):
    def list(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Post.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def create(self, request):
        serializer = PostCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(request.data)

class PostViewSet(viewsets.ViewSet):
    def list(self, request, user_id):
        queryset = Post.objects.filter(user_id=user_id)
        posts = get_list_or_404(queryset)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def retrieve(self, request, user_id, pk=None):
        queryset = Post.objects.filter(user_id=user_id)
        post = get_object_or_404(queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)