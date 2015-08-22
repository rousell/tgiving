$(document).ready(function() {

// "Happy Thanksgiving! Eat your weight in turkey!";
// console.log(status);

function language (var1) {
  // console.log($("input[id = lang]:checked").val());
  // console.log(var1);

  if ($("input[id = lang]:checked").val() === "danish") {
    Thanks.translateDanish(var1);
  } else if ($("input[id = lang]:checked").val() === "czech") {
    Thanks.translateCzech(var1);
  }
}

$("#translate").click(function() {
  var textwords = $("#inputText").val();
  // console.log(textwords);
  language(textwords);
});

});
