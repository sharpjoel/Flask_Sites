// Step 17: Create the jquery header function
$(document).ready(function(){

	// Step 18: Use JQuery to detect anything a select tag in our html file is changed.
	$( "select" ).change(function() {

		// Step 19: Create variables to read our selected values.
		var name_str = ""
		var food_str = ""
		var activity_str = ""
		var str = ""

		// Step 20: Read the select tags by their individual IDs, and collect
			// their values. Write their text values to their respective variable.
		$( "select#petSelection option:selected" ).each(function() {
			name_str += $( this ).text() + "_";
			console.log(name_str);
		});
		$( "select#foodSelection option:selected" ).each(function() {
			food_str += $( this ).text() + "_";
			console.log(food_str);
		});
		$( "select#activitySelection option:selected" ).each(function() {
			activity_str += $( this ).text() + "_";
			console.log(activity_str);
		});

		// Step 21: Concatenate the variables into a single string.
		str = name_str + food_str + activity_str

		// Step 22: Construct your AJAX requests. Without AJAX, the select tags would need
		//	method='POST' and action='/home'. However, we would need to refresh our use a submit
		// button to see the results change or to pass the results to a different url.
		// 		- AJAX will allow us to make asynchronous requests to change the XML something...
		//		- Construct the request by pointing to the url you want to submit the POST request
		//		- to. Our first request will submit an AJAX POST request to 127.0.0.1:5000/home
		//		- that will only contain the pet we have chosen.
		//		- Our second AJAX POST request will be sent to 127.0.0.1:5000/process and will
		//		- contain a JSON object with pet as the key and the concatenated selections
		//		- from our select dropdowns.
		$.ajax({
            type: 'POST',
            url: '/home',
            data: { pet:name_str },
            dataType: 'json'
        });
		$.ajax({
            type: 'POST',
            url: '/process',
            data: { name:str },
            dataType: 'json'
        })

        // Step 23: We must tell the script what to do at the conclusion of the AJAX request.
        // 		- This function will take the JSON object received from Step 7 in process.py
        //		- and update the success banner from Step 14.
        //		- **Note - JS knows how to find it by referencing the ID successAlert.
        .done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				$('#successAlert').text("Data: " + data.name).show();
				$('#errorAlert').hide();
			}
		});
		});
	// });
});