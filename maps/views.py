from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from .models import Signup,places
from django.contrib import auth
import haversine as hs
from haversine import Unit


# Create your views here.
def maps(request):
    a=places.objects.all()
    return render(request,"index.html",{"a":a} )

def signin(request):
    if request.method=="POST":
      username1=request.POST['uname']
      password1=request.POST['psw'] 

      user = auth.authenticate(username=username1,password=password1)
      if user is not None:
          auth.login(request,user)
          return redirect('/')
      else:
        return redirect('signin')
        #return render(request,'LandingPage.html', context={'temp4' : username1})
    else:
         return render(request,'index_signin.html')

def signup(request):
    if request.method=="POST":
        enroll= request.POST.get('uni_enroll1')
        first_name= request.POST.get('firstname1')
        last_name= request.POST.get('lastname1')
        email= request.POST.get('email')
        phone= request.POST.get('phone')
        password= request.POST.get('password')
        enroll1="BT18GCS"+enroll
        
        
        x=Signup(Enrollment_no=enroll1,name=first_name,last_name=last_name,Uni_Email=email,phone=phone,password=password)
        m=User.objects.create(username=first_name,first_name=first_name,last_name=last_name,email=email,password=password)
        m.save()
        x.save()
        print("User Created")
        return render(request,"index_signin.html",{"first_name":first_name})

    else:
      return render(request,'signup.html')

def results(request):
    
    if request.method =="POST":
     name = request.POST['name4']
     loc1=(27.9619,76.4029)
     
     place1=places.objects.get(name=name).Lat
     place2=places.objects.get(name=name).Long
     print(place1)
     print(place2)
     loc2= (place1,place2)
     loc3= hs.haversine(loc1,loc2,unit=Unit.METERS)+100
     meter="meters"
    return render(request,"index.html",{"name1":loc3,"meters":meter})
     
#   return render(request,"result1.html", context)