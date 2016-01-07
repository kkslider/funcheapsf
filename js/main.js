var GoogleMaps = (function () {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(37.606236, -122.241821),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var loadJSON = function(callback) {
       var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
       xobj.open('GET', 'http://localhost:8000/funcheapsf/items.json', true);
       xobj.onreadystatechange = function() {
           if (xobj.readyState == 4 && xobj.status == "200") {
               callback(xobj.responseText);
           }
       };
       xobj.send(null);
    };

    return {
        map: new google.maps.Map(mapCanvas, mapOptions),

        geocoder: new google.maps.Geocoder(),

        initJSON: loadJSON(function(response) {
            // TODO: Don't attach to window, temporary
            window.locations = JSON.parse(response);
        })
    };
})();
