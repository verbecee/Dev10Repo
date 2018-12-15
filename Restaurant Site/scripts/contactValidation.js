//Contact validation page
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactUs"].elements.length; 
        loopCounter++) {
        if (document.forms["contactUs"].elements[loopCounter]
           .className.indexOf("has-") != -1) {
            
            document.forms["contactUs"].elements[loopCounter]
               .className = "form-control";
        }
    }    
} 




function validateContactForm() {
    clearErrors();

    var name = document.forms["contactUs"]["inputName"].value;
    var email = document.forms["contactUs"]["inputEmail"].value;
    var phone = document.forms["contactUs"]["inputTel"].value;


    if (name == "") {
        alert("The name input must be filled in.");
        document.forms["contactUs"]["inputName"]
           .className = "form-control has-error";
        document.forms["contactUs"]["inputName"].focus();
        return false;
    }

   if (email == "") {
       alert("The email input must be filled in.");
       document.forms["contactUs"]["inputEmail"]
          .className = "form-control has-error"
       document.forms["contactUs"]["inputEmail"].focus();
       return false;
   }
   
   if (phone == "") {
       alert("The phone number input must be filled in.");
       document.forms["contactUs"]["inputTel"]
          .className = "form-control has-error"
       document.forms["contactUs"]["inputTel"].focus();
       return false;
   }	


	alert("Data is valid. We'll respond in a flash!");
	
	clearErrors()   
   
   	return false;

}