from django.shortcuts import render
from .models import Cabinet

# Create your views here.
def cabinet_list(request):
    cabs = Cabinet.objects.filter().order_by('title')
    return render(request, 'cabinet/cabinet_list.html', {'cabs': cabs})
