// Step 17: Create the jquery header function
$(document).ready(function(){

	var good = 'green';
	var bad = 'purple';

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
				$( "#funcSelection" ).val("1");
				$( "#vav-y1y2-3pt" ).val("A");
				$( "#y5y6-3pt" ).val("C");
				$( "#p1pres" ).val("A");
				$( "#b1d1bi" ).val("I");
				$( "#x2ai" ).val("C");
				$( "#knx-1" ).val("D");
			}
			else if(template == 'B'){
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("M");
				$( "#mtypeSelection" ).val("C");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("4");
				$( "#vav-y1y2-3pt" ).val("X");
				$( "#y3y4-3pt" ).val("C");
				$( "#y1b0" ).val("A");
				$( "#b1d1bi" ).val("A");
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
		var str = ""

		$("select#funcSelection").each(function(){
			func_str += $(this).val();
			if(func_str == "1"){

				var triac_show = [$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),$("#vav-y7y8-3pt")]
				var triac_hide = [
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
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),
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
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),
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
				

				var triac_show = [$("#lab-y1y2-3pt"),$("#lab-y3y4-3pt"),$("#lab-y5y6-3pt"),$("#lab-y7y8-3pt")]
				var triac_hide = [
				$("#wshp-y1y2-3pt"),$("#wshp-y3y4-3pt"),$("#wshp-y5y6-3pt"),$("#wshp-y7y8-3pt"),
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),
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
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),
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
				$("#vav-y1y2-3pt"),$("#vav-y3y4-3pt"),$("#vav-y5y6-3pt"),
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
				$("#funcSelection option[value='1']").hide();
				$("#funcSelection option[value='2']").hide();
				$("#funcSelection option[value='3']").hide();
				$("#funcSelection option[value='4']").hide();
				$("#funcSelection option[value='5']").show();
				$("#funcSelection option[value='6']").show();
				$("#funcSelection option[value='7']").hide();
				$("#y5y6-3pt").prop('selectedIndex',0);
				$("#y7y8-3pt").prop('selectedIndex',0);
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
				$("#y7y8-3pt").prop('selectedIndex',0);
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
				$("select#y7y8-3pt").prop('selectedIndex',0);
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

		// **** KNX SELECTION ***

		$( "select#knx-1 option:selected" ).each(function() {
			knx1_str += $( this ).val();
			if(knx1_str != 'X'){
				$('#knx-term-1').css('background-color','green');
			}
			else{
				$('#knx-term-1').css('background','');
			}
		});
		$( "select#knx-2 option:selected" ).each(function() {
			knx2_str += $( this ).val();
			if(knx2_str != 'X'){
				$('#knx-term-2').css('background-color','green');
			}
			else{
				$('#knx-term-2').css('background','');
			}
		});
		$( "select#knx-3 option:selected" ).each(function() {
			knx3_str += $( this ).val();
			if(knx3_str != 'X'){
				$('#knx-term-3').css('background-color','green');
			}
			else{
				$('#knx-term-3').css('background','');
			}
		});
		$( "select#knx-4 option:selected" ).each(function() {
			knx4_str += $( this ).val();
			if(knx4_str != 'X'){
				$('#knx-term-4').css('background-color','green');
			}
			else{
				$('#knx-term-4').css('background','');
			}
		});
		$( "select#knx-5 option:selected" ).each(function() {
			knx5_str += $( this ).val();
			if(knx5_str != 'X'){
				$('#knx-term-5').css('background-color','green');
			}
			else{
				$('#knx-term-5').css('background','');
			}
		});
		$( "select#knx-6 option:selected" ).each(function() {
			knx6_str += $( this ).val();
			if(knx6_str != 'X'){
				$('#knx-term-6').css('background-color','green');
			}
			else{
				$('#knx-term-6').css('background','');
			}
		});
		$( "select#knx-7 option:selected" ).each(function() {
			knx7_str += $( this ).val();
			if(knx7_str != 'X'){
				$('#knx-term-7').css('background-color','green');
			}
			else{
				$('#knx-term-7').css('background','');
			}
		});
		$( "select#knx-8 option:selected" ).each(function() {
			knx8_str += $( this ).val();
			if(knx8_str != 'X'){
				$('#knx-term-8').css('background-color','green');
			}
			else{
				$('#knx-term-8').css('background','');
			}
		});
		$( "select#knx-9 option:selected" ).each(function() {
			knx9_str += $( this ).val();
			if(knx9_str != 'X'){
				$('#knx-term-9').css('background-color','green');
			}
			else{
				$('#knx-term-9').css('background','');
			}
		});
		$( "select#knx-10 option:selected" ).each(function() {
			knx10_str += $( this ).val();
			if(knx10_str != 'X'){
				$('#knx-term-10').css('background-color','green');
			}
			else{
				$('#knx-term-10').css('background','');
			}
		});
		$( "select#knx-11 option:selected" ).each(function() {
			knx11_str += $( this ).val();
			if(knx11_str != 'X'){
				$('#knx-term-11').css('background-color','green');
			}
			else{
				$('#knx-term-11').css('background','');
			}
		});
		$( "select#knx-12 option:selected" ).each(function() {
			knx12_str += $( this ).val();
			if(knx12_str != 'X'){
				$('#knx-term-12').css('background-color','green');
			}
			else{
				$('#knx-term-12').css('background','');
			}
		});
		$( "select#knx-13 option:selected" ).each(function() {
			knx13_str += $( this ).val();
			if(knx13_str != 'X'){
				$('#knx-term-13').css('background-color','green');
			}
			else{
				$('#knx-term-13').css('background','');
			}
		});
		$( "select#knx-14 option:selected" ).each(function() {
			knx14_str += $( this ).val();
			if(knx14_str != 'X'){
				$('#knx-term-14').css('background-color','green');
			}
			else{
				$('#knx-term-14').css('background','');
			}
		});
		$( "select#knx-15 option:selected" ).each(function() {
			knx15_str += $( this ).val();
			if(knx15_str != 'X'){
				$('#knx-term-15').css('background-color','green');
			}
			else{
				$('#knx-term-15').css('background','');
			}
		});
		$( "select#knx-16 option:selected" ).each(function() {
			knx16_str += $( this ).val();
			if(knx16_str != 'X'){
				$('#knx-term-16').css('background-color','green');
			}
			else{
				$('#knx-term-16').css('background','');
			}
		});
		$( "select#knx-17 option:selected" ).each(function() {
			knx17_str += $( this ).val();
			if(knx17_str != 'X'){
				$('#knx-term-17').css('background-color','green');
			}
			else{
				$('#knx-term-17').css('background','');
			}
		});
		$( "select#knx-18 option:selected" ).each(function() {
			knx18_str += $( this ).val();
			if(knx18_str != 'X'){
				$('#knx-term-18').css('background-color','green');
			}
			else{
				$('#knx-term-18').css('background','');
			}
		});
		$( "select#knx-19 option:selected" ).each(function() {
			knx19_str += $( this ).val();
			if(knx19_str != 'X'){
				$('#knx-term-19').css('background-color','green');
			}
			else{
				$('#knx-term-19').css('background','');
			}
		});
		$( "select#knx-20 option:selected" ).each(function() {
			knx20_str += $( this ).val();
			if(knx20_str != 'X'){
				$('#knx-term-20').css('background-color','green');
			}
			else{
				$('#knx-term-20').css('background','');
			}
		});

		// *** 0-10 VOLT SELECTION ***

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

		// *** BINARY OUTPUT SELECTION ***

		$( "select#y1bo option:selected" ).each(function() {
			y1_str += $( this ).val();
			if(type_str == 'F' || type_str == 'G'){
				$(".y1y2-3pt").prop('selectedIndex',0);
				$("#y1bo").prop('selectedIndex',0);
				$(".y1y2-3pt").hide()
				$("#y1bo").hide();
				$("#y1").css('background','');
			}
			else{
				if(y1_str != 'X'){
					$(".y1y2-3pt").prop('selectedIndex',0);
					$(".y1y2-3pt").hide();
					$("#y1").css('background','green');
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
						$("#y1").css('background','');
					}
					else if(y1y2_str == 'S'){
						$("#y1").css('background','#d534eb');
					}
					else{
						$("#y1").css('background','green');
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
				$("#y2").css('background','');
			}
			else{
				if(y2_str != 'X'){
					$(".y1y2-3pt").prop('selectedIndex',0);
					$(".y1y2-3pt").hide()
					$("#y2").css('background','green');
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
						$("#y2").css('background','');
					}

					else if(y1y2_str == 'S'){
						$("#y2").css('background','#d534eb');
					}
					else{
						$("#y2").css('background','green');
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
				$("#y3").css('background','');
			}
			else{
				if(y3_str != 'X'){
					$(".y3y4-3pt").prop('selectedIndex',0);
					$(".y3y4-3pt").hide();
					$("#y3").css('background','green');
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
						$("#y3").css('background','');
					}
					else if(y3y4_str == 'S'){
						$("#y3").css('background','#d534eb');
					}
					else{
						$("#y3").css('background','green');
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
				$("#y4").css('background','');
			}
			else{
				if(y4_str != 'X'){
					$(".y3y4-3pt").prop('selectedIndex',0);
					$(".y3y4-3pt").hide()
					$("#y4").css('background','green');
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
						$("#y4").css('background','');
					}
					else if(y3y4_str == 'S'){
						$("#y4").css('background','#d534eb');
					}
					else{
						$("#y4").css('background','green');
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
				$("#y5").css('background','');
			}
			else{
				if(y5_str != 'X'){
					$(".y5y6-3pt").prop('selectedIndex',0);
					$(".y5y6-3pt").hide();
					$("#y5").css('background','green');
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
						$("#y5").css('background','');
					}
					else if(y5y6_str == 'S'){
						$("#y5").css('background','#d534eb');
					}
					else{
						$("#y5").css('background','green');
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
				$("#y6").css('background','');
			}
			else{
				if(y6_str != 'X'){
					$(".y5y6-3pt").prop('selectedIndex',0);
					$(".y5y6-3pt").hide()
					$("#y6").css('background','green');
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
						$("#y6").css('background','');
					}
					else if(y5y6_str == 'S'){
						$("#y6").css('background','#d534eb');
					}
					else{
						$("#y6").css('background','green');
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
				$("#y7").css('background','');
			}
			else{
				if(y7_str != 'X'){
					$(".y7y8-3pt").prop('selectedIndex',0);
					$(".y7y8-3pt").hide();
					console.log("Checking Y7");
					$("#y7").css('background','green');
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
						$("#y7").css('background','');
					}
					else if(y7y8_str == 'S'){
						$("#y7").css('background','#d534eb');
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
				$(".y7y8-3pt").prop('selectedIndex',0);
				$("#y8bo").prop('selectedIndex',0);
				$(".y7y8-3pt").hide()
				$("#y8bo").hide();
				$("#y8").css('background','');
			}
			else{
				if(y8_str != 'X'){
					$(".y7y8-3pt").prop('selectedIndex',0);
					$(".y7y8-3pt").hide()
					$("#y8").css('background','green');
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
						$("#y8").css('background','');
					}
					else if(y7y8_str == 'S'){
						$("#y8").css('background','#d534eb');
					}
					else{
						$("#y8").css('background','green');
					}
				};
			};
		});

		// *** PRESSURE SELECTION ***

		$( "select#p1pres option:selected" ).each(function() {
			p1_str += $( this ).val();
			if(p1_str != 'X'){
				$(".p1-single").css('background','green');
				$(".inner").css('background','green');
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

		// *** INPUT SELECTION ***

		$( "select#d1bi option:selected" ).each(function() {
			d1bi_str += $( this ).val();
			if(d1bi_str == 'X'){
				$("#d1").css('background','');
			}
			else{
				$("#d1").css('background','green');
			}
		});
		$( "select#d2bi option:selected" ).each(function() {
			d2bi_str += $( this ).val();
			if(d2bi_str == 'X'){
				$("#d2").css('background','');
			}
			else{
				$("#d2").css('background','green');
			}
		});
		$( "select#d3bi option:selected" ).each(function() {
			d3bi_str += $( this ).val();
			if(d3bi_str == 'X'){
				$("#d3").css('background','');
			}
			else{
				$("#d3").css('background','green');
			}
		});
		$( "select#x1ai option:selected" ).each(function() {
			x1_str += $( this ).val();
			if(x1_str == 'X'){
				$("#x1").css('background','');
			}
			else{
				$("#x1").css('background','green');
			}
		});
		$( "select#x2ai option:selected" ).each(function() {
			x2_str += $( this ).val();
			if(x2_str == 'X'){
				$("#x2").css('background','');
			}
			else{
				$("#x2").css('background','green');
			}
		});
		$( "select#x3ai option:selected" ).each(function() {
			x3_str += $( this ).val();
			if(x3_str == 'X'){
				$("#x3").css('background','');
			}
			else{
				$("#x3").css('background','green');
			}
		});
		$( "select#x4ai option:selected" ).each(function() {
			x4_str += $( this ).val();
			if(x4_str == 'X'){
				$("#x4").css('background','');
			}
			else{
				$("#x4").css('background','green');
			}
		});

		//

		var type_str = etype_str + mtype_str + ptype_str
		console.log("type string is: " + type_str)

		//

		$( "select#b1d1bi option:selected" ).each(function() {
			b1d1_str += $( this ).val();
			if((type_str == 'E' || type_str == 'F' || type_str == 'G') && b1d1_str == 'X'){
				$("#B1D1").css('background','');
			}
			else if((type_str != 'E' && type_str != 'F' && type_str != 'G') && b1d1_str == 'X'){
				$("#B1D1").css('background','');
				$("#B2D2").css('background','');
			}
			else if(type_str != 'E' && type_str != 'F' && type_str != 'G' && b1d1_str != 'X'){
				$("#B2D2").css('background','green');
			}
			else if((type_str == 'E' || type_str == 'F' || type_str == 'G') && b1d1_str != 'X'){
				$("#B1D1").css('background','green');
			}
		});
		$( "select#b2d2bi option:selected" ).each(function() {
			b2d2_str += $( this ).val();
			if(type_str == 'E' || type_str == 'F' || type_str == 'G')
				if(b2d2_str == 'X'){
					$("#B2D2").css('background','');
				}
				else{
					$("#B2D2").css('background','green');
				}
		});

		// Bottom Terminal Selection
		
		if(type_str == 'E'){
				$("#P1-container").hide();
				$("#scom-container").hide();
				$("#blank-container").show();
				$('#B1D1').css('visibility','visible');
				$('#B2D2').css('visibility','visible');
				$('span#b1d1-badge').text('D1');
				$('span#b2d2-badge').text('D2');
				$('span.lab-d1d2d3').hide();
				$('select.lab-d1d2d3').hide();
				$('span#b2d2-badge').show();
				$('select#b2d2bi').show();
				$('span.x3x4-badge').show();
				$('select#x3ai').show();
				$('select#x4ai').show();
				$('#b1d1text').text('D1');
				$('#b2d2text').text('D2');
				// $("select#y5bo").show();
				// $("select#y6bo").show();
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
			}
			else if(type_str == 'F'){
				$("#P1-container").hide();
				$("#scom-container").show();
				$("#blank-container").hide();
				$('#B1D1').css('visibility','visible');
				$('span#b1d1-badge').text('B1');
				$('span#b2d2-badge').text('B2');
				$('span.lab-d1d2d3').show();
				$('select.lab-d1d2d3').show();
				$('span#b2d2-badge').show();
				$('select#b2d2bi').show();
				$('span.x3x4-badge').show();
				$('select#x3ai').show();
				$('select#x4ai').show();
				$('#b1d1text').text('B1');
				$('#b2d2text').text('B2');
				$('#y5').css('visibility','hidden');
				$('#y6').css('visibility','hidden');
				$('#y7').css('visibility','hidden');
				$('#y8').css('visibility','hidden');
				$(".y30y40-container").css('visibility','visible');
				$(".x3x4-container").css('visibility','visible');
				$("select.y5y6-3pt").prop('selectedIndex',0);
				$("select.y5y6-3pt").hide();
				$("select#y5bo").prop('selectedIndex',0);
				$("select#y5bo").hide();
				$("select#y6bo").prop('selectedIndex',0);
				$("select#y6bo").hide();
				$("select.y7y8-3pt").prop('selectedIndex',0);
				$("select.y7y8-3pt").hide();
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
				$('span#b1d1-badge').text('B1');
				$('span#b2d2-badge').text('B2');
				$('span.lab-d1d2d3').show();
				$('select.lab-d1d2d3').show();
				$('span#b2d2-badge').show();
				$('select#b2d2bi').show();
				$('span.x3x4-badge').show();
				$('select#x3ai').show();
				$('select#x4ai').show();
				$('#b1d1text').text('B1');
				$('#b2d2text').text('B2');
				$('#y5').css('visibility','hidden');
				$('#y6').css('visibility','hidden');
				$('#y7').css('visibility','hidden');
				$('#y8').css('visibility','hidden');
				$(".y30y40-container").css('visibility','visible');
				$(".x3x4-container").css('visibility','visible');
				$("select.y5y6-3pt").prop('selectedIndex',0);
				$("select.y5y6-3pt").hide();
				$("select#y5bo").prop('selectedIndex',0);
				$("select#y5bo").hide();
				$("select#y6bo").prop('selectedIndex',0);
				$("select#y6bo").hide();
				$("select.y7y8-3pt").prop('selectedIndex',0);
				$("select.y7y8-3pt").hide();
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
				$('span.lab-d1d2d3').hide();
				$('span#b1d1-badge').text('D1');
				$('span#b2d2-badge').text('D2');
				$('span#b2d2-badge').hide();
				$('select#b2d2bi').hide();
				$('span.x3x4-badge').hide();
				$('select#x3ai').hide();
				$('select#x4ai').hide();
				$('select.lab-d1d2d3').hide();
				$('#b2d2text').text('D1');
				// $("select#y5y6-3pt").show();
				// $("select#y5bo").show();
				// $("select#y6bo").show();
				$('#y5').css('visibility','visible');
				$('#y6').css('visibility','visible');
				$('#y7').css('visibility','hidden');
				$('#y8').css('visibility','hidden');
				$(".y30y40-container").css('visibility','hidden');
				$(".x3x4-container").css('visibility','hidden');
				$("select.y7y8-3pt").prop('selectedIndex',0);
				$("select.y7y8-3pt").hide();
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
		var IN = b1d1_str + b2d2_str + x1_str + x2_str + x3_str + x4_str + d1bi_str + d2bi_str + d3bi_str + "_";
		var PRES = p1_str + scom1_str + scom2_str + scom3_str + scom4_str + "_";
		var KNX = knx1_str +  knx2_str +  knx3_str +  knx4_str +  knx5_str +  knx6_str +  knx7_str +  knx8_str +  knx9_str +  knx10_str;
		KNX = KNX + knx11_str +  knx12_str +  knx13_str +  knx14_str +  knx15_str +  knx16_str +  knx17_str +  knx18_str +  knx19_str +  knx20_str + "_";
		try {
		  var knx_alert = KNX.match(/A/g).length;
		  $('select.selection-knx option:selected').each(function(){
		  	if($(this).val() == 'A' && knx_alert > 1){
		  		$('.knx-terminal').css('background-color','#d534eb');
		  	}
		  });
		}
		catch(err) {
		  console.log("No characters!");
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