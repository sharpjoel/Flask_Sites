// Step 17: Create the jquery header function
$(document).ready(function(){

	window.addEventListener("load", function() {
    var svgObject = document.getElementById('dxrsvg').contentDocument;
    var knxsvgObject = document.getElementById('knxsvg').contentDocument;
    var dxr = svgObject.getElementById('dxr');
    // dxr types
    var type18 = svgObject.getElementsByClassName('type-18');
    var type17 = svgObject.getElementsByClassName('type-17');
    var type12 = svgObject.getElementsByClassName('type-12');
    // top rail variables
    var knx = svgObject.getElementsByClassName('knx');
    var ethernet = svgObject.getElementsByClassName('eth-container');
    var mstp = svgObject.getElementsByClassName('mstp-container');
    var b1d1 = svgObject.getElementById('terminal-b1d1-term');
    var b2d2 = svgObject.getElementById('terminal-b2d2-term');
    var bdcommon = svgObject.getElementById('terminal-bd-common-term');
    var x1 = svgObject.getElementById('terminal-x1-term');
    var x1power = svgObject.getElementById('terminal-x1-power-term');
    var x1common = svgObject.getElementById('terminal-x1-common-term');
    var x2 = svgObject.getElementById('terminal-x2-term');
    var x3 = svgObject.getElementById('terminal-x3-term');
    var x3power = svgObject.getElementById('terminal-x3-power-term');
    var x3common = svgObject.getElementById('terminal-x3-common-term');
    var x4 = svgObject.getElementById('terminal-x4-term');
	// bottom rail variables
	var pressure = svgObject.getElementsByClassName('pressure');
    var pressuretext = svgObject.getElementById('text-p1p2');
    var d1 = svgObject.getElementById('terminal-d1');
    var d1common = svgObject.getElementById('terminal-d1-common-term');
    var d2 = svgObject.getElementById('terminal-d2-term');
    var d2common = svgObject.getElementById('terminal-d2-common-term');
    var d3 = svgObject.getElementById('terminal-d3-term');
    var scom = svgObject.getElementsByClassName('scom');
    var y1 = svgObject.getElementById('terminal-y1-term');
    var y2 = svgObject.getElementById('terminal-y2-term');
    var y1y2common = svgObject.getElementById('terminal-y1y2-common-term');
    var y3 = svgObject.getElementById('terminal-y3-term');
    var y4 = svgObject.getElementById('terminal-y4-term');
    var y3y4common = svgObject.getElementById('terminal-y3y4-common-term');
    var y5 = svgObject.getElementById('terminal-y5-term');
    var y6 = svgObject.getElementById('terminal-y6-term');
    var y5y6common = svgObject.getElementById('terminal-y5y6-common-term');
    var y7 = svgObject.getElementById('terminal-y7-term');
    var y8 = svgObject.getElementById('terminal-y8-term');
    var y7y8common = svgObject.getElementById('terminal-y7y8-common-term');
    var y10 = svgObject.getElementById('terminal-y10-term');
    var y10power = svgObject.getElementById('terminal-y10-power-term');
    var y10common = svgObject.getElementById('terminal-y10-common-term');
    var y20 = svgObject.getElementById('terminal-y20-term');
    var y30 = svgObject.getElementById('terminal-y30-term');
    var y30power = svgObject.getElementById('terminal-y30-power-term');
    var y30common = svgObject.getElementById('terminal-y30-common-term');
    var y40 = svgObject.getElementById('terminal-y40-term');
    // m10 variables
    var m10pl = svgObject.getElementsByClassName('m10pl');
    var m10press = svgObject.getElementsByClassName('m10-pressure');
    var dxrvoltageout = svgObject.getElementsByClassName('dxr-voltage-out');
    var dxrtopinputs = svgObject.getElementsByClassName('dxr-toprow-inputs');
    var usb = svgObject.getElementsByClassName('usb');
    var dxrrunsvc = svgObject.getElementsByClassName('dxr-run-svc');
    var y1y2text = svgObject.getElementById('text-y1y2');
    var y1y2terminals = svgObject.getElementsByClassName('y1y2');
    var m10y10 = svgObject.getElementById('terminal-m10-y10-term');
    var m10y10common = svgObject.getElementById('terminal-m10-y10-common-term');
    var m10d1 = svgObject.getElementById('terminal-m10-d1-term');
    var m10d1common = svgObject.getElementById('terminal-m10-d1-common-term');
    var m10x1 = svgObject.getElementById('terminal-m10-x1-term');
    var m10x2 = svgObject.getElementById('terminal-m10-x2-term');
    var m10x1common = svgObject.getElementById('terminal-m10-x1-common-term');
    // knx-slots
    var knx1_terminal = knxsvgObject.getElementById('knx-address-1');
    var knx2_terminal = knxsvgObject.getElementById('knx-address-2');
    var knx3_terminal = knxsvgObject.getElementById('knx-address-3');
    var knx4_terminal = knxsvgObject.getElementById('knx-address-4');
    var knx5_terminal = knxsvgObject.getElementById('knx-address-5');
    var knx6_terminal = knxsvgObject.getElementById('knx-address-6');
    var knx7_terminal = knxsvgObject.getElementById('knx-address-7');
    var knx8_terminal = knxsvgObject.getElementById('knx-address-8');
    var knx9_terminal = knxsvgObject.getElementById('knx-address-9');
    var knx10_terminal = knxsvgObject.getElementById('knx-address-10');
    var knx11_terminal = knxsvgObject.getElementById('knx-address-11');
    var knx12_terminal = knxsvgObject.getElementById('knx-address-12');
    var knx13_terminal = knxsvgObject.getElementById('knx-address-13');
    var knx14_terminal = knxsvgObject.getElementById('knx-address-14');
    var knx15_terminal = knxsvgObject.getElementById('knx-address-15');
    var knx16_terminal = knxsvgObject.getElementById('knx-address-16');
    var knx17_terminal = knxsvgObject.getElementById('knx-address-17');
    var knx18_terminal = knxsvgObject.getElementById('knx-address-18');
    var knx19_terminal = knxsvgObject.getElementById('knx-address-19');
    var knx20_terminal = knxsvgObject.getElementById('knx-address-20');
    var knxaddresses = knxsvgObject.getElementsByClassName('knx-addresses');
    var knx_terminals = [
    knx1_terminal,knx2_terminal,knx3_terminal,knx4_terminal,knx5_terminal,
    knx6_terminal,knx7_terminal,knx8_terminal,knx9_terminal,knx10_terminal,
    knx11_terminal,knx12_terminal,knx13_terminal,knx14_terminal,knx15_terminal,
    knx16_terminal,knx17_terminal,knx18_terminal,knx19_terminal,knx20_terminal,
    ]

	// Template selection: Set Starting Values based on selection.
	// Templates being handled in templates.js

	// Step 18: Use JQuery to detect anything a select tag in our html file is changed.
	$( "select" ).change(function() {

		// Step 19: Create variables to read our selected values.
		var dxr_str = ""
		var etype_str = ""
		var mtype_str = ""
		var ptype_str = ""
		var loc_str = ""
		var func_str = ""
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
		var d1bi_str = ""
		var d2bi_str = ""
		var d3bi_str = ""
		var x1_str = ""
		var x2_str = ""
		var x3_str = ""
		var x4_str = ""
		var b1d1_str = ""
		var b2d2_str = ""
		var p1_str = ""
		var scom_str = ""
		var scom1_str = ""
		var scom2_str = ""
		var scom3_str = ""
		var scom4_str = ""
		var knx1_str = ""
		var knx2_str = ""
		var knx3_str = ""
		var knx4_str = ""
		var knx5_str = ""
		var knx6_str = ""
		var knx7_str = ""
		var knx8_str = ""
		var knx9_str = ""
		var knx10_str = ""
		var knx11_str = ""
		var knx12_str = ""
		var knx13_str = ""
		var knx14_str = ""
		var knx15_str = ""
		var knx16_str = ""
		var knx17_str = ""
		var knx18_str = ""
		var knx19_str = ""
		var knx20_str = ""
		var knx_arr = [];
		var str = ""
		var knx_last;
		var knx_terminal_last;
		var knx_last_value = "";

		$("select#funcSelection").each(function(){
			func_str += $(this).val();
			if(func_str == "1"){

				var triac_show = [$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),$("#vav-y10"),$("#vav-y20"),$("#vav-y30"),$("#vav-y40")]
				var triac_hide = [
				$("#lab-y10"),$("#lab-y20"),$("#lab-y30"),$("#lab-y40"),
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});

			}
			else if(func_str == "2"){

				var triac_show = [$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt")]
				var triac_hide = [
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),,$("#vav-y7y8-3pt"),
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});

			}
			else if(func_str == "3"){
				
				var triac_show = [$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt")]
				var triac_hide = [
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});

			}
			else if(func_str == "4"){
				
				var triac_show = [$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt")]
				var triac_hide = [
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});

			}
			else if(func_str == "5"){
				

				var triac_show = [$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),$("#lab-y10"),$("#lab-y20"),$("#lab-y30"),$("#lab-y40")]
				var triac_hide = [
				$("#vav-y10"),$("#vav-y20"),$("#vav-y30"),$("#vav-y40"),
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});

			}
			else if(func_str == "6"){
				
				var triac_show = [$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt")]
				var triac_hide = [
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});

			}
			else if(func_str == "7"){
				
				var triac_show = [$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")]
				var triac_hide = [
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
			}
			else{

				var triac_show = []
				var triac_hide = [
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt"),
				$("#fcu-y1y2-3pt"),$("#fcu-y3y4-3pt"),$("#fcu-y5y6-3pt"),$("#fcu-y7y8-3pt"),
				$("#fpb-y1y2-3pt"),$("#fpb-y3y4-3pt"),$("#fpb-y5y6-3pt"),$("#fpb-y7y8-3pt"),
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt"),
				$("#hood-y1y2-3pt"),$("#hood-y3y4-3pt"),$("#hood-y5y6-3pt"),$("#hood-y7y8-3pt"),
				$("#cenfunc-y1y2-3pt"),$("#cenfunc-y3y4-3pt"),$("#cenfunc-y5y6-3pt"),$("#cenfunc-y7y8-3pt")
				]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
			}
		});

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
				$(ethernet).show();
				console.log("Showing ethernet");
				$(mstp).hide();
			};
			if(dxr_str == 'M'){
				etype_str = etype_str.substring(1);
				ptype_str = ptype_str.substring(1);
				$("#second-1").hide();
				$("#second-2").show();
				$("#second-3").hide();
				$(ethernet).hide();
				$(mstp).show();
			};
			if(dxr_str == 'P'){
				etype_str = etype_str.substring(1);
				mtype_str = mtype_str.substring(1);
				$("#second-1").hide();
				$("#second-2").hide();
				$("#second-3").show();
				$(ethernet).hide();
				$(mstp).show();
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
				$("#funcSelection option[value='1']").hide();
				$("#funcSelection option[value='2']").hide();
				$("#funcSelection option[value='3']").hide();
				$("#funcSelection option[value='4']").hide();
				$("#funcSelection option[value='5']").show();
				$("#funcSelection option[value='6']").show();
				$("#funcSelection option[value='7']").hide();
				$(".y5y6-3pt").prop('selectedIndex',0);
				$(".y7y8-3pt").prop('selectedIndex',0);
				$("#y5bo").prop('selectedIndex',0);
				$("#y6bo").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$("select#p1pres").prop('selectedIndex',0);
			}
			else{
				$("#funcSelection option[value='1']").show();
				$("#funcSelection option[value='2']").show();
				$("#funcSelection option[value='3']").show();
				$("#funcSelection option[value='4']").show();
				$("#funcSelection option[value='5']").hide();
				$("#funcSelection option[value='6']").hide();
				$("#funcSelection option[value='7']").show();
				$("select#scom1pres").prop('selectedIndex',0);
				$("select#scom2pres").prop('selectedIndex',0);
				$("select#scom3pres").prop('selectedIndex',0);
				$("select#scom4pres").prop('selectedIndex',0);
				$("select#d1bi").prop('selectedIndex',0);
				$("select#d2bi").prop('selectedIndex',0);
				$("select#d3bi").prop('selectedIndex',0);
			};
			if(dxr_str == 'E' && (etype_str != 'E' && etype_str != 'F' && etype_str != 'G')){
				console.log("Checking y8 @ 392")
				$("#funcSelection option[value='1']").show();
				$("#funcSelection option[value='2']").show();
				$("#funcSelection option[value='3']").hide();
				$("#funcSelection option[value='4']").hide();
				$("#funcSelection option[value='5']").hide();
				$("#funcSelection option[value='6']").hide();
				$("#funcSelection option[value='7']").hide();
				$(".y7y8-3pt").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$("select#y30").prop('selectedIndex',0);
				$("select#y40").prop('selectedIndex',0);
				$("select#scom1pres").prop('selectedIndex',0);
				$("select#scom2pres").prop('selectedIndex',0);
				$("select#scom3pres").prop('selectedIndex',0);
				$("select#scom4pres").prop('selectedIndex',0);
				$("select#d1bi").prop('selectedIndex',0);
				$("select#d2bi").prop('selectedIndex',0);
				$("select#d3bi").prop('selectedIndex',0);
				$("select#b2d2bi").prop('selectedIndex',0);
				$("select#x3ai").prop('selectedIndex',0);
				$("select#x4ai").prop('selectedIndex',0);
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
				console.log("Checking y8 @ 424")
				$("select.y7y8-3pt").prop('selectedIndex',0);
				$("select#y7bo").prop('selectedIndex',0);
				$("select#y8bo").prop('selectedIndex',0);
				$("select#y30").prop('selectedIndex',0);
				$("select#y40").prop('selectedIndex',0);
				$("select#scom1pres").prop('selectedIndex',0);
				$("select#scom2pres").prop('selectedIndex',0);
				$("select#scom3pres").prop('selectedIndex',0);
				$("select#scom4pres").prop('selectedIndex',0);
				$("select#d1bi").prop('selectedIndex',0);
				$("select#d2bi").prop('selectedIndex',0);
				$("select#d3bi").prop('selectedIndex',0);
				$("select#b2d2bi").prop('selectedIndex',0);
				$("select#x3ai").prop('selectedIndex',0);
				$("select#x4ai").prop('selectedIndex',0);
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
		$( "select.y1y2-3pt option:selected" ).each(function() {
			y1y2_str += $( this ).val();
			y1y2_str = y1y2_str.replace("X","");
			if(y1y2_str.length == 0){
				y1y2_str += 'X';
			}
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
		$( "select.y3y4-3pt option:selected" ).each(function() {
			y3y4_str += $( this ).val();
			y3y4_str = y3y4_str.replace("X","");
			if(y3y4_str.length == 0){
				y3y4_str += 'X';
			}
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
		$( "select.y5y6-3pt option:selected" ).each(function() {
			y5y6_str += $( this ).val();
			y5y6_str = y5y6_str.replace("X","");
			if(y5y6_str.length == 0){
				y5y6_str += 'X';
			}
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
		$( "select.y7y8-3pt option:selected" ).each(function() {
			y7y8_str += $( this ).val();
			y7y8_str = y7y8_str.replace("X","");
			if(y7y8_str.length == 0){
				y7y8_str += 'X';
			}
			if(type_str == 'F' || type_str == 'G'){
				$(".y7y8-3pt").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$(".y7y8-3pt").hide()
				$("#y7bo").hide();
				$("#y8bo").hide();
				$("#y7").css('background','');
				$("#y8").css('background','');
			}
			else{
				if(y7y8_str != 'X'){
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

		// **** KNX SELECTION ***

		$( "select#knx-1 option:selected" ).each(function() {
			knx1_str += $( this ).val();
			if(knx1_str == 'X'){
				$(knx1_terminal).css({'fill':'yellow'});
			}else if(knx1_str == 'S'){
				$(knx1_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx1_str;
				knx_last = knx1_terminal["id"];
				knx_terminal_last = knx1_terminal;
			}
			else{
				if($(knx1_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx1_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx1_terminal).css({'fill':'green'});
				}
				knx_last_value = knx1_str;
				knx_last = knx1_terminal["id"];
				knx_terminal_last = knx1_terminal;
			}
			knx_arr.push(knx1_str);
		});
		$( "select#knx-2 option:selected" ).each(function() {
			knx2_str += $( this ).val();
			if(knx2_str == 'X'){
				$(knx2_terminal).css({'fill':'yellow'});
			}else if(knx2_str == 'S'){
				$(knx2_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx2_str;
				knx_last = knx2_terminal["id"];
				knx_terminal_last = knx2_terminal;
			}
			else{
				if($(knx2_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx2_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx2_terminal).css({'fill':'green'});
				}
				knx_last_value = knx2_str;
				knx_last = knx2_terminal["id"];
				knx_terminal_last = knx2_terminal;
			}
			knx_arr.push(knx2_str);
		});
		$( "select#knx-3 option:selected" ).each(function() {
			knx3_str += $( this ).val();
			if(knx3_str == 'X'){
				$(knx3_terminal).css({'fill':'yellow'});
			}else if(knx3_str == 'S'){
				$(knx3_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx3_str;
				knx_last = knx3_terminal["id"];
				knx_terminal_last = knx3_terminal;
			}
			else{
				if($(knx3_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx3_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx3_terminal).css({'fill':'green'});
				}
				knx_last_value = knx3_str;
				knx_last = knx3_terminal["id"];
				knx_terminal_last = knx3_terminal;
			}
			knx_arr.push(knx3_str);
		});
		$( "select#knx-4 option:selected" ).each(function() {
			knx4_str += $( this ).val();
			if(knx4_str == 'X'){
				$(knx4_terminal).css({'fill':'yellow'});
			}else if(knx4_str == 'S'){
				$(knx4_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx4_str;
				knx_last = knx4_terminal["id"];
				knx_terminal_last = knx4_terminal;
			}
			else{
				if($(knx4_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx4_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx4_terminal).css({'fill':'green'});
				}
				knx_last_value = knx4_str;
				knx_last = knx4_terminal["id"];
				knx_terminal_last = knx4_terminal;
			}
			knx_arr.push(knx4_str);
		});
		$( "select#knx-5 option:selected" ).each(function() {
			knx5_str += $( this ).val();
			if(knx5_str == 'X'){
				$(knx5_terminal).css({'fill':'yellow'});
			}else if(knx5_str == 'S'){
				$(knx5_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx5_str;
				knx_last = knx5_terminal["id"];
				knx_terminal_last = knx5_terminal;
			}
			else{
				if($(knx5_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx5_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx5_terminal).css({'fill':'green'});
				}
				knx_last_value = knx5_str;
				knx_last = knx5_terminal["id"];
				knx_terminal_last = knx5_terminal;
			}
			knx_arr.push(knx5_str);
		});
		$( "select#knx-6 option:selected" ).each(function() {
			knx6_str += $( this ).val();
			if(knx6_str == 'X'){
				$(knx6_terminal).css({'fill':'yellow'});
			}else if(knx6_str == 'S'){
				$(knx6_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx6_str;
				knx_last = knx6_terminal["id"];
				knx_terminal_last = knx6_terminal;
			}
			else{
				if($(knx6_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx6_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx6_terminal).css({'fill':'green'});
				}
				knx_last_value = knx6_str;
				knx_last = knx6_terminal["id"];
				knx_terminal_last = knx6_terminal;
			}
			knx_arr.push(knx6_str);
		});
		$( "select#knx-7 option:selected" ).each(function() {
			knx7_str += $( this ).val();
			if(knx7_str == 'X'){
				$(knx7_terminal).css({'fill':'yellow'});
			}else if(knx7_str == 'S'){
				$(knx7_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx7_str;
				knx_last = knx7_terminal["id"];
				knx_terminal_last = knx7_terminal;
			}
			else{
				if($(knx7_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx7_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx7_terminal).css({'fill':'green'});
				}
				knx_last_value = knx7_str;
				knx_last = knx7_terminal["id"];
				knx_terminal_last = knx7_terminal;
			}
			knx_arr.push(knx7_str);
		});
		$( "select#knx-8 option:selected" ).each(function() {
			knx8_str += $( this ).val();
			if(knx8_str == 'X'){
				$(knx8_terminal).css({'fill':'yellow'});
			}else if(knx8_str == 'S'){
				$(knx8_terminal).css({'fill':'#d534eb'});
				knx_last_value = knx8_str;
				knx_last = knx8_terminal["id"];
				knx_terminal_last = knx8_terminal;
			}
			else{
				if($(knx8_terminal).css("fill") == "rgb(213, 52, 235)"){
					$(knx8_terminal).css({'fill':'#d534eb'});
				}else{
					$(knx8_terminal).css({'fill':'green'});
				}
				knx_last_value = knx8_str;
				knx_last = knx8_terminal["id"];
				knx_terminal_last = knx8_terminal;
			}
			knx_arr.push(knx8_str);
		});
		$( "select#knx-9 option:selected" ).each(function() {
			knx9_str += $( this ).val();
			if(knx9_str == 'X'){
				$(knx9_terminal).css({'fill':'yellow'});
			}else if(knx9_str == 'S'){
				$(knx9_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx9_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx9_str);
		});
		$( "select#knx-10 option:selected" ).each(function() {
			knx10_str += $( this ).val();
			if(knx10_str == 'X'){
				$(knx10_terminal).css({'fill':'yellow'});
			}else if(knx10_str == 'S'){
				$(knx10_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx10_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx10_str);
		});
		$( "select#knx-11 option:selected" ).each(function() {
			knx11_str += $( this ).val();
			if(knx11_str == 'X'){
				$(knx11_terminal).css({'fill':'yellow'});
			}else if(knx11_str == 'S'){
				$(knx11_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx11_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx11_str);
		});
		$( "select#knx-12 option:selected" ).each(function() {
			knx12_str += $( this ).val();
			if(knx12_str == 'X'){
				$(knx12_terminal).css({'fill':'yellow'});
			}else if(knx12_str == 'S'){
				$(knx12_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx12_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx12_str);
		});
		$( "select#knx-13 option:selected" ).each(function() {
			knx13_str += $( this ).val();
			if(knx13_str == 'X'){
				$(knx13_terminal).css({'fill':'yellow'});
			}else if(knx13_str == 'S'){
				$(knx13_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx13_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx13_str);
		});
		$( "select#knx-14 option:selected" ).each(function() {
			knx14_str += $( this ).val();
			if(knx14_str == 'X'){
				$(knx14_terminal).css({'fill':'yellow'});
			}else if(knx14_str == 'S'){
				$(knx14_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx14_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx14_str);
		});
		$( "select#knx-15 option:selected" ).each(function() {
			knx15_str += $( this ).val();
			if(knx15_str == 'X'){
				$(knx15_terminal).css({'fill':'yellow'});
			}else if(knx15_str == 'S'){
				$(knx15_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx15_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx15_str);
		});
		$( "select#knx-16 option:selected" ).each(function() {
			knx16_str += $( this ).val();
			if(knx16_str == 'X'){
				$(knx16_terminal).css({'fill':'yellow'});
			}else if(knx16_str == 'S'){
				$(knx16_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx16_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx16_str);
		});
		$( "select#knx-17 option:selected" ).each(function() {
			knx17_str += $( this ).val();
			if(knx17_str == 'X'){
				$(knx17_terminal).css({'fill':'yellow'});
			}else if(knx17_str == 'S'){
				$(knx17_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx17_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx17_str);
		});
		$( "select#knx-18 option:selected" ).each(function() {
			knx18_str += $( this ).val();
			if(knx18_str == 'X'){
				$(knx18_terminal).css({'fill':'yellow'});
			}else if(knx18_str == 'S'){
				$(knx18_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx18_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx18_str);
		});
		$( "select#knx-19 option:selected" ).each(function() {
			knx19_str += $( this ).val();
			if(knx19_str == 'X'){
				$(knx19_terminal).css({'fill':'yellow'});
			}else if(knx19_str == 'S'){
				$(knx19_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx19_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx19_str);
		});
		$( "select#knx-20 option:selected" ).each(function() {
			knx20_str += $( this ).val();
			if(knx20_str == 'X'){
				$(knx20_terminal).css({'fill':'yellow'});
			}else if(knx20_str == 'S'){
				$(knx20_terminal).css({'fill':'#d534eb'});
			}
			else{
				$(knx20_terminal).css({'fill':'green'});
			}
			knx_arr.push(knx20_str);
		});
		/*
		*
		*
		*
		*
		*
		*
		*
		* Analog Output 0-10V Functionality
		* Change terminals based on selection.
		* 
		*
		*
		*
		*
		*
		*/
		$( "select.y10 option:selected" ).each(function() {
			y10_str += $( this ).val();
			y10_str = y10_str.replace("X","");
			if(y10_str.length == 0){
				y10_str += 'X';
			}
			if(y10_str == 'X'){
				$(y10).css({'fill':'#f5f5f5'});
				$(m10y10).css({'fill':'#f5f5f5'});
				$(m10y10common).css({'fill':'#f5f5f5'});
			}else if(y10_str == 'S'){
				$(y10).css({'fill':'#d534eb'});
				$(m10y10).css({'fill':'#d534eb'});
				$(m10y10common).css({'fill':'#d534eb'});
			}else{
				$(y10).css({'fill':'green'});
				$(m10y10).css({'fill':'green'});
				$(m10y10common).css({'fill':'green'});
			};
		});
		$( "select.y20 option:selected" ).each(function() {
			y20_str += $( this ).val();
			y20_str = y20_str.replace("X","");
			if(y20_str.length == 0){
				y20_str += 'X';
			}
			if(y20_str == 'X'){
				$(y20).css({'fill':'#f5f5f5'});
			}else if(y20_str == 'S'){
				$(y20).css({'fill':'#d534eb'});
			}else{
				$(y20).css({'fill':'green'});
			};
		});
		$( "select.y30 option:selected" ).each(function() {
			y30_str += $( this ).val();
			y30_str = y30_str.replace("X","");
			if(y30_str.length == 0){
				y30_str += 'X';
			}
			if(y30_str == 'X'){
				$(y30).css({'fill':'#f5f5f5'});
			}else if(y30_str == 'S'){
				$(y30).css({'fill':'#d534eb'});
			}else{
				$(y30).css({'fill':'green'});
			};
		});
		$( "select.y40 option:selected" ).each(function() {
			y40_str += $( this ).val();
			y40_str = y40_str.replace("X","");
			if(y40_str.length == 0){
				y40_str += 'X';
			}
			if(y40_str == 'X'){
				$(y40).css({'fill':'#f5f5f5'});
			}else if(y40_str == 'S'){
				$(y40).css({'fill':'#d534eb'});
			}else{
				$(y40).css({'fill':'green'});
			};
		});

		// Commons

		if(y10_str == 'X' && y20_str == 'X'){
			$(y10power).css({'fill':'#f5f5f5'});
			$(y10common).css({'fill':'#f5f5f5'});
		}else if(y10_str == 'S' || y20_str == 'S'){
			$(y10power).css({'fill':'#d534eb'});
			$(y10common).css({'fill':'#d534eb'});
		}else{
			$(y10power).css({'fill':'green'});
			$(y10common).css({'fill':'green'});
		};
		if(y30_str == 'X' && y40_str == 'X'){
			$(y30power).css({'fill':'#f5f5f5'});
			$(y30common).css({'fill':'#f5f5f5'});
		}else if(y30_str == 'S' || y40_str == 'S'){
			$(y30power).css({'fill':'#d534eb'});
			$(y30common).css({'fill':'#d534eb'});
		}else{
			$(y30power).css({'fill':'green'});
			$(y30common).css({'fill':'green'});
		};

		/*
		*
		*
		*
		*
		*
		*
		*
		* Binary Output Functionality
		* Change terminals based on selection.
		*
		* 
		*
		*
		*
		*
		*
		*/
		$( "select#y1bo option:selected" ).each(function() {
			y1_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y1y2-3pt").prop('selectedIndex',0);
				$("#y1bo").prop('selectedIndex',0);
				$(".y1y2-3pt").hide()
				$("#y1bo").hide();
				$(y1).css({'fill':'#f5f5f5'});
			}
			else{
				if(y1_str != 'X'){
					$(".y1y2-3pt").prop('selectedIndex',0);
					$(".y1y2-3pt").hide();
					$(y1).css({'fill':'green'});
				}
				else{
					if(y1_str == 'X' && y2_str == 'X'){
						if(func_str == "1"){
							$("#vav-y1y2-3pt").show();
						}else{
							$("#fpb-y1y2-3pt").show();
						}
					};
					if(y1y2_str == 'X'){
						$(y1).css({'fill':'#f5f5f5'});
					}
					else if(y1y2_str == 'S'){
						$(y1).css({'fill':'#d534eb'});
					}
					else{
						$(y1).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y2bo option:selected" ).each(function() {
			y2_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y1y2-3pt").prop('selectedIndex',0);
				$("#y2bo").prop('selectedIndex',0);
				$(".y1y2-3pt").hide()
				$("#y2bo").hide();
				$(y2).css({'fill':'#f5f5f5'});
			}
			else{
				if(y2_str != 'X'){
					$(".y1y2-3pt").prop('selectedIndex',0);
					$(".y1y2-3pt").hide()
					$(y2).css({'fill':'green'});
				}
				else{
					if(y1_str == 'X' && y2_str == 'X'){
						if(func_str == "1"){
							$("#vav-y1y2-3pt").show();
						}else{
							$("#fpb-y1y2-3pt").show();
						}
					};
					if(y1y2_str == 'X'){
						$(y2).css({'fill':'#f5f5f5'});
					}

					else if(y1y2_str == 'S'){
						$(y2).css({'fill':'#d534eb'});
					}
					else{
						$(y2).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y3bo option:selected" ).each(function() {
			y3_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y3y4-3pt").prop('selectedIndex',0);
				$("#y3bo").prop('selectedIndex',0);
				$(".y3y4-3pt").hide()
				$("#y3bo").hide();
				$(y3).css({'fill':'#f5f5f5'});
			}
			else{
				if(y3_str != 'X'){
					$(".y3y4-3pt").prop('selectedIndex',0);
					$(".y3y4-3pt").hide();
					$(y3).css({'fill':'green'});
				}
				else{
					if(y3_str == 'X' && y4_str == 'X'){
						if(func_str == "1"){
							$("#vav-y3y4-3pt").show();
						}else{
							$("#fpb-y3y4-3pt").show();
						}
					};
					if(y3y4_str == 'X'){
						$(y3).css({'fill':'#f5f5f5'});
					}
					else if(y3y4_str == 'S'){
						$(y3).css({'fill':'#d534eb'});
					}
					else{
						$(y3).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y4bo option:selected" ).each(function() {
			y4_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y3y4-3pt").prop('selectedIndex',0);
				$("#y4bo").prop('selectedIndex',0);
				$(".y3y4-3pt").hide()
				$("#y4bo").hide();
				$(y4).css({'fill':'#f5f5f5'});
			}
			else{
				if(y4_str != 'X'){
					$(".y3y4-3pt").prop('selectedIndex',0);
					$(".y3y4-3pt").hide()
					$(y4).css({'fill':'green'});
				}
				else{
					if(y3_str == 'X' && y4_str == 'X'){
						if(func_str == "1"){
							$("#vav-y3y4-3pt").show();
						}else{
							$("#fpb-y3y4-3pt").show();
						}
					};
					if(y3y4_str == 'X'){
						$(y4).css({'fill':'#f5f5f5'});
					}
					else if(y3y4_str == 'S'){
						$(y4).css({'fill':'#d534eb'});
					}
					else{
						$(y4).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y5bo option:selected" ).each(function() {
			y5_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y5y6-3pt").prop('selectedIndex',0);
				$("#y5bo").prop('selectedIndex',0);
				$(".y5y6-3pt").hide()
				$("#y5bo").hide();
				$(y5).css({'fill':'#f5f5f5'});
			}
			else{
				if(y5_str != 'X'){
					$(".y5y6-3pt").prop('selectedIndex',0);
					$(".y5y6-3pt").hide();
					$(y5).css({'fill':'green'});
				}
				else{
					if(y5_str == 'X' && y6_str == 'X'){
						if(func_str == "1"){
							$("#vav-y5y6-3pt").show();
						}else{
							$("#fpb-y5y6-3pt").show();
						}
					};
					if(y5y6_str == 'X'){
						$(y5).css({'fill':'#f5f5f5'});
					}
					else if(y5y6_str == 'S'){
						$(y5).css({'fill':'#d534eb'});
					}
					else{
						$(y5).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y6bo option:selected" ).each(function() {
			y6_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y5y6-3pt").prop('selectedIndex',0);
				$("#y6bo").prop('selectedIndex',0);
				$(".y5y6-3pt").hide()
				$("#y6bo").hide();
				$(y6).css({'fill':'#f5f5f5'});
			}
			else{
				if(y6_str != 'X'){
					$(".y5y6-3pt").prop('selectedIndex',0);
					$(".y5y6-3pt").hide()
					$(y6).css({'fill':'green'});
				}
				else{
					if(y5_str == 'X' && y6_str == 'X'){
						if(func_str == "1"){
							$("#vav-y5y6-3pt").show();
						}else{
							$("#fpb-y5y6-3pt").show();
						}
					};
					if(y5y6_str == 'X'){
						$(y6).css({'fill':'#f5f5f5'});
					}
					else if(y5y6_str == 'S'){
						$(y6).css({'fill':'#d534eb'});
					}
					else{
						$(y6).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y7bo option:selected" ).each(function() {
			y7_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y7y8-3pt").prop('selectedIndex',0);
				$("#y7bo").prop('selectedIndex',0);
				$(".y7y8-3pt").hide()
				$("#y7bo").hide();
				$(y7).css({'fill':'#f5f5f5'});
			}
			else{
				if(y7_str != 'X'){
					$(".y7y8-3pt").prop('selectedIndex',0);
					$(".y7y8-3pt").hide();
					console.log("Checking Y7");
					$(y7).css({'fill':'green'});
				}
				else{
					if(y7_str == 'X' && y8_str == 'X'){
						if(func_str == "1"){
							$("#vav-y7y8-3pt").show();
						}else{
							$("#fpb-y7y8-3pt").show();
						}
					};
					if(y7y8_str == 'X'){
						$(y7).css({'fill':'#f5f5f5'});
					}
					else if(y7y8_str == 'S'){
						$(y7).css({'fill':'#d534eb'});
					}
					else{
						$(y7).css({'fill':'green'});
					}
				};
			};
		});
		$( "select#y8bo option:selected" ).each(function() {
			y8_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y7y8-3pt").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$(".y7y8-3pt").hide()
				$("#y8bo").hide();
				$(y8).css({'fill':'#f5f5f5'});
			}
			else{
				if(y8_str != 'X'){
					$(".y7y8-3pt").prop('selectedIndex',0);
					$(".y7y8-3pt").hide()
					$(y8).css({'fill':'green'});
				}
				else{
					if(y7_str == 'X' && y8_str == 'X'){
						if(func_str == "1"){
							$("#vav-y7y8-3pt").show();
						}else{
							$("#fpb-y7y8-3pt").show();
						}
					};
					if(y7y8_str == 'X'){
						$(y8).css({'fill':'#f5f5f5'});
					}
					else if(y7y8_str == 'S'){
						$(y8).css({'fill':'#d534eb'});
					}
					else{
						$(y8).css({'fill':'green'});
					}
				};
			};
		});

		// Commons

		if(y1y2_str == 'S' || y1_str == 'S' || y2_str == 'S'){
			$(y1y2common).css({'fill':'#d534eb'});
		}else if(y1y2_str == 'X' && y1_str == 'X' && y2_str == 'X'){
			$(y1y2common).css({'fill':'#f5f5f5'});
		}else{
			$(y1y2common).css({'fill':'green'});
		}

		if(y3y4_str == 'S' || y3_str == 'S' || y4_str == 'S'){
			$(y3y4common).css({'fill':'#d534eb'});
		}else if(y3y4_str == 'X' && y3_str == 'X' && y4_str == 'X'){
			$(y3y4common).css({'fill':'#f5f5f5'});
		}else{
			$(y3y4common).css({'fill':'green'});
		}

		if(y5y6_str == 'S' || y5_str == 'S' || y6_str == 'S'){
			$(y5y6common).css({'fill':'#d534eb'});
		}else if(y5y6_str == 'X' && y5_str == 'X' && y6_str == 'X'){
			$(y5y6common).css({'fill':'#f5f5f5'});
		}else{
			$(y5y6common).css({'fill':'green'});
		}

		if(y7y8_str == 'S' || y7_str == 'S' || y8_str == 'S'){
			$(y7y8common).css({'fill':'#d534eb'});
		}else if(y7y8_str == 'X' && y7_str == 'X' && y8_str == 'X'){
			$(y7y8common).css({'fill':'#f5f5f5'});
		}else{
			$(y7y8common).css({'fill':'green'});
		}

		/*
		*
		*
		*
		*
		*
		*
		*
		Pressure Selection:
		Collecting string inputs for the standard name and establishing
		terminal changes to inputs X1 - X4
		*
		*
		*
		*
		*
		*
		*
		*/
		$( "select#p1pres option:selected" ).each(function() {
			p1_str += $( this ).val();
			if(p1_str == 'W' || p1_str == 'Y'){
				$(pressure).css({'fill':'#40ff00'});
				$(m10press).css({'fill':'#40ff00'});
			}else{
				$(pressure).css({'fill':'#f5f5f5'});
				$(m10press).css({'fill':'#f5f5f5'});
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

		// SCOM Terminal Illumination

		if(scom1_str == 'X' && scom2_str == 'X' && scom3_str == 'X' && scom4_str == 'X'){
			$(scom).css({'fill':'#f5f5f5'});
		}else{
			$(scom).css({'fill':'#40ff00'});
		}
		/*
		*
		*
		*
		*
		*
		*
		*
		Type-17 DI Functionality:
		Collecting string inputs for the standard name and establishing
		terminal changes to inputs D1 - D3
		*
		*
		*
		*
		*
		*
		*
		*/
		$( "select#d1bi option:selected" ).each(function() {
			d1bi_str += $( this ).val();
			if(d1bi_str == 'X'){
				$(d1).css({'fill':'#f5f5f5'});
				$(d1common).css({'fill':'#f5f5f5'});
			}
			else{
				$(d1).css({'fill':'green'});
				$(d1common).css({'fill':'green'});
			}
		});
		$( "select#d2bi option:selected" ).each(function() {
			d2bi_str += $( this ).val();
			if(d2bi_str == 'X'){
				$(d2).css({'fill':'#f5f5f5'});
			}
			else{
				$(d2).css({'fill':'green'});
			}
		});
		$( "select#d3bi option:selected" ).each(function() {
			d3bi_str += $( this ).val();
			if(d3bi_str == 'X'){
				$(d3).css({'fill':'#f5f5f5'});
			}
			else{
				$(d3).css({'fill':'green'});
			}
		});

		// Common

		if(d2bi_str == "X" && d3bi_str == "X"){
			$(d2common).css({'fill':'#f5f5f5'});
		}
		else{
			$(d2common).css({'fill':'green'});
		}
		/*
		*
		*
		*
		*
		*
		*
		*
		Analog Input Functionality:
		Collecting string inputs for the standard name and establishing
		terminal changes to inputs X1 - X4
		*
		*
		*
		*
		*
		*
		*
		*/
		$( "select.x1ai option:selected" ).each(function() {
			x1_str += $( this ).val();
			x1_str = x1_str.replace("X","");
			if(x1_str.length == 0){
				x1_str += 'X';
			}
			if($(this).val() == 'X'){
				$(x1).css({'fill':'#f5f5f5'});
				$(m10x1).css({'fill':'#f5f5f5'});
			}
			else if($(this).val() == 'S'){
				$(x1).css({'fill':'#d534eb'});
				$(m10x1).css({'fill':'#d534eb'});
			}
			else{
				$(x1).css({'fill':'green'});
				$(m10x1).css({'fill':'green'});
			}
		});
		$( "select.x2ai option:selected" ).each(function() {
			x2_str += $( this ).val();
			x2_str = x2_str.replace("X","");
			if(x2_str.length == 0){
				x2_str += 'X';
			}
			if($(this).val() == 'X'){
				$(x2).css({'fill':'#f5f5f5'});
				$(m10x2).css({'fill':'#f5f5f5'});
			}
			else if($(this).val() == 'S'){
				$(x2).css({'fill':'#d534eb'});
				$(m10x2).css({'fill':'#d534eb'});
			}
			else{
				$(x2).css({'fill':'green'});
				$(m10x2).css({'fill':'green'});
			}
		});

		$( "select#x3ai option:selected" ).each(function() {
			x3_str += $( this ).val();
			x3_str = x3_str.replace("X","");
			if(x3_str.length == 0){
				x3_str += 'X';
			}
			if($(this).val() == 'X'){
				$(x3).css({'fill':'#f5f5f5'});
			}
			else{
				$(x3).css({'fill':'green'});
			}
		});
		$( "select#x4ai option:selected" ).each(function() {
			x4_str += $( this ).val();
			x4_str = x4_str.replace("X","");
			if(x4_str.length == 0){
				x4_str += 'X';
			}
			if($(this).val() == 'X'){
				$(x4).css({'fill':'#f5f5f5'});
			}
			else{
				$(x4).css({'fill':'green'});
			}
		});

		// Power and Common
		console.log("x1str is " + x1_str + " and x2str is " + x2_str);
		if(x1_str == "X" && x2_str == "X"){
			$(x1common).css({'fill':'#f5f5f5'});
			$(m10x1common).css({'fill':'#f5f5f5'});
		}
		else if(x1_str == "S" || x2_str == "S"){
			$(x1common).css({'fill':'#d534eb'});
			$(m10x1common).css({'fill':'#d534eb'});
		}
		else{
			$(x1common).css({'fill':'green'});
			$(m10x1common).css({'fill':'green'});
		}

		if(x3_str == "X" && x4_str == "X"){
			$(x3common).css({'fill':'#f5f5f5'});
		}
		else{
			$(x3common).css({'fill':'green'});
		}
		/*
		*
		*
		*
		*
		*
		*
		*
		Binary/Digital Input Functionality:
		Collecting string inputs for the standard name and establishing
		terminal changes to inputs D1 (type-12)
		terminal changes to inputs B1 - B2 (type-17)
		terminal changes to inputs D1 - D2 (type-18)
		*
		*
		*
		*
		*
		*
		*
		*/
		var type_str = etype_str + mtype_str + ptype_str
		//
		$( "select.b1d1bi option:selected" ).each(function() {
			b1d1_str += $( this ).val();
			b1d1_str = b1d1_str.replace("X","");
			if(b1d1_str.length == 0){
				b1d1_str += 'X';
			}
			if(type_str == 'E' || type_str == 'F' || type_str == 'G'){
				if($(this).val() == 'X'){
					$(b1d1).css({'fill':'#f5f5f5'});
				}
				else if($(this).val() == 'S'){
					$(b1d1).css({'fill':'#d534eb'});
				}
				else{
					$(b1d1).css({'fill':'green'});
				}
			}else if(type_str == 'A' || type_str == 'B'){
				if($(this).val() == 'X'){
					$(m10d1).css({'fill':'#f5f5f5'});
					$(m10d1common).css({'fill':'#f5f5f5'});
				}
				else if($(this).val() == 'S'){
					$(m10d1).css({'fill':'#d534eb'});
					$(m10d1common).css({'fill':'#d534eb'});
				}
				else{
					$(m10d1).css({'fill':'green'});
					$(m10d1common).css({'fill':'green'});
				}
			}
			else{
				if($(this).val() == 'X'){
					$(b2d2).css({'fill':'#f5f5f5'});
				}
				else if($(this).val() == 'S'){
					$(b2d2).css({'fill':'#d534eb'});
				}
				else{
					$(b2d2).css({'fill':'green'});
				}
			};
		});
		$( "select#b2d2bi option:selected" ).each(function() {
			b2d2_str += $( this ).val();
			if(type_str == 'E' || type_str == 'F' || type_str == 'G'){
				if($(this).val() == 'X'){
					$(b2d2).css({'fill':'#f5f5f5'});
				}
				else{
					$(b2d2).css({'fill':'green'});
				}
			}
		});

		// Power and Common

		if(b1d1_str == "X" && b2d2_str == "X"){
			$(bdcommon).css({'fill':'#f5f5f5'});
		}
		else if(b1d1_str == "S" || b2d2_str == "S"){
			$(bdcommon).css({'fill':'#d534eb'});
		}
		else{
			$(bdcommon).css({'fill':'green'});
		}
		/*
		*
		*
		*
		*
		*
		*
		*
		Layout Establishment:
		Change menu options based upon Platform
		Type-12P & PX
		F = Type-17C
		G = Type-17CX
		E = Type-18
		*
		* 
		*
		*
		*
		*
		*
		*/
		if(type_str == 'E'){
			$(dxrvoltageout).show();
			$(dxrtopinputs).show();
			var layout_hide = [
				type12,type17,m10pl,$('span.lab-d1d2d3'),$('select.lab-d1d2d3'),$("select#scom1pres"),
				$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres"),$("select#p1pres")]

			var layout_show = [
				type18,y1y2text,dxrrunsvc,usb,$('span#b2d2-badge'),$('select#b2d2bi'),$('span.x3x4-badge'),
				$('select#x3ai'),$('select#x4ai'),$("select#y30"),$("select#y40"),$("select#y20")]
				$('span#b1d1-badge').text('D1');
				$('span#b2d2-badge').text('D2');
			$(layout_hide).each(function(){
				$(this).hide();
			});
			$(layout_show).each(function(){
				$(this).show();
			});
			if(y1_str == 'X' && y2_str == 'X'){
				if(func_str == "1"){
					$("#vav-y1y2-3pt").show();
					$("#fpb-y1y2-3pt").prop('selectedIndex',0);
					$("#fpb-y1y2-3pt").hide();
				}
			else if(func_str == "2"){
				$("#vav-y1y2-3pt").prop('selectedIndex',0);
				$("#vav-y1y2-3pt").hide();
				$("#fpb-y1y2-3pt").show();
				}
			}
			else{
				$("select.y1y2-3pt").hide();
			}
			if(y5_str == 'X' && y6_str == 'X'){
				if(func_str == "1"){
					$("#vav-y5y6-3pt").show();
					$("#fpb-y5y6-3pt").prop('selectedIndex',0);
					$("#fpb-y5y6-3pt").hide();
				}
			else if(func_str == "2"){
				$("#vav-y5y6-3pt").prop('selectedIndex',0);
				$("#vav-y5y6-3pt").hide();
				$("#fpb-y5y6-3pt").show();
				}
			}
			else{
				$("select.y5y6-3pt").hide();
			}

			if(y7_str == 'X' && y8_str == 'X'){
				if(func_str == "1"){
					$("#fpb-y7y8-3pt").prop('selectedIndex',0);
					$("#vav-y7y8-3pt").show();
					$("#fpb-y7y8-3pt").hide();
				}
			else if(func_str == "2"){
				$("#vav-y7y8-3pt").prop('selectedIndex',0);
				$("#vav-y7y8-3pt").hide();
				$("#fpb-y7y8-3pt").show();
				}
			}
			else{
				$("select.y7y8-3pt").hide();
			}
			$(m10pl).hide();
		}
		else if(type_str == 'F' || type_str == 'G'){
			$(dxrvoltageout).show();
			$(dxrtopinputs).show();
			var layout_hide = [
				type12,type18,m10pl,$("select.y5y6-3pt"),$("select#y5bo"),$("select#y6bo"),$("select.y7y8-3pt")
				,$("select#p1pres"),$("select#y7bo"),$("select#y8bo"),$("select#vav-y30"),$("select#vav-y40"),$("select#vav-y20")]

			var layout_show = [
				type17,y1y2text,dxrrunsvc,usb,$('span.lab-d1d2d3'),$('select.lab-d1d2d3'),$('span#b2d2-badge'),$('select#b2d2bi'),
				$('span.x3x4-badge'),$('select#x3ai'),$('select#x4ai'),$("select#scom1pres"),
				$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres"),$("select#lab-y30"),$("select#lab-y40"),$("select#lab-y20")]

			var layout_prop = [
			$("select.y5y6-3pt"),$("select#y5bo"),$("select#y6bo"),$("select.y7y8-3pt"),
			$("select#y7bo"),$("select#y8bo")]

			$('span#b1d1-badge').text('B1');
			$('span#b2d2-badge').text('B2');

			$(layout_prop).each(function(){
				$(this).prop('selectedIndex',0);
			});
			$(layout_hide).each(function(){
				$(this).hide();
			});
			$(layout_show).each(function(){
				$(this).show();
			});
			if(y1_str == 'X' && y2_str == 'X'){
				if(func_str == "1"){
					$("#vav-y1y2-3pt").show();
					$("#fpb-y1y2-3pt").prop('selectedIndex',0);
					$("#fpb-y1y2-3pt").hide();
				}
			else if(func_str == "2"){
				$("#vav-y1y2-3pt").prop('selectedIndex',0);
				$("#vav-y1y2-3pt").hide();
				$("#fpb-y1y2-3pt").show();
				}
			}
			else{
				$("select.y1y2-3pt").hide();
			}
			$(m10pl).hide();
		}


		else if(type_str == 'A' || type_str == 'B'){
			$(type18).hide()
			$(type17).hide()
			$(type12).show()
			var layout_hide = [
				usb,pressure,pressuretext,dxrrunsvc,y1y2text,y1y2terminals,dxrvoltageout,dxrtopinputs,
				$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),$("select.y30"),$("select.y40"),$("select#scom1pres"),
				$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres"),$('select.lab-d1d2d3'),
				$('select#x3ai'),$('select#x4ai'),$('span.lab-d1d2d3'),$('span#b2d2-badge'),$('select#b2d2bi'),
				$('span.x3x4-badge'),$("select.y20"),$("select.y1y2-3pt"),$("select#y1bo"),$("select#y2bo")];
			var layout_show = [m10pl,$("select#p1pres")];
			var layout_prop = [
				$("select.y1y2-3pt"),$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),$("select.y20"),
				$("select.y30"),$("select.y40"),$("select#y1bo"),$("select#y2bo")]

			$(layout_prop).each(function(){
				$(this).prop('selectedIndex',0);
			});
			$(layout_hide).each(function(){
				$(this).hide();
			});
			$(layout_show).each(function(){
				$(this).show();
			});
		}


		else{
			$(dxrvoltageout).show();
			$(dxrtopinputs).show();

			var layout_hide = [
			type18,type17,
			$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),
			$("select.y30"),$("select.y40"),
			$("select#scom1pres"),$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres"),
			$('select.lab-d1d2d3'),$('span.lab-d1d2d3'),$('span#b2d2-badge'),$('select#b2d2bi'),
			$('select#x3ai'),$('select#x4ai'),$('span.x3x4-badge')]
			
			var layout_show = [
			$(type12),$(y1y2text),$(pressure),$(pressuretext),$(dxrrunsvc),$(usb),
			$("select#p1pres"),$("select#vav-y20")]
			
			var layout_prop = [
			$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),
			$("select.y30"),$("select.y40")]
			$('span#b1d1-badge').text('D1');
			$('span#b2d2-badge').text('D2');

			$(layout_prop).each(function(){
				$(this).prop('selectedIndex',0);
			});
			$(layout_hide).each(function(){
				$(this).hide();
			});
			$(layout_show).each(function(){
				$(this).show();
			});
			if(y1_str == 'X' && y2_str == 'X'){
				if(func_str == "1"){
					$("#vav-y1y2-3pt").show();
					$("#fpb-y1y2-3pt").prop('selectedIndex',0);
					$("#fpb-y1y2-3pt").hide();
				}
			else if(func_str == "2"){
				$("#vav-y1y2-3pt").prop('selectedIndex',0);
				$("#vav-y1y2-3pt").hide();
				$("#fpb-y1y2-3pt").show();
				}
			}
			else{
				$("select.y1y2-3pt").hide();
			}
			$(m10pl).hide();
		};
		/*
		*
		*
		*
		*
		*
		*
		*
		Standard Name Construction:
		Collect string variables from dropdown selections
		*
		* 
		*
		*
		*
		*
		*
		*/
		var DXR = dxr_str + type_str + loc_str + "_";
		var AO3pt = y1y2_str + y3y4_str + y5y6_str + y7y8_str + "_";
		var AOten = y10_str + y20_str + y30_str + y40_str + "_";
		var BO = y1_str + y2_str + y3_str + y4_str + y5_str + y6_str + y7_str + y8_str + "_";
		var IN = b1d1_str + b2d2_str + x1_str + x2_str + x3_str + x4_str + d1bi_str + d2bi_str + d3bi_str + "_";
		var PRES = p1_str + scom1_str + scom2_str + scom3_str + scom4_str + "_";
		var KNX = knx1_str +  knx2_str +  knx3_str +  knx4_str +  knx5_str +  knx6_str +  knx7_str +  knx8_str +  knx9_str +  knx10_str;
		KNX = KNX + knx11_str +  knx12_str +  knx13_str +  knx14_str +  knx15_str +  knx16_str +  knx17_str +  knx18_str +  knx19_str +  knx20_str;
		var sorted_knx = knx_arr.sort();
		var double_knx = []; // 2 or more
		var triple_knx = []; // 3 or more
		var overload_knx = []; // 4 or more
		for(var i=0;i<sorted_knx.length - 1;i++){
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i] != "X"){
				double_knx.push(sorted_knx[i])
			}
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i+2]==sorted_knx[i] && sorted_knx[i] != "X"){
				triple_knx.push(sorted_knx[i])
			}
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i+2]==sorted_knx[i] && sorted_knx[i+3]==sorted_knx[i] && sorted_knx[i] != "X"){
				overload_knx.push(sorted_knx[i])
			}
		}
		// console.log($(knx1_terminal).css(["fill"]));
		double_knx = [...new Set(double_knx)];
		triple_knx = [...new Set(triple_knx)];
		overload_knx = [...new Set(overload_knx)];
		console.log(sorted_knx);
		console.log("doubles are: " + double_knx);
		console.log("triples are: " + triple_knx);
		console.log("overloads are: " + overload_knx);
		for(var i=0;i<knx_terminals.length-1;i++){
			if($(knx_terminals[i]).css("fill") == "rgb(0, 128, 0)" && overload_knx.includes(knx_last_value) && knx_terminals[i]["id"] == knx_last){
				$(knx_terminal_last).css({'fill':'#d534eb'});
			}
			if($(knx_terminals[i]).css("fill") == "rgb(213, 52, 235)" && knx_last_value != 'S' && !overload_knx.includes(knx_last_value) && knx_terminals[i]["id"] == knx_last){
				$(knx_terminal_last).css({'fill':'green'});
			}
		}
		// if(KNX.length >= 1){
		// 	$(knx).css({'fill':'#40ff00'});
		// }
		// else{
		// 	$(knx).css({'fill':'#f5f5f5'});
		// }
		// try {
		//   var knx_alert = KNX.match(/A/g).length;
		//   console.log("KNX-Alert is " + knx_alert);
		//   $('select.selection-knx option:selected').each(function(){
		//   	if($(this).val() == 'A' && knx_alert > 1){
		//   		$(knxaddresses).css({'fill':'#d534eb'});
		//   	}
		//   });
		// }
		// catch(err) {
		//   console.log("No characters!");
		// }
		str = DXR + AO3pt + AOten + BO + IN + PRES + KNX;
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
	        data: { pet:str},
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
				// $('#errorAlert').text(data.error).show();
				// $('#successAlert').hide();
			}
			else {
				// $('#successAlert').text("Name: " + data.name).show();
				console.log(data.name);
				$('#errorAlert').hide();
			}
		});
		});
	});
});

