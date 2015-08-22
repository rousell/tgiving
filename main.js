var cardWords = "Happy Thanksgiving! Eat your weight in turkey!";
var textwords = document.getElementById("inputText");
textwords.innerHTML = cardWords;


var Thanks = (function() {
  var happy = "happy";

  return {
    getWord1: function() {
      return happy;
    },
    setWord1: function(newWord1) {
      happy = newWord1;
    }
  };
})();






var someVar = document.getElementById("words");
someVar.innerHTML = Thanks.getWord1();


