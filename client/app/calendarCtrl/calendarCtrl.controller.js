'use strict';

angular.module('tripPlannerApp')
  .controller('CalendarCtrl', function ($scope, $rootScope, ToggleViewFactory) {
  		
  	    //  Data contained in the ToggleViewFactory service for sharing data with SEARCH
  	    $scope.events = ToggleViewFactory.events;
  	    /* add and removes an event source of choice */
  	    $scope.addRemoveEventSource = ToggleViewFactory.addRemoveEventSource;
  	    /* add custom event*/
    	$scope.addEvent = ToggleViewFactory.addEventfunction;
  	    /* remove event */
  	    $scope.removeEvent = ToggleViewFactory.removeEvent;	

		$rootScope.$on('newEvent', function() {
	        $scope.events = ToggleViewFactory.events;
	 		$scope.tripCalendar.fullCalendar('refetchEvents');   	
	    });

  	    /* event source that calls a function on every view switch */
  	    $scope.eventsF = function (start, end, callback) {
  	      var s = new Date(start).getTime() / 1000;
  	      var e = new Date(end).getTime() / 1000;
  	      var m = new Date(start).getMonth();
  	      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
  	      callback(events);
  	    };

  	    /* alert on eventClick */
  	    $scope.alertOnEventClick = function( event, allDay, jsEvent, view ){
  	        $scope.alertMessage = (event.title + ' was clicked ');
  	    };
  	    /* alert on Drop */
  	     $scope.alertOnDrop = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
  	       $scope.alertMessage = ('Event Droped to make dayDelta ' + dayDelta);
  	    };
  	    /* alert on Resize */
  	    $scope.alertOnResize = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
  	       $scope.alertMessage = ('Event Resized to make dayDelta ' + minuteDelta);
  	    };

  	    /* Change View */
  	    $scope.changeView = function(view,calendar) {
  	      calendar.fullCalendar('changeView',view);
  	    };
  	    /* Change View */
  	    $scope.renderCalendar = function(calendar) {
  	      calendar.fullCalendar('render');
  	    };

  	    /* config object */
  	    $scope.uiConfig = {
  	      calendar:{
  	        height: 600,
  	        editable: true,
  	        header:{
  	          left: 'title',
  	          center: 'month agendaWeek agendaDay',
  	          right: 'today prev,next'
  	        },
  	        eventClick: $scope.alertOnEventClick,
  	        eventDrop: $scope.alertOnDrop,
  	        eventResize: $scope.alertOnResize
  	      }
  	    };

  	    /* event sources array*/
  	    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
  });
