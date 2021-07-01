"""Users serializer"""

# Django
from django.contrib.auth import authenticate

# Django REST Framework
from rest_framework import serializers

# Models
from imageapp.users.models import User

# JWT
from imageapp.helpers.Jwt import JWT

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk', 'name', 'username', 'email', 'bio']

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(email=data['email'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Invalid credentials')

        self.context['user'] = user

        return data

    def create(self, data):
        token = JWT.encodeJWT(data)
        return self.context['user'], token

class UserSignUpSerializer(serializers.Serializer):
    name = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    password2 = serializers.CharField()

    def validate_email(self, email):
        user = User.objects.filter(email=email)
        if user:
            raise serializers.ValidationError('Invalid email')
        return email

    def validate(self, data):
        pass1 = data['password']
        pass2 = data['password2']
        if pass1 != pass2:
            raise serializers.ValidationError("Passwords don't match")

        return data

    def create(self, data):
        data.pop('password2')
        user = User.objects.create_user(**data)
        token = JWT.encodeJWT(data)
        return user, token