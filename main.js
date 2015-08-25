$(document).ready(function() {

// "Happy Thanksgiving - Eat your weight in turkey";

function language (var1) {
 if ($("input[name='lang']:checked" ).val() === "danish") {
   Thanks.translateToDanish(var1);
 } else if ($("input[name='lang']:checked" ).val() === "czech") {
   Thanks.translateToCzech(var1);
 }
}

$("#translate").click(function() {
 var textwords = $("#inputText").val();
 language(textwords);
});

});