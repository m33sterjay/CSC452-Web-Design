[//]: # "Performs input validation upon button 'click'"

# function checkForm()

// Full name length >= 1
// return a string of what is contained in fullName;
// else, "Missing full name." == `missingName;`
// Email address matches regex:
**_ /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/ _**
// else, "Invalid or missing email address." == `missingEmail;`
// Password length, 10 - 20 characters
// "Password must be between 10 and 20 characters." == `passLength;`
// Password contains >= 1 _lowercase_ && **uppercase** character, AND _digit_
// "Password must contain at least one lowercase character."==`passLower;`
// "Password must contain at least one uppercase character."==`passUpper;`
// "Password must contain at least one digit." == `passDigit;`
// Password === confirmationPassword
// "Password and confirmation password don't match." == `passMatch;`

[//]: # "Is .addEventListener"

# function(event)

// if !_validationErrors_
[//]: # "might need "if" statement for these"
// var hideClass = document.getElementById("formErrors");
// hideClass.classList.add("hide");
// var noError = document.getElementByClass("error");
// noError.classlist.remove("error");

// if _validationErrors_
[//]: # "might need "if" statement for these"
// var getErrors = document.getElementByClass("formErrors");
// getErrors.classList.remove("hide");
// if validationErrors == {validation var} --> not `if-else`
// errors.innerHTML =
// <div id="formErrors">
//<p> </p>
//</div>`
// var errors = document.getElementById(validation error input class);
// errors.classList.add("error");
