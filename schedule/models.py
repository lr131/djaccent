from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, Group


class Plan(models.Model):
    teacher = models.ForeignKey(User, related_name='myplans')
    student = models.ForeignKey(User, related_name='myscheds', blank = True, null = True)
    group = models.ForeignKey('teacher.Group', related_name='sched', blank = True, null = True) 
    course = models.ForeignKey('course.Course')
    dtime = models.TimeField()
    dweek = models.CharField(max_length=20)
    cabinet = models.ForeignKey('cabinet.Cabinet')


    def __str__(self):
        return self.student

class History(models.Model):
    student = models.ForeignKey(User, related_name='myhist', blank = True, null = True) 
    group = models.ForeignKey('teacher.Group', related_name='ghist', blank = True, null = True) 
    teacher = models.ForeignKey(User, related_name='hist') 
    cabinet = models.ForeignKey('cabinet.Cabinet')
    lesstype = models.BooleanField(verbose_name="Посещение")
    lessday = models.DateField(verbose_name="Время посещения")

    def __str__(self):
        return self.student