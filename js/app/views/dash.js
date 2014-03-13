define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/places',
	'app/views/place',
	'app/views/add_place',
	'app/views/time',
	'app/views/date'
], function ($, _, Backbone, PlacesCollection, PlaceView, AddPlaceView, TimeView, DateView) {

	'use strict';

	var DashView = Backbone.View.extend({

		html: [
			'<h3>Dashboard page</h3>',
			'<div id="timeWrapper"></div>',
			'<div id="dateWrapper"></div>',
			'<div id="places-list" class="clearfix">Loading...</div>',
			'<div id="dash-buttons">',
				'<button id="btn-add-new" type="button" class="btn btn-default">Add New</button>',
			'</div>'
		].join(''),

		views: [],

		events: {
			'click #btn-add-new': 'addNewPlace'
		},

		initialize: function() {
			this.$el.html(this.html);
			this.$placesList = this.$('#places-list');
			this.$dashButtons = this.$('#dash-buttons');
			this.$timeWrapper = this.$('#timeWrapper');
			this.$dateWrapper = this.$('#dateWrapper');

			this.collection = new PlacesCollection([]);
			this.listenTo(this.collection, 'change destroy', this.render);
			this.collection.fetch();

			window.debug = {
				places: this.collection
			}
		},

		render: function() {
			var that = this;
			this.cleanUp();

			var time = new TimeView({
				id: "time"
			});
			this.$timeWrapper.append(time.render().el); 
			this.views.push(time.render().el);

			var date = new DateView({
				id: "date"
			});

			this.$dateWrapper.append(date.render().el);
			this.views.push(date.render().el);

			if (this.collection.length) {

				this.collection.each(function (element, index, list) {
					var place = new PlaceView({
						model: element,
						id: ['place-',element.get('countryCode'),'-',element.get('name')].join('')
					});
					that.$placesList.append(place.render().el);
					that.views.push(place);

					
				});
				
			} else {
				that.$placesList.html('Sorry, there are no places to display, please add some.');
			}
			return this;
		},

		addNewPlace: function(e) {
			var modal = new AddPlaceView({
				title: 'Add a new place',
				id: 'modal-add-new-place',
				collection: this.collection
			});
			modal.show();
		},

		cleanUp: function() {
			console.log('Clean Up')
			for (var i = 0; i<this.views.length; i++) {
				this.views[i].remove();
			}
			this.views.length = 0;
			this.$placesList.html('');
		}

	});

	return DashView;
});