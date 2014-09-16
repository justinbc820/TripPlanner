'use strict';

angular.module('tripPlannerApp')
  .controller('PlanTripCtrl', function ($scope, ngGPlacesAPI) {
    $scope.map = {
        center: {
            latitude: 45,
            longitude: -73
        },
        zoom: 8
    };

    $scope.details;
    $scope.places;

    ngGPlacesAPI.placeDetails({reference:"CnRnAAAAnRm_imIW_SFd74bsj6iRwvRxBamZqtUaSyRjlb-i1vvkapOSVXyA5Dj452GSpBpno_MHbxyGsuFx9zqZvr_aa2a7uG0IZE8tC-N2OccvUC_i5N3QRQ11WmSRayo441riHebwQGqlbaf3RY-5KVsfGBIQXGtmUICHsD9LH2rd_y-J2hoUvW0lUEIHHtRnD15QyeUqi6tkHIg"})
        .then(function (data) {
            console.log("Details: ", data);
            $scope.details = data;
        });
    ngGPlacesAPI.nearbySearch({latitude:-33.8665433, longitude:151.1956316})
        .then(function(data){
            console.log("Data: ", data);
            $scope.places = data;
        }); 
});
