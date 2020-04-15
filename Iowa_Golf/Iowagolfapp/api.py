from Iowagolfapp.models import Player, Course, Score
from rest_framework import viewsets, permissions
from .serializers import PlayerSerializer, CourseSerializer, ScoreSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PlayerSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CourseSerializer

class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ScoreSerializer