define([
	'app/utils'
], function(Utils) {
	'use strict';

	var run = function() {
		test('Test celsius to farenheit calculation', function() {
			strictEqual(Utils.celsiusToFarenheit(32), 89.6, 'Test a number');
			strictEqual(Utils.celsiusToFarenheit("a"), null, 'Test a string');
			strictEqual(Utils.celsiusToFarenheit(), null, 'Test undefined');
		});
	};

	return {run: run}

})