define([
	'underscore'
], function (_) {

	var Templates = {};

	Templates['place'] = [
		'<div class="panel panel-info">',
			'<div class="panel-heading">',
				//'<button id="btn-expand" type="button" class="close" aria-hidden="true">+</button>',
				'<button id="btn-remove" type="button" class="close" aria-hidden="true">&times;</button> ',
				'<h3 class="panel-title">',
					'<%= name %> - <%= countryCode %>',
				'</h3>',
			'</div>',
			'<div class="panel-body row">',
				'Loading...',
			'</div>',
		'</div>'
	].join('');

	Templates['day'] = [
	'<div class="col-lg-3">',
		'<div class="forecast-day panel">',
			'<h3><%= weekday %></h3>',
			'<img src="<%= icon_url %>" alt="" class="img-thumbnail">',
			'<p class="forecast-fahr"><%= lowFahrenheit %>°F - <%= highFahrenheit %>°F</p>',
			'<p class="forecast-cel"><%= lowCelsius %>°C - <%= highCelsius %>°C</p>',
			'<div class="forecast-humidity">Humidity: <%= humidity %>%</div>',
			'<div class="forecast-windMph">Wind: <%= windMph %> mph</div>',
			'<div class="forecast-windKph">Wind: <%= windKph %> km/h</div>',
			'<div class="forecast-conditions"><%= conditions %></div>',
		'</div>',
	'</div>'
	].join('');

	Templates['modal'] = [
		'<div class="modal fade">',
			'<div class="modal-dialog">',
				'<div class="modal-content">',
					'<div class="modal-header">',
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
						'<h4 class="modal-title"><%=title %></h4>',
					'</div>',
					'<div class="modal-body">test</div>',
				'</div>',
			'</div>',
		'</div>'
	].join('');

	Templates['settings'] = [
		'<form role="form">',
			'<div class="form-group">',
				'<label for="welcomeMessageInput">Welcome Message</label>',
				'<input type="text" class="form-control" id="welcomeMessageInput" placeholder="Enter Welcome Message" value="<%= welcomeMessage %>">',
			'</div>',
			'<div class="form-group">',
				'<label for="backgroundColorInput">Background Color</label>',
				'<input type="text" class="form-control" id="backgroundColorInput" placeholder="#000000" value="<%= backgroundColor %>">',
			'</div>',
			'<div class="form-group">',
				'<select id="tempType" class="form-control">',
					'<option value="fahr" <% if(!celsius)print(\"selected\") %>>Fahrenheit</option>',
					'<option value="cel" <% if(celsius)print(\"selected\") %>>Celsius</option>',
				'</select>',
			'</div>',
			'<div class="form-group clockType">',
				'<div>Hours</div>',
				'<input type="radio" name="time" value="12" <% if(clockType === \"hour12\")print(checked=\"checked\") %> id="hour12">',
				'<label for="hour12">12</label>',
				'<input type="radio" name="time" value="24" <% if(clockType === \"hour24\")print(checked=\"checked\") %> id="hour24">',
				'<label for="hour24">24</label>',
			'</div>',
			'<div id="btn-save" class="btn btn-default">Save</div>',
		'</form>'
	].join('');

	Templates['time'] = [
		'<span class="clock12"><%= hour12 %></span>',
		'<span class="clock24"><%= hour24 %></span>',
		'<span class="minute"><%= minute %></span>',
		'<span class="second"><%= second %></span>',
	].join('');

	Templates['analogClock'] = [
		'<div class="analog-clock">',
			'<svg width="200" height="140">',
				'<circle id="clock-face" cx="70" cy="70" r="65" />',//draw circle with radius of 65px
				'<line id="h-hand" x1="70" y1="70" x2="70" y2="38" />', // hour hand
				'<line id="m-hand" x1="70" y1="70" x2="70" y2="20" />', // minute hand
				'<line id="s-hand" x1="70" y1="70" x2="70" y2="12" />', // second hand
				'<line id="s-tail" x1="70" y1="70" x2="70" y2="56" />', // second tail
				'<text x="62" y="22">12</text>',
				'<text x="122" y="76">3</text>',
				'<text x="66" y="126">6</text>',
				'<text x="11" y="76">9</text>',
			'</svg>',
		'</div>',
	].join('');

	Templates['date'] = [
		'<span class="dayTxt"><%= dayTxt %>, </span>',
		'<span class="month"><%= month %> </span>',
		'<span class="day"><%= day %>, </span>',
		'<span class="year"><%= year %></span>',
	].join('');



	for (var tmpl in Templates) {
	    if (Templates.hasOwnProperty(tmpl)) {
	        Templates[tmpl] = _.template(Templates[tmpl]);
	    }
	}

	return Templates;
});