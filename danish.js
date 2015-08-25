var Thanks = (function() {
 var danish = {
   "happy": "glad",
   "thanksgiving": "taksigelse",
   "eat": "spise",
   "your": "din",
   "weight": "vægt",
   "in": "i",
   "turkey": "Tyrkiet"
 };

 return {
   translateToDanish: function(danishplace) {
     var inputPhrase = danishplace.toLowerCase().split(" ");
     var translated = "";
     for (var i = 0; i < inputPhrase.length; i++) {
       translated += (danish[inputPhrase[i]] || inputPhrase[i]) + " ";
     };
     $("#words").html(translated);
   }
 };
})();
