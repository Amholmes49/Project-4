from django.contrib import admin

from .models import Player, Course, Score

admin.site.register(Player)
admin.site.register(Course)
admin.site.register(Score)