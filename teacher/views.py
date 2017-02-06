from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Group

# Create your views here.
def teacher_list(request):
    teachers = User.objects.filter(groups__name='teacher').order_by('last_name')
    return render(request, 'teacher/teacher_list.html', {'teachers': teachers})

def group_list(request):
    groups = Group.objects.filter()
    return render(request, 'teacher/group_list.html', {'groups': groups})
