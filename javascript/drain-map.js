function initMap() {

    // Set default map properties, zoom level and focus point
    var options = {
        zoom: 17,
        center: { lat: 51.511524, lng: -0.151389 }
    }

    // Create map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Every icon has a position and is on the map
    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coords,
            map: map
        });
        // iconImage = link to what the icon looks like
        if (properties.iconImage) {
            newMarker.setIcon(properties.iconImage);
        }
        // Information that shows when the icon is clicked
        if (properties.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: properties.content
            });
            marker.addListener("click", function () {
                infoWindow.open(map, marker);
            });
        }
    }

    let dataFromAPI = [

        {
            "ID": "1",
            "CurrentState": "\"On\"",
            "Current": "1.2",
            "lat": 51.512820,
            "lng": -0.151820
        },
        {
            "ID": "2",
            "CurrentState": "\"On\"",
            "Current": "1.3",
            "lat": 51.512775,
            "lng": -0.151996
        },
        {
            "ID": "3",
            "CurrentState": "\"On\"",
            "Current": "1.4",
            "lat": 51.513388,
            "lng": -0.150302
        }
    ]

    let newMarkers = dataFromAPI.map((drain) => (
        {
            coords: {
                lat: drain.lat,
                lng: drain.lng
            },
            content: `<h5>Drain ${drain.ID}</h5><p>The drain's status is: ${drain.CurrentState}</p><p>Current: ${drain.Current}`,
            iconImage: drain.iconImage
        }
    ))
    console.log(newMarkers)

    // Loop to create as many markers as defined in array list above
    for (var i = 0; i < newMarkers.length; i++) {
        addMarker(newMarkers[i]);
        addMarker(newMarkers[i]);
    }
}
