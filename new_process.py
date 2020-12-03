"""Step 1: Import necessary modules
    - Flask: Instantiates Flask to run application
    - render_template: Renders the associated html page assigned as the first argument.
    - request:Used to retrieve POST and GET requests
    - jsonify: converts arguments or keyword arguments into a dictionary
"""
import os
from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from werkzeug.utils import secure_filename
from services.services import Services
import pandas as pd
# change below depending on serer storage location
UPLOAD_FOLDER = '/home/jcopeland/Documents/Flask_Sites/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

functionality_dictionary = pd.read_excel('Functionality.xlsx')
threepts_dictionary = pd.read_excel('three_points.xlsx')
ztens_dictionary = pd.read_excel('ztens.xlsx')
x1x4inputs_dictionary = pd.read_excel('x1x4_inputs.xlsx')
pressureinputs_dictionary = pd.read_excel('pressure_inputs.xlsx')
digitalinputs_dictionary = pd.read_excel('digital_inputs.xlsx')
knx_dictionary = pd.read_excel('knx.xlsx')

# Step 2: Create an Instance of Flask. This will be your application
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = ALLOWED_EXTENSIONS
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
services = Services()
"""
Step 3: Create the route to your homepage.
    - @app.route('url extension') must preceed all functions
    - the name of the function can be anything but should be relevant to the page
        you're routing to. For example, the index is normally the first part of a
        book. Therefore 127.0.0.1:5000/ or 127.0.0.1:5000/home should route to
        the index page.
    - methods=['POST','GET'] are arguments added to the decorator which will
        be used to retrieve POST and GET requests.
"""
@app.route('/')
@app.route('/home', methods=['POST'])
def index():

    # Step 4: Create some data. We will pass this to our html file for rendering.

    dxrs = {'':'','Ethernet':'E','MSTP':'M','P1':'P'}
    # etypes: dictionary of ethernet dxrs
    etypes = {
        '':'',
        '10PL':'A',
        '10PLX':'B',
        '12P':'C',
        '12PX':'D',
        '18':'E',
        '17C':'F',
        '17CX':'G',
        }
    # mtypes: dictionary of mstp dxrs
    mtypes = {
        '':'',
        '10PL':'A',
        '10PLX':'B',
        '12P':'C',
        '12PX':'D',
        '18':'E',
        }
    # ptypes: dictionary of P1 dxrs
    ptypes = {
        '':'',
        '10':'A',
        '18':'B',
        }
    # locations: dictionary of units
    locations = {
        '':'',
        "US":"U",
        "SI":"S",
        "CA":"C",
        }
    # function: dictionary of units
    function = functionality_dictionary.set_index('Functionality Key')['Functionality Value'].to_dict()
    three_points_VAV_y1y2 = threepts_dictionary.set_index('Y1Y2 VAV Key')['Y1Y2 VAV Value'].to_dict()
    three_points_FPB_y1y2 = threepts_dictionary.set_index('Y1Y2 FPB Key')['Y1Y2 FPB Value'].to_dict()
    three_points_VAV_y3y4 = threepts_dictionary.set_index('Y3Y4 VAV Key')['Y3Y4 VAV Value'].to_dict()
    three_points_FPB_y3y4 = threepts_dictionary.set_index('Y3Y4 FPB Key')['Y3Y4 FPB Value'].to_dict()
    three_points_VAV_y5y6 = threepts_dictionary.set_index('Y5Y6 VAV Key')['Y5Y6 VAV Value'].to_dict()
    three_points_FPB_y5y6 = threepts_dictionary.set_index('Y5Y6 FPB Key')['Y5Y6 FPB Value'].to_dict()
    three_points_VAV_y7y8 = threepts_dictionary.set_index('Y7Y8 VAV Key')['Y7Y8 VAV Value'].to_dict()
    three_points_FPB_y7y8 = threepts_dictionary.set_index('Y7Y8 FPB Key')['Y7Y8 FPB Value'].to_dict()
    # three_points: dictionary of three point floating actuators
    three_points_FCU_y1y2 = {
        'None':'X',
        'Supply Damper':'S',
        'Exhaust Damper':'S',
        'Hot Water Reheat Coil':'C',
        'Radiator':'D',
        'Chilled Water Coil':'S',
        'Windows':'S'
        }
    # three_points = product_dictionary.set_index('3pt Floating Actuator Key')['3pt Floating Actuator Value'].to_dict()
    ztens_VAV_y10 = ztens_dictionary.set_index('Y10 VAV Key')['Y10 VAV Value'].to_dict()
    ztens_VAV_y20 = ztens_dictionary.set_index('Y20 VAV Key')['Y20 VAV Value'].to_dict()
    # zero_ten_1030: dictionary of 0-10 Volt actuators for Y10 & Y30
    zero_ten_1030 = {
        'None':'X',
        'Supply Damper':'A',
        'Hot Water Reheat Coil':'C',
        'Radiator':'D',
        'Chilled Water Coil':'E',
        'Windows':'F',
        '0-10V General':'Z'
        }
    # zero_ten_2040: dictionary of 0-10 Volt actuators for Y20 & Y40
    zero_ten_2040 = {
        'None':'X',
        'Exhaust Damper':'B',
        'Hot Water Reheat Coil':'C',
        'Radiator':'D',
        'Chilled Water Coil':'E',
        'Windows':'F',
        '0-10V General':'Z'
        }
    #inputs: dictionary of analog inputs
    inputs_VAV_p1 = pressureinputs_dictionary.set_index('P1 VAV Key')['P1 VAV Value'].to_dict()
    inputs_VAV_d1 = digitalinputs_dictionary.set_index('D1 VAV Key')['D1 VAV Value'].to_dict()
    inputs_VAV_x1 = x1x4inputs_dictionary.set_index('X1 VAV Key')['X1 VAV Value'].to_dict()
    inputs_VAV_x2 = x1x4inputs_dictionary.set_index('X2 VAV Key')['X2 VAV Value'].to_dict()
    x1x4_in = {
        "None":"X",
        "Sup Press":"A",
        "Sup Flow":"B",
        "Sup Temp":"C",
        "Exh Press":"D",
        "Exh Flow":"E",
        "Exh Temp P1":"F",
        'Fan Status':'G',
        'Window Contact':'H',
        'Presence Detector':'I',
        'Condensation Sensor':'J',
        'Condensation Alarm':'K',
        'Door Contact':'L',
        'Analog Input General':'M',
        'Binary Input General':'N'
        }
    d1d2_in = {
        "None":"X",
        'Fan Status':'G',
        'Window Contact':'H',
        'Presence Detector':'I',
        'Condensation Sensor':'J',
        'Condensation Alarm':'K',
        'Door Contact':'L',
        'Binary Input General':'N'
        }
    d1d2d3_in = {
        "None":"X",
        'Fan Status':'G',
        'Window Contact':'H',
        'Presence Detector':'I',
        'Condensation Sensor':'J',
        'Condensation Alarm':'K',
        'Door Contact':'L',
        'Binary Input General':'N'
        }
    #pressure: dictionary of pressure sensors
    pressure = {
        "None":"X",
        "Sup SCOM P1":"C",
        "Sup SCOM P3":"D",
        "Exh SCOM P2":"E",
        "Exh SCOM P4":"F",
        "FH SCOM P1":"G"
        }
    #binary_out: dictionary of binary outputs
    binary_out = {
        'None':'X',
        'Fan':'A',
        'Binary Output General':'B',
        }
    #appfuncs: dictionary of application functions
    appfuncs = {
        'Occupied Mode':'A',
        'Unoccupied Mode':'B',
        'Night-Cooling Mode':'C',
        'Warm-up Mode':'D',
        'Cool-down Mode':'E',
        'Temporary Comfort Button':'F',
        'Presence Detection':'G',
        'Heat/Cool Determination':'H',
        'VAV Cooling Sequence':'I',
        'VAV Heating Sequence':'J',
        'Occupied Ventilation/DCV':'K',
        'Standby Ventilation/DCV':'L',
        'Unoccupied Ventilation/DCV':'M',
        'Rapid Ventilation':'N',
        'Air Volume Tracking':'O',
        'VAV Dehumidification':'P',
        'Greenleaf':'Q',
        'Natural Ventilation':'R',
        }
    appfuncs2 = {
        'Lighting':'A',
        'Shading':'B',
        }
    cenfuncs = {
        'Operating Mode':'A',
        'Delayed Op Mode':'B',
        'Static Reset':'C',
        'Temp Reset':'D',
        }
    templates = {
        'Blank':'',
        '14023 - VAV w Reheat':'A',
        '14050 - FCU w Cooling':'B'
    }
    #knx: dictionary of knx devices
    knx_VAV = knx_dictionary.set_index('KNX VAV Key')['KNX VAV Value'].to_dict()
    pet = ""
    try:
        pet = request.form['pet'][:-1]
        print(f"You chose {pet}")
        print(request.form)
    except:
        pass

    """Step 5: Return the rendered html page entered as the first argument.
        - When the user navigates to 127.0.0.1:5000/ or 127.0.0.1:5000/home the
        webpage they will see will be the one entered as the first argument. In this
        case, that is form.html.
        - We will pass the data that we entered in Step 4 as arguments to be rendered.
            For ease, the key:value pairs in the arguments should match.
    """
    return render_template('new_form.html',
        appfuncs=appfuncs,
        appfuncs2=appfuncs2,
        cenfuncs=cenfuncs,
        x1x4=x1x4_in,
        d1d2=d1d2_in,
        d1d2d3=d1d2d3_in,
        pressure=pressure,
        inputsVAVp1=inputs_VAV_p1,
        inputsVAVd1=inputs_VAV_d1,
        inputsVAVx1=inputs_VAV_x1,
        inputsVAVx2=inputs_VAV_x2,
        threeptsVAVy1y2=three_points_VAV_y1y2,
        threeptsFPBy1y2=three_points_FPB_y1y2,
        threeptsFCUy1y2=three_points_FCU_y1y2,
        threeptsVAVy3y4=three_points_VAV_y3y4,
        threeptsFPBy3y4=three_points_FPB_y3y4,
        threeptsVAVy5y6=three_points_VAV_y5y6,
        threeptsFPBy5y6=three_points_FPB_y5y6,
        threeptsVAVy7y8=three_points_VAV_y7y8,
        threeptsFPBy7y8=three_points_FPB_y7y8,
        ztensVAVy10=ztens_VAV_y10,
        ztensVAVy20=ztens_VAV_y20,
        zten1030=zero_ten_1030,
        zten2040=zero_ten_2040,
        binaryout=binary_out,
        pet=pet,
        dxrs=dxrs,
        etypes=etypes,
        mtypes=mtypes,
        ptypes=ptypes,
        locations=locations,
        function=function,
        knx=knx_VAV,
        templates=templates
        )

"""
Step 6: Create the route to process AJAX POST requests.
    - In this example, AJAX requests will be posted to 127.0.0.1:5000/process
        for use in our program.
    - Notice /process does not return a rendered html page. Instead, it returns a JSON
    object instead. This JSON object will be used by AJAX to update the webpage that is referencing
    the javascript file without having to refresh the page.
"""
@app.route('/process', methods=['POST'])
def process():
    """
    Step 7: Read the form data from the AJAX request.
        - request.form['something'] is used to find data with the key specified as something
        - In this example, the AJAX POST request is constructed as a JSON object with
            'name' as one of the keys.
        - Finally, we can do something with the data we read from the POST request, and
            pass it back to AJAX 'name' key with a new value. In this example, we are
            not doing anything special to it as we simply want to display our data on the screen
            anytime it changes.
        *** Note - 500 error implies that you're trying to read a JSON key that doesn't exist.
        If this happens, check out you AJAX data request and make sure it was set up correctly.
    """
    try:
        # print(request.json) # should see the output at command line
        results = services.setDXR(**request.json)
    except Exception as e:
        return {"error": str(e)}
                #return results
    return(request.json)
    # name = request.form['name'][:-1]


@app.route('/custom_name/<string:custom_name>', methods=['GET'])
def get_dxr_custom_name(custom_name=None):
    if custom_name is None:
        return {"error": "Must supply custom_name"}
    try:
        results = services.getDXRCN(custom_name=custom_name)
    except Exception as e:
        return {"error": str(e)}
    return results


@app.route('/jcformtest', methods=['GET'])
def jcformtest():
    return render_template('form_test.html', title='jcformtest')


"""
Step 8 - Run your application. debug=True makes it so you don't have to stop and restart your
    webserver.
"""
if __name__ == '__main__':
#    app.run(debug=True, host="192.168.1.13", port=5000)
     app.run(debug=True, port="5000")
