"""Root URLs"""

# Django
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('imageapp.posts.urls')),
    path('', include('imageapp.users.urls')),
    path('', include('imageapp.comments.urls')),
    path('', include('imageapp.likes.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)