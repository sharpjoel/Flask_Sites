"""Step 1: Import necessary modules
    - Flask: Instantiates Flask to run application
    - render_template: Renders the associated html page assigned as the first argument.
    - request:Used to retrieve POST and GET requests
    - jsonify: converts arguments or keyword arguments into a dictionary
"""
from flask import Flask, render_template, request, jsonify

# Step 2: Create an Instance of Flask. This will be your application
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
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
    mtypes = {
        '':'',
        '10PL':'A',
        '10PLX':'B',
        '12P':'C',
        '12PX':'D',
        '18':'E',
        }
    ptypes = {
        '':'',
        '10':'A',
        '18':'B',
        }
    locations = {
        '':'',
        "US":"U",
        "SI":"S",
        "CA":"C",
        }
    three_points = {
        'None':'X',
        'Supply Damper':'A',
        'Exhaust Damper':'B',
        'Hot Water Reheat Coil':'C',
        'Radiator':'D',
        'Chilled Water Coil':'E',
        'Windows':'F'
        }
    zero_ten_1030 = {
        'None':'X',
        'Supply Damper':'A',
        'Hot Water Reheat Coil':'C',
        'Radiator':'D',
        'Chilled Water Coil':'E',
        'Windows':'F',
        '0-10V General':'Z'
        }
    zero_ten_2040 = {
        'None':'X',
        'Exhaust Damper':'B',
        'Hot Water Reheat Coil':'C',
        'Radiator':'D',
        'Chilled Water Coil':'E',
        'Windows':'F',
        '0-10V General':'Z'
        }
    analog_in = {
        "None":"X",
        "Sup Press":"A",
        "Sup Flow":"B",
        "Sup Temp":"C",
        "Exh Press":"D",
        "Exh Flow":"E",
        "Exh Temp P1":"F"
        }
    pressure = {
        "None":"X",
        "Sup P1":"A",
        "Exh P2":"B",
        "Sup SCOM P1":"C",
        "Sup SCOM P3":"D",
        "Exh SCOM P2":"E",
        "Exh SCOM P4":"F",
        "FH SCOM P1":"G"
        }
    binary_in = {
        'None':'X',
        'Fan Status':'A',
        'Window Contact':'B',
        'Presence Detector':'C',
        'Condensation Sensor':'D',
        'Condensation Alarm':'E',
        'Door Contact':'F',
        'Binary Input General':'G'
        }
    binary_out = {
        'None':'X',
        'Fan':'A',
        'Binary Output General':'B',
        }
    appfuncs = {
        'None':'X',
        'Room Stpt Determination':'A',
        'Heat/Cool Determination':'B',
        'Rapid Ventilation':'C',
        'Ventilation/DCV':'D'
        }
    knx= {'None':'X','P30':'A','P40':'B','P70':'C','P34':'D','P37':'E','P74':'F'}
    pet = ""
    try:
        pet = request.form['pet'][:-1]
        print(f"You chose {pet}")
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
        analogin=analog_in,
        pressure=pressure,
        threepts=three_points,
        zten1030=zero_ten_1030,
        zten2040=zero_ten_2040,
        binaryout=binary_out,
        binaryin=binary_in,
        pet=pet,
        dxrs=dxrs,
        etypes=etypes,
        mtypes=mtypes,
        ptypes=ptypes,
        locations=locations,
        knx=knx
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
    name = request.form['name'][:-1]
    print(name)
    return jsonify({'name': name})

"""
Step 8 - Run your application. debug=True makes it so you don't have to stop and restart your
    webserver.
"""
if __name__ == '__main__':
    app.run(debug=True)




