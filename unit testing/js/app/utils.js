define([

], function(Utils) {
	'use strict';

	var isNumber = function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	var celsiusToFarenheit = function (cel) {
		if (!isNumber(cel)) {
			return null;
		}

		var fahr = cel * 9 / 5 + 32;
		return fahr;
	};

	return { 
		celsiusToFarenheit: celsiusToFarenheit 
	}

})