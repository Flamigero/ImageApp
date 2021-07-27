"""Custom Middlewares"""

# Django
from django.http import JsonResponse

# JWT
from imageapp.helpers.Jwt import JWT

class ValidateToken:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        path = request.path.split('/')[1]
        pathPost = 'posts'
        
        if path.find(pathPost) != -1:
            token = request.META.get('HTTP_X_TOKEN')
            if token:
                check = JWT.validateJWT(token)
                if(not check): return JsonResponse({"error": "Invalid token"}, status=400)
                
            else:
                return JsonResponse({"error": "There aren't token"}, status=400)

        return response