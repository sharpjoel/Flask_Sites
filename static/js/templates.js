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
				$( "#vav-y1y2-3pt" ).val("A");
				$( "#vav-y5y6-3pt" ).val("G");
				$( "#p1pres" ).val("W");
				$( "#vav-b1d1bi" ).val("h");
				$( "#vav-x2ai" ).val("K");
				$( "#knx-1" ).val("D");
			}
			else if(template == 'B'){
				$( ".select-reset" ).prop('selectedIndex',0);
				$( "#dxrSelection" ).val("M");
				$( "#mtypeSelection" ).val("C");
				$( "#locSelection" ).val("U");
				$( "#funcSelection" ).val("4");
				$( "#fcu-y1y2-3pt" ).val("A");
				$( "#fcu-y3y4-3pt" ).val("C");
				$( "#y1b0" ).val("A");
				$( "#b1d1bi" ).val("A");
			}
			else{
				$( ".select-reset" ).prop('selectedIndex',0);
			}
		});
	});
});