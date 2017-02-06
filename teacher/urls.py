from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.teacher_list, name='teacher_list'),
    url(r'^groups/$', views.group_list, name='group_list'),
]