define([
	'jquery',		/*required modules*/
	'underscore',
	'backbone',
	'app/views/about',
	'app/views/dash'
], function ($, _, Backbone, AboutView, DashView) {

	'use strict';

	var AppView = Backbone.View.extend({
		id: 'app-view', //custom view id for this view

		html: [
			'<div class="navbar">',
				'<a class="navbar-brand" href="#">Weather Watcher</a>',
				'<ul class="nav navbar-nav">',
					'<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
					'<li id="nav-about"><a href="#about">About</a></li>',
				'</ul>',
				'<p class="navbar-text pull-right"></p>',
			'</div>',
			'<div id="content"></div>'
		].join(''),

		// handle events
		events: {

		},

		views: {},

		initialize: function() {
			// event listener
			this.listenTo(this.model, 'change', this.render);

			// place view into object
			this.views['about'] = new AboutView({
				id: 'page-about',
				className: 'page-view'
			});

			this.views['dash'] = new DashView({
				id: 'page-dash',
				className: 'page-view'
			});

			this.$el.append(this.html);//append to this views html object
			
			this.$('#content').append(this.views['about'].render().el);
			this.$('#content').append(this.views['dash'].render().el);
			//append view to content id
		},

		render: function() {
			//set background of view to what's in model
			this.$el.css('background-color', this.model.get('backgroundColor'));
			// set navbar text
			this.$('.navbar-text').html(this.model.get('welcomeMessage'));
			return this; //returns veiew
		},

		setPage: function (page) { 
			this.$('.nav li').removeClass("active");//remove active class from all
			this.$('.page-view').hide();
			this.$('#page-'+page).show();
			this.$("#nav-"+page).addClass("active");//apply active to selected page
			
			// change property in model
			this.model.set('welcomeMessage', 'Welcome to the ' + page + ' page!');
		},

		onNavAbout: function (e) {
			alert("About button clicked");
		},

		onNavDash: function (e) {
			alert("Dash button clicked");
		}

	});

	return AppView;
});