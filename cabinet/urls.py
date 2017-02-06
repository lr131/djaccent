from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.cabinet_list, name='cabinet_list'),
    url(r'^schedule/$', views.cabinet_all_sched, name='cabinet_all_sched'),
]