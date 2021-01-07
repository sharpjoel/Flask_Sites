"""Step 1: Import necessary modules
    - Flask: Instantiates Flask to run application
    - render_template: Renders the associated html page assigned as the first argument.
    - request:Used to retrieve POST and GET requests
    - jsonify: converts arguments or keyword arguments into a dictionary
"""
import time
import os
from flask import Flask, render_template, request, jsonify, send_file, send_from_directory, make_response
from services.services import Services
from pathlib import Path
import os
import pandas as pd
import pdfkit
# change below depending on storage location
UPLOAD_FOLDER = 'uploads/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'dwg', 's1ct', 's1ca'}

functionality_dictionary = pd.read_excel('Functionality.xlsx')
threepts_dictionary = pd.read_excel('three_points.xlsx')
ztens_dictionary = pd.read_excel('ztens.xlsx')
labztens_dictionary = pd.read_excel('lab-ztens.xlsx')
bo_dictionary = pd.read_excel('binary_outs.xlsx')
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
    scom_sup = {'None':'X','Disch Pres':'A','Exh Pres':'S','FH Pres':'S'}
    scom_exh = {'None':'X','Disch Pres':'S','Exh Pres':'B','FH Pres':'S'}
    scom_fh = {'None':'X','Disch Pres':'S','Exh Pres':'S','FH Pres':'C'}
    scom_spec = {'None':'X','Disch Pres':'S','Exh Pres':'S','FH Pres':'S'}
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
    bin_10VAV_y1 = bo_dictionary.set_index('BO Keys')['VAV T10 Y1'].to_dict()
    bin_12VAV_y1 = bo_dictionary.set_index('BO Keys')['VAV T12 Y1'].to_dict()
    bin_18VAV_y1 = bo_dictionary.set_index('BO Keys')['VAV T18 Y1'].to_dict()
    bin_VAV_y2 = bo_dictionary.set_index('BO Keys')['VAV Y2'].to_dict()
    bin_VAV_y3 = bo_dictionary.set_index('BO Keys')['VAV Y3'].to_dict()
    bin_VAV_y4 = bo_dictionary.set_index('BO Keys')['VAV Y4'].to_dict()
    bin_10VAV_y5 = bo_dictionary.set_index('BO Keys')['VAV T10 Y5'].to_dict()
    bin_18VAV_y5 = bo_dictionary.set_index('BO Keys')['VAV T18 Y5'].to_dict()
    bin_10VAV_y6 = bo_dictionary.set_index('BO Keys')['VAV T10 Y6'].to_dict()
    bin_18VAV_y6 = bo_dictionary.set_index('BO Keys')['VAV T18 Y6'].to_dict()
    bin_VAV_y7 = bo_dictionary.set_index('BO Keys')['VAV Y7'].to_dict()
    bin_VAV_y8 = bo_dictionary.set_index('BO Keys')['VAV Y8'].to_dict()

    bin_10FPB_y1 = bo_dictionary.set_index('BO Keys')['FPB Y1'].to_dict()
    bin_18FPB_y1 = bo_dictionary.set_index('BO Keys')['FPB T18 Y1'].to_dict()
    bin_FPB_y2 = bo_dictionary.set_index('BO Keys')['FPB Y2'].to_dict()
    bin_10FPB_y3 = bo_dictionary.set_index('BO Keys')['FPB T10 Y3'].to_dict()
    bin_12FPB_y3 = bo_dictionary.set_index('BO Keys')['FPB T12 Y3'].to_dict()
    bin_18FPB_y3 = bo_dictionary.set_index('BO Keys')['FPB T18 Y3'].to_dict()
    bin_FPB_y4 = bo_dictionary.set_index('BO Keys')['FPB Y4'].to_dict()
    bin_10FPB_y5 = bo_dictionary.set_index('BO Keys')['FPB T10 Y5'].to_dict()
    bin_18FPB_y5 = bo_dictionary.set_index('BO Keys')['FPB T18 Y5'].to_dict()
    bin_10FPB_y6 = bo_dictionary.set_index('BO Keys')['FPB T10 Y6'].to_dict()
    bin_18FPB_y6 = bo_dictionary.set_index('BO Keys')['FPB T18 Y6'].to_dict()
    bin_FPB_y7 = bo_dictionary.set_index('BO Keys')['FPB Y7'].to_dict()
    bin_FPB_y8 = bo_dictionary.set_index('BO Keys')['FPB Y8'].to_dict()

    bin_WSHP_y1 = bo_dictionary.set_index('BO Keys')['WSHP Y1'].to_dict()
    bin_WSHP_y2 = bo_dictionary.set_index('BO Keys')['WSHP Y2'].to_dict()
    bin_WSHP_y3 = bo_dictionary.set_index('BO Keys')['WSHP Y3'].to_dict()
    bin_WSHP_y4 = bo_dictionary.set_index('BO Keys')['WSHP Y4'].to_dict()
    bin_WSHP_y5 = bo_dictionary.set_index('BO Keys')['WSHP Y5'].to_dict()
    bin_WSHP_y6 = bo_dictionary.set_index('BO Keys')['WSHP Y6'].to_dict()
    bin_WSHP_y7 = bo_dictionary.set_index('BO Keys')['WSHP Y7'].to_dict()
    bin_WSHP_y8 = bo_dictionary.set_index('BO Keys')['WSHP Y8'].to_dict()

    bin_FCU_y1 = bo_dictionary.set_index('BO Keys')['FCU Y1'].to_dict()
    bin_FCU_y2 = bo_dictionary.set_index('BO Keys')['FCU Y2'].to_dict()
    bin_FCU_y3 = bo_dictionary.set_index('BO Keys')['FCU Y3'].to_dict()
    bin_FCU_y4 = bo_dictionary.set_index('BO Keys')['FCU Y4'].to_dict()
    bin_FCU_y5 = bo_dictionary.set_index('BO Keys')['FCU Y5'].to_dict()
    bin_FCU_y6 = bo_dictionary.set_index('BO Keys')['FCU Y6'].to_dict()
    bin_FCU_y7 = bo_dictionary.set_index('BO Keys')['FCU Y7'].to_dict()
    bin_FCU_y8 = bo_dictionary.set_index('BO Keys')['FCU Y8'].to_dict()

    bin_LAB_y1 = bo_dictionary.set_index('BO Keys')['LAB Y1'].to_dict()
    bin_LAB_y2 = bo_dictionary.set_index('BO Keys')['LAB Y2'].to_dict()
    bin_LAB_y3 = bo_dictionary.set_index('BO Keys')['LAB Y3'].to_dict()
    bin_LAB_y4 = bo_dictionary.set_index('BO Keys')['LAB Y4'].to_dict()

    bin_FH_y1 = bo_dictionary.set_index('BO Keys')['FH Y1'].to_dict()
    bin_FH_y2 = bo_dictionary.set_index('BO Keys')['FH Y2'].to_dict()
    bin_FH_y3 = bo_dictionary.set_index('BO Keys')['FH Y3'].to_dict()
    bin_FH_y4 = bo_dictionary.set_index('BO Keys')['FH Y4'].to_dict()

    bin_CENFUNC_y1 = bo_dictionary.set_index('BO Keys')['CENFUNC Y1'].to_dict()
    bin_CENFUNC_y2 = bo_dictionary.set_index('BO Keys')['CENFUNC Y2'].to_dict()
    bin_CENFUNC_y3 = bo_dictionary.set_index('BO Keys')['CENFUNC Y3'].to_dict()
    bin_CENFUNC_y4 = bo_dictionary.set_index('BO Keys')['CENFUNC Y4'].to_dict()
    bin_CENFUNC_y5 = bo_dictionary.set_index('BO Keys')['CENFUNC Y5'].to_dict()
    bin_CENFUNC_y6 = bo_dictionary.set_index('BO Keys')['CENFUNC Y6'].to_dict()
    bin_CENFUNC_y7 = bo_dictionary.set_index('BO Keys')['CENFUNC Y7'].to_dict()
    bin_CENFUNC_y8 = bo_dictionary.set_index('BO Keys')['CENFUNC Y8'].to_dict()
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
        '14023 - Ethernet VAV w Reheat':'A',
        '14050 - MSTP FCU w Cooling':'B',
        '14064 - Ethernet DualDuct VAV':'C',
        '14070 - Ethernet WSHP w 2Stg Reheat & Radiator':'D',
        '14125 - Ethernet FPB w Reheat':'E',
        '16742 - Ethernet Fumehood Venturi':'F',
        '16850 - Ethernet Lab Dual Supply & Exhuast Venturi':'G'
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
        bin10VAVy1 = bin_10VAV_y1,
        bin12VAVy1 = bin_12VAV_y1,
        bin18VAVy1 = bin_18VAV_y1,
        binVAVy2 = bin_VAV_y2,
        binVAVy3 = bin_VAV_y3,
        binVAVy4 = bin_VAV_y4,
        bin10VAVy5 = bin_10VAV_y5,
        bin18VAVy5 = bin_18VAV_y5,
        bin10VAVy6 = bin_10VAV_y6,
        bin18VAVy6 = bin_18VAV_y6,
        binVAVy7 = bin_VAV_y7,
        binVAVy8 = bin_VAV_y8,
        bin10FPBy1 = bin_10FPB_y1,
        bin18FPBy1 = bin_18FPB_y1,
        binFPBy2 = bin_FPB_y2,
        bin10FPBy3 = bin_10FPB_y3,
        bin12FPBy3 = bin_12FPB_y3,
        bin18FPBy3 = bin_18FPB_y3,
        binFPBy4 = bin_FPB_y4,
        bin10FPBy5 = bin_10FPB_y5,
        bin18FPBy5 = bin_18FPB_y5,
        bin10FPBy6 = bin_10FPB_y6,
        bin18FPBy6 = bin_18FPB_y6,
        binFPBy7 = bin_FPB_y7,
        binFPBy8 = bin_FPB_y8,
        binWSHPy1 = bin_WSHP_y1,
        binWSHPy2 = bin_WSHP_y2,
        binWSHPy3 = bin_WSHP_y3,
        binWSHPy4 = bin_WSHP_y4,
        binWSHPy5 = bin_WSHP_y5,
        binWSHPy6 = bin_WSHP_y6,
        binWSHPy7 = bin_WSHP_y7,
        binWSHPy8 = bin_WSHP_y8,
        binFCUy1 = bin_FCU_y1,
        binFCUy2 = bin_FCU_y2,
        binFCUy3 = bin_FCU_y3,
        binFCUy4 = bin_FCU_y4,
        binFCUy5 = bin_FCU_y5,
        binFCUy6 = bin_FCU_y6,
        binFCUy7 = bin_FCU_y7,
        binFCUy8 = bin_FCU_y8,
        binLABy1 = bin_LAB_y1,
        binLABy2 = bin_LAB_y2,
        binLABy3 = bin_LAB_y3,
        binLABy4 = bin_LAB_y4,
        binFHy1 = bin_FH_y1,
        binFHy2 = bin_FH_y2,
        binFHy3 = bin_FH_y3,
        binFHy4 = bin_FH_y4,
        binCENFUNCy1 = bin_CENFUNC_y1,
        binCENFUNCy2 = bin_CENFUNC_y2,
        binCENFUNCy3 = bin_CENFUNC_y3,
        binCENFUNCy4 = bin_CENFUNC_y4,
        binCENFUNCy5 = bin_CENFUNC_y5,
        binCENFUNCy6 = bin_CENFUNC_y6,
        binCENFUNCy7 = bin_CENFUNC_y7,
        binCENFUNCy8 = bin_CENFUNC_y8,
        appfuncs=appfuncs,
        appfuncs2=appfuncs2,
        cenfuncs=cenfuncs,
        pressure=inputs_VAV_p1,
        scomsup=scom_sup,
        scomexh=scom_exh,
        scomfh=scom_fh,
        scomspec=scom_spec,
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
        ztens17CXLABy30=ztens_17CXLAB_y30,
        ztens17CXLABy40=ztens_17CXLAB_y40,
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


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/fpt',methods=['GET','POST'])
def fpt():
    fptterminalbox = {
    'Terminal Basic Hardware Check':'0',
    'Terminal Relinquish Default Check':'1',
    'Occupancy - Scheduled':'A',
    'Vacancy - Scheduled':'2',
    'Presence Detection':'3',
    'Heating':'B',
    'Cooling':'C',
    'Deadband ventilation':'4',
    'DCV':'D',
    'Rapid Ventilation':'E',
    'Air Volume Tracking':'F',
    'Green Leaf':'G',
    'Window Control':'5',
    'Temperature Alarms':'H',
    'Actuator Alarms':'I'
    }
    fpttra = {
    'TRA Basic Hardware Check':'0',
    'TRA Relinquish Default Check':'1',
    'Lighting Solo':'A',
    'Lighting + HVAC':'B',
    'Shading Solo':'C',
    'Shading + HVAC':'D'
    }
    fptairsystems = {
    'Air System Resources':'3',
    'Field Panel Preparation':'4',
    'Air System Basic Hardware Check':'0',
    'Air System Relinquish Default Check':'1',
    'Return from Power Loss Reset':'A',
    'Occupied Mode 24 Hour':'2',
    'Occupied Mode Scheduled':'B',
    'Unoccupied Mode':'C',
    'Optimum Start (Morning Warm-up)':'D',
    'Optimum Start (Morning Cool-down)':'E',
    'Optimum Stop when Heating':'F',
    'Optimum Stop when Cooling':'G',
    'Night Setback Heating':'H',
    'Night Setback Cooling':'I',
    'Night Setback Cooling':'J',
    'Discharge Static Control':'K',
    'Discharge Static Reset':'L',
    'Discharge Flow Control':'M',
    'Discharge Flow Reset':'N',
    'Discharge Temperature Control':'O',
    'Discharge Temperature Reset':'P',
    'Discharge Humidity Control':'Q',
    'Minimum Outside Air Control':'R',
    'Economizer Control':'S',
    'Demand Control Ventilation':'T',
    'Exhaust Static Control':'U',
    'Exhaust Static Reset':'V',
    'Building Static Control - Exhaust Damper':'W',
    'Building Static Control - Return Fan':'X',
    'Return Static Control - Exhaust Damper':'Y',
    'Return Static Control - Return Fan':'Z',
    'Return Flow Control - CFM Offset':'a',
    'Dehumidification Control':'b',
    'Fan Wall Lead/Lag + Weekly turnover':'c',
    'Alarm Checking':'d'
    }
    fptwatersystems = {
    'Demand Flow':'A'
    }
    rendered = render_template('ftp.html',fptterminalbox = fptterminalbox,fpttra = fpttra,fptairsystems = fptairsystems, fptwatersystems = fptwatersystems)
    # pdf = pdfkit.from_string(rendered, False)

    # response = make_response(pdf)
    # response.headers['Content-Type'] = 'application/pdf'
    # response.headers['Content-Disposition'] = 'inline; filename=fpt.pdf'
    return rendered

