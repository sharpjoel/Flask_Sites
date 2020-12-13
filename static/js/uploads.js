document.getElementById('postData').addEventListener('submit', postData);
// changes file to base64 for sending to back end.
function getBase64(file) {
    var result = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  return result;
}
// have to make this an async in order to get return from getBase64 function
async function postData(event){
   event.preventDefault(); //prevents page refresh
   var postJSON = {}; //create json object
   var allElements = document.getElementsByTagName("*"); //get all form elements
   var file_name = document.getElementById('file').value // get name so we can get extenstion on back end
   // get the file data
   const file = document.querySelector('input[type=file]').files[0]
   // convert the file to base64
   const b64File = await getBase64(file);
   for(var i=0; i < allElements.length; i++){  //build out json object
     if(allElements[i].id == 'file'){
       postJSON[allElements[i].id] = b64File;
       postJSON['file_name'] = file_name;
     }
     else {
       postJSON[allElements[i].id] = allElements[i].value; //creates member of json object
     }
   }
   fetch('/save', {  //post object to backend for saving to db
       method: 'POST',
       headers : {'content-type': 'application/json'},
       body:JSON.stringify(postJSON)
   }).catch((err)=>console.log(err))
  }