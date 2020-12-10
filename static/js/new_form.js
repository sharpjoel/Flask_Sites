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
		var y1_str = "X"
		var y2_str = "X"
		var y3_str = "X"
		var y4_str = "X"
		var y5_str = "X"
		var y6_str = "X"
		var y7_str = "X"
		var y8_str = "X"
		var y1y2_str = ""
		var y3y4_str = ""
		var y5y6_str = ""
		var y7y8_str = ""
		var y10_12_str = ""
		var y20_12_str = ""
		var y10_18_str = ""
		var y20_18_str = ""
		var y30_str = ""
		var y40_str = ""
		var d1bi_str = ""
		var d2bi_str = ""
		var d3bi_str = ""
		var x1_12_str = ""
		var x2_12_str = ""
		var x1_18_str = ""
		var x2_18_str = ""
		var x3_str = ""
		var x4_str = ""
		var b1d1_str = ""
		var b1d1bi_str = ""
		var b1d1bi_txt = ""
		var b2d2_str = ""
		var b2d2bi_str = ""
		var b2d2bi_txt = ""
		var p1_str = ""
		var scom_str = ""
		var scom1_str = ""
		var scom2_str = ""
		var scom3_str = ""
		var scom4_str = ""
		var knx_option = ""
		var pressure_str = ""
		var pressure_txt = ""
		var dibi_str = ""
		var threepts_str = ""
		var threepts_txt = ""
		var analog_x_str = ""
		var analog_x_txt = ""
		var binary_str = ""
		var binary_txt = ""
		var tenvolt_str = ""
		var tenvolt_txt = ""
		var knx_str = ""
		var knx_txt = ""
		var pressure_str_arr = [];
		var dibi_str_arr = [];
		var threepts_str_arr = [];
		var analog_str_arr = [];
		var binary_str_arr = [];
		var tenvolt_str_arr = [];
		var knx_str_arr = [];
		var knx_terminal_arr = [
			knx1_terminal,knx2_terminal,knx3_terminal,knx4_terminal,knx5_terminal,knx6_terminal,knx7_terminal,knx8_terminal,knx9_terminal,knx10_terminal,
			knx11_terminal,knx12_terminal,knx13_terminal,knx14_terminal,knx15_terminal,knx16_terminal,knx17_terminal,knx18_terminal,knx19_terminal,knx20_terminal,
			]
		var knx_arr = [];
		var str = ""
		var knx_last;
		var knx_terminal_last;
		var knx_last_value = "";

		$("select#funcSelection").each(function(){
			func_str += $(this).val();
			if(func_str == "1"){
				var triac_show = [$("select.func_str_1")]
				var triac_hide = [$("select.func_str_2"),$("select.func_str_3"),$("select.func_str_4"),$("select.func_str_5"),$("select.func_str_6"),$("select.func_str_7")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#vav-12-y1y2 option:selected";
				y3y4_str = "select#vav-12-y3y4 option:selected";
				y5y6_str = "select#vav-y5y6-3pt option:selected";
				y7y8_str = "select#vav-y7y8-3pt option:selected";
				y10_str = "select#vav-12-y10 option:selected";
				y20_str = "select#vav-12-y20 option:selected";
				y10_18_str = "select#vav-18-y10 option:selected";
				y20_18_str = "select#vav-18-y20 option:selected";
				y30_str = "select#vav-y30 option:selected";
				y40_str = "select#vav-y40 option:selected";
				x1_str = "select#vav-12x1ai option:selected";
				x2_str = "select#vav-12x2ai option:selected";
				x1_18_str = "select#vav-18x1ai option:selected";
				x2_18_str = "select#vav-18x2ai option:selected";
				x3_str = "select#vav-x3ai option:selected";
				x4_str = "select#vav-x4ai option:selected";
				b1d1bi_str = "select#vav-b1d1bi option:selected";
				b2d2bi_str = "select#vav-b2d2bi option:selected";
			}
			else if(func_str == "2"){

				var triac_show = [$("select.func_str_2")]
				var triac_hide = [$("select.func_str_1"),$("select.func_str_3"),$("select.func_str_4"),$("select.func_str_5"),$("select.func_str_6"),$("select.func_str_7")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#fpb-12-y1y2 option:selected";
				y3y4_str = "select#fpb-12-y3y4 option:selected";
				y5y6_str = "select#fpb-y5y6-3pt option:selected";
				y7y8_str = "select#fpb-y7y8-3pt option:selected";
				y10_str = "select#fpb-12-y10 option:selected";
				y20_str = "select#fpb-12-y20 option:selected";
				y10_18_str = "select#fpb-18-y10 option:selected";
				y20_18_str = "select#fpb-18-y20 option:selected";
				y30_str = "select#fpb-y30 option:selected";
				y40_str = "select#fpb-y40 option:selected";
				x1_str = "select#fpb-12x1ai option:selected";
				x2_str = "select#fpb-12x2ai option:selected";
				x1_18_str = "select#fpb-18x1ai option:selected";
				x2_18_str = "select#fpb-18x2ai option:selected";
				x3_str = "select#fpb-x3ai option:selected";
				x4_str = "select#fpb-x4ai option:selected";
				b1d1bi_str = "select#fpb-b1d1bi option:selected";
				b2d2bi_str = "select#fpb-b2d2bi option:selected";
			}
			else if(func_str == "3"){

				var triac_show = [$("select.func_str_3")]
				var triac_hide = [$("select.func_str_2"),$("select.func_str_1"),$("select.func_str_4"),$("select.func_str_5"),$("select.func_str_6"),$("select.func_str_7")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#wshp-y1y2-3pt option:selected";
				y3y4_str = "select#wshp-y3y4-3pt option:selected";
				y5y6_str = "select#wshp-y5y6-3pt option:selected";
				y7y8_str = "select#wshp-y7y8-3pt option:selected";
				y10_str = "select#wshp-y10 option:selected";
				y20_str = "select#wshp-y20 option:selected";
				y10_18_str = "select#wshp-y10 option:selected";
				y20_18_str = "select#wshp-y20 option:selected";
				y30_str = "select#wshp-y30 option:selected";
				y40_str = "select#wshp-y40 option:selected";
				x1_str = "select#wshp-x1ai option:selected";
				x2_str = "select#wshp-x2ai option:selected";
				x1_18_str = "select#wshp-x1ai option:selected";
				x2_18_str = "select#wshp-x2ai option:selected";
				x3_str = "select#wshp-x3ai option:selected";
				x4_str = "select#wshp-x4ai option:selected";
				b1d1bi_str = "select#wshp-b1d1bi option:selected";
				b2d2bi_str = "select#wshp-b2d2bi option:selected";
			}
			else if(func_str == "4"){

				var triac_show = [$("select.func_str_4")]
				var triac_hide = [$("select.func_str_2"),$("select.func_str_3"),$("select.func_str_1"),$("select.func_str_5"),$("select.func_str_6"),$("select.func_str_7")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#fcu-y1y2-3pt option:selected";
				y3y4_str = "select#fcu-y3y4-3pt option:selected";
				y5y6_str = "select#fcu-y5y6-3pt option:selected";
				y7y8_str = "select#fcu-y7y8-3pt option:selected";
				y10_str = "select#fcu-y10 option:selected";
				y20_str = "select#fcu-y20 option:selected";
				y10_18_str = "select#fcu-y10 option:selected";
				y20_18_str = "select#fcu-y20 option:selected";
				y30_str = "select#fcu-y30 option:selected";
				y40_str = "select#fcu-y40 option:selected";
				x1_str = "select#fcu-x1ai option:selected";
				x2_str = "select#fcu-x2ai option:selected";
				x1_18_str = "select#fcu-x1ai option:selected";
				x2_18_str = "select#fcu-x2ai option:selected";
				x3_str = "select#fcu-x3ai option:selected";
				x4_str = "select#fcu-x4ai option:selected";
				b1d1bi_str = "select#fcu-b1d1bi option:selected";
				b2d2bi_str = "select#fcu-b2d2bi option:selected";
			}
			else if(func_str == "5"){


				var triac_show = [$("select.func_str_5")]
				var triac_hide = [$("select.func_str_2"),$("select.func_str_3"),$("select.func_str_4"),$("select.func_str_1"),$("select.func_str_6"),$("select.func_str_7")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#lab-y1y2-3pt option:selected";
				y3y4_str = "select#lab-y3y4-3pt option:selected";
				y5y6_str = "select#vav-y5y6-3pt option:selected";
				y7y8_str = "select#vav-y7y8-3pt option:selected";
				y10_str = "select#lab-y10 option:selected";
				y20_str = "select#lab-y20 option:selected";
				y10_18_str = "select#lab-y10 option:selected";
				y20_18_str = "select#lab-y20 option:selected";
				y30_str = "select#lab-17C-y30 option:selected";
				y40_str = "select#lab-17C-y40 option:selected";
				x1_str = "select#lab-x1ai option:selected";
				x2_str = "select#lab-x2ai option:selected";
				x1_18_str = "select#lab-x1ai option:selected";
				x2_18_str = "select#lab-x2ai option:selected";
				x3_str = "select#lab-x3ai option:selected";
				x4_str = "select#lab-x4ai option:selected";
				b1d1bi_str = "select#lab-b1d1bi option:selected";
				b2d2bi_str = "select#lab-b2d2bi option:selected";
				d1bi_str = "select#lab-d1bi option:selected";
				d2bi_str = "select#lab-d2bi option:selected";
				d3bi_str = "select#lab-d3bi option:selected";
			}
			else if(func_str == "6"){

				var triac_show = [$("select.func_str_6")]
				var triac_hide = [$("select.func_str_2"),$("select.func_str_3"),$("select.func_str_4"),$("select.func_str_5"),$("select.func_str_1"),$("select.func_str_7")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#fh-y1y2-3pt option:selected";
				y3y4_str = "select#fh-y3y4-3pt option:selected";
				y5y6_str = "select#vav-y5y6-3pt option:selected";
				y7y8_str = "select#vav-y7y8-3pt option:selected";
				y10_str = "select#fh-y10 option:selected";
				y10_18_str = "select#fh-y10 option:selected";
				y20_str = "select#fh-y20 option:selected";
				y20_18_str = "select#fh-y20 option:selected";
				y30_str = "select#fh-y30 option:selected";
				y40_str = "select#fh-y40 option:selected";
				x1_str = "select#fh-x1ai option:selected";
				x2_str = "select#fh-x2ai option:selected";
				x1_18_str = "select#fh-x1ai option:selected";
				x2_18_str = "select#fh-x2ai option:selected";
				x3_str = "select#fh-x3ai option:selected";
				x4_str = "select#fh-x4ai option:selected";
				b1d1bi_str = "select#fh-b1d1bi option:selected";
				b2d2bi_str = "select#fh-b2d2bi option:selected";
				d1bi_str = "select#fh-d1bi option:selected";
				d2bi_str = "select#fh-d2bi option:selected";
				d3bi_str = "select#fh-d3bi option:selected";
			}
			else if(func_str == "7"){

				var triac_show = [$("select.func_str_7")]
				var triac_hide = [$("select.func_str_2"),$("select.func_str_3"),$("select.func_str_4"),$("select.func_str_5"),$("select.func_str_6"),$("select.func_str_1")]
				$(triac_show).each(function(){
					$(this).show();
				});
				$(triac_hide).each(function(){
					$(this).prop('selectedIndex',0);
					$(this).hide();
				});
				y1y2_str = "select#cenfunc-y1y2-3pt option:selected";
				y3y4_str = "select#cenfunc-y3y4-3pt option:selected";
				y5y6_str = "select#cenfunc-y5y6-3pt option:selected";
				y7y8_str = "select#cenfunc-y7y8-3pt option:selected";
				y10_str = "select#cenfunc-y10 option:selected";
				y20_str = "select#cenfunc-y20 option:selected";
				y10_18_str = "select#cenfunc-y10 option:selected";
				y20_18_str = "select#cenfunc-y20 option:selected";
				y30_str = "select#cenfunc-y30 option:selected";
				y40_str = "select#cenfunc-y40 option:selected";
				x1_str = "select#cenfunc-x1ai option:selected";
				x2_str = "select#cenfunc-x2ai option:selected";
				x1_18_str = "select#cenfunc-x2ai-x1ai option:selected";
				x2_18_str = "select#cenfunc-x2ai-x2ai option:selected";
				x3_str = "select#cenfunc-x3ai option:selected";
				x4_str = "select#cenfunc-x4ai option:selected";
				b1d1bi_str = "select#cenfunc-b1d1bi option:selected";
				b2d2bi_str = "select#cenfunc-b2d2bi option:selected";
			}
			else{

				var triac_show = []
				var triac_hide = [$("select.func_str_1"),$("select.func_str_2"),$("select.func_str_3"),$("select.func_str_4"),$("select.func_str_5"),$("select.func_str_6"),$("select.func_str_7")]
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
		});
		$( "select#etypeSelection" ).each(function() {
			if(dxr_str == 'E'){
				etype_str += $( this ).val();
			}else{
				etype_str = etype_str.substring(1);
			}
			if(dxr_str == 'E' && etype_str == 'F'){
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
			}else if(dxr_str == 'E' && etype_str == 'G'){
				$("#funcSelection option[value='1']").hide();
				$("#funcSelection option[value='2']").hide();
				$("#funcSelection option[value='3']").hide();
				$("#funcSelection option[value='4']").hide();
				$("#funcSelection option[value='5']").show();
				$("#funcSelection option[value='6']").hide();
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
				$("select.y30").prop('selectedIndex',0);
				$("select.y40").prop('selectedIndex',0);
				$("select#scom1pres").prop('selectedIndex',0);
				$("select#scom2pres").prop('selectedIndex',0);
				$("select#scom3pres").prop('selectedIndex',0);
				$("select#scom4pres").prop('selectedIndex',0);
				$("select#d1bi").prop('selectedIndex',0);
				$("select#d2bi").prop('selectedIndex',0);
				$("select#d3bi").prop('selectedIndex',0);
				$("select#b2d2bi").prop('selectedIndex',0);
				$("select.x3ai").prop('selectedIndex',0);
				$("select.x4ai").prop('selectedIndex',0);
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
				$("select.x3ai").prop('selectedIndex',0);
				$("select.x4ai").prop('selectedIndex',0);
			};
		});
		$( "select#ptypeSelection" ).each(function() {
			if(dxr_str == 'P'){
				ptype_str += $( this ).val();
			}else{
				ptype_str = ptype_str.substring(1);
			};
		});
		// type declaration
		var type_str = etype_str + mtype_str + ptype_str
		if(type_str == 'E'){
			$("#vav-12-y1y2").prop('selectedIndex',0);
			$("#vav-12-y3y4").prop('selectedIndex',0);
			$("#fpb-12-y1y2").prop('selectedIndex',0);
			$("#fpb-12-y3y4").prop('selectedIndex',0);
			$("#p1pres").prop('selectedIndex',0);
			if(func_str == "1"){
				y1y2_str = "select#vav-18-y1y2 option:selected";
				y3y4_str = "select#vav-18-y3y4 option:selected";
			}else if(func_str == "2"){
				y1y2_str = "select#fpb-18-y1y2 option:selected";
				y3y4_str = "select#fpb-18-y3y4 option:selected";
			}

		}else if(type_str !='E' && type_str != 'F' && type_str != 'G'){
			$("#vav-18-y1y2").prop('selectedIndex',0);
			$("#vav-18-y3y4").prop('selectedIndex',0);
			$("#fpb-18-y1y2").prop('selectedIndex',0);
			$("#fpb-18-y3y4").prop('selectedIndex',0);
		}
		if(func_str == '5' && type_str == 'G'){
			y30_str = "select#lab-17CX-y30 option:selected";
			y40_str = "select#lab-17CX-y40 option:selected";
		}
		//
		$( "select#locSelection" ).each(function() {
			loc_str += $( this ).val();
		});
		$(".type-selection").change(function(){
			$("select#funcSelection").prop('selectedIndex',0);
		})
		/*
		*
		*
		*
		*
		*
		*
		*
		* Functions
		*
		*
		*
		*
		*
		*
		*
		*/
		function threepts_function(threepts_selection,binary1,binary2){
			$(threepts_selection).each(function() {
				threepts_str = $( this ).val();
				threepts_txt = $( this ).text();
				threepts_str = threepts_str.replace("X","");
				if(threepts_str.length == 0){
					threepts_str += 'X';
				}
				if(threepts_str != 'X'){
					$(binary1).prop('selectedIndex',0);
					$(binary2).prop('selectedIndex',0);
					$(binary1).hide();
					$(binary2).hide();
				}else{
					if(threepts_str == 'X'){
						$(binary1).show();
						$(binary2).show();
					};
				}
			});
			return [threepts_str,threepts_txt];
		}

		function knx_function(knx_selection,knx_terminal){
			$(knx_selection).each(function() {
				knx_str = $( this ).val();
				knx_txt = $( this ).text();
				if(knx_str == 'X'){
					$(knx_terminal).css({'fill':'yellow'});
				}else if(knx_str == 'S'){
					$(knx_terminal).css({'fill':'#d534eb'});
					knx_last_value = knx_str;
					knx_last = knx_terminal["id"];
					knx_terminal_last = knx_terminal;
				}
				else{
					if($(knx_terminal).css("fill") == "rgb(213, 52, 235)"){
						$(knx_terminal).css({'fill':'#d534eb'});
					}else{
						$(knx_terminal).css({'fill':'green'});
					}
					knx_last_value = knx_str;
					knx_last = knx_terminal["id"];
					knx_terminal_last = knx_terminal;
				}
				knx_arr.push(knx_str);
			});
			return [knx_str,knx_txt];
		}

		function zten_function(tenvolt_selection,tenvolt_term,tenvolt_term2,tenvolt_term3){
			$( tenvolt_selection ).each(function() {
				tenvolt_str = $( this ).val();
				tenvolt_txt = $( this ).text();
				tenvolt_str = tenvolt_str.replace("X","");
				if(tenvolt_str.length == 0){
					tenvolt_str += 'X';
				}
				if(tenvolt_str == 'X'){
					$(tenvolt_term).css({'fill':'#f5f5f5'});
					$(tenvolt_term2).css({'fill':'#f5f5f5'});
					$(tenvolt_term3).css({'fill':'#f5f5f5'});
				}else if(tenvolt_str == 'S'){
					$(tenvolt_term).css({'fill':'#d534eb'});
					$(tenvolt_term2).css({'fill':'#d534eb'});
					$(tenvolt_term3).css({'fill':'#d534eb'});
				}else{
					$(tenvolt_term).css({'fill':'green'});
					$(tenvolt_term2).css({'fill':'green'});
					$(tenvolt_term3).css({'fill':'green'});
				};
			});
			return [tenvolt_str,tenvolt_txt];
		}

		function zten_common_function(str1,str2,power,common){
			if(str1 == 'X' && str2 == 'X'){
				$(power).css({'fill':'#f5f5f5'});
				$(common).css({'fill':'#f5f5f5'});
			}else if(str1 == 'S' || str2 == 'S'){
				$(power).css({'fill':'#d534eb'});
				$(common).css({'fill':'#d534eb'});
			}else{
				$(power).css({'fill':'green'});
				$(common).css({'fill':'green'});
			};
		}

		function binary_outs_function(binary_selection,threept_str,y_str,binary_terminal,threept,vav,fpb,wshp,fcu,lab,fh,cenfunc){
			$(binary_selection).each(function() {
				binary_str = $( this ).val();
				binary_txt = $( this ).text();
				if(binary_str != 'X'){
					$(threept).prop('selectedIndex',0);
					$(threept).hide()
					$(binary_terminal).css({'fill':'green'});
				}
				else{
					if(y_str == 'X' && binary_str == 'X'){
						if(func_str == "1"){
							$(vav).show();
						}else if(func_str == "2"){
							$(fpb).show();
						}else if(func_str == "3"){
							$(wshp).show();
						}else if(func_str == "4"){
							$(fcu).show();
						}else if(func_str == "5"){
							$(lab).show();
						}else if(func_str == "6"){
							$(fh).show();
						}else if(func_str == "7"){
							$(cenfunc).show();
						}
					};
					if(threept_str == 'X'){
						$(binary_terminal).css({'fill':'#f5f5f5'});
					}
					else if(threept_str == 'S'){
						$(binary_terminal).css({'fill':'#d534eb'});
					}
					else{
						$(binary_terminal).css({'fill':'green'});
					}
				};
			});
			return [binary_str,binary_txt];
		}

		function three_pts_common_function(threept_str,first_str,second_str,threept_common){
			if(threept_str == 'S' || first_str == 'S' || second_str == 'S'){
				$(threept_common).css({'fill':'#d534eb'});
			}else if(threept_str == 'X' && first_str == 'X' && second_str == 'X'){
				$(threept_common).css({'fill':'#f5f5f5'});
			}else{
				$(threept_common).css({'fill':'green'});
			}
		}

		function di_bi_function(dibi_selection,terminal,common){
			$(dibi_selection).each(function() {
				dibi_str = $( this ).val();
				if(dibi_str == 'X'){
					$(terminal).css({'fill':'#f5f5f5'});
					$(common).css({'fill':'#f5f5f5'});
				}
				else if(dibi_str == 'S'){
					$(terminal).css({'fill':'#d534eb'});
					$(common).css({'fill':'#d534eb'});
				}
				else{
					$(terminal).css({'fill':'green'});
					$(common).css({'fill':'green'});
				}
			});
			return dibi_str;
		}

		function analog_inputs_function(ai_selection,terminal1,terminal2){
			$(ai_selection).each(function() {
				analog_x_str = $( this ).val();
				analog_x_txt = $( this ).text();
				analog_x_str = analog_x_str.replace("X","");
				if(analog_x_str.length == 0){
					analog_x_str += 'X';
				}
				if($(this).val() == 'X'){
					$(terminal1).css({'fill':'#f5f5f5'});
					$(terminal2).css({'fill':'#f5f5f5'});
				}
				else if($(this).val() == 'S'){
					$(terminal1).css({'fill':'#d534eb'});
					$(terminal2).css({'fill':'#d534eb'});
				}
				else{
					$(terminal1).css({'fill':'green'});
					$(terminal2).css({'fill':'green'});
				}
			});
			return [analog_x_str,analog_x_txt];
		}

		function analog_input_common_function(string1,string2,terminal1,terminal2){
			if(string1 == "X" && string2 == "X"){
				$(terminal1).css({'fill':'#f5f5f5'});
				$(terminal2).css({'fill':'#f5f5f5'});
			}
			else if(string1 == "S" || string2 == "S"){
				$(terminal1).css({'fill':'#d534eb'});
				$(terminal2).css({'fill':'#d534eb'});
			}
			else{
				$(terminal1).css({'fill':'green'});
				$(terminal2).css({'fill':'green'});
			}
		}

		function pressure_function(pressure_selection,terminal1,terminal2){
			$(pressure_selection).each(function() {
				pressure_str = $( this ).val();
				pressure_txt = $( this ).text();
				if(pressure_str == 'W' || pressure_str == 'Y'){
					$(terminal1).css({'fill':'#40ff00'});
					$(terminal2).css({'fill':'#40ff00'});
				}else if(pressure_str == 'X'){
					$(terminal1).css({'fill':'#f5f5f5'});
					$(terminal2).css({'fill':'#f5f5f5'});
				};
			});
			return [pressure_str,pressure_txt];
		}

		function hide_n_show(func_show,func_hide1,func_hide2,func_hide3,func_hide4,func_hide5,func_hide6){
			$(func_hide1).hide();
			$(func_hide2).hide();
			$(func_hide3).hide();
			$(func_hide4).hide();
			$(func_hide5).hide();
			$(func_hide6).hide();
			$(func_show).show();
		}

		function arrayRemove(arr, value) {
	        return arr.filter(function(ele){
	            return ele != value;
	        });
	    }
		/*
		*
		// **** 3PT SELECTION ***
		*
		*/
		var threepts_txt_arr = [];
		threepts_str_arr.push(threepts_function(y1y2_str,"#y1bo","#y2bo")[0]);
		threepts_str_arr.push(threepts_function(y3y4_str,"#y3bo","#y4bo")[0]);
		threepts_str_arr.push(threepts_function(y5y6_str,"#y5bo","#y6bo")[0]);
		threepts_str_arr.push(threepts_function(y7y8_str,"#y7bo","#y8bo")[0]);
		threepts_txt_arr.push(threepts_function(y1y2_str,"#y1bo","#y2bo")[1]);
		threepts_txt_arr.push(threepts_function(y3y4_str,"#y3bo","#y4bo")[1]);
		threepts_txt_arr.push(threepts_function(y5y6_str,"#y5bo","#y6bo")[1]);
		threepts_txt_arr.push(threepts_function(y7y8_str,"#y7bo","#y8bo")[1]);
		/*
		*
		// **** KNX SELECTION ***
		*
		*/
		var knx_txt_arr = [];
		for(var i=1;i<21;i++){
			if(func_str == "1"){
				knx_option = "select#vav-knx-"+i+" option:selected";
			}else if(func_str == "2"){
				knx_option = "select#fpb-knx-"+i+" option:selected";
			}else if(func_str == "3"){
				knx_option = "select#wshp-knx-"+i+" option:selected";
			}else if(func_str == "4"){
				knx_option = "select#fcu-knx-"+i+" option:selected";
			}else if(func_str == "5"){
				knx_option = "select#lab-knx-"+i+" option:selected";
			}else if(func_str == "6"){
				knx_option = "select#fh-knx-"+i+" option:selected";
			}else if(func_str == "7"){
				knx_option = "select#cenfunc-knx-"+i+" option:selected";
			}
			else{
				knx_option = "select#vav-knx-"+i+" option:selected";
			}
			knx_str_arr.push(knx_function(knx_option,knx_terminal_arr[i-1])[0]);
			knx_txt_arr.push(knx_function(knx_option,knx_terminal_arr[i-1])[1]);
		}
		/*
		*
		// **** 10 Volt Selection ***
		*
		*/
		var tenvolt_txt_arr = [];
		if(type_str == 'E'){
			tenvolt_str_arr.push(zten_function(y10_18_str,y10,m10y10,m10y10common)[0]);
			tenvolt_str_arr.push(zten_function(y20_18_str,y20)[0]);
			tenvolt_txt_arr.push(zten_function(y10_18_str,y10,m10y10,m10y10common)[1]);
			tenvolt_txt_arr.push(zten_function(y20_18_str,y20)[1]);
		}
		else{
			tenvolt_str_arr.push(zten_function(y10_str,y10,m10y10,m10y10common)[0]);
			tenvolt_str_arr.push(zten_function(y20_str,y20)[0]);
			tenvolt_txt_arr.push(zten_function(y10_str,y10,m10y10,m10y10common)[1]);
			tenvolt_txt_arr.push(zten_function(y20_str,y20)[1]);
		}
		tenvolt_str_arr.push(zten_function(y30_str,y30)[0]);
		tenvolt_str_arr.push(zten_function(y40_str,y40)[0]);
		tenvolt_txt_arr.push(zten_function(y30_str,y30)[1]);
		tenvolt_txt_arr.push(zten_function(y40_str,y40)[1]);
		zten_common_function(tenvolt_str_arr[0],tenvolt_str_arr[1],y10power,y10common);
		zten_common_function(tenvolt_str_arr[2],tenvolt_str_arr[3],y30power,y30common);
		/*
		*
		// **** Binary Output Selection ***
		*
		*/
		var binary_txt_arr = [];
		if(type_str == 'E'){
			binary_str_arr.push(binary_outs_function("select#y1bo option:selected",threepts_str_arr[0],binary_str_arr[1],y1,".y1y2-3pt","#vav-18-y1y2","#fpb-18-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[0]);
			binary_str_arr.push(binary_outs_function("select#y2bo option:selected",threepts_str_arr[0],binary_str_arr[0],y2,".y1y2-3pt","#vav-18-y1y2","#fpb-18-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[0]);
			binary_str_arr.push(binary_outs_function("select#y3bo option:selected",threepts_str_arr[1],binary_str_arr[3],y3,".y3y4-3pt","#vav-18-y3y4","#fpb-18-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[0]);
			binary_str_arr.push(binary_outs_function("select#y4bo option:selected",threepts_str_arr[1],binary_str_arr[2],y4,".y3y4-3pt","#vav-18-y3y4","#fpb-18-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[0]);
			binary_txt_arr.push(binary_outs_function("select#y1bo option:selected",threepts_str_arr[0],binary_str_arr[1],y1,".y1y2-3pt","#vav-18-y1y2","#fpb-18-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[1]);
			binary_txt_arr.push(binary_outs_function("select#y2bo option:selected",threepts_str_arr[0],binary_str_arr[0],y2,".y1y2-3pt","#vav-18-y1y2","#fpb-18-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[1]);
			binary_txt_arr.push(binary_outs_function("select#y3bo option:selected",threepts_str_arr[1],binary_str_arr[3],y3,".y3y4-3pt","#vav-18-y3y4","#fpb-18-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[1]);
			binary_txt_arr.push(binary_outs_function("select#y4bo option:selected",threepts_str_arr[1],binary_str_arr[2],y4,".y3y4-3pt","#vav-18-y3y4","#fpb-18-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[1]);
		}
		else{
			binary_str_arr.push(binary_outs_function("select#y1bo option:selected",threepts_str_arr[0],binary_str_arr[1],y1,".y1y2-3pt","#vav-12-y1y2","#fpb-12-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[0]);
			binary_str_arr.push(binary_outs_function("select#y2bo option:selected",threepts_str_arr[0],binary_str_arr[0],y2,".y1y2-3pt","#vav-12-y1y2","#fpb-12-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[0]);
			binary_str_arr.push(binary_outs_function("select#y3bo option:selected",threepts_str_arr[1],binary_str_arr[3],y3,".y3y4-3pt","#vav-12-y3y4","#fpb-12-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[0]);
			binary_str_arr.push(binary_outs_function("select#y4bo option:selected",threepts_str_arr[1],binary_str_arr[2],y4,".y3y4-3pt","#vav-12-y3y4","#fpb-12-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[0]);
			binary_txt_arr.push(binary_outs_function("select#y1bo option:selected",threepts_str_arr[0],binary_str_arr[1],y1,".y1y2-3pt","#vav-12-y1y2","#fpb-12-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[1]);
			binary_txt_arr.push(binary_outs_function("select#y2bo option:selected",threepts_str_arr[0],binary_str_arr[0],y2,".y1y2-3pt","#vav-12-y1y2","#fpb-12-y1y2","wshp-y1y2-3pt","fcu-y1y2-3pt","lab-y1y2-3pt","fh-y1y2-3pt","cenfunc-y1y2-3pt")[1]);
			binary_txt_arr.push(binary_outs_function("select#y3bo option:selected",threepts_str_arr[1],binary_str_arr[3],y3,".y3y4-3pt","#vav-12-y3y4","#fpb-12-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[1]);
			binary_txt_arr.push(binary_outs_function("select#y4bo option:selected",threepts_str_arr[1],binary_str_arr[2],y4,".y3y4-3pt","#vav-12-y3y4","#fpb-12-y3y4","wshp-y3y4-3pt","fcu-y3y4-3pt","lab-y3y4-3pt","fh-y3y4-3pt","cenfunc-y3y4-3pt")[1]);
		}
		binary_str_arr.push(binary_outs_function("select#y5bo option:selected",threepts_str_arr[2],binary_str_arr[5],y5,".y5y6-3pt","#vav-y5y6-3pt","#fpb-y5y6-3pt","wshp-y5y6-3pt","fcu-y5y6-3pt",undefined,undefined,"cenfunc-y5y6-3pt")[0]);
		binary_str_arr.push(binary_outs_function("select#y6bo option:selected",threepts_str_arr[2],binary_str_arr[4],y6,".y5y6-3pt","#vav-y5y6-3pt","#fpb-y5y6-3pt","wshp-y5y6-3pt","fcu-y5y6-3pt",undefined,undefined,"cenfunc-y5y6-3pt")[0]);
		binary_str_arr.push(binary_outs_function("select#y7bo option:selected",threepts_str_arr[3],binary_str_arr[7],y7,".y7y8-3pt","#vav-y7y8-3pt","#fpb-y7y8-3pt","wshp-y7y8-3pt","fcu-y7y8-3pt",undefined,undefined,"cenfunc-y7y8-3pt")[0]);
		binary_str_arr.push(binary_outs_function("select#y8bo option:selected",threepts_str_arr[3],binary_str_arr[6],y8,".y7y8-3pt","#vav-y7y8-3pt","#fpb-y7y8-3pt","wshp-y7y8-3pt","fcu-y7y8-3pt",undefined,undefined,"cenfunc-y7y8-3pt")[0]);
		binary_txt_arr.push(binary_outs_function("select#y5bo option:selected",threepts_str_arr[2],binary_str_arr[5],y5,".y5y6-3pt","#vav-y5y6-3pt","#fpb-y5y6-3pt","wshp-y5y6-3pt","fcu-y5y6-3pt",undefined,undefined,"cenfunc-y5y6-3pt")[1]);
		binary_txt_arr.push(binary_outs_function("select#y6bo option:selected",threepts_str_arr[2],binary_str_arr[4],y6,".y5y6-3pt","#vav-y5y6-3pt","#fpb-y5y6-3pt","wshp-y5y6-3pt","fcu-y5y6-3pt",undefined,undefined,"cenfunc-y5y6-3pt")[1]);
		binary_txt_arr.push(binary_outs_function("select#y7bo option:selected",threepts_str_arr[3],binary_str_arr[7],y7,".y7y8-3pt","#vav-y7y8-3pt","#fpb-y7y8-3pt","wshp-y7y8-3pt","fcu-y7y8-3pt",undefined,undefined,"cenfunc-y7y8-3pt")[1]);
		binary_txt_arr.push(binary_outs_function("select#y8bo option:selected",threepts_str_arr[3],binary_str_arr[6],y8,".y7y8-3pt","#vav-y7y8-3pt","#fpb-y7y8-3pt","wshp-y7y8-3pt","fcu-y7y8-3pt",undefined,undefined,"cenfunc-y7y8-3pt")[1]);
		three_pts_common_function(threepts_str_arr[0],binary_str_arr[0],binary_str_arr[1],y1y2common);
		three_pts_common_function(threepts_str_arr[1],binary_str_arr[2],binary_str_arr[3],y3y4common);
		three_pts_common_function(threepts_str_arr[2],binary_str_arr[4],binary_str_arr[5],y5y6common);
		three_pts_common_function(threepts_str_arr[3],binary_str_arr[6],binary_str_arr[7],y7y8common);
		/*
		*
		// **** Pressure Selection ***
		*
		*/
		var pressure_txt_arr = []
		pressure_str_arr.push(pressure_function("select#p1pres option:selected",pressure,m10press)[0]);
		pressure_str_arr.push(pressure_function("select#scom1pres option:selected")[0]);
		pressure_str_arr.push(pressure_function("select#scom2pres option:selected")[0]);
		pressure_str_arr.push(pressure_function("select#scom3pres option:selected")[0]);
		pressure_str_arr.push(pressure_function("select#scom4pres option:selected")[0]);
		pressure_txt_arr.push(pressure_function("select#p1pres option:selected",pressure,m10press)[1]);
		pressure_txt_arr.push(pressure_function("select#scom1pres option:selected")[1]);
		pressure_txt_arr.push(pressure_function("select#scom2pres option:selected")[1]);
		pressure_txt_arr.push(pressure_function("select#scom3pres option:selected")[1]);
		pressure_txt_arr.push(pressure_function("select#scom4pres option:selected")[1]);

		// SCOM Terminal Illumination

		if(scom1_str == 'X' && scom2_str == 'X' && scom3_str == 'X' && scom4_str == 'X'){
			$(scom).css({'fill':'#f5f5f5'});
		}else{
			$(scom).css({'fill':'#40ff00'});
		}
		/*
		*
		// **** Analog and Type17 DI Selection ***
		*
		*/
		var analog_txt_arr = [];
		if(type_str == 'E'){
			analog_str_arr.push(analog_inputs_function(x1_18_str,x1,m10x1)[0]);
			analog_str_arr.push(analog_inputs_function(x2_18_str,x2,m10x2)[0]);
			analog_txt_arr.push(analog_inputs_function(x1_18_str,x1,m10x1)[1]);
			analog_txt_arr.push(analog_inputs_function(x2_18_str,x2,m10x2)[1]);
		}
		else{
			analog_str_arr.push(analog_inputs_function(x1_str,x1,m10x1)[0]);
			analog_str_arr.push(analog_inputs_function(x2_str,x2,m10x2)[0]);
			analog_txt_arr.push(analog_inputs_function(x1_str,x1,m10x1)[1]);
			analog_txt_arr.push(analog_inputs_function(x2_str,x2,m10x2)[1]);
		}
		analog_str_arr.push(analog_inputs_function(x3_str,x3)[0]);
		analog_str_arr.push(analog_inputs_function(x4_str,x4)[0]);
		analog_txt_arr.push(analog_inputs_function(x3_str,x3)[1]);
		analog_txt_arr.push(analog_inputs_function(x4_str,x4)[1]);
		if(func_str == '5'){
			analog_str_arr.push(di_bi_function("select#lab-d1bi option:selected",d1,d1common)[0]);
			analog_str_arr.push(di_bi_function("select#lab-d2bi option:selected",d2)[0]);
			analog_str_arr.push(di_bi_function("select#lab-d3bi option:selected",d3)[0]);
			analog_txt_arr.push(di_bi_function("select#lab-d1bi option:selected",d1,d1common)[1]);
			analog_txt_arr.push(di_bi_function("select#lab-d2bi option:selected",d2)[1]);
			analog_txt_arr.push(di_bi_function("select#lab-d3bi option:selected",d3)[1]);
		}else if(func_str == '6'){
			analog_str_arr.push(di_bi_function("select#fh-d1bi option:selected",d1,d1common)[0]);
			analog_str_arr.push(di_bi_function("select#fh-d2bi option:selected",d2)[0]);
			analog_str_arr.push(di_bi_function("select#fh-d3bi option:selected",d3)[0]);
			analog_txt_arr.push(di_bi_function("select#fh-d1bi option:selected",d1,d1common)[1]);
			analog_txt_arr.push(di_bi_function("select#fh-d2bi option:selected",d2)[1]);
			analog_txt_arr.push(di_bi_function("select#fh-d3bi option:selected",d3)[1]);
		}
		analog_input_common_function(analog_str_arr[0],analog_str_arr[1],x1common,m10x1common);
		analog_input_common_function(analog_str_arr[2],analog_str_arr[3],x3common);
		analog_input_common_function(analog_str_arr[5],analog_str_arr[6],d2common);
		/*
		*
		Binary/Digital Input Functionality:
		Collecting string inputs for the standard name and establishing
		terminal changes to inputs D1 (type-12)
		terminal changes to inputs B1 - B2 (type-17)
		terminal changes to inputs D1 - D2 (type-18)
		*
		*/
		//
		$(b1d1bi_str).each(function() {
			b1d1_str += $( this ).val();
			b1d1bi_txt += $( this ).text();
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
		$(b2d2bi_str).each(function() {
			b2d2_str += $( this ).val();
			b2d2bi_txt += $( this ).text();
			if(type_str == 'E' || type_str == 'F' || type_str == 'G'){
				if($(this).val() == 'X'){
					$(b2d2).css({'fill':'#f5f5f5'});
				}
				else{
					$(b2d2).css({'fill':'green'});
				}
			}
		});

		analog_txt_arr.push(b1d1bi_txt);
		analog_txt_arr.push(b2d2bi_txt);

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
			var layout_hide = [type12,type17,m10pl,$('span.lab-d1d2d3'),$('select.lab-d1d2d3'),$("select#scom1pres"),
				$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres"),$("select#p1pres"),$("#vav-12-y1y2"),$("#vav-12-y3y4"),$("#fpb-12-y1y2"),$("#fpb-12-y3y4")];
			var layout_show = [type18,y1y2text,dxrrunsvc,usb,$('span#b2d2-badge'),$('span.x3x4-badge')];
			var layout_prop = [$(pressure)];
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
			if(func_str == "1"){
				hide_n_show(".func_str_1",".func_str_2",".func_str_3",".func_str_4",".func_str_5",".func_str_6",".func_str_7")
				$("#vav-12-y1y2").hide();
				$("#vav-12-y3y4").hide();
				$("#vav-12x1ai").hide();
				$("#vav-12x2ai").hide();
				$("#vav-12-y10").hide();
				$("#vav-12-y20").hide();
			}else if(func_str =="2"){
				hide_n_show(".func_str_2",".func_str_1",".func_str_3",".func_str_4",".func_str_5",".func_str_6",".func_str_7")
				$("#fpb-12-y1y2").hide();
				$("#fpb-12-y3y4").hide();
				$("#fpb-12x1ai").hide();
				$("#fpb-12x2ai").hide();
				$("#fpb-12-y10").hide();
				$("#fpb-12-y20").hide();
			}
			else if(func_str =="3"){
				hide_n_show(".func_str_3",".func_str_1",".func_str_2",".func_str_4",".func_str_5",".func_str_6",".func_str_7")
			}else if(func_str =="4"){
				hide_n_show(".func_str_4",".func_str_1",".func_str_2",".func_str_3",".func_str_5",".func_str_6",".func_str_7")
			}else if(func_str =="7"){
				hide_n_show(".func_str_7",".func_str_1",".func_str_2",".func_str_3",".func_str_4",".func_str_5",".func_str_6")
			}
			if(binary_str_arr[0] == 'X' && binary_str_arr[1] == 'X'){
				if(func_str == "1"){
					$("#fpb-18-y1y2").prop('selectedIndex',0);
					$("#fpb-18-y1y2").hide();
					$("#vav-18-y1y2").show();
				}
			else if(func_str == "2"){
				$("#vav-18-y1y2").prop('selectedIndex',0);
				$("#vav-18-y1y2").hide();
				$("#fpb-18-y1y2").show();
				}
			}
			else{
				$("select.y1y2-3pt").hide();
			}
			if(binary_str_arr[2] == 'X' && binary_str_arr[3] == 'X'){
				if(func_str == "1"){
					$("#vav-18-y3y4").show();
					$("#fpb-18-y3y4").prop('selectedIndex',0);
					$("#fpb-18-y3y4").hide();
				}
			else if(func_str == "2"){
				$("#vav-18-y3y4").prop('selectedIndex',0);
				$("#vav-18-y3y4").hide();
				$("#fpb-18-y3y4").show();
				}
			}
			else{
				$("select.y3y4-3pt").hide();
			}
			if(binary_str_arr[4] == 'X' && binary_str_arr[5] == 'X'){
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

			if(binary_str_arr[6] == 'X' && binary_str_arr[7] == 'X'){
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
				type17,y1y2text,dxrrunsvc,usb,$('span.lab-d1d2d3'),$('span#b2d2-badge'),
				$('span.x3x4-badge'),$("select#scom1pres"),$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres")]

			var layout_prop = [$("select.y5y6-3pt"),$("select#y5bo"),$("select#y6bo"),$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo")]

			$('span#b1d1-badge').text('B1');
			$('span#b2d2-badge').text('B2');

			$(layout_prop).each(function(){
				$(this).prop('selectedIndex',0);
			});
			if(func_str == '5'){
				hide_n_show(".func_str_5",".func_str_1",".func_str_2",".func_str_3",".func_str_4",".func_str_6",".func_str_7")
			}else{
				hide_n_show(".func_str_6",".func_str_1",".func_str_2",".func_str_3",".func_str_4",".func_str_5",".func_str_7")
			}
			if(type_str == 'F'){
				$("select#lab-17CX-y30").prop('selectedIndex',0);
				$("select#lab-17CX-y40").prop('selectedIndex',0);
				$("select#lab-17CX-y30").hide();
				$("select#lab-17CX-y40").hide();
			}if(type_str == 'G'){
				$("select#lab-17C-y30").prop('selectedIndex',0);
				$("select#lab-17C-y40").prop('selectedIndex',0);
				$("select#lab-17C-y30").hide();
				$("select#lab-17C-y40").hide();
			}
			$(layout_hide).each(function(){
				$(this).hide();
			});
			$(layout_show).each(function(){
				$(this).show();
			});
			if(binary_str_arr[0] == 'X' && binary_str_arr[1] == 'X'){
				if(func_str == "5"){
					$("#fh-y1y2-3pt").prop('selectedIndex',0);
					$("#fh-y1y2-3pt").hide();
					$("#lab-y1y2-3pt").show();
				}
			else if(func_str == "6"){
				$("#lab-y1y2-3pt").prop('selectedIndex',0);
				$("#lab-y1y2-3pt").hide();
				$("#fh-y1y2-3pt").show();
				}
			}
			else{
				$("select.y1y2-3pt").hide();
			}
			if(binary_str_arr[2] == 'X' && binary_str_arr[3] == 'X'){
				if(func_str == "5"){
					$("#fh-y3y4-3pt").prop('selectedIndex',0);
					$("#fh-y3y4-3pt").hide();
					$("#lab-y3y4-3pt").show();
				}
			else if(func_str == "6"){
				$("#lab-y3y4-3pt").prop('selectedIndex',0);
				$("#lab-y3y4-3pt").hide();
				$("#fh-y3y4-3pt").show();
				}
			}
			else{
				$("select.y3y4-3pt").hide();
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
				$('select.x3ai'),$('select.x4ai'),$('span.lab-d1d2d3'),$('span#b2d2-badge'),$('select.b2d2bi'),
				$('span.x3x4-badge'),$("select.y20"),$("select.y1y2-3pt"),$("select#y1bo"),$("select#y2bo"),$("#vav-18-y1y2"),$("#vav-18-y3y4"),$("#fpb-18-y1y2"),$("#fpb-18-y3y4")];
			var layout_show = [m10pl,$("select#p1pres")];
			var layout_prop = [
				$("#vav-18-y1y2"),$("#vav-18-y3y4"),$("#fpb-18-y1y2"),$("#fpb-18-y3y4"),
				$("select.y1y2-3pt"),$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),$("select.y20"),
				$("select.y30"),$("select.y40"),$("select#y1bo"),$("select#y2bo",$('select.x3ai'),$('select.x4ai'))]
			if(func_str == "1"){
				$("#vav-12x1ai").show();
				$("#vav-12x2ai").show();
				$("#vav-18x1ai").hide();
				$("#vav-18x2ai").hide();
				$("#vav-12-y10").show();
				$("#vav-12-y20").show();
				$("#vav-18-y10").hide();
				$("#vav-18-y20").hide();
			}
			$(layout_prop).each(function(){
				$(this).prop('selectedIndex',0);
			});
			$(layout_hide).each(function(){
				$(this).hide();
			});
			$(layout_show).each(function(){
				$(this).show();
			});
			if(binary_str_arr[2] == 'X' && binary_str_arr[3] == 'X'){
				if(func_str == "1"){
					$("#fpb-12-y3y4").prop('selectedIndex',0);
					$("#fpb-12-y3y4").hide();
					$("#vav-12-y3y4").show();
				}
				else if(func_str == "2"){
					$("#vav-12-y3y4").prop('selectedIndex',0);
					$("#vav-12-y3y4").hide();
					$("#fpb-12-y3y4").show();
				}
			}
		}


		else{
			$(dxrvoltageout).show();
			$(dxrtopinputs).show();

			var layout_hide = [
			type18,type17,
			$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),
			$("select.y30"),$("select.y40"),
			$("select#scom1pres"),$("select#scom2pres"),$("select#scom3pres"),$("select#scom4pres"),
			$('select.lab-d1d2d3'),$('span.lab-d1d2d3'),$('span#b2d2-badge'),$('select.b2d2bi'),
			$('select.x3ai'),$('select.x4ai'),$('span.x3x4-badge'),$("#vav-18-y1y2"),$("#vav-18-y3y4"),$("#fpb-18-y1y2"),$("#fpb-18-y3y4")];

			var layout_show = [
			$(type12),$(y1y2text),$(pressure),$(pressuretext),$(dxrrunsvc),$(usb),
			$("select#p1pres"),$("select#vav-y20")]

			var layout_prop = [
			$("#vav-18-y1y2"),$("#vav-18-y3y4"),$("#fpb-18-y1y2"),$("#fpb-18-y3y4"),
			$("select.y7y8-3pt"),$("select#y7bo"),$("select#y8bo"),
			$("select.y30"),$("select.y40",$('select.x3ai'),$('select.x4ai'))]
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
			if(func_str == "1"){
				$("#vav-12x1ai").show();
				$("#vav-12x2ai").show();
				$("#vav-18x1ai").hide();
				$("#vav-18x2ai").hide();
				$("#vav-12-y10").show();
				$("#vav-12-y20").show();
				$("#vav-18-y10").hide();
				$("#vav-18-y20").hide();
			}
			else if(func_str == "2"){
				$("#fpb-12x1ai").show();
				$("#fpb-12x2ai").show();
				$("#fpb-18x1ai").hide();
				$("#fpb-18x2ai").hide();
				$("#fpb-12-y10").show();
				$("#fpb-12-y20").show();
				$("#fpb-18-y10").hide();
				$("#fpb-18-y20").hide();
			}
			// 3PT Floating and Binary Outputs
			if(binary_str_arr[0] == 'X' && binary_str_arr[1] == 'X'){
				if(func_str == "1"){
					$("#fpb-12-y1y2").prop('selectedIndex',0);
					$("#fpb-12-y1y2").hide();
					$("#vav-12-y1y2").show();
				}
				else if(func_str == "2"){
					$("#vav-12-y1y2").prop('selectedIndex',0);
					$("#vav-12-y1y2").hide();
					$("#fpb-12-y1y2").show();
				}
			}
			if(binary_str_arr[2] == 'X' && binary_str_arr[3] == 'X'){
				if(func_str == "1"){
					$("#fpb-12-y3y4").prop('selectedIndex',0);
					$("#fpb-12-y3y4").hide();
					$("#vav-12-y3y4").show();
				}
				else if(func_str == "2"){
					$("#vav-12-y3y4").prop('selectedIndex',0);
					$("#vav-12-y3y4").hide();
					$("#fpb-12-y3y4").show();
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
	    threepts_txt_arr = arrayRemove(threepts_txt_arr, "None");
	    tenvolt_txt_arr = arrayRemove(tenvolt_txt_arr, "None");
	    binary_txt_arr = arrayRemove(binary_txt_arr, "None");
	    analog_txt_arr = arrayRemove(analog_txt_arr, "None");
	    pressure_txt_arr = arrayRemove(pressure_txt_arr, "None");
	    knx_txt_arr = arrayRemove(knx_txt_arr, "None");
		var DXR = dxr_str + type_str + func_str + "_";
		var AO3pt = "";
		for(var i=0;i<threepts_str_arr.length;i++){
			AO3pt += threepts_str_arr[i];
		}
		AO3pt = AO3pt + "_";
		var AOten = "";
		for(var i=0;i<tenvolt_str_arr.length;i++){
			AOten += tenvolt_str_arr[i];
		}
		AOten = AOten + "_";
		var BO = "";
		for(var i=0;i<binary_str_arr.length;i++){
			BO += binary_str_arr[i];
		}
		BO = BO + "_";
		// var IN = b1d1_str + b2d2_str + x1_str + x2_str + x3_str + x4_str + d1bi_str + d2bi_str + d3bi_str + "_";
		var IN = "";
		for(var i=0;i<analog_str_arr.length;i++){
			IN += analog_str_arr[i];
		}
		IN = b1d1_str + b2d2_str + IN + "_";
		var PRES = "";
		for(var i=0;i<pressure_str_arr.length;i++){
			PRES += pressure_str_arr[i];
		}
		PRES = PRES + "_";
		var KNX = "";
		for(var i=0;i<knx_str_arr.length;i++){
			KNX += knx_str_arr[i];
		}
		var sorted_knx = knx_str_arr.sort();
		var double_knx = []; // 1 or more
		var triple_knx = []; // 2 or more
		var quad_knx = []; // 3 or more
		var overload_knx = []; // 4 or more
		for(var i=0;i<sorted_knx.length - 1;i++){
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i] != "X"){
				double_knx.push(sorted_knx[i])
			}
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i+2]==sorted_knx[i] && sorted_knx[i] != "X"){
				triple_knx.push(sorted_knx[i])
			}
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i+2]==sorted_knx[i] && sorted_knx[i+3]==sorted_knx[i] && sorted_knx[i] != "X"){
				quad_knx.push(sorted_knx[i])
			}
			if(sorted_knx[i+1]==sorted_knx[i] && sorted_knx[i+2]==sorted_knx[i] && sorted_knx[i+3]==sorted_knx[i] && sorted_knx[i+4]==sorted_knx[i] && sorted_knx[i] != "X"){
				overload_knx.push(sorted_knx[i])
			}
		}
		double_knx = [...new Set(double_knx)];
		triple_knx = [...new Set(triple_knx)];
		quad_knx = [...new Set(quad_knx)];
		overload_knx = [...new Set(overload_knx)];
		// doubles
		// triples
		// quads
		var stats = ["A","B","C","D","E","F","G"]
		var doubles = ["Z","f","g","l","m","U"];
		var triples = ["A","B","C","D","E","F","G","H","K","L","M","R","T","V","W","Y","a","b","c","d","e","j","k","y"];
		var quads = ["I","h","i"];
		var overloads = ["J","N","O","P","Q","n","o","p","q"];
		var knx_purp = []
		for(var i=0;i<doubles.length;i++){
			if(double_knx.includes(doubles[i])){
				knx_purp.push(doubles[i]);
			}
		}
		for(var i=0;i<triples.length;i++){
			if(triple_knx.includes(triples[i])){
				knx_purp.push(triples[i]);
			}
		}
		for(var i=0;i<quads.length;i++){
			if(quad_knx.includes(quads[i])){
				knx_purp.push(quads[i]);
			}
		}
		for(var i=0;i<overloads.length;i++){
			if(overload_knx.includes(overloads[i])){
				knx_purp.push(overloads[i]);
			}
		}
		/*
		*
		*
		*
		*
		*/
		var knx_stat = [];
		for(var i=0;i<KNX.length;i++){
			if(KNX[i] != 'X'){
				knx_stat.push(KNX[i]);
			}
		}
		for(var i=0;i<knx_stat.length;i++){
			if(stats.includes(knx_stat[i])){
				stats = arrayRemove(stats,knx_stat[i]);
				i+=20;
			}
			for(var x=0;x<stats.length;x++){
				knx_purp.push(stats[x]);
			}
		}
		/*
		*
		*
		*
		*
		*/
		var knx_sensor = [];
		for(var i=0;i<KNX.length;i++){
			if(KNX[i] != 'X'){
				knx_sensor.push(KNX[i]);
			}
		}
		console.log(knx_purp);
		for(var i=0;i<knx_terminals.length-1;i++){
			if($(knx_terminals[i]).css("fill") == "rgb(0, 128, 0)" && knx_purp.includes(knx_last_value) && knx_terminals[i]["id"] == knx_last){
				$(knx_terminal_last).css({'fill':'#d534eb'});
			}
			if($(knx_terminals[i]).css("fill") == "rgb(213, 52, 235)" && knx_last_value != 'S' && !knx_purp.includes(knx_last_value) && knx_terminals[i]["id"] == knx_last){
				$(knx_terminal_last).css({'fill':'green'});
			}
		}
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
	        data: {
	        	name_encoded:str,
	        	hardware_encoded:DXR,
	        	threept_encoded:AO3pt,
	        	zten_encoded:AOten,
	        	bo_encoded:BO,
	        	inputs_encoded:IN,
	        	pres_encoded:PRES,
	        	knx_encoded:KNX,
	        	threept_names:threepts_txt_arr,
			    tenvolt_names:tenvolt_txt_arr,
			    binary_names:binary_txt_arr,
			    x1x4_names:analog_txt_arr,
			    pressure_names:pressure_txt_arr,
			    knx_names:knx_txt_arr
	        },
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
				$("a").remove();
				for(var i=0;i<data.results.length;i++){
				    var templateObj = JSON.parse(data.results[i]);
				    var url = 'get/'+templateObj.file_name;
				    var text = 'Hardware: ' + templateObj.hardware_encoded + " $ Triac: " + templateObj.threept_names + " $ 0-10V: " + templateObj.tenvolt_names + " $ BO: " + templateObj.binary_names + " $ Inputs: " + templateObj.x1x4_names + " $ Pressure: " + templateObj.pressure_names + " $ KNX: " + templateObj.knx_names;
				    $('#pageDisplay').append(`<a href="${url}" target="_blank">${text}</a>\n`);
			            console.log(i);
				    console.log(templateObj.template_name);
				}
				// console.log(data.results);
				$('#errorAlert').hide();
			}
		});
		});
	});
});
