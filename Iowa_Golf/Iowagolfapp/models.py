from django.db import models

# Create your models here.
class Player(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    user_name = models.CharField(max_length=20, unique=true)
    email = models.EmailField(max_length=100)
    handicap = models.IntegerField(max_length=2)

       def __str__(self):
        return self.user_name

class Course(models.Model):
    course_name = models.CharField(max_length=20)
    course_location = models.CharField(max_length=100)
    image_url = models.CharField(default = '', max_length = 512)
    hole_1_par = models.IntegerField(max_length=2)
    hole_2_par = models.IntegerField(max_length=2)
    hole_3_par = models.IntegerField(max_length=2)
    hole_4_par = models.IntegerField(max_length=2)
    hole_5_par = models.IntegerField(max_length=2)
    hole_6_par = models.IntegerField(max_length=2)
    hole_7_par = models.IntegerField(max_length=2)
    hole_8_par = models.IntegerField(max_length=2)
    hole_9_par = models.IntegerField(max_length=2)
    hole_10_par = models.IntegerField(max_length=2)
    hole_11_par = models.IntegerField(max_length=2)
    hole_12_par = models.IntegerField(max_length=2)
    hole_13_par = models.IntegerField(max_length=2)
    hole_14_par = models.IntegerField(max_length=2)
    hole_15_par = models.IntegerField(max_length=2)
    hole_16_par = models.IntegerField(max_length=2)
    hole_17_par = models.IntegerField(max_length=2)
    hole_18_par = models.IntegerField(max_length=2)
    front_9_par = models.IntegerField(max_length=3)
    back_9_par = models.IntegerField(max_length=3)
    full_18_par = models.IntegerField(max_length=3)


class Score(models.Model):
    user_name = models.ForeignKey(Player, on_delete = models.CASCADE, related_name = 'user_name')
    course_name = models.ForeignKey(Course, on_delete = models.CASCADE, related_name = 'course_name')
    hole_1_score = models.IntegerField(max_length=2)
    hole_2_score = models.IntegerField(max_length=2)
    hole_3_score = models.IntegerField(max_length=2)
    hole_4_score = models.IntegerField(max_length=2)
    hole_5_score = models.IntegerField(max_length=2)
    hole_6_score = models.IntegerField(max_length=2)
    hole_7_score = models.IntegerField(max_length=2)
    hole_8_score = models.IntegerField(max_length=2)
    hole_9_score = models.IntegerField(max_length=2)
    hole_10_score = models.IntegerField(max_length=2)
    hole_11_score = models.IntegerField(max_length=2)
    hole_12_score = models.IntegerField(max_length=2)
    hole_13_score = models.IntegerField(max_length=2)
    hole_14_score = models.IntegerField(max_length=2)
    hole_15_score = models.IntegerField(max_length=2)
    hole_16_score = models.IntegerField(max_length=2)
    hole_17_score = models.IntegerField(max_length=2)
    hole_18_score = models.IntegerField(max_length=2)
    front_9_score = models.IntegerField(max_length=3)
    back_9_score = models.IntegerField(max_length=3)
    full_18_score = models.IntegerField(max_length=3)