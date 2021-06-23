""" Users admin """

# Django
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Models
from imageapp.users.models import User, Follower

class CustomUserAdmin(UserAdmin):
    """
    User model admin
    """

    list_display = ('name', 'username', 'email', 'bio', 'is_active', 'is_staff')
    list_filter = ('is_active', 'is_staff', 'last_login', 'date_joined')

admin.site.register(User, CustomUserAdmin)

@admin.register(Follower)
class FollowerAdmin(admin.ModelAdmin):
    """Comment admin"""

    list_display = ('follower_id', 'user_id', 'accepted')

    readonly_fields = ('created_at', 'updated_at')