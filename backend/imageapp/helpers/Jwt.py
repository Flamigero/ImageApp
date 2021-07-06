"""JWT class"""

# Python
from datetime import datetime, timedelta

# JWT
import jwt

key = 'SOME_SECRET_KEY'

class JWT:
    def encodeJWT(payload):
        dt = datetime.now() + timedelta(hours=2)    
        payload['exp'] = dt
        return jwt.encode(payload, key, algorithm="HS256")

    def decodeJWT(encoded):
        return jwt.decode(encoded, key, algorithms="HS256")

    def validateJWT(token):
        try:
            jwt.decode(token, key, algorithms=['HS256'])
            return True
        except jwt.ExpiredSignatureError:
            return False
        except jwt.InvalidTokenError:
            return False