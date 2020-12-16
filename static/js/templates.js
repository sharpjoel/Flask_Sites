$(document).ready(function(){
	
	$( "select#tempSelection" ).change(function() {

		let template = ""

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
				$( "#vav-12-y1y2" ).val("A");
				$( "#vav-y5y6-3pt" ).val("G");
				$( "#p1pres" ).val("W");
				$( "#vav-b1d1bi" ).val("h");
				$( "#vav-12x2ai" ).val("D");
				$( "#vav-knx-1" ).val("D");
			}
			else if(template == 'B'){
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("M");
				$( "#mtypeSelection" ).val("E");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("4");
				$( "#fcu-y5y6-3pt" ).val("G");
				$( "#fcu-y20" ).val("F");
				$( "#fcu-y1bo" ).val("V");
				$( "#fcu-b2d2bi" ).val("l");
				$( "#fcu-x2ai" ).val("D");
				$( "#fcu-knx-1" ).val("n");
			}
			else if(template == 'C'){ 
				// Reset values to default before setting template.
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("E");
				$( "#etypeSelection" ).val("C");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("1");
				$( "#vav-12-y1y2" ).val("E");
				$( "#vav-12-y3y4" ).val("E");
				$( "#p1pres" ).val("W");
				$( "#vav-12x1ai" ).val("G");
				$( "#vav-12x2ai" ).val("D");
				$( "#vav-knx-1" ).val("D");
			}
			else if(template == 'D'){
				// Reset values to default before setting template.
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("E");
				$( "#etypeSelection" ).val("E");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("3");
				$( "#wshp-y10" ).val("V");
				$( "#wshp-y20" ).val("c");
				$( "#wshp-y30" ).val("b");
				$( "#wshp-y1bo" ).val("V");
				$( "#wshp-y3bo" ).val("a");
				$( "#wshp-y5bo" ).val("F");
				$( "#wshp-y6bo" ).val("G");
				$( "#wshp-y7bo" ).val("Q");
				$( "#wshp-y8bo" ).val("W");
				$( "#wshp-b2d2bi" ).val("q");
				$( "#wshp-x1ai" ).val("1");
				$( "#wshp-x2ai" ).val("D");
				$( "#wshp-x3ai" ).val("v");
				$( "#wshp-x4ai" ).val("z");
				$( "#wshp-knx-1" ).val("G");
			}
			else if(template == 'E'){
				// Reset values to default before setting template.
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("E");
				$( "#etypeSelection" ).val("C");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("2");
				$( "#fpb-12-y1y2" ).val("A");
				$( "#fpb-y5y6-3pt" ).val("G");
				$( "#p1pres" ).val("W");
				$( "#fpb-y4bo" ).val("R");
				$( "#fpb-b1d1bi" ).val("q");
				$( "#fpb-12x2ai" ).val("D");
				$( "#fpb-knx-1" ).val("D");
			}
			else if(template == 'F'){ 
				// Reset values to default before setting template.
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("E");
				$( "#etypeSelection" ).val("F");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("6");
				$( "#fh-y10" ).val("B");
				$( "#fh-y1bo" ).val("f");
				$( "#fh-d1bi" ).val("h");
				$( "#fh-b1d1bi" ).val("°");
				$( "#scom1fh" ).val("C");
				$( "#fh-knx-1" ).val("u");
			}
			else if(template == 'G'){ 
				// Reset values to default before setting template.
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("E");
				$( "#etypeSelection" ).val("G");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("5");
				$( "#lab-y1y2-3pt" ).val("G");
				$( "#lab-y3y4-3pt" ).val("G");
				$( "#lab-y10" ).val("A");
				$( "#lab-y20" ).val("B");
				$( "#lab-17CX-y30" ).val("Y");
				$( "#lab-17CX-y40" ).val("Z");
				$( "#lab-d1bi" ).val("h");
				$( "#lab-x2ai" ).val("D");
				$( "#lab-x4ai" ).val("D");
				$( "#scom1sup" ).val("A");
				$( "#scom2exh" ).val("B");
				$( "#scom3sup" ).val("A");
				$( "#scom4exh" ).val("B");
				$( "#lab-knx-1" ).val("D");
			}
			else{
				$( ".select-reset" ).prop('selectedIndex',0);
			}
		});
	});
});