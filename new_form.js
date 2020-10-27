// Step 17: Create the jquery header function
$(document).ready(function(){

	// $("#hide").click(function(){
	//   $("#myForm").hide();
	// });

	// $("#show").click(function(){
	//   $("#myForm").show();
	// });

	// Step 18: Use JQuery to detect anything a select tag in our html file is changed.
	$( "select" ).change(function() {

		// Step 19: Create variables to read our selected values.
		var dxr_str = ""
		var etype_str = ""
		var mtype_str = ""
		var ptype_str = ""
		var loc_str = ""
		var y1y2_str = ""
		var y3y4_str = ""
		var y5y6_str = ""
		var y7y8_str = ""
		var str = ""

		// Step 20: Read the select tags by their individual IDs, and collect
			// their values. Write their text values to their respective variable.
		$( "select#dxrSelection" ).each(function() {
			dxr_str += $( this ).val();
			if(dxr_str == 'E'){
				mtype_str = mtype_str.substring(1);
				ptype_str = ptype_str.substring(1);
				$("#second-1").show();
				$("#second-2").hide();
				$("#second-3").hide();
				$("#eth-container").show();
				console.log("Showing ethernet");
				$("#mstp-container").hide();
			};
			if(dxr_str == 'M'){
				etype_str = etype_str.substring(1);
				ptype_str = ptype_str.substring(1);
				$("#second-1").hide();
				$("#second-2").show();
				$("#second-3").hide();
				$("#eth-container").hide();
				$("#mstp-container").show();
			};
			if(dxr_str == 'P'){
				etype_str = etype_str.substring(1);
				mtype_str = mtype_str.substring(1);
				$("#second-1").hide();
				$("#second-2").hide();
				$("#second-3").show();
				$("#eth-container").hide();
				$("#mstp-container").show();
			};
			console.log(dxr_str);
		});
		$( "select#etypeSelection" ).each(function() {
			if(dxr_str == 'E'){
				etype_str += $( this ).val();
			}else{
				etype_str = etype_str.substring(1);
			};
		});
		$( "select#mtypeSelection" ).each(function() {
			if(dxr_str == 'M'){
				mtype_str += $( this ).val();
			}else{
				mtype_str = mtype_str.substring(1);
			};
		});
		$( "select#ptypeSelection" ).each(function() {
			if(dxr_str == 'P'){
				ptype_str += $( this ).val();
			}else{
				ptype_str = ptype_str.substring(1);
			};
		});
		$( "select#locSelection" ).each(function() {
			loc_str += $( this ).val();
		});
		$( "select#y1y2-3pt option:selected" ).each(function() {
			y1y2_str += $( this ).val();
			if(y1y2_str != 'X'){
				$("#y1").css('background','green');
				$("#y2").css('background','green');
			}else{
				$("#y1").css('background','');
				$("#y2").css('background','');
			};
		});
		$( "select#y3y4-3pt option:selected" ).each(function() {
			y3y4_str += $( this ).val();
			if(y3y4_str != 'X'){
				$("#y3").css('background','green');
				$("#y4").css('background','green');
			}else{
				$("#y3").css('background','');
				$("#y4").css('background','');
			};
		});
		$( "select#y5y6-3pt option:selected" ).each(function() {
			y5y6_str += $( this ).val();
			if(y5y6_str != 'X'){
				$("#y5").css('background','green');
				$("#y6").css('background','green');
			}else{
				$("#y5").css('background','');
				$("#y6").css('background','');
			};
		});
		$( "select#y7y8-3pt option:selected" ).each(function() {
			y7y8_str += $( this ).val();
			if(y7y8_str != 'X'){
				$("#y7").css('background','green');
				$("#y8").css('background','green');
			}else{
				$("#y7").css('background','');
				$("#y8").css('background','');
			};
		});

		// Step 21: Concatenate the variables into a single string.
		var DXR = dxr_str + etype_str + mtype_str + ptype_str + loc_str + "_";
		var AO3pt = y1y2_str + y3y4_str + y5y6_str + y7y8_str + "_";
		str = DXR + AO3pt;
		$('#successAlert').text("Name: " + str).show();
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
            data: { pet:y1y2_str },
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
				// $('#successAlert').text("Name: " + data.name).show();
				$('#errorAlert').hide();
			}
		});
		});
	// });
});