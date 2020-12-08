import datetime
from mongoengine import *


class DXR(Document):  # DXR table schema
    template_name = StringField(required=False, max_lenght=200)
    one = StringField(required=True, max_length=200)
    two = StringField(required=True, max_length=200)
    three = StringField(required=False, max_length=200)
    four = StringField(required=False, max_length=200)
    five = StringField(required=False, max_length=200)
    six = StringField(required=False, max_length=200)
    seven = StringField(required=False, max_length=200)

    meta = {'indexes': [
         {'fields': ['$one', '$two', '$three', '$four', '$five', '$six', '$seven'],
             'default_language': 'english',
             'weights': {'one': 10, 'two': 10, 'three': 10, 'four': 10,
                         'five': 10, 'six': 10, 'seven': 10}}
     ]}
