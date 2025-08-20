from django.contrib import admin
from .models import Course

class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "teacher", "created_at")
    search_fields = ("title", "description", "teacher__username")
    list_filter = ("created_at", "teacher")

admin.site.register(Course, CourseAdmin)
