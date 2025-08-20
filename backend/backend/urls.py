from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/accounts/", include("accounts.urls")),   # 👈 importante
    path("api/courses/", include("courses.urls")),
]
