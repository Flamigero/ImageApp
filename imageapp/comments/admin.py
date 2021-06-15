""" Comments admin """

# Django
from django.contrib import admin

# Models
from .models import Comment

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    """Comment admin"""

    list_display = ('user_id', 'post_id', 'content')

    readonly_fields = ('created_at', 'updated_at')