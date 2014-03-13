define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'app/models/time'
], function ($, _, Backbone, Templates, TimeModel) {

	'use strict';

	var TimeView = Backbone.View.extend({

		template: Templates['time'],

		model: new TimeModel(),

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

	return TimeView;
});