(function ($) {
	var settings = {};
	var vfsDatepikerConfigObj = {
		weekDayFormat: 'short', // Display format of the weekday names - values are 'short' or 'narrow'
		startView: 0, // Initial calendar - values are 0 or 'days', 1 or 'months', 2 or 'years'
		daysOfWeekDisabled: [],
		datesDisabled: [],
		isDateDisabled: null,
		isMonthDisabled: null,
		isYearDisabled: null,
		inputFormat: ['dd/MM/yyyy'],
		outputFormat: ['dd/MM/yyyy'],		
		previous: null,
		next: null,
		markup: 'bootstrap3', // bootstrap3 or bootstrap4
		theme: 'default',
		modal: false,
		inline: false,
		gainFocusOnConstruction: true,
		min: null,
		max: null
	};	

	$.fn.vfsdatepicker = function(options){
		var settings = $.extend({}, vfsDatepikerConfigObj, options);
		$(this).datepicker(settings);
	}	
	
})(jQuery);