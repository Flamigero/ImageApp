"""Messages admin"""

# Django
from django.contrib import admin

# Models
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    """Message admin"""

    list_display = ('user_id', 'photo', 'description')

    readonly_fields = ('created_at', 'updated_at')