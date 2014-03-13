define([
	'backbone',
], function (Backbone) {

	'use strict';

	var DayModel = Backbone.Model.extend({
		defaults: {
			'weekday': '',
			'highCelsius': null,
			'lowCelsius': null,
			'highFahrenheit': null,
			'lowFahrenheit': null,
			'icon_url': '',
			'conditions': '',
			'humidity': '',
			'windMph': '',
			'windKph': ''
		},
		parse: function (data) {
			var map = {
				'weekday': data.date.weekday,
				'highCelsius': data.high.celsius,
				'lowCelsius': data.low.celsius,
				'highFahrenheit': data.high.fahrenheit,
				'lowFahrenheit': data.low.fahrenheit,
				'icon_url': data.icon_url,
				'conditions': data.conditions,
				'humidity': data.avehumidity,
				'windMph': data.avewind.mph,
				'windKph': data.avewind.kph
			};
			return map;
		}
	});

	return DayModel;
});