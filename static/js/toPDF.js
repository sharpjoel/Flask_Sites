$(document).ready(function(){

	var button_element = ""
	var count = 0

	$("#cmd").click(function(){

		// Declare html to send
		$('#ftp-container').css('font-family','');
		$('nav').hide();
		$('#app-container').hide();
		$('#cmd').hide();
		$('.append').hide();
		$('.custom-buttons').hide();
		let html = $('html').html();
		var dataToSend = JSON.stringify({'num':html})
		$.post({
	        type: 'POST',
	        url: '/custom_fpt',
	        data: { stuff:html },
	        cache: false,
	        dataType: 'json'
		})
		.done(function(data) {
			// $.get("custom_fpt.html");
		});
		$('#ftp-container').css('font-family','Roboto');
		$('nav').show();
		$('#app-container').show();
		$('#cmd').show();
	});
	// document.getElementById("connection-check-to-1").addEventListener("click", function() {
	// 	let origin = document.getElementById("connection-check-div-1");
	// 	let input = document.createElement("input");
	// 	let before_button = document.createElement("button");
	// 	let after_button = document.createElement("button");
	// 	input.style.width = "70%";
	// 	input.style.height = "30%";
	// 	before_button.style.width = "15%";
	// 	before_button.style.height = "37%";
	// 	before_button.textContent = "Append Top";
	// 	after_button.style.width = "15%";
	// 	after_button.style.height = "37%";
	// 	after_button.textContent = "Append Next";
	// 	input.setAttribute("id", "connection-check-input-append-1" + count);
	// 	input.setAttribute("class", "append");
	// 	before_button.setAttribute("id", "connection-check-before-button-1" + count);
	// 	before_button.setAttribute("class", "append");
	// 	after_button.setAttribute("id", "connection-check-after-button-1" + count);
	// 	after_button.setAttribute("class", "append");
	// 	let li_elements = origin.getElementsByTagName('li');
	// 	document.getElementById(li_elements[0].id).after(after_button);
	// 	document.getElementById(li_elements[0].id).after(before_button);
	// 	document.getElementById(li_elements[0].id).after(input); 
	// 	before_button_element = document.getElementById(before_button.id);
	// 	after_button_element = document.getElementById(after_button.id);
	// 	if(before_button_element){
	// 		before_button_element.addEventListener("click", function() {
	// 			let append_elements = origin.getElementsByTagName('li');
	// 			for(var i=0;i<append_elements.length;i++){
	// 				append_elements[i].addEventListener("click",function(){
	// 					append_elements[i].remove();
	// 				})
	// 			}
	// 			var ul = document.getElementById(li_elements[0].id);
	// 		    var candidate = document.getElementById(input.id);
	// 		    var li = document.createElement("li");
	// 		    li.setAttribute("id","connection-check-1" + count)
	// 		    li.appendChild(document.createTextNode(candidate.value));
	// 		    ul.before(li);
	// 		    count+=1;
	// 		});
	// 	}
	// 	if(after_button_element){
	// 		after_button_element.addEventListener("click", function() {
	// 			let append_elements = origin.getElementsByTagName('li');
	// 			for(var i=0;i<append_elements.length;i++){
	// 				append_elements[i].addEventListener("click",function(){
	// 					append_elements[i].remove();
	// 				})
	// 			}
	// 			var ul = document.getElementById(li_elements[0].id);
	// 		    var candidate = document.getElementById(input.id);
	// 		    var li = document.createElement("li");
	// 		    li.setAttribute("id","connection-check-1" + count)
	// 		    li.appendChild(document.createTextNode(candidate.value));
	// 		    ul.appendChild(li);
	// 		    count+=1
	// 		});
	// 	}
	// });
	// document.getElementById("connection-check-before-1").addEventListener("click", function() {
	// 	let origin = document.getElementById("connection-check-div-1");
	// 	let newClone = origin.cloneNode(true);
	// 	newClone.setAttribute("id", origin.id + count);
	// 	let li_elements = newClone.getElementsByTagName('li');
	// 	for(var i=0;i<li_elements.length;i++){
	// 		li_elements[i].setAttribute("id", li_elements[i].id + count);
	// 	}
	// 	let input_elements = newClone.getElementsByTagName('input');
	// 	for(var i=0;i<input_elements.length;i++){
	// 		input_elements[i].setAttribute("name", input_elements[i].name + count);
	// 	}
	// 	let button_elements = newClone.getElementsByTagName("button");
	// 	for(var i=0;i<button_elements.length;i++){
	// 		button_elements[i].setAttribute("id", button_elements[i].id + count);
	// 	}
	// 	origin.before(newClone);
	// 	count+=1;
	// });
	// document.getElementById("connection-check-after-1").addEventListener("click", function() {
	// 	let origin = document.getElementById("connection-check-div-1");
	// 	let newClone = origin.cloneNode(true);
	// 	newClone.setAttribute("id", origin.id + count);
	// 	let li_elements = newClone.getElementsByTagName('li');
	// 	for(var i=0;i<li_elements.length;i++){
	// 		li_elements[i].setAttribute("id", li_elements[i].id + count);
	// 	}
	// 	let input_elements = newClone.getElementsByTagName('input');
	// 	for(var i=0;i<input_elements.length;i++){
	// 		input_elements[i].setAttribute("name", input_elements[i].name + count);
	// 	}
	// 	let button_elements = newClone.getElementsByTagName("button");
	// 	for(var i=0;i<button_elements.length;i++){
	// 		button_elements[i].setAttribute("id", button_elements[i].id + count);
	// 	}
	// 	origin.after(newClone);
	// 	count+=1;
	// });
});
