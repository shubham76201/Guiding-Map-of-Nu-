from django.urls import path
from maps import views
urlpatterns = [path("maps", views.maps, name="maps"),
     path('signup',views.signup,name='signup'),
    path("signin",views.maps,name='maps'),
    path("result1",views.results),
    path("",views.signin,name='signin'),
    ]