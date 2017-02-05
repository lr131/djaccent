from django.db import models
from django.utils import timezone


class Cabinet(models.Model):
    title = models.CharField(max_length=600)
    addr = models.CharField(max_length=800)
    
    def __str__(self):
        return self.title