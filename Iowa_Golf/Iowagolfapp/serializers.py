from rest_framework import serializers
from Iowagolfapp.models import Player, Course, Score




class PlayerSerializer(serializers.ModelSerializer):
    # username = ScoreSerializer(
    #     many=True,
    #     read_only=True
    # )
    class Meta:
        model = Player
        fields = '__all__'
        # fields = [ 'full_name', 'username', 'user_name', 'email', 'handicap']
        

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class ScoreSerializer(serializers.ModelSerializer):
    username = PlayerSerializer(
        # many=True,
        read_only=True
    )
    class Meta:
        model = Score
        # fields = '__all__'
        fields =  [ 'username', 'hole_1_score' ]





