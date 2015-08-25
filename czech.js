var Thanks = (function(thanks) {
  var czech = {
  	"happy":"šťastný",
  	"thanksgiving": "díkuvzdání",
  	"eat": "jezte",
  	"your":"vaše",
  	"weight":"váha",
  	"in":"v",
  	"turkey":"turecku"
  };
  
  thanks.translateToCzech = function (czechplace) {
  	var inputPhrase = czechplace.toLowerCase().split(" ");
  	var translated = "";
  	for (var i = 0; i < inputPhrase.length; i++) {
  		translated += (czech[inputPhrase[i]] || inputPhrase[i])
  	};
  	$("#words").append(translated);

  }

  return thanks;




})(Thanks);
