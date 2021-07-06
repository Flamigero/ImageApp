""" Posts URLs"""

# Django
from django.urls import path, include

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from imageapp.posts.views import ListPostsAPIView, ListPostsGeneric, PostViewSet

router = DefaultRouter()
#router.register(r'posts', PostAllViewSet, basename='postsAll')
router.register(r'posts/(?P<user_id>[a-z0-9]+)', PostViewSet, basename='posts')

urlpatterns = [
    path('posts/', ListPostsAPIView.as_view()),
    path('listPosts2/', ListPostsGeneric.as_view())
]
urlpatterns += router.urls