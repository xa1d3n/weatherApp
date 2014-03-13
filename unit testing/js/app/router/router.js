define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'': 'goToDash', //index route. same as a href="#" 
			'dash': "goToDash",
			'dash/:place': "goToDash", // : colon means next argument will be counted as a variable
			'about': "goToAbout"
		},

		initialize: function (view) {
			this.appView = view; // view reference. Router accepts one view
		},

		goToDash: function (place) {
			this.appView.setPage('dash'); // set page
			if (place) {
				alert("Weather detail for " + place);
			}
		},

		goToAbout: function () {
			this.appView.setPage('about');
		}
	});

	return Router;

});