/* exported GoogleMaps */
'use strict';

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
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    var addMarker = function(locationCoordinates) {
        var marker = new google.maps.Marker({
            map: map,
            position: locationCoordinates
        });

        return marker;
    };

    var infoWindow = new google.maps.InfoWindow({
        maxWidth: 600
    });

    var addInfoWindow = function(marker, e) {
        google.maps.event.addListener(marker, 'click', function() {
            var contentString =
            '<div>' +
                '<h2>Event: ' + e.event + '</h2>' +
                '<ul>' +
                    '<li>Address: ' + e.address + '</li>' +
                    '<li>Venue: ' + e.venue + '</li>' +
                    '<li>Day: ' + e.day + '</li>' +
                    '<li>Start time: ' + e.start_time + '</li>' +
                    '<li>End time: ' + e.end_time + '</li>' +
                    '<li>Cost: ' + e.cost + '</li>' +
                '</ul>' +
            '</div>';

            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
        });
    };

    return {
        map: map,
        geocode: geocode,
        addMarker: addMarker,
        addInfoWindow: addInfoWindow
    };
})();
