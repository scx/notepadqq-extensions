var NotepadqqApi = require("notepadqq-api").NotepadqqApi;
NotepadqqApi.connect(function(api) {
	api.onWindowInitialization(function(window) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint#Polyfill
		if (!String.fromCodePoint) (function(stringFromCharCode) {
			var fromCodePoint = function(_) {
				var codeUnits = [], codeLen = 0, result = "";
				for (var index=0, len = arguments.length; index !== len; ++index) {
					var codePoint = +arguments[index];
					// correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
					// The surrounding `!(...)` is required to correctly handle `NaN` cases
					// The (codePoint>>>0) === codePoint clause handles decimals and negatives
					if (!(codePoint < 0x10FFFF && (codePoint>>>0) === codePoint))
						throw RangeError("Invalid code point: " + codePoint);
					if (codePoint <= 0xFFFF) { // BMP code point
						codeLen = codeUnits.push(codePoint);
					} else { // Astral code point; split in surrogate halves
						// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
						codePoint -= 0x10000;
						codeLen = codeUnits.push(
							(codePoint >> 10) + 0xD800,  // highSurrogate
							(codePoint % 0x400) + 0xDC00 // lowSurrogate
						);
					}
					if (codeLen >= 0x3fff) {
						result += stringFromCharCode.apply(null, codeUnits);
						codeUnits.length = 0;
					}
				}
				return result + stringFromCharCode.apply(null, codeUnits);
			};
			try { // IE 8 only supports `Object.defineProperty` on DOM elements
				Object.defineProperty(String, "fromCodePoint", {
					"value": fromCodePoint, "configurable": true, "writable": true
				});
			} catch(e) {
				String.fromCodePoint = fromCodePoint;
			}
		}(String.fromCharCode));
		
		// Unicode 6.0, 6.1, 7.0, 8.0 emoticons
		var elements = new Array();
		for (var i = 0x1F600; i <= 0x1F64F; i++) {
			elements.push(i);
		}
		
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var emoticon = String.fromCodePoint(element);
			var menuitem = window.addExtensionMenuItem(api.extensionId, "insert " + emoticon);
			// https://shahpritesh.wordpress.com/2013/09/06/javascript-function-in-loop-passing-dynamic-variable-value/
			menuitem.on("triggered", (function(emoticon) {
				return function() {
					window.currentEditor().setSelectionsText([emoticon]);
				}
			})(emoticon));
		}
   	});
});
