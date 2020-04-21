from rest_framework import serializers
from Iowagolfapp.models import Player, Course, Score


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class ScoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Score
        fields = '__all__'