@app.route('/custom_fpt', methods=['POST'])
def custom_fpt():
    # Single CSS file
    # css = 'static/styles/new_form.css'
    if request.method == "POST":
        html = request.form['stuff']
        with open(app.config['UPLOAD_FOLDER'] + "custom_fpt.html", "w") as file:
            file.write(html)
    # options = {"enable-local-file-access": None}
    # config = pdfkit.configuration(wkhtmltopdf='/usr/local/bin/wkhtmltopdf')
    # pdf = pdfkit.from_string(html,'fpt.pdf',options=options,configuration=config,css=css)
    # response = make_response(pdf)
    # response.headers['Content-Type'] = 'application/pdf'
    # response.headers['Content-Disposition'] = 'inline; filename=fpt.pdf'
    try:
       # return send_file("templates/custom_fpt.html" ,mimetype='text/html',as_attachment=True)
       return redirect(url_for('fpt'))
       # return render_template('templates/custom_fpt.html')
    except Exception as e:
        return str(e)

@app.route('/custom_fpt', methods=['GET'])
def get_custom_pft():
    time.sleep(2)
    return send_file(app.config['UPLOAD_FOLDER'] + "custom_fpt.html" ,mimetype='text/html',as_attachment=True)
    # return render_template('custom_fpt.html')

"""
Step 8 - Run your application. debug=True makes it so you don't have to stop and restart your
    webserver.
"""
if __name__ == '__main__':
#    app.run(debug=True, host="192.168.1.13", port=5000)
#    app.run(debug=True, host="192.168.1.189", port="5000")
    app.run(debug=True, port="5000")
