from django.contrib.auth.models import AbstractUser
from django.db import models

ROLES = (
    ("admin", "Admin"),
    ("teacher", "Profesor"),
    ("student", "Estudiante"),
)

class User(AbstractUser):
    role = models.CharField(
        max_length=20, choices=ROLES, default="student"
    )

    def __str__(self):
        return self.username
