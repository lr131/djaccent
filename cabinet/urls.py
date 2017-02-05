from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.cabinet_list, name='cabinet_list'),
]