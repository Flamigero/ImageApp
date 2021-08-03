"""Posts views"""

# Django
from django.shortcuts import get_object_or_404, get_list_or_404

# Django REST Framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets, status, mixins
from rest_framework.parsers import MultiPartParser, FormParser

# Models
from imageapp.posts.models import Post

# Serializers
from imageapp.posts.serializers import PostSerializer, PostCreateSerializer

class ListPostsAPIView(APIView):
    """
    View to list all posts 
    """
    parser_classes = (FormParser, MultiPartParser)

    def get(self, request, format=None):
        posts = Post.objects.all().order_by('-created_at')
        serializer = PostSerializer(posts, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PostCreateSerializer(data=request.data)
        if serializer.is_valid():
            post = serializer.save()
            serializerReturn = PostSerializer(post)
            return Response(serializerReturn.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListPostsGeneric(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

"""
class PostAllViewSet(viewsets.ViewSet):
    parser_classes = (FormParser, MultiPartParser)

    def list(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def create(self, request, format=None):
        serializer = PostCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(request.data)
"""

class PostViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
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

    def destroy(self, request, user_id, pk=None, *args, **kwargs):
        print('*************************')
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)