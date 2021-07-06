"""Root URLs"""

# Django
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('imageapp.posts.urls')),
    path('', include('imageapp.users.urls')),
    path('', include('imageapp.comments.urls')),
    path('', include('imageapp.likes.urls')),
]
