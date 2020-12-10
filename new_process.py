"""Step 1: Import necessary modules
    - Flask: Instantiates Flask to run application
    - render_template: Renders the associated html page assigned as the first argument.
    - request:Used to retrieve POST and GET requests
    - jsonify: converts arguments or keyword arguments into a dictionary
"""
import os
from flask import Flask, render_template, request, jsonify, send_file
from services.services import Services
import pandas as pd
# change below depending on serer storage location
UPLOAD_FOLDER = 'uploads/'
#UPLOAD_FOLDER = '/home/jcopeland/Documents/Flask_Sites/uploads'
#UPLOAD_FOLDER = '/home/dxr/dxr_template_generator/Flask_Sites/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf'}

functionality_dictionary = pd.read_excel('Functionality.xlsx')
threepts_dictionary = pd.read_excel('three_points.xlsx')
ztens_dictionary = pd.read_excel('ztens.xlsx')
labztens_dictionary = pd.read_excel('lab-ztens.xlsx')
x1x4inputs_dictionary = pd.read_excel('x1x4_inputs.xlsx')
labsx1x4inputs_dictionary = pd.read_excel('x1x4labs.xlsx')
pressureinputs_dictionary = pd.read_excel('pressure_inputs.xlsx')
digitalinputs_dictionary = pd.read_excel('digital_inputs.xlsx')
knx_dictionary = pd.read_excel('KNX.xlsx')

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
    #
    # function: dictionary of units
    #
    function = functionality_dictionary.set_index('Functionality Key')['Functionality Value'].to_dict()
    #
    # three point floating actuators
    #
    three_points_12VAV_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 T12 VAV Value'].to_dict()
    three_points_18VAV_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 T18 VAV Value'].to_dict()
    three_points_12FPB_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 T12 FPB Value'].to_dict()
    three_points_18FPB_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 T18 FPB Value'].to_dict()
    three_points_12VAV_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 T12 VAV Value'].to_dict()
    three_points_18VAV_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 T18 VAV Value'].to_dict()
    three_points_12FPB_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 T18 FPB Value'].to_dict()
    three_points_18FPB_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 T18 FPB Value'].to_dict()
    three_points_VAV_y5y6 = threepts_dictionary.set_index('ZTEN Key')['Y5Y6 VAV Value'].to_dict()
    three_points_FPB_y5y6 = threepts_dictionary.set_index('ZTEN Key')['Y5Y6 FPB Value'].to_dict()
    three_points_VAV_y7y8 = threepts_dictionary.set_index('ZTEN Key')['Y7Y8 VAV Value'].to_dict()
    three_points_FPB_y7y8 = threepts_dictionary.set_index('ZTEN Key')['Y7Y8 FPB Value'].to_dict()
    three_points_WSHP_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 WSHP Value'].to_dict()
    three_points_WSHP_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 WSHP Value'].to_dict()
    three_points_WSHP_y5y6 = threepts_dictionary.set_index('ZTEN Key')['Y5Y6 WSHP Value'].to_dict()
    three_points_WSHP_y7y8 = threepts_dictionary.set_index('ZTEN Key')['Y7Y8 WSHP Value'].to_dict()
    three_points_FCU_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 FCU Value'].to_dict()
    three_points_FCU_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 FCU Value'].to_dict()
    three_points_FCU_y5y6 = threepts_dictionary.set_index('ZTEN Key')['Y5Y6 FCU Value'].to_dict()
    three_points_FCU_y7y8 = threepts_dictionary.set_index('ZTEN Key')['Y7Y8 FCU Value'].to_dict()
    three_points_CENFUNC_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 CENFUNC Value'].to_dict()
    three_points_CENFUNC_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 CENFUNC Value'].to_dict()
    three_points_CENFUNC_y5y6 = threepts_dictionary.set_index('ZTEN Key')['Y5Y6 CENFUNC Value'].to_dict()
    three_points_CENFUNC_y7y8 = threepts_dictionary.set_index('ZTEN Key')['Y7Y8 CENFUNC Value'].to_dict()
    three_points_LAB_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 LAB Value'].to_dict()
    three_points_LAB_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 LAB Value'].to_dict()
    three_points_FH_y1y2 = threepts_dictionary.set_index('ZTEN Key')['Y1Y2 FH Value'].to_dict()
    three_points_FH_y3y4 = threepts_dictionary.set_index('ZTEN Key')['Y3Y4 FH Value'].to_dict()
    #
    # 0-10Volt Actuators
    #
    ztens_12VAV_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 T12 VAV Value'].to_dict()
    ztens_12VAV_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 T12 VAV Value'].to_dict()
    ztens_18VAV_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 T18  VAV Value'].to_dict()
    ztens_18VAV_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 T18 VAV Value'].to_dict()
    ztens_VAV_y30 = ztens_dictionary.set_index('ZTEN Key')['Y30 VAV Value'].to_dict()
    ztens_VAV_y40 = ztens_dictionary.set_index('ZTEN Key')['Y40 VAV Value'].to_dict()
    ztens_12FPB_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 T12 FPB Value'].to_dict()
    ztens_12FPB_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 T12 FPB Value'].to_dict()
    ztens_18FPB_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 T18 FPB Value'].to_dict()
    ztens_18FPB_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 T18 FPB Value'].to_dict()
    ztens_FPB_y30 = ztens_dictionary.set_index('ZTEN Key')['Y30 FPB Value'].to_dict()
    ztens_FPB_y40 = ztens_dictionary.set_index('ZTEN Key')['Y40 FPB Value'].to_dict()
    ztens_WSHP_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 WSHP Value'].to_dict()
    ztens_WSHP_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 WSHP Value'].to_dict()
    ztens_WSHP_y30 = ztens_dictionary.set_index('ZTEN Key')['Y30 WSHP Value'].to_dict()
    ztens_WSHP_y40 = ztens_dictionary.set_index('ZTEN Key')['Y40 WSHP Value'].to_dict()
    ztens_FCU_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 FCU Value'].to_dict()
    ztens_FCU_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 FCU Value'].to_dict()
    ztens_FCU_y30 = ztens_dictionary.set_index('ZTEN Key')['Y30 FCU Value'].to_dict()
    ztens_FCU_y40 = ztens_dictionary.set_index('ZTEN Key')['Y40 FCU Value'].to_dict()
    ztens_FH_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 FH Value'].to_dict()
    ztens_FH_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 FH Value'].to_dict()
    ztens_FH_y30 = ztens_dictionary.set_index('ZTEN Key')['Y30 FH Value'].to_dict()
    ztens_FH_y40 = ztens_dictionary.set_index('ZTEN Key')['Y40 FH Value'].to_dict()
    ztens_CENFUNC_y10 = ztens_dictionary.set_index('ZTEN Key')['Y10 CENFUNC Value'].to_dict()
    ztens_CENFUNC_y20 = ztens_dictionary.set_index('ZTEN Key')['Y20 CENFUNC Value'].to_dict()
    ztens_CENFUNC_y30 = ztens_dictionary.set_index('ZTEN Key')['Y30 CENFUNC Value'].to_dict()
    ztens_CENFUNC_y40 = ztens_dictionary.set_index('ZTEN Key')['Y40 CENFUNC Value'].to_dict()
    ztens_LAB_y10 = labztens_dictionary.set_index('ZTEN Key')['Y10 LAB Value'].to_dict()
    ztens_LAB_y20 = labztens_dictionary.set_index('ZTEN Key')['Y20 LAB Value'].to_dict()
    ztens_17CLAB_y30 = labztens_dictionary.set_index('ZTEN Key')['Y30 T17C LAB Value'].to_dict()
    ztens_17CLAB_y40 = labztens_dictionary.set_index('ZTEN Key')['Y40 T17C LAB Value'].to_dict()
    ztens_17CXLAB_y30 = labztens_dictionary.set_index('ZTEN Key')['Y30 T17CX LAB Value'].to_dict()
    ztens_17CXLAB_y40 = labztens_dictionary.set_index('ZTEN Key')['Y40 T17CX LAB Value'].to_dict()
    #
    # Digital Inputs
    #
    inputs_VAV_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 VAV Value'].to_dict()
    inputs_VAV_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 VAV Value'].to_dict()
    inputs_FPB_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 FPB Value'].to_dict()
    inputs_FPB_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 FPB Value'].to_dict()
    inputs_WSHP_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 WSHP Value'].to_dict()
    inputs_WSHP_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 WSHP Value'].to_dict()
    inputs_FCU_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 FCU Value'].to_dict()
    inputs_FCU_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 FCU Value'].to_dict()
    inputs_CENFUNC_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 CENFUNC Value'].to_dict()
    inputs_CENFUNC_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 CENFUNC Value'].to_dict()
    inputs_LAB_b1 = digitalinputs_dictionary.set_index('DI Key')['B1 LAB Value'].to_dict()
    inputs_LAB_b2 = digitalinputs_dictionary.set_index('DI Key')['B2 LAB Value'].to_dict()
    inputs_LAB_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 LAB Value'].to_dict()
    inputs_LAB_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 LAB Value'].to_dict()
    inputs_LAB_d3 = digitalinputs_dictionary.set_index('DI Key')['D3 LAB Value'].to_dict()
    inputs_FH_b1 = digitalinputs_dictionary.set_index('DI Key')['B1 FH Value'].to_dict()
    inputs_FH_b2 = digitalinputs_dictionary.set_index('DI Key')['B2 FH Value'].to_dict()
    inputs_FH_d1 = digitalinputs_dictionary.set_index('DI Key')['D1 FH Value'].to_dict()
    inputs_FH_d2 = digitalinputs_dictionary.set_index('DI Key')['D2 FH Value'].to_dict()
    inputs_FH_d3 = digitalinputs_dictionary.set_index('DI Key')['D3 FH Value'].to_dict()
    #
    # Pressure
    #
    inputs_VAV_p1 = pressureinputs_dictionary.set_index('P1 VAV Key')['P1 VAV Value'].to_dict()
    #
    # X1-X4 Inputs
    #
    inputs_12VAV_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 T12 VAV Value'].to_dict()
    inputs_12VAV_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 T12 VAV Value'].to_dict()
    inputs_18VAV_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 T18 VAV Value'].to_dict()
    inputs_18VAV_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 T18 VAV Value'].to_dict()
    inputs_VAV_x3 = x1x4inputs_dictionary.set_index('X1X4 Key')['X3 VAV Value'].to_dict()
    inputs_VAV_x4 = x1x4inputs_dictionary.set_index('X1X4 Key')['X4 VAV Value'].to_dict()
    inputs_12FPB_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 T12 FPB Value'].to_dict()
    inputs_12FPB_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 T12 FPB Value'].to_dict()
    inputs_18FPB_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 T18 FPB Value'].to_dict()
    inputs_18FPB_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 T18 FPB Value'].to_dict()
    inputs_FPB_x3 = x1x4inputs_dictionary.set_index('X1X4 Key')['X3 FPB Value'].to_dict()
    inputs_FPB_x4 = x1x4inputs_dictionary.set_index('X1X4 Key')['X4 FPB Value'].to_dict()
    inputs_WSHP_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 WSHP Value'].to_dict()
    inputs_WSHP_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 WSHP Value'].to_dict()
    inputs_WSHP_x3 = x1x4inputs_dictionary.set_index('X1X4 Key')['X3 WSHP Value'].to_dict()
    inputs_WSHP_x4 = x1x4inputs_dictionary.set_index('X1X4 Key')['X4 WSHP Value'].to_dict()
    inputs_FCU_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 FCU Value'].to_dict()
    inputs_FCU_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 FCU Value'].to_dict()
    inputs_FCU_x3 = x1x4inputs_dictionary.set_index('X1X4 Key')['X3 FCU Value'].to_dict()
    inputs_FCU_x4 = x1x4inputs_dictionary.set_index('X1X4 Key')['X4 FCU Value'].to_dict()
    inputs_CENFUNC_x1 = x1x4inputs_dictionary.set_index('X1X4 Key')['X1 CENFUNC Value'].to_dict()
    inputs_CENFUNC_x2 = x1x4inputs_dictionary.set_index('X1X4 Key')['X2 CENFUNC Value'].to_dict()
    inputs_CENFUNC_x3 = x1x4inputs_dictionary.set_index('X1X4 Key')['X3 CENFUNC Value'].to_dict()
    inputs_CENFUNC_x4 = x1x4inputs_dictionary.set_index('X1X4 Key')['X4 CENFUNC Value'].to_dict()
    inputs_LAB_x1 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X1 LAB Value'].to_dict()
    inputs_LAB_x2 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X2 LAB Value'].to_dict()
    inputs_LAB_x3 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X3 LAB Value'].to_dict()
    inputs_LAB_x4 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X4 LAB Value'].to_dict()
    inputs_FH_x1 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X1 FH Value'].to_dict()
    inputs_FH_x2 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X2 FH Value'].to_dict()
    inputs_FH_x3 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X3 FH Value'].to_dict()
    inputs_FH_x4 = labsx1x4inputs_dictionary.set_index('X1X4 Key')['X4 FH Value'].to_dict()
    #
    # binary_out: dictionary of binary outputs
    #
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
    knx_VAV = knx_dictionary.set_index('KNX VAV Key')['KNX VAV Value'].to_dict();
    knx_FPB = knx_dictionary.set_index('KNX VAV Key')['KNX FPB VALUE'].to_dict();
    knx_WSHP = knx_dictionary.set_index('KNX VAV Key')['KNX WSHP Value'].to_dict();
    knx_FCU = knx_dictionary.set_index('KNX VAV Key')['KNX FCU Value'].to_dict();
    knx_LAB = knx_dictionary.set_index('KNX VAV Key')['KNX LAB Value'].to_dict();
    knx_FH = knx_dictionary.set_index('KNX VAV Key')['KNX FH Value'].to_dict();
    knx_CENFUNC = knx_dictionary.set_index('KNX VAV Key')['KNX CENFUNC Value'].to_dict();
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
        pressure=inputs_VAV_p1,
        inputsVAVp1=inputs_VAV_p1,
        inputsVAVd1=inputs_VAV_d1,
        inputsVAVd2=inputs_VAV_d2,
        inputsFPBd1=inputs_FPB_d1,
        inputsFPBd2=inputs_FPB_d2,
        inputsWSHPd1=inputs_WSHP_d1,
        inputsWSHPd2=inputs_WSHP_d2,
        inputsFCUd1=inputs_FCU_d1,
        inputsFCUd2=inputs_FCU_d2,
        inputsCENFUNCd1=inputs_CENFUNC_d1,
        inputsCENFUNCd2=inputs_CENFUNC_d2,
        inputsLABb1=inputs_LAB_b1,
        inputsLABb2=inputs_LAB_b2,
        inputsLABd1=inputs_LAB_d1,
        inputsLABd2=inputs_LAB_d2,
        inputsLABd3=inputs_LAB_d3,
        inputsFHb1=inputs_FH_b1,
        inputsFHb2=inputs_FH_b2,
        inputsFHd1=inputs_FH_d1,
        inputsFHd2=inputs_FH_d2,
        inputsFHd3=inputs_FH_d3,
        inputs12VAVx1=inputs_12VAV_x1,
        inputs12VAVx2=inputs_12VAV_x2,
        inputs18VAVx1=inputs_18VAV_x1,
        inputs18VAVx2=inputs_18VAV_x2,
        inputsVAVx3=inputs_VAV_x3,
        inputsVAVx4=inputs_VAV_x4,
        inputs12FPBx1=inputs_12FPB_x1,
        inputs12FPBx2=inputs_12FPB_x2,
        inputs18FPBx1=inputs_18FPB_x1,
        inputs18FPBx2=inputs_18FPB_x2,
        inputsFPBx3=inputs_FPB_x3,
        inputsFPBx4=inputs_FPB_x4,
        inputsWSHPx1=inputs_WSHP_x1,
        inputsWSHPx2=inputs_WSHP_x2,
        inputsWSHPx3=inputs_WSHP_x3,
        inputsWSHPx4=inputs_WSHP_x4,
        inputsFCUx1=inputs_FCU_x1,
        inputsFCUx2=inputs_FCU_x2,
        inputsFCUx3=inputs_FCU_x3,
        inputsFCUx4=inputs_FCU_x4,
        inputsLABx1=inputs_LAB_x1,
        inputsLABx2=inputs_LAB_x2,
        inputsLABx3=inputs_LAB_x3,
        inputsLABx4=inputs_LAB_x4,
        inputsFHx1=inputs_FH_x1,
        inputsFHx2=inputs_FH_x2,
        inputsFHx3=inputs_FH_x3,
        inputsFHx4=inputs_FH_x4,
        inputsCENFUNCx1=inputs_CENFUNC_x1,
        inputsCENFUNCx2=inputs_CENFUNC_x2,
        inputsCENFUNCx3=inputs_CENFUNC_x3,
        inputsCENFUNCx4=inputs_CENFUNC_x4,
        threepts12VAVy1y2=three_points_12VAV_y1y2,
        threepts12FPBy1y2=three_points_12FPB_y1y2,
        threepts18VAVy1y2=three_points_18VAV_y1y2,
        threepts18FPBy1y2=three_points_18FPB_y1y2,
        threepts12VAVy3y4=three_points_12VAV_y3y4,
        threepts12FPBy3y4=three_points_12FPB_y3y4,
        threepts18VAVy3y4=three_points_18VAV_y3y4,
        threepts18FPBy3y4=three_points_18FPB_y3y4,
        threeptsVAVy5y6=three_points_VAV_y5y6,
        threeptsFPBy5y6=three_points_FPB_y5y6,
        threeptsVAVy7y8=three_points_VAV_y7y8,
        threeptsFPBy7y8=three_points_FPB_y7y8,
        threeptsWSHPy1y2=three_points_WSHP_y1y2,
        threeptsWSHPy3y4=three_points_WSHP_y3y4,
        threeptsWSHPy5y6=three_points_WSHP_y5y6,
        threeptsWSHPy7y8=three_points_WSHP_y7y8,
        threeptsFCUy1y2=three_points_FCU_y1y2,
        threeptsFCUy3y4=three_points_FCU_y3y4,
        threeptsFCUy5y6=three_points_FCU_y5y6,
        threeptsFCUy7y8=three_points_FCU_y7y8,
        threeptsLABy1y2=three_points_LAB_y1y2,
        threeptsLABy3y4=three_points_LAB_y3y4,
        threeptsFHy1y2=three_points_FH_y1y2,
        threeptsFHy3y4=three_points_FH_y3y4,
        threeptsCENFUNCy1y2=three_points_CENFUNC_y1y2,
        threeptsCENFUNCy3y4=three_points_CENFUNC_y3y4,
        threeptsCENFUNCy5y6=three_points_CENFUNC_y5y6,
        threeptsCENFUNCy7y8=three_points_CENFUNC_y7y8,
        ztens12VAVy10=ztens_12VAV_y10,
        ztens12VAVy20=ztens_12VAV_y20,
        ztens18VAVy10=ztens_18VAV_y10,
        ztens18VAVy20=ztens_18VAV_y20,
        ztensVAVy30=ztens_VAV_y30,
        ztensVAVy40=ztens_VAV_y30,
        ztens12FPBy10=ztens_12FPB_y10,
        ztens12FPBy20=ztens_12FPB_y20,
        ztens18FPBy10=ztens_18FPB_y10,
        ztens18FPBy20=ztens_18FPB_y20,
        ztensFPBy30=ztens_FPB_y30,
        ztensFPBy40=ztens_FPB_y30,
        ztensWSHPy10=ztens_WSHP_y10,
        ztensWSHPy20=ztens_WSHP_y20,
        ztensWSHPy30=ztens_WSHP_y30,
        ztensWSHPy40=ztens_WSHP_y40,
        ztensFCUy10=ztens_FCU_y10,
        ztensFCUy20=ztens_FCU_y20,
        ztensFCUy30=ztens_FCU_y30,
        ztensFCUy40=ztens_FCU_y40,
        ztensFHy10=ztens_FH_y10,
        ztensFHy20=ztens_FH_y20,
        ztensFHy30=ztens_FH_y30,
        ztensFHy40=ztens_FH_y40,
        ztensCENFUNCy10=ztens_CENFUNC_y10,
        ztensCENFUNCy20=ztens_CENFUNC_y20,
        ztensCENFUNCy30=ztens_CENFUNC_y30,
        ztensCENFUNCy40=ztens_CENFUNC_y40,
        ztensLABy10=ztens_LAB_y10,
        ztensLABy20=ztens_LAB_y20,
        ztens17CLABy30=ztens_17CLAB_y30,
        ztens17CLABy40=ztens_17CLAB_y40,
        ztens17CXLABy30=ztens_17CLAB_y30,
        ztens17CXLABy40=ztens_17CLAB_y40,
        binaryout=binary_out,
        pet=pet,
        dxrs=dxrs,
        etypes=etypes,
        mtypes=mtypes,
        ptypes=ptypes,
        locations=locations,
        function=function,
        knxVAV=knx_VAV,
        knxFPB=knx_FPB,
        knxWSHP=knx_WSHP,
        knxFCU=knx_FCU,
        knxLAB=knx_LAB,
        knxFH=knx_FH,
        knxCENFUNC=knx_CENFUNC,
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
        results = services.templateSearch(template_name=request.form['name_encoded'])
        return({'results': results})
    except Exception as e:
        return {"error": str(e)}
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


@app.route('/new', methods=['GET'])
def create_new_template():
    return render_template('form_test.html', title='Add New Template')



@app.route('/save', methods=['POST'])
def save_new_template():
    results = services.saveTemplate(**request.json)
    return {'results': results}



@app.route('/search/<string:template_name>', methods=['GET'])
def templateSearch(template_name=None):
    results = services.templateSearch(template_name=template_name)
    return {'results': results}


@app.route('/get/<string:template_name>', methods=['GET'])
def download_template(template_name=None):
    try:
        return send_file(
            app.config['UPLOAD_FOLDER'] + template_name, as_attachment=True)
    except Exception as e:
        raise ValueError(str(e))

"""
Step 8 - Run your application. debug=True makes it so you don't have to stop and restart your
    webserver.
"""
if __name__ == '__main__':
#    app.run(debug=True, host="192.168.1.13", port=5000)
#    app.run(debug=True, host="192.168.1.189", port="5000")
    app.run(debug=True, port="5000")
