define([
     'backbone',
], function (Backbone) {

     'use strict';

     var TimeModel = Backbone.Model.extend({
          defaults: {
               dayTxt: '',
               month: '',
               day: '',
               year: ''
          }, 



          initialize: function() {

            this.setTime();
              
          },

          setTime: function() {
			var that = this;
          	setInterval(function(){
	               var date = new Date();

	               var dayTxt = date.getDay();
	               var month = date.getMonth();
	               var day = date.getDay();
	               var year = date.getYear();
			
				that.set({
					dayTxt: dayTxt,
					month: month,
					day: day,
					year: year
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