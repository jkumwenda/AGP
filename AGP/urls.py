from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.renderers import SwaggerUIRenderer, OpenAPIRenderer
import backend.views as backend_views

schema_view = get_schema_view(
    title='AGP API', 
    renderer_classes=[OpenAPIRenderer, SwaggerUIRenderer]
    )

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', backend_views.UserViewSet, base_name='Users')
router.register(r'country', backend_views.CountryViewSet, base_name='Country')
router.register(r'course', backend_views.CourseViewSet, base_name='Course')
router.register(r'rating', backend_views.RatingViewSet, base_name='Rating')
router.register(r'type', backend_views.TypeViewSet, base_name='Type')
router.register(r'course_type', backend_views.CourseTypeViewSet, base_name='Course Type')
router.register(r'hole', backend_views.HoleViewSet, base_name='Hole')
router.register(r'course_type_hole', backend_views.UserViewSet, base_name='Course Type Hole')
router.register(r'club', backend_views.ClubViewSet, base_name='Club')
router.register(r'club_course', backend_views.ClubCourseViewSet, base_name='Club Course')
router.register(r'profile', backend_views.ProfileViewSet, base_name='Profile')
router.register(r'club_profile', backend_views.ClubProfileViewSet, base_name='Club Profile')
router.register(r'handicap', backend_views.HandicapViewSet, base_name='Handicap')
router.register(r'role', backend_views.RoleViewSet, base_name='Role')
router.register(r'profile_role', backend_views.ProfileRoleViewSet, base_name='Profile Role')
router.register(r'permission', backend_views.PermissionViewSet, base_name='Permission')
router.register(r'role_permission', backend_views.RolePermissionViewSet, base_name='Role Permission')
router.register(r'registration_date', backend_views.RegistrationDateViewSet, base_name='Registration Date')
router.register(r'format', backend_views.FormatViewSet, base_name='Format')



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url('^$', schema_view),
	url(r'^api/',include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]