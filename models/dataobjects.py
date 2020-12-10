import datetime
from mongoengine import *


class DXR(Document):  # DXR table schema one-seven are chunks of template_name
    template_name = StringField(required=False, max_lenght=200) # name_encoded
    hardware_encoded = StringField(required=True, max_length=200) # one
    threept_encoded = StringField(required=True, max_length=200) # two
    zten_encoded = StringField(required=False, max_length=200) # three
    bo_encoded = StringField(required=False, max_length=200) # four
    inputs_encoded = StringField(required=False, max_length=200) # five
    pres_encoded = StringField(required=False, max_length=200) # six
    knx_encoded = StringField(required=False, max_length=200) # seven
    threept_names = StringField(required=False, max_length=200)
    tenvolt_names = StringField(required=False, max_length=200)
    binary_names = StringField(required=False, max_length=200)
    x1x4_names = StringField(required=False, max_length=200)
    pressure_names = StringField(required=False, max_length=200)
    knx_names = StringField(required=False, max_length=200)

    meta = {'indexes': [
         {'fields': ['$hardware_encoded', '$threept_encoded', '$zten_encoded',
                     '$bo_encoded', '$inputs_encoded', '$pres_encoded',
                     '$knx_encoded'],
             'default_language': 'english',
             'weights': {'hardware_encoded': 10, 'threept_encoded': 9,
                         'zten_encoded': 8, 'bo_encoded': 7,
                         'inputs_encoded': 6, 'pres_encoded': 5,
                         'knx_encoded': 4}}
     ]}
