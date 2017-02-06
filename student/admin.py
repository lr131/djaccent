from django.contrib import admin

# Register your models here.
from .models import Lessons, Money

admin.site.register(Lessons)
admin.site.register(Money)