require.config({

	paths: {
		'jquery' : 'libs/jquery-1.10.1.min',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'QUnit': 'libs/qunit-1.14.0'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone' : {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		},
		'QUnit': {
			exports: 'QUnit',
			init: function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		}
	}

});

require([
	'QUnit',
	'tests/utilsTest'
], function (QUnit, utilsTest) {
	'use strict';

	utilsTest.run();
	QUnit.load();
	QUnit.start();
 
});