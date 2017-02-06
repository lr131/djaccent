from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, Group


class Group(models.Model):
    title = models.CharField(max_length=600)
    teacher = models.ForeignKey(User, default='auth.User', related_name='stident_groups')
    student = models.ManyToManyField(User, related_name='mygroups') 
    course = models.ForeignKey('course.Course')

    def __str__(self):
        return self.title