define([
	'backbone',
	'backbone.localStorage'
], function (Backbone) {

	'use strict';

	var AppModel = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage("AppSettings"),
		defaults: {
			'backgroundColor': '#999999',
			'celsius': true,
			'clockType': 'hour12',
			'welcomeMessage': 'Welcome to Weather Watcher'
		}
	});

	return AppModel;
});