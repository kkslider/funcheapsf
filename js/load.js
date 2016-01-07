'use strict';

(function() {
    GoogleMaps.loadJSON(function(response) {
        GoogleMaps.locations = JSON.parse(response);
        for (var i = 0; i < GoogleMaps.locations.length; i++) {
            (function(n) {
                console.log(n);
                setTimeout(function() {
                    geocode(n);
                }, 3000);
            }(i));
        }
    });

    var geocode = function(i) {
        GoogleMaps.geocoder.geocode({'address': GoogleMaps.locations[i].address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var marker = new google.maps.Marker({
                    map: GoogleMaps.map,
                    position: results[0].geometry.location
                });
                console.log(results[0].geometry.location);
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
})();
