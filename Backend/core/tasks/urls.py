from django.urls import path
from .views import TaskListCreateView


urlpatterns = [

    path(
        'tasks/',
        TaskListCreateView.as_view({
            'get': 'list',
            'post': 'create'
        })
    ),

    path(
        'tasks/<int:pk>/',
        TaskListCreateView.as_view({
            'get': 'retrieve',
            'put': 'update',
            'delete': 'destroy'
        })
    ),

]