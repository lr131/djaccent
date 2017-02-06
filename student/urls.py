from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.student_list, name='student_list'),
]