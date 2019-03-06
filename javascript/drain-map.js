function initMap() {

    // Set default map properties, zoom level and focus point
    var options = {
        zoom: 17,
        center: { lat: 51.511524, lng: -0.151389 }
    }

    // Create map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // List of markers defined by properties
    var markers = [
        {
            coords: { lat: 51.512872, lng: -0.150738 },
            content: "<h5>Your location</h5>"
        }
    ];
    // Loop to create as many markers as defined in array list above
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
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
}