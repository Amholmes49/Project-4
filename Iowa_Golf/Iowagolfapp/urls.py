from rest_framework import routers
from .api import PlayerViewSet, CourseViewSet, ScoreViewSet

router = routers.DefaultRouter()
router.register('api/players', PlayerViewSet, 'players')
router.register('api/courses', CourseViewSet, 'courses')
router.register('api/scores', ScoreViewSet, 'scores')

urlpatterns = router.urls