define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'app/models/time'
], function ($, _, Backbone, Templates, TimeModel) {

	'use strict';

	var TimeView = Backbone.View.extend({

		template: Templates['analogClock'],

		model: new TimeModel(),

		//collection: new DaysCollection([]),

		events: {

		},

		initialize: function() {
			//setTimeout(this.clock(), 1000);
		},

		setTimeout: function() {

		},

		render: function() {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			//setTimeout(this.clock(), 1000);

			var that = this;

			setInterval(function(){
				that.clock();
			}, 1000);
			return this;
			
		},

		 clock: function() {
               // calculate angle
               var d, h, m, s;

               d = new Date();

               h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
               m = 6 * d.getMinutes();
               s = 6 * d.getSeconds();

               // move hands
               this.setAttr('h-hand', h);
               this.setAttr('m-hand', m);
               this.setAttr('s-hand', s);
               this.setAttr('s-tail', s + 180);

               //display time
               h = d.getHours();
               m = d.getMinutes();
               s = d.getSeconds();

             /*  if (h >= 12) {
                    setText('sufffix', 'PM');
               }else{
                    setText('sufffix', 'AM');
               }

               if (h !== 12){
                    h %= 12;
               }

               setText('sec', s);
               setText('min', m);
               setText('hr', h); */
          },

          setAttr: function(id, val) {
               var v = 'rotate(' + val + ', 70, 70)';
               this.$("#"+id).attr('transform', v);
          },

	});

	return TimeView;
});