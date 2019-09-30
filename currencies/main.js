var NotepadqqApi = require("notepadqq-api").NotepadqqApi;
NotepadqqApi.connect(function(api) {
	api.onWindowInitialization(function(window) {
		var elements = new Array();
		elements.push(['baht', '฿']);
		elements.push(['dollar/peso', '$']);
		elements.push(['euro', '€']);
		elements.push(['pound', '£']);
		elements.push(['ruble', '₽']);
		elements.push(['shekel', '₪']);
		elements.push(['won', '₩']);
		elements.push(['yen/yuan', '¥']);
		
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var currency = element[0];
			var symbol = element[1];
			var menuitem = window.addExtensionMenuItem(api.extensionId, "insert " + currency + " symbol: " + symbol);
			// https://shahpritesh.wordpress.com/2013/09/06/javascript-function-in-loop-passing-dynamic-variable-value/
			menuitem.on("triggered", (function(symbol) {
				return function() {
					window.currentEditor().setSelectionsText([symbol]);
				}
			})(symbol));
		}
   	});
});
