from django.shortcuts import render
from django.contrib.auth.models import User, Group

# Create your views here.
def teacher_list(request):
    teachers = User.objects.filter(groups__name='teacher').order_by('last_name')
    return render(request, 'teacher/teacher_list.html', {'teachers': teachers})
