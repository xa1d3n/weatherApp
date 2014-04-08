define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/modal'
], function ($, _, Backbone, ModalView) {

	'use strict';

	var AddPlaceView = ModalView.extend({

		html: [
			'<form role="form">',
				'<div class="form-group">',
					'<label for="countryCodeInput">Country or State</label>',
					'<input type="text" class="form-control" id="countryCodeInput" placeholder="Enter name of country or state(E.g. MA, Vermont, Italy)">',
				'</div>',
				'<div class="form-group">',
					'<label for="nameInput">City</label>',
					'<input type="text" class="form-control" id="nameInput" placeholder="Enter name of city (E.g. Boston, Venice)">',
				'</div>',
				'<div id="btn-add" class="btn btn-default">Submit</div>',
			'</form>'
		].join(''),

		events: {
			'click #btn-add': 'addNewPlace'
		},

		initialize: function() {
			ModalView.prototype.initialize.apply(this, arguments);
			this.$bodyEl.html(this.html);
		},

		addNewPlace: function(e) {
			var place = {
				countryCode: this.$('#countryCodeInput').val(),
				name: this.$('#nameInput').val()
			};

			if (place.name && place.countryCode) {
				this.collection.create(place);
			}
			this.$modalEl.modal('hide');
		}

	});

	return AddPlaceView;
});