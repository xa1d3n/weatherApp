define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'app/models/date'
], function ($, _, Backbone, Templates, DateModel) {

	'use strict';

	var DateView = Backbone.View.extend({

		template: Templates['date'],

		model: new DateModel(),

		//collection: new DaysCollection([]),

		events: {

		},

		initialize: function() {
			this.listenTo(this.model, "change", this.render);

			
			//this.$bodyEl = this.$('#time');
		},

		render: function() {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			return this;
		}

	});

	return DateView;
});