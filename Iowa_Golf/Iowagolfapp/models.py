from django.db import models

# Create your models here.
class Player(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

