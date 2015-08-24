$(document).ready(function() {

// "Happy Thanksgiving! Eat your weight in turkey!";
// console.log(status);

function language (var1) {
  if ($("input[id = lang]").val() === "danish") {
    Thanks.translateToDanish(var1);
  } else if ($("input[id = lang]").val() === "czech") {
    Thanks.translateToCzech(var1);
  }
}

$("#translate").click(function() {
  var textwords = $("#inputText").val();
  // console.log(textwords);
  language(textwords);
});

});
