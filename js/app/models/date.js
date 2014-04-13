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

            this.setDate();
              
          },


          /*
           * Set month, day and year
           */
          setDate: function() {
			var that = this;

          	setInterval(function(){
	               var date = new Date();

	               var dayTxt = that.formatDayText(date.getDay());
	               var month = that.formatMonth(date.getMonth());
	               var day = date.getDate();
	               var year = date.getFullYear();
			
				that.set({
					dayTxt: dayTxt,
					month: month,
					day: day,
					year: year
				});

            }, 1000);
          },


          /*
           * Return name of current day
          */
          formatDayText: function(day) {
               var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

               var today = days[day];

               return today;
          },

          /*
           * Return name of current month
          */
          formatMonth: function(month) {
               var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

               var thisMonth = months[month];

               return thisMonth;
          }


     });



     return TimeModel;
});