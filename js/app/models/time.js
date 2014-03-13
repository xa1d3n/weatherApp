define([
     'backbone',
], function (Backbone) {

     'use strict';

     var TimeModel = Backbone.Model.extend({
          defaults: {
               hour12: '',
               hour24: '',
               minute: '',
               second: ''
          }, 



          initialize: function() {

            this.setTime();
              
          },

          setTime: function() {
			var that = this;
          	setInterval(function(){
	               var date = new Date();

	               var hour12 = that.formatTime(date.getHours().toString(), true);
	               var hour24 = that.formatTime(date.getHours().toString());
	               var minute = that.formatTime(date.getMinutes().toString());
	               var second = that.formatTime(date.getSeconds().toString());
			
				that.set({
					hour12: hour12,
					hour24: hour24,
					minute: minute,
					second: second
				});

            }, 1000);
          },

          formatTime: function(val, hourtype) {
          	if(val && val.length === 1) {
          		val = "0" + val;
          	}

          	if (val && hourtype) {
          		if (val > "12") {
          			val = val - 12;
          		}
          	}

          	return val;
          }


     });



     return TimeModel;
});