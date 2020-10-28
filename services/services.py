from models.dataobjects import DXR
from mongoengine import *
from flask import jsonify
import sys
import json


class Services(object):

    def __init__(self): # setup db connection
        client = connect(db='testing', host='localhost', port=27017)
        self.db = client['testing']

    def setDXR(self, **kwargs): # save dxr to db
        dxr = DXR()
        dxr.comType = kwargs.get('comType')
        dxr.model = kwargs.get('model')
        dxr.location = kwargs.get('location')
        dxr.template_name = kwargs.get('template_name')
        try:
            dxr.save()
        except Exception as e:
            return {"error": str(e)}
        return self.getDXRMID(id=str(dxr['id']))

    def getDXRMID(self, **kwargs): #Get DXR via mongo _id
        id = kwargs.get('id')
        try:
            dxr = DXR.objects.get(id=id)
        except Exception as e:
            return {"error": str(e)}
        return {"dxr" : dxr.location, "id": str(id)}

    def getDXRTN(self, **kwargs): #Get DXR via custom template name.
        template_name = kwargs.get('template_name')
        try:
            dxr = DXR.objects.get(template_name=template_name)
        except Exception as e:
            return {"error": str(e)}
        return {"dxr" : dxr.location, "id": str(dxr.id), "template_name": dxr.template_name}

    def getAllTemplates(self, **kwargs):
        # not using any kwargs at moment
        try: # get all dxr templates
            dxr = DXR.objects()
        except Exception as e:
            return {"error": str(e)}
        return {"dxrs" : dxr.to_json() }


