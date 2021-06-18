""" Likes admin """

# Django
from django.contrib import admin

# Models
from .models import Like

@admin.register(Like)
class CommentAdmin(admin.ModelAdmin):
    """Comment admin"""

    list_display = ('user_id', 'post_id')

    readonly_fields = ('created_at', 'updated_at')