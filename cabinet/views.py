from django.shortcuts import render
from .models import Cabinet
from datetime import datetime, timedelta, date, time
# Create your views here.

RUSWEEKLINE = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

def cabinet_list(request):
    cabs = Cabinet.objects.filter().order_by('title')
    return render(request, 'cabinet/cabinet_list.html', {'cabs': cabs})

def timeline():
    now = datetime.now()
    d0 = datetime(now.year, now.month, now.day, 9, 0, 0)
    d1 = datetime(now.year, now.month, now.day, 9, 0, 0)
    d10 = datetime(now.year, now.month, now.day, 21, 0, 0)
    timelist = []
    timelist.append(d0.strftime('%H:%M'))
    block = timedelta(minutes=15)
    while d1 < d10:
      d1 = d0 + block
      timelist.append(d1.strftime('%H:%M'))
      d0 = d1
    return timelist
 
def weekline():
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

def cabinet_all_sched(request):
    timelist = timeline()
    weeklist = weekline()
    cabs = Cabinet.objects.filter().order_by('title')
    return render(request, 'cabinet/cabinet_all_sched.html', {'cabs': cabs, 'timelist': timelist, 'weeklist': weeklist})