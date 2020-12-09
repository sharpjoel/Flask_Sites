import datetime
from mongoengine import *


class DXR(Document):  # DXR table schema one-seven are chunks of template_name
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
             'weights': {'one': 10, 'two': 9, 'three': 8, 'four': 7,
                         'five': 6, 'six': 5, 'seven': 4}}
     ]}
