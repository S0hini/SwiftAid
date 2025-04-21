let map, userMarker, directionsService, directionsRenderer;

function initMap() {
    // Initialize map centered at a default location
    const defaultLocation = { lat: 22.6837, lng: 88.4820 }; // Example: Barasat, West Bengal, India

    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 14,
    });

    // Initialize Directions service and renderer
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Place a marker on the user's location
                userMarker = new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'You are here!',
                });

                // Center the map on the user's location
                map.setCenter(userLocation);
            },
            () => {
                alert('Geolocation failed. Using default location.');
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function findNearestHospital() {
    const userLocation = userMarker.getPosition();
    const service = new google.maps.places.PlacesService(map);

    // Search for nearby hospitals
    service.nearbySearch(
        {
            location: userLocation,
            radius: 5000, // Search within 5 kilometers
            type: ['hospital'],
        },
        (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                // Find the nearest hospital
                const nearestHospital = results[0];
                alert(`Nearest Hospital: ${nearestHospital.name}`);

                // Plot directions to the hospital
                directionsService.route(
                    {
                        origin: userLocation,
                        destination: nearestHospital.geometry.location,
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            directionsRenderer.setDirections(result);
                        } else {
                            alert('Unable to fetch directions.');
                        }
                    }
                );
            } else {
                alert('No hospitals found nearby.');
            }
        }
    );
}

// Initialize the map when the page loads
window.onload = initMap;
