"""Step 1: Import necessary modules
    - Flask: Instantiates Flask to run application
    - render_template: Renders the associated html page assigned as the first argument.
    - request:Used to retrieve POST and GET requests
    - jsonify: converts arguments or keyword arguments into a dictionary
"""
from flask import Flask, render_template, request, jsonify
from services.services import Services
# Step 2: Create an Instance of Flask. This will be your application
app = Flask(__name__)
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
    three_points = {'None':'X','Hot Water Reheat Coil':'H','Radiator':'R','Chilled Water Coil':'C'}
    zero_ten = {'None':'X','Hot Water Reheat Coil':'H','Radiator':'R','Chilled Water Coil':'C'}
    binary_out = {'None':'X','Fan':'F','BO1':'B1','BO2':'B2'}
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
        threepts=three_points,
        zten=zero_ten,
        binaryout=binary_out,
        pet=pet,
        dxrs=dxrs,
        etypes=etypes,
        mtypes=mtypes,
        ptypes=ptypes,
        locations=locations
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
        results = services.setDXR(**request.json)
    except Exception as e:
        return {"error": str(e)}
    return results
    #name = request.form['name'][:-1]
    #print(name)
    #return jsonify({'name': name})


@app.route('/custom_name/<string:custom_name>', methods=['GET'])
def get_dxr_custom_name(custom_name=None):
    if custom_name is None:
        return {"error": "Must supply custom_name"}
    try:
        results = services.getDXRCN(custom_name=custom_name)
    except Exception as e:
        return {"error": str(e)}
    return results

"""
Step 8 - Run your application. debug=True makes it so you don't have to stop and restart your
    webserver.
"""
if __name__ == '__main__':
    app.run(debug=True, host="192.168.1.13", port=5000)




