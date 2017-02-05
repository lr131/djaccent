from django.shortcuts import render
from .models import Course

# Create your views here.
def course_list(request):
    courses = Course.objects.filter().order_by('title')
    return render(request, 'course/course_list.html', {'courses': courses})
