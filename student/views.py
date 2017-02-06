from django.shortcuts import render
from django.contrib.auth.models import User, Group

# Create your views here.
def student_list(request):
    students = User.objects.filter(groups__name='student').order_by('last_name')
    return render(request, 'student/student_list.html', {'students': students})
