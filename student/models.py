from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User, Group


class Lessons(models.Model):
    teacher = models.ForeignKey(User, related_name='myteachers')
    student = models.ForeignKey(User, related_name='mystudents') 
    course = models.ForeignKey('course.Course')
    visit = models.IntegerField()

    def __str__(self):
        return self.student

class Money(models.Model):
    student = models.ForeignKey(User, related_name='mymoney') 
    startmoney = models.IntegerField(verbose_name="Баланс на начало месяца")
    nowtmoney = models.IntegerField(verbose_name="Текущий баланс")
    discount = models.IntegerField(verbose_name="Разовая скидка")
    k1 = models.IntegerField(verbose_name="Коэф1")
    k2 = models.IntegerField(verbose_name="Коэф2")
    k3 = models.IntegerField(verbose_name="Коэф3")

    def __str__(self):
        return self.student