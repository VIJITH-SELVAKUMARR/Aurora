from django.shortcuts import render

def home(request):
    return render(request, 'aurora_app/home.html')

# Create your views here.
