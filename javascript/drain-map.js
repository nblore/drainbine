function initMap() {

    // Set default map properties, zoom level and focus point
    var options = {
        zoom: 17,
        center: { lat: 51.512360, lng: -0.153165 }
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
            marker.setIcon(properties.iconImage);
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
            "lng": -0.151820,
            "iconImage": "../images/good-drain.png"
        },
        {
            "ID": "2",
            "CurrentState": "\"On\"",
            "Current": "1.3",
            "lat": 51.512775,
            "lng": -0.151996,
            "iconImage": "../images/good-drain.png"
        },
        {
            "ID": "3",
            "CurrentState": "\"On\"",
            "Current": "1.4",
            "lat": 51.513388,
            "lng": -0.150302,
            "iconImage": "../images/good-drain.png"
        },
        {
            "ID": "4",
            "CurrentState": "\"On\"",
            "Current": "0.6",
            "lat": 51.512487,
            "lng": -0.149208,
            "iconImage": "../images/warning-drain.png" 
        },
        {
            "ID": "5",
            "CurrentState": "\"On\"",
            "Current": "1.4",
            "lat": 51.513395,
            "lng": -0.150280,
            "iconImage": "../images/good-drain.png" 
        },
        {
            "ID": "6",
            "CurrentState": "\"Off\"",
            "Current": "0.0",
            "lat": 51.513008,
            "lng": -0.151471,
            "iconImage": "../images/bad-drain.png" 
        },
    ]

    let drainMarkers = dataFromAPI.map((drain) => (
        {
            coords: {
                lat: drain.lat,
                lng: drain.lng
            },
            content: `<h5>Drain ${drain.ID}</h5><p>The drain's status is: ${drain.CurrentState}</p><p>Current: ${drain.Current}`,
            iconImage: drain.iconImage
        }
    ))



    // Loop to create as many markers as defined in array list above
    for (var i = 0; i < drainMarkers.length; i++) {
        addMarker(drainMarkers[i]);
    }

}
