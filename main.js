$(document).ready(function() {

// "Happy Thanksgiving! Eat your weight in turkey!";
// console.log(status);

function language (var1) {
  console.log($("input[id = lang]:checked").val());

  if ($("input[id = lang]:checked").val() === "danish") {
    Thanks.d_getWord1();
  } else if ($("input[id = lang]:checked").val() === "czech") {
    $("#words").val() = Thanks.c_getWord1();
  }
}

$("#translate").click(function() {
  var textwords = $("#inputText").val();
  console.log(textwords);
  language();
});

});
