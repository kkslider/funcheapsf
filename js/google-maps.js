'use strict';
// cmd shift j for jshint

var GoogleMaps = (function () {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(37.606236, -122.241821),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var geocoder = new google.maps.Geocoder();

    var geocode = function(address, callback) {
        geocoder.geocode({'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var location = results[0].geometry.location;
                callback(location);
                console.log(location);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    var addMarker = function(locationCoordinates) {
        new google.maps.Marker({
            map: map,
            position: locationCoordinates
        });
    };

    return {
        map: map,
        geocode: geocode,
        addMarker: addMarker
    };
})();
