from django.contrib import admin

# Register your models here.
from .models import Plan, History

admin.site.register(Plan)
admin.site.register(History)