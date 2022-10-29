/*10.2.4 Selector Practice*/
// Modify the jQuery so that only the even <li> elements have the "highlight" class.
$("li:even").addClass("highlight");
// Add a jQuery method call to remove the "border" class from the first <p>.
$("p:first").removeClass("border");
// Add a jQuery method call to add the "border" class to the second <p>.
$("p:eq(1)").addClass("border");
