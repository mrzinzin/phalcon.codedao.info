/* Vietnamese initialisation for the jQuery UI date picker plugin. */
	/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */
	jQuery(function($){
	        $.datepicker.regional['en'] = {
	                closeText: 'Close',
	                prevText: '&#x3c;Prev',
	                nextText: 'Next&#x3e;',
	                currentText: 'To day',
	                monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
	                'July', 'August', 'September', 'October', 'November', 'December'],
	                monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	                dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	                dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	                dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	                weekHeader: 'Tu',
	                dateFormat: 'dd/mm/yy',
	                firstDay: 0,
	                isRTL: false,
	                showMonthAfterYear: false,
	                yearSuffix: ''};
	        $.datepicker.setDefaults($.datepicker.regional['en']); 
	});