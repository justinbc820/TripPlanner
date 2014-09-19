'use strict';

angular.module('tripPlannerApp')
  .filter('OpeningHours', function () {
    return function (currentDay) {
    	if(currentDay) {

	    	var formattedHours,
	    		openAt,
	    		closedAt,
	    		day = {},
	    		dayKeys = {
		    		0: "Sunday: ",
		    		1: "Monday: ",
		    		2: "Tuesday: ",
		    		3: "Wednesday: ",
		    		4: "Thursday: ",
		    		5: "Friday: ",
		    		6: "Saturday: ",
		    		7: "Sunday: "
		    	};

		    if(currentDay.open.hours > 12) {
		    	day.openHour = currentDay.open.hours - 12;
		    	if(currentDay.open.minutes = '0') {
		    		day.openMinutes = '00 pm';
		    	} else {
		    		day.openMinutes = (currentDay.open.minutes).toString() + ' pm';
		    	}
		    	openAt = day.openHour + ":" + day.openMinutes + " - ";
		    } else {
		    	day.openHour = (currentDay.open.hours).toString();
		    	if(currentDay.open.minutes = '0') {
		    		day.openMinutes = '00 am';
		    	} else {
		    		day.openMinutes = (currentDay.open.minutes).toString() + ' am';
		    	}
		    	openAt = day.openHour + ":" + day.openMinutes + " - ";
		    }

		    if(currentDay.close.hours > 12) {
		    	day.closeHour = currentDay.close.hours - 12;
		    	if(currentDay.close.minutes = '0') {
		    		day.closeMinutes = '00 pm';
		    	} else {
		    		day.closeMinutes = (currentDay.close.minutes).toString() + ' pm';
		    	}
		    	closedAt = day.closeHour + ":" + day.closeMinutes;
		    } else {
		    	day.closeHour = (currentDay.close.hours).toString();
		    	if(currentDay.close.minutes = '0') {
		    		day.closeMinutes = '00 am';
		    	} else {
		    		day.closeMinutes = (currentDay.close.minutes).toString() + ' am';
		    	}
		    	closedAt = day.closeHour + ":" + day.closeMinutes;
		    }

	    	formattedHours = dayKeys[currentDay.open.day] + openAt + closedAt;

	      	return formattedHours;	
    	}
    };
  });
