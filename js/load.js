(function() {
    google.maps.event.addDomListener(window, 'load', GoogleMaps.initJSON);

    var JSONitems =
        [{"start_time": "4:00 pm", "venue": "Thee Parkside", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "7:00 pm", "address": "1600 17th Street, San Francisco CA", "event": "Twang Sunday: Live \u201cSailorgrass\u201d & Foot Stompin\u2019 R&B"},
        {"start_time": "1:00 pm", "venue": "Spreckels Temple of Music", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "1:00 pm", "address": "Music Concourse Dr, San Francisco, CA", "event": "Final Golden Gate Park Band Concert: All Requests"},
        {"start_time": "3:00 pm", "venue": "LEVYstudio", "day": "Sunday, October 12, 2014", "cost": "$6*", "end_time": "5:00 pm", "address": "19 Heron St., San Francisco, CA", "event": "Michael Jackson \u201cThriller\u201d Dance Class for Halloween"},
        {"start_time": "12:30 pm", "venue": "Washington Square Park", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "3:30 pm", "address": "Columbus and Union Street, San Francisco, CA", "event": "146th Annual Italian Heritage Parade"},
        {"start_time": "12:00 pm", "venue": "Dolores Park", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "5:00 pm", "address": "19th Street and Dolores Street, San Francisco, CA", "event": "Kandi Love Day Rave & Silent Disco"},
        {"start_time": "12:30 pm", "venue": "Marina Green", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "4:00 pm", "address": "Marina Blvd & Fillmore St., San Francisco CA", "event": "Fleet Week 2014: Blue Angels Airshow"},
        {"start_time": "12:00 pm", "venue": "Esprit Park", "day": "Sunday, October 12, 2014", "cost": "$15*", "end_time": "11:00 pm", "address": "Minnesota St. and 19th St, San Francisco, CA", "event": "15th Annual Burning Man \u201cDecompression\u201d Street Faire"},
        {"start_time": "1:00 pm", "venue": "Berkeley Art Center", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "3:00 pm", "address": "1275 Walnut St, Berkeley, CA", "event": "Drawing Piano Machine: Collaborative Art Experience"},
        {"start_time": "3:00 pm", "venue": "The Beach Chalet", "day": "Sunday, October 12, 2014", "cost": "FREE*", "end_time": "6:00 pm", "address": "1000 Great Highway, San Francisco, CA", "event": "Oktoberfest Party & \u201cBlow Musik\u201d Oompah Band"},
        {"start_time": "1:00 pm", "venue": "Cal Sailing Club", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "4:00 pm", "address": "124 University Ave, Berkeley, CA", "event": "Free Sailboat Ride Day: Cal Sailing Club"},
        {"start_time": "All Day", "venue": "Downtown Berkeley BART", "day": "Sunday, October 12, 2014", "cost": "FREE*", "address": "2160 Shattuck Ave, Berkeley, CA", "event": "Hip Hop Showcase: \u201cB-Side Cipher: Let The Sunshine In\u201d"},
        {"start_time": "2:00 pm", "venue": "Ferry Building", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "2:00 pm", "address": "The Embarcadero and Ferry Plaza, San Francisco, CA", "event": "\u201cEdge of Seventeen\u201d Stevie Nicks Flashmob"},
        {"start_time": "11:00 am", "venue": "Main Post Lawn", "day": "Sunday, October 12, 2014", "cost": "FREE*", "end_time": "4:00 pm", "address": "103 Montgomery Street, Main Post, Presidio, San Francisco, CA", "event": "Off the Grid: Presidio Picnic & Food Truck Party"},
        {"start_time": "All Day", "venue": "Rockridge", "day": "Sunday, October 12, 2014", "cost": "FREE", "address": "5660 College Ave.,Oakland, CA", "event": "2014 Rockridge \u201cOut & About\u201d Street Festival"},
        {"start_time": "11:00 am", "venue": "Pioneer Meadow (GG Park)", "day": "Sunday, October 12, 2014", "cost": "FREE*", "end_time": "3:00 pm", "address": "569 John F. Kennedy Dr, San Francisco, CA", "event": "Yoga Tree 15th Anniversary Party: AcroYoga, DJs, Live Jazz & Belly Dance"},
        {"start_time": "11:00 am", "venue": "Museum of American Heritage", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "3:00 pm", "address": "351 Homer Avenue, Palo Alto, CA", "event": "Repair Cafe: Fix Your Broken Items"},
        {"start_time": "All Day", "venue": "All Over San Francisco", "day": "Sunday, October 12, 2014", "cost": "FREE", "address": "San Francisco, CA", "event": "Litquake 2014: Free Sunday Events"},
        {"start_time": "10:00 am", "venue": "Alviso Marina County Park", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "3:00 pm", "address": "1195 Hope St, Alviso, CA", "event": "2014 Day on the Bay: Free Kayak Rides, Food, Pumpkins"},
        {"start_time": "11:00 am", "venue": "Shattuck Avenue", "day": "Sunday, October 12, 2014", "cost": "FREE", "end_time": "4:00 pm", "address": "Shattuck Avenue and University Avenue, Berkeley, CA", "event": "2014 Sunday Streets Berkeley"},
        {"start_time": "All Day", "venue": "Filbert & Powell St.", "day": "Sunday, October 12, 2014", "cost": "FREE", "address": "Filbert St. and Powell St., San Francisco, CA", "event": "95th Annual Columbus Day Bazaar: Sunday"},
        {"start_time": "All Day", "venue": "County Fair Building", "day": "Sunday, October 12, 2014", "cost": "FREE*", "address": "9th Avenue and Lincoln Way, San Francisco CA", "event": "2014 World Vegetarian Day Festival: Sunday"},
        {"start_time": "All Day", "venue": "Exploratorium", "day": "Sunday, October 12, 2014", "cost": "FREE", "address": "Pier 15, San Francisco, CA", "event": "Exploratorium Free Day: Founder\u2019s Day 2014"},
        {"start_time": "All Day", "venue": "Marine Mammal Center", "day": "Sunday, October 12, 2014", "cost": "FREE", "address": "2000 Bunker Road, Sausalito, CA 94965", "event": "Marine Mammal Center Sunday: Deep Dark Ocean Halloween Edition"},
        {"start_time": "12:00 pm", "venue": "StoreFrontLab", "day": "Sunday, October 12, 2014", "cost": "FREE*", "end_time": "6:00 pm", "address": "337 Shotwell Street, San Francisco, CA", "event": "7\u00d77 Mile Art Project & Walk: \u201cLines Made By Walking\u201d"},
        {"start_time": "2:00 pm", "venue": "Presidio Officers\u2019 Club", "day": "Sunday, October 12, 2014", "cost": "FREE*", "end_time": "2:00 pm", "address": "Moraga Ave. and Graham St., San Francisco, CA", "event": "SF Shakespeare Festival: \u201cAs You Like it\u201d and Q&A"}];

    console.log(JSONitems);
    var address = JSONitems[0].address;
    GoogleMaps.geocoder.geocode({'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                map: GoogleMaps.map,
                position: results[0].geometry.location
            });
            console.log(results[0].geometry.location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    // var geocode = function(i) {
    //     setTimeout(function() {
    //         var address = JSONitems[i].address;
    //         GoogleMaps.geocoder.geocode({'address': address}, function(results, status) {
    //             if (status == google.maps.GeocoderStatus.OK) {
    //                 var marker = new google.maps.Marker({
    //                     maps: GoogleMaps.map,
    //                     position: results[0].geometry.location
    //                 });
    //             } else {
    //                 // alert('Geocode was not successful for the following reason: ' + status);
    //                 setTimeout(function() {
    //                     geocode(i)
    //                 }, 10);
    //             }
    //         })
    //     }, 2500)
    // };

    // for (var i = 0; i < JSONitems.length; i++) {
    //     geocode(i);
    // }


})();
