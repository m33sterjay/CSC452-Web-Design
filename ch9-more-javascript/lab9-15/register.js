const formErrorID = document.getElementById("formErrors"); // get id="formErrors"
const fullNameID = document.getElementById("fullName"); // get id="fullName"
const emailID = document.getElementById("email"); // get id="email"
const passwordID = document.getElementById("password"); // get id="password"
const errorClass = document.getElementsByClassName("error");
const passConfirmID = document.getElementById("passwordConfirm"); // get id="passwordConfirm"
formErrorID.innerHTML = '<div id="formErrors"><ul></ul></div>';
let passValue = passwordID.value; // Password contains >= 1 _lowercase_ && **uppercase** character, AND _digit_
// TODO: Perform input validation
function checkForm() {
    var passConfirmID = document.getElementById("passwordConfirm"); // get id="passwordConfirm"
    if (fullNameID.value != null) {
        if (fullNameID.value.length < 1) {
            //alert("name !match"); //test
            fullNameID.classList.add("error"); // Full name length >= 1
        } else {
            fullNameID.classList.remove("error");
        }
    }
    if (emailID.value != null) {
        const email_Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        var inputEmail = emailID.value; // Email address matches regex:
        if (!email_Regex.test(inputEmail)) {
            //alert("email !match"); //test
            emailID.classList.add("error");
        } else {
            emailID.classList.remove("error");
        }
    } // Password length, 10 - 20 characters
    if (passwordID.value != null) {
        let passValue = passwordID.value; // Password contains >= 1 _lowercase_ && **uppercase** character, AND _digit_
        var testLower = /[a-z]/;
        var testUpper = /[A-Z]/;
        var testDigit = /[0-9]/;
        var lower = testLower.test(passValue);
        var upper = testUpper.test(passValue);
        var digit = testDigit.test(passValue);
        var passLength = passValue.length >= 10 && passValue.length <= 20;
        if (!passLength) {
            passwordID.classList.add("error");
        }
        if (!lower) {
            //alert("!match lowercase"); //test
            if (!passwordID.error) {
                passwordID.classList.add("error");
            } else;
        }
        if (!upper) {
            //alert("!match uppercase"); //test
            if (!passwordID.error) {
                passwordID.classList.add("error");
            } else;
        }
        if (!digit) {
            //alert("!match digit"); //test
            if (!passwordID.error) {
                passwordID.classList.add("error");
            } else;
        }
        if (passLength && lower && upper && digit) {
            passwordID.classList.remove("error");
        }
        if (passwordID.value != null && passConfirmID.value != null) {
            if (passwordID.value !== passConfirmID.value) {
                //alert("passConfirm !match"); //test
                passConfirmID.classList.add("error"); // Password === confirmationPassword;
            } else {
                passConfirmID.classList.remove("error");
            }
        } else;
    }
    if (document.querySelector('input[class="error"]') != null) {
        //alert("validation errors exist"); //test
        for (let index = 0; index < errorClass.length; index++) {
            const element = errorClass[index];
            displayNameError(element);
            displayEmailError(element);
            displayPassError(element);
            displayMatchError(element);
        }
        return 1;
    } //alert("no validation errors present");
    else return 0;
}
document.getElementById("submit").addEventListener("click", function (event) {
    //might have to redo this
    let validation_Errors;
    if (event) {
        validation_Errors = checkForm();
    }
    if (validation_Errors) {
        formErrorID.classList.remove("hide"); // Display the `formErrors` <div> by removing the `hide` class
        // no validation errors
    } else {
        // no validation errors
        formErrorID.classList.add("hide"); // Hide `formErrors` <div> by adding the `hide` class
    }
    event.preventDefault(); // Prevent default form action. DO NOT REMOVE THIS LINE
});
var displayNameError = function (element) {
    if (element.id == fullNameID.id) {
        let listName = document.createElement("li");
        let textName = document.createTextNode("Missing full name.");
        listName.appendChild(textName);
        formErrorID.children[0].children[0].appendChild(listName);
    }
};
var displayEmailError = function (element) {
    if (element.id == emailID.id) {
        let listEmail = document.createElement("li");
        let textEmail = document.createTextNode("Invalid or missing email address.");
        listEmail.appendChild(textEmail);
        formErrorID.children[0].children[0].appendChild(listEmail);
    }
};
var displayPassError = function (element) {
    let passCheck = passwordID.value; // Password contains >= 1 _lowercase_ && **uppercase** character, AND _digit_
    var passLength = passCheck.length >= 10 && passCheck.length <= 20;
    var testLower = /[a-z]+/;
    var checkLower = testLower.test(passCheck);
    var testUpper = /[A-Z]+/;
    var checkUpper = testUpper.test(passCheck);
    var testDigit = /[0-9]+/;
    var checkDigit = testDigit.test(passCheck);
    if (element.id == passwordID.id) {
        if (!passLength) {
            let listPassLength = document.createElement("li");
            let textPassLength = document.createTextNode("Password must be between 10 and 20 characters.");
            listPassLength.appendChild(textPassLength);
            formErrorID.children[0].children[0].appendChild(listPassLength);
        }
        if (!checkLower) {
            let listPassLower = document.createElement("li");
            let textPassLower = document.createTextNode("Password must contain at least one lowercase character.");
            listPassLower.appendChild(textPassLower);
            formErrorID.children[0].children[0].appendChild(listPassLower);
        }
        if (!checkUpper) {
            let listPassUpper = document.createElement("li");
            let textPassUpper = document.createTextNode("Password must contain at least one uppercase character.");
            listPassUpper.appendChild(textPassUpper);
            formErrorID.children[0].children[0].appendChild(listPassUpper);
        }
        if (!checkDigit) {
            let listPassDigit = document.createElement("li");
            let textPassDigit = document.createTextNode("Password must contain at least one digit.");
            listPassDigit.appendChild(textPassDigit);
            formErrorID.children[0].children[0].appendChild(listPassDigit);
        }
    }
};
var displayMatchError = function (element) {
    if (element.id == passConfirmID.id) {
        let listMatch = document.createElement("li");
        let textMatch = document.createTextNode("Password and confirmation password don't match.");
        listMatch.appendChild(textMatch);
        formErrorID.children[0].children[0].appendChild(listMatch);
    }
};
