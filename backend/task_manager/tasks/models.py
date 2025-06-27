from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    STATUS_CHOICES =[
        ('PENDING','pending'),
        ('IN_PROGRESS','in_progress'),
        ('COMPLETED','completed'),
    ]
    
    title = models.CharField(max_length=201)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=20,choices=STATUS_CHOICES,default='PENDING')
    owner = models.ForeignKey(User,on_delete=models.CASCADE,related_name='tasks')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title