from models.dataobjects import DXR
from mongoengine import *
from flask import jsonify
import sys
import os
from werkzeug.utils import secure_filename
from flask import current_app as app
import base64


class Services(object):

    def __init__(self):  # setup db connection
        client = connect(db='pztcetool', host='localhost', port=27017)
        self.db = client['pztcetool']

    def saveTemplate(self, **kwargs):  # save dxr to db
        dxr = DXR()
        dxr.one = kwargs.get('one', None)
        dxr.two = kwargs.get('two', None)
        dxr.three = kwargs.get('three', None)
        dxr.four = kwargs.get('four', None)
        dxr.five = kwargs.get('five', None)
        dxr.six = kwargs.get('six', None)
        dxr.seven = kwargs.get('seven', None)
        # template name is all fields combined with underscores between
        dxr.template_name = kwargs.get('template_name', None)
        # file is a base64 string
        file = kwargs.get('file', None)
        if file:
            try:
                file = file.split(',')[1]  # remove up to comma
                convertedFile = Services.convertBase64(file)  # convert back
                Services.saveFile(convertedFile, dxr.template_name)  # save
            except Exception as e:
                raise ValueError(str(e))
        try:
            dxr.save()
        except Exception as e:
            raise ValueError(str(e))
        return self.getDXRMID(id=str(dxr['id']))

    def allowed_file(filename=None):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() \
            in app.config['ALLOWED_EXTENSIONS']

    def saveFile(file=None, filename=None):
        if file is None:
            raise ValueError("No file provided")
        if filename == '':
            raise ValueError("No filename provided")
        if file and Services.allowed_file(filename+'.txt'):
            filename = secure_filename(filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            try:
                with open(filepath, 'wb') as saveFile:
                    saveFile.write(file)
            except Exception as e:
                raise ValueError(str(e))
            return 1
            # return redirect(url_for('upload_file', filename=filename))
        else:
            raise ValueError("File name not allowed")

    def convertBase64(b64=None):
        if b64 is not None:
            b64bytes = b64.encode('utf-8')
        else:
            raise ValueError("No base 64 file provided")
        try:
            decodedB64 = base64.decodebytes(b64bytes)
        except Exception as e:
            raise ValueError(str(e))
        return decodedB64

    def getDXRMID(self, **kwargs):  # Get DXR via mongo _id
        id = kwargs.get('id')
        dxrs = DXR.objects.get(id=id)
        return {"dxr": dxrs.location, "id": str(id)}

    def getDXRTN(self, **kwargs):  # Get DXR via custom template name.
        template_name = kwargs.get('template_name')
        try:
            dxr = DXR.objects.get(template_name=template_name)
        except Exception as e:
            raise ValueError(str(e))
        return {"dxr": dxr.location, "id": str(dxr.id), "template_name": dxr.template_name}

    def templateSearch(self, **kwargs):
        pass
