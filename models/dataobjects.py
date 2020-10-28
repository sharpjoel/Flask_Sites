import datetime
from mongoengine import *

class DXR(Document): # DXR table schema
     template_name = StringField(required=False, max_lenght=200)
     comType = StringField(required=True, max_length =200)
     model = StringField(required=True, max_length=200)
     location = StringField(required=True, max_length=2)
     y1y2 = StringField(required=False, max_length=200)
     y3y4 = StringField(required=False, max_length=200)
     y5y6 = StringField(required=False, max_length=200)
     y7y8 = StringField(required=False, max_length=200)
     y10y20 = StringField(required=False, max_length=200)
     y30y40 = StringField(required=False, max_lenght=200)
     b1 = StringField(required=False, max_length=200)
     b2 = StringField(required=False, max_length=200)
     b3 = StringField(required=False, max_length=200)

