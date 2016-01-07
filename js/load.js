'use strict';

(function() {
    var getEvents = function(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', 'http://localhost:8000/funcheapsf/items.json', true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == '200') {
                var events = xobj.responseText;
                callback(JSON.parse(events));
            }
        };
        xobj.send(null);
    };

    var addMarkers = function(events, i) {
        if (events.length - 1 === i) {
            return;
        }

        var e = events[i];
        GoogleMaps.geocode(e.address, function(coordinates) {
            var marker = GoogleMaps.addMarker(coordinates);
            GoogleMaps.addInfoWindow(marker, e);
            setTimeout(function(){ // recursion works because it's called inside the setTimeout function
                addMarkers(events, ++i);
            }, 500);
        });
    };

    getEvents(function(events) {
        addMarkers(events, 0);
    });
})();
