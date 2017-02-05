from django.db import models
from django.utils import timezone


class Course(models.Model):
    title = models.CharField(max_length=600)
    ind = models.IntegerField(default=4500) 
    gr = models.IntegerField(default=0)
    clessons = models.IntegerField(default=8)

    def __str__(self):
        return self.title