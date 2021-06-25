"""Root URLs"""

# Django
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('imageapp.posts.urls'))
]
