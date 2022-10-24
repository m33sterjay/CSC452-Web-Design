# 9.15 LAB: User Registration and Validation with Regex

-   Use regular expression with JS to validate a user registration form
-   Display error messages at bottom of form as in example
    -   Complete `checkForm()` in `register.js` to verify user-provided information
-   Test solution by typing invalid data in each input
    -   Verify a red border surrounds the input with invalid data
        -   and the correct message displays

## Critera

_Form Validation Errors_

-   Display the `formErrors` <div> by removing the `hide` class
-   Dispay each of the associated error messages in the `formErrors` <div> using an **unordered list**
    -   error message must be displayed in the order the validation is performed.
-   add the `error` class to each <input> element with invalid input

_No Form Validation Errors_

-   Hide `formErrors` <div> by adding the `hide` class
-   Remove the `error` class from all `test, email, and password` <input> elements

_Form Validations in Order_

-   [] Full name with a **length** > 1 provided
    -   otherwise display, **_"Missing full name."_**
-   [] Email address was provided and the email address matches following _regex_
    -   **_ /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/ _**
    -   otherwise, display "Invalid or missing email address."
-   [] Password has 10 to 20 characters
    -   "Password must be between 10 and 20 characters."
-   [] Password contains at least one _lowercase_ character [use-regex]
    -   "Password must contain at least one lowercase character."
-   [] Password contains at least one **uppercase** character [use-regex]
    -   "Password must contain at least one uppercase character."
-   [] Password contains at least one digit [use-regex]
    -   "Password must contain at least one digit."
-   [] Password and confirmation password match
    -   "Password and confirmation password don't match."
