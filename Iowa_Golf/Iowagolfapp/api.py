from Iowagolfapp.models import Player
from rest_framework import viewsets, permissions
from .serializers import PlayerSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PlayerSerializer