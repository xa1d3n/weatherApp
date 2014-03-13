define([
	'backbone',
], function (Backbone) {

	'use strict';

	var LocationModel = Backbone.Model.extend({
		url: "http://ipinfo.io",

		sync: function(method, model, options){
			options.dataType = "jsonp",
			options.url = model.url;  
			options.timeout = 8000;  
			return Backbone.sync(method, model, options);  
		},

		parse: function(response) {
			return response;
		}

	});

	return LocationModel;
});