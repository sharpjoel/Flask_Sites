$(document).ready(function(){

	$("#cmd").click(function(){

		// Declare html to send
		$('#ftp-container').css('font-family','');
		$('nav').hide();
		$('#app-container').hide();
		$('#cmd').hide();
		let html = $('html').html();
		var dataToSend = JSON.stringify({'num':html})
		$.post({
	        type: 'POST',
	        url: '/custom_fpt',
	        data: { stuff:html },
	        cache: false,
	        dataType: 'json'
		});
		$.get("custom_fpt.html")
		$("a").click(function(event){
		  event.preventDefault();
		});
		$('#ftp-container').css('font-family','Roboto');
		$('nav').show();
		$('#app-container').show();
		$('#cmd').show();
	});
});