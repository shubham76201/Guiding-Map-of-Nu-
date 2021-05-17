from django.db import models

# Create your models here.
class Signup(models.Model):
    name = models.CharField(max_length=225)
    Enrollment_no = models.CharField(max_length=225)
    last_name = models.CharField(max_length=215)
    Uni_Email=models.EmailField(max_length=254)
    phone=models.IntegerField()
    password = models.CharField(max_length=215)

    def __str__(self):
        return self.name

class places(models.Model):
    name = models.CharField(max_length=225)
    Lat = models.FloatField()
    Long =models.FloatField()
    button=models.CharField(max_length=200)
    Des =models.CharField(max_length=400)
    
    def __str__(self):
        return self.name
