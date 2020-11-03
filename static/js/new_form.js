// Step 17: Create the jquery header function
$(document).ready(function(){

	// Template selection: Set Starting Values based on selection.
	$( "select#tempSelection" ).change(function() {

		var template = ""

		$( "select#tempSelection" ).each(function() {
			template += $( this ).val();

			// Refer back to Flask file for dictionary

			if(template == 'A'){ 
				// Reset values to default before setting template.
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("E");
				$( "#etypeSelection" ).val("C");
				$( "#locSelection" ).val("U");
				$( "#y1y2-3pt" ).val("A");
				$( "#y5y6-3pt" ).val("C");
				$( "#p1pres" ).val("A");
			}
			else if(template == 'B'){
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("M");
				$( "#mtypeSelection" ).val("C");
				$( "#locSelection" ).val("U");
				$( "#y1y2-3pt" ).val("X");
				$( "#y3y4-3pt" ).val("C");
				$( "#y1b0" ).val("A");
			}
			else{
				$( ".select-reset" ).prop('selectedIndex',0);
			}
		});
	});

	// Step 18: Use JQuery to detect anything a select tag in our html file is changed.
	$( "select" ).change(function() {

		// Step 19: Create variables to read our selected values.
		var dxr_str = ""
		var etype_str = ""
		var mtype_str = ""
		var ptype_str = ""
		var loc_str = ""
		var y1_str = ""
		var y2_str = ""
		var y3_str = ""
		var y4_str = ""
		var y5_str = ""
		var y6_str = ""
		var y7_str = ""
		var y8_str = ""
		var y1y2_str = ""
		var y3y4_str = ""
		var y5y6_str = ""
		var y7y8_str = ""
		var y10_str = ""
		var y20_str = "" 
		var y30_str = ""
		var y40_str = ""
		var p1_str = ""
		var scom_str = ""
		var scom1_str = ""
		var scom2_str = ""
		var scom3_str = ""
		var scom4_str = ""
		var knx1_str = ""
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
			}
			if(dxr_str == 'E' && (etype_str == 'F' || etype_str == 'G')){
				$("#y5y6-3pt").prop('selectedIndex',0);
				$("#y7y8-3pt").prop('selectedIndex',0);
				$("#y5bo").prop('selectedIndex',0);
				$("#y6bo").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$("select#p1pres").prop('selectedIndex',0);
			};
			if(dxr_str == 'E' && (etype_str != 'E' && etype_str != 'F' && etype_str != 'G')){
				$("#y7y8-3pt").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$("select#y30").prop('selectedIndex',0);
				$("select#y40").prop('selectedIndex',0);
				$("select#scom1pres").prop('selectedIndex',0);
				$("select#scom2pres").prop('selectedIndex',0);
				$("select#scom3pres").prop('selectedIndex',0);
				$("select#scom4pres").prop('selectedIndex',0);
			};
		});
		$( "select#mtypeSelection" ).each(function() {
			if(dxr_str == 'M'){
				mtype_str += $( this ).val();
				console.log("Choosing MSTP");
			}else{
				mtype_str = mtype_str.substring(1);
			};
			if(dxr_str == 'M' && mtype_str != 'E'){
				$("select#y7y8-3pt").prop('selectedIndex',0);
				$("select#y7bo").prop('selectedIndex',0);
				$("select#y8bo").prop('selectedIndex',0);
				$("select#y30").prop('selectedIndex',0);
				$("select#y40").prop('selectedIndex',0);
				$("select#scom1pres").prop('selectedIndex',0);
				$("select#scom2pres").prop('selectedIndex',0);
				$("select#scom3pres").prop('selectedIndex',0);
				$("select#scom4pres").prop('selectedIndex',0);
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
				$("#y1bo").prop('selectedIndex',0);
				$("#y2bo").prop('selectedIndex',0);
				$("#y1bo").hide();
				$("#y2bo").hide();
				$("#y1").css('background','green');
				$("#y2").css('background','green');
			}else{
				if(y1y2_str == 'X'){
					$("#y1bo").show();
					$("#y2bo").show();
				};
				$("#y1").css('background','');
				$("#y2").css('background','');
			};
		});
		$( "select#y3y4-3pt option:selected" ).each(function() {
			y3y4_str += $( this ).val();
			if(y3y4_str != 'X'){
				$("#y3bo").prop('selectedIndex',0);
				$("#y4bo").prop('selectedIndex',0);
				$("#y3bo").hide();
				$("#y4bo").hide();
				$("#y3").css('background','green');
				$("#y4").css('background','green');
			}else{
				if(y3y4_str == 'X'){
					$("#y3bo").show();
					$("#y4bo").show();
				};
				$("#y3").css('background','');
				$("#y4").css('background','');
			};
		});
		$( "select#y5y6-3pt option:selected" ).each(function() {
			y5y6_str += $( this ).val();
			if(y5y6_str != 'X'){
				$("#y5bo").prop('selectedIndex',0);
				$("#y6bo").prop('selectedIndex',0);
				$("#y5bo").hide();
				$("#y6bo").hide();
				$("#y5").css('background','green');
				$("#y6").css('background','green');
			}else{
				if(y5y6_str == 'X'){
					$("#y5bo").show();
					$("#y6bo").show();
				};
				$("#y5").css('background','');
				$("#y6").css('background','');
			};
		});
		// $( "select#y7y8-3pt option:selected" ).each(function() {
		// 	y7y8_str += $( this ).val();
		// 	if(y7y8_str != 'X'){
		// 		$("#y7bo").prop('selectedIndex',0);
		// 		$("#y8bo").prop('selectedIndex',0);
		// 		$("#y7bo").hide();
		// 		$("#y8bo").hide();
		// 		$("#y7").css('background','green');
		// 		$("#y8").css('background','green');
		// 	}else{
		// 		if(y7y8_str == 'X'){
		// 			$("#y7bo").show();
		// 			$("#y8bo").show();
		// 		};
		// 		$("#y7").css('background','');
		// 		$("#y8").css('background','');
		// 	};
		// });
		$( "select#y7y8-3pt option:selected" ).each(function() {
			y7y8_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$("#y7y8-3pt").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$("#y7y8-3pt").hide()
				$("#y7bo").hide();
				$("#y8bo").hide();
				$("#y7").css('background','');
				$("#y8").css('background','');
			}
			else{
				if(y7y8_str != 'X'){
					console.log("Checking y7y8")
					$("#y7bo").prop('selectedIndex',0);
					$("#y8bo").prop('selectedIndex',0);
					$("#y7bo").hide();
					$("#y8bo").hide();
					$("#y7").css('background','green');
					$("#y8").css('background','green');
				}else{
					if(y7y8_str == 'X'){
						$("#y7bo").show();
						$("#y8bo").show();
					};
					$("#y7").css('background','');
					$("#y8").css('background','');
				};
			};
		});
		$( "select.selection-knx option:selected" ).each(function() {
			knx1_str += $( this ).val();
			// if(y7y8_str != 'X'){
			// 	$("#y7").css('background','green');
			// 	$("#y8").css('background','green');
			// }else{
			// 	$("#y7").css('background','');
			// 	$("#y8").css('background','');
			// };
		});
		$( "select#y10 option:selected" ).each(function() {
			y10_str += $( this ).val();
			if(y10_str != 'X'){
				$("#y10").css('background','green');
			}else{
				$("#y10").css('background','');
			};
		});
		$( "select#y20 option:selected" ).each(function() {
			y20_str += $( this ).val();
			if(y20_str != 'X'){
				$("#y20").css('background','green');
			}else{
				$("#y20").css('background','');
			};
		});
		$( "select#y30 option:selected" ).each(function() {
			y30_str += $( this ).val();
			if(y30_str != 'X'){
				$("#y30").css('background','green');
			}else{
				$("#y30").css('background','');
			};
		});
		$( "select#y40 option:selected" ).each(function() {
			y40_str += $( this ).val();
			if(y40_str != 'X'){
				$("#y40").css('background','green');
			}else{
				$("#y40").css('background','');
			};
		});
		$( "select#y1bo option:selected" ).each(function() {
			y1_str += $( this ).val();
			if(y1_str != 'X'){
				$("#y1y2-3pt").prop('selectedIndex',0);
				$("#y1y2-3pt").hide();
				$("#y1").css('background','green');
			}
			else{
				if(y1_str == 'X' && y2_str == 'X'){
					$("#y1y2-3pt").show();
				};
				if(y1y2_str == 'X'){
					$("#y1").css('background','');
				}
				else{
					$("#y1").css('background','green');
				};
			};
		});
		$( "select#y2bo option:selected" ).each(function() {
			y2_str += $( this ).val();
			if(y2_str != 'X'){
				$("#y1y2-3pt").prop('selectedIndex',0);
				$("#y1y2-3pt").hide();
				$("#y2").css('background','green');
			}
			else{
				if(y1_str == 'X' && y2_str == 'X'){
					$("#y1y2-3pt").show();
				};
				if(y1y2_str == 'X'){
					$("#y2").css('background','');
				}
				else{
					$("#y2").css('background','green');
				}
			};
		});
		$( "select#y3bo option:selected" ).each(function() {
			y3_str += $( this ).val();
			if(y3_str != 'X'){
				$("#y3y4-3pt").prop('selectedIndex',0);
				$("#y3y4-3pt").hide();
				$("#y3").css('background','green');
			}
			else{
				if(y3_str == 'X' && y4_str == 'X'){
					$("#y3y4-3pt").show();
				};
				if(y3y4_str == 'X'){
					$("#y3").css('background','');
				}
				else{
					$("#y3").css('background','green');
				}
			};
		});
		$( "select#y4bo option:selected" ).each(function() {
			y4_str += $( this ).val();
			if(y4_str != 'X'){
				$("#y3y4-3pt").prop('selectedIndex',0);
				$("#y3y4-3pt").hide();
				$("#y4").css('background','green');
			}
			else{
				if(y3_str == 'X' && y4_str == 'X'){
					$("#y3y4-3pt").show();
				};
				if(y3y4_str == 'X'){
					$("#y4").css('background','');
				}
				else{
					$("#y4").css('background','green');
				}
			};
		});
		$( "select#y5bo option:selected" ).each(function() {
			y5_str += $( this ).val();
			if(y5_str != 'X'){
				$("#y5y6-3pt").prop('selectedIndex',0);
				$("#y5y6-3pt").hide();
				$("#y5").css('background','green');
			}
			else{
				if(y5_str == 'X' && y6_str == 'X'){
					$("#y5y6-3pt").show();
				};
				if(y5y6_str == 'X'){
					$("#y5").css('background','');
				}
				else{
					$("#y5").css('background','green');
				}
			};
		});
		$( "select#y6bo option:selected" ).each(function() {
			y6_str += $( this ).val();
			if(y6_str != 'X'){
				$("#y5y6-3pt").prop('selectedIndex',0);
				$("#y5y6-3pt").hide()
				$("#y6").css('background','green');
			}
			else{
				if(y5_str == 'X' && y6_str == 'X'){
					$("#y5y6-3pt").show();
				};
				if(y5y6_str == 'X'){
					$("#y6").css('background','');
				}
				else{
					$("#y6").css('background','green');
				}
			};
		});
		$( "select#y7bo option:selected" ).each(function() {
			y7_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$("#y7y8-3pt").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y7y8-3pt").hide()
				$("#y7bo").hide();
				$("#y7").css('background','');
			}
			else{
				if(y7_str != 'X'){
					$("#y7y8-3pt").prop('selectedIndex',0);
					$("#y7y8-3pt").hide();
					console.log("Checking Y7");
					$("#y7").css('background','green');
				}
				else{
					if(y7_str == 'X' && y8_str == 'X'){
						$("#y7y8-3pt").show();
					};
					if(y7y8_str == 'X'){
						$("#y7").css('background','');
					}
					else{
						$("#y7").css('background','green');
					}
				};
			};
		});
		$( "select#y8bo option:selected" ).each(function() {
			y8_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$("#y7y8-3pt").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$("#y7y8-3pt").hide()
				$("#y8bo").hide();
				$("#y8").css('background','');
			}
			else{
				if(y8_str != 'X'){
					$("#y7y8-3pt").prop('selectedIndex',0);
					$("#y7y8-3pt").hide()
					$("#y8").css('background','green');
				}
				else{
					if(y7_str == 'X' && y8_str == 'X'){
						$("#y7y8-3pt").show();
					};
					if(y7y8_str == 'X'){
						$("#y8").css('background','');
					}
					else{
						$("#y8").css('background','green');
					}
				};
			};
		});
		$( "select#p1pres option:selected" ).each(function() {
			p1_str += $( this ).val();
			if(p1_str != 'X'){
				$(".p1-single").css('background','yellow');
				$(".inner").css('background','yellow');
			}else{
				$(".p1-single").css('background','');
				$(".inner").css('background','');
			};
		});
		$( "select#scom1pres option:selected" ).each(function() {
			scom1_str += $( this ).val();
		});
		$( "select#scom2pres option:selected" ).each(function() {
			scom2_str += $( this ).val();
		});
		$( "select#scom3pres option:selected" ).each(function() {
			scom3_str += $( this ).val();
		});
		$( "select#scom4pres option:selected" ).each(function() {
			scom4_str += $( this ).val();
		});

		// Bottom Terminal Selection
		var type_str = etype_str + mtype_str + ptype_str
		console.log("type string is: " + type_str)
		if(type_str == 'E'){
				$("#P1-container").hide();
				$("#scom-container").hide();
				$("#blank-container").show();
				$('#B1D1').css('visibility','visible');
				$('#B2D2').css('visibility','visible');
				$('#b1d1text').text('D1');
				$('#b2d2text').text('D2');
				$("select#y5y6-3pt").show();
				$("select#y5bo").show();
				$("select#y6bo").show();
				$('#y5').css('visibility','visible');
				$('#y6').css('visibility','visible');
				$('#y7').css('visibility','visible');
				$('#y8').css('visibility','visible');
				$(".y30y40-container").css('visibility','visible');
				$(".x3x4-container").css('visibility','visible');
				$("select#y30").show();
				$("select#y40").show();
				$("select#p1pres").hide();
				$("select#scom1pres").hide();
				$("select#scom2pres").hide();
				$("select#scom3pres").hide();
				$("select#scom4pres").hide();
				if(y7_str == 'X' && y8_str == 'X'){
					$("select#y7y8-3pt").show();
				}
				else{
					$("select#y7y8-3pt").hide();
				}
			}
			else if(type_str == 'F'){
				$("#P1-container").hide();
				$("#scom-container").show();
				$("#blank-container").hide();
				$('#B1D1').css('visibility','visible');
				$('#b1d1text').text('B1');
				$('#b2d2text').text('B2');
				$('#y5').css('visibility','hidden');
				$('#y6').css('visibility','hidden');
				$('#y7').css('visibility','hidden');
				$('#y8').css('visibility','hidden');
				$(".y30y40-container").css('visibility','visible');
				$(".x3x4-container").css('visibility','visible');
				$("select#y5y6-3pt").prop('selectedIndex',0);
				$("select#y5y6-3pt").hide();
				$("select#y5bo").prop('selectedIndex',0);
				$("select#y5bo").hide();
				$("select#y6bo").prop('selectedIndex',0);
				$("select#y6bo").hide();
				$("select#y7y8-3pt").prop('selectedIndex',0);
				$("select#y7y8-3pt").hide();
				$("select#y7bo").prop('selectedIndex',0);
				$("select#y7bo").hide();
				$("select#y8bo").prop('selectedIndex',0);
				$("select#y8bo").hide();
				$("select#y30").show();
				$("select#y40").show();
				$("select#p1pres").hide();
				$("select#scom1pres").show();
				$("select#scom2pres").show();
				$("select#scom3pres").show();
				$("select#scom4pres").show();
			}
			else if(type_str == 'G'){
				$("#P1-container").hide();
				$("#scom-container").show();
				$("#blank-container").hide();
				$('#B1D1').css('visibility','visible');
				$('#b1d1text').text('B1');
				$('#b2d2text').text('B2');
				$('#y5').css('visibility','hidden');
				$('#y6').css('visibility','hidden');
				$('#y7').css('visibility','hidden');
				$('#y8').css('visibility','hidden');
				$(".y30y40-container").css('visibility','visible');
				$(".x3x4-container").css('visibility','visible');
				$("select#y5y6-3pt").prop('selectedIndex',0);
				$("select#y5y6-3pt").hide();
				$("select#y5bo").prop('selectedIndex',0);
				$("select#y5bo").hide();
				$("select#y6bo").prop('selectedIndex',0);
				$("select#y6bo").hide();
				$("select#y7y8-3pt").prop('selectedIndex',0);
				$("select#y7y8-3pt").hide();
				$("select#y7bo").prop('selectedIndex',0);
				$("select#y7bo").hide();
				$("select#y8bo").prop('selectedIndex',0);
				$("select#y8bo").hide();
				$("select#y30").show();
				$("select#y40").show();
				$("select#p1pres").hide();
				$("select#scom1pres").show();
				$("select#scom2pres").show();
				$("select#scom3pres").show();
				$("select#scom4pres").show();
			}
			else{
				$("#P1-container").show();
				$("#scom-container").hide();
				$("#blank-container").hide();
				$('#B1D1').css('visibility','hidden');
				$('#b2d2text').text('D1');
				$("select#y5y6-3pt").show();
				$("select#y5bo").show();
				$("select#y6bo").show();
				$('#y5').css('visibility','visible');
				$('#y6').css('visibility','visible');
				$('#y7').css('visibility','hidden');
				$('#y8').css('visibility','hidden');
				$(".y30y40-container").css('visibility','hidden');
				$(".x3x4-container").css('visibility','hidden');
				$("select#y7y8-3pt").prop('selectedIndex',0);
				$("select#y7y8-3pt").hide();
				$("select#y7bo").prop('selectedIndex',0);
				$("select#y7bo").hide();
				$("select#y8bo").prop('selectedIndex',0);
				$("select#y8bo").hide();
				$("select#y30").prop('selectedIndex',0);
				$("select#y30").hide();
				$("select#y40").prop('selectedIndex',0);
				$("select#y40").hide();
				$("select#p1pres").show();
				$("select#scom1pres").hide();
				$("select#scom2pres").hide();
				$("select#scom3pres").hide();
				$("select#scom4pres").hide();
		};

		// Step 21: Concatenate the variables into a single string.
		var DXR = dxr_str + type_str + loc_str + "_";
		var AO3pt = y1y2_str + y3y4_str + y5y6_str + y7y8_str + "_";
		var AOten = y10_str + y20_str + y30_str + y40_str + "_";
		var BO = y1_str + y2_str + y3_str + y4_str + y5_str + y6_str + y7_str + y8_str + "_";
		var SCOM = p1_str + scom1_str + scom2_str + scom3_str + scom4_str + "_";
		var KNX = knx1_str + "_";
		str = DXR + AO3pt + AOten + BO + SCOM + KNX;
		$('#successAlert').text(str).show();
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