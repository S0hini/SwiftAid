import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';
import { MapPin, Navigation } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 34.04924594193164,
  lng: -118.24104309082031
};

export default function Search() {
  const [destination, setDestination] = useState('');
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition | null>(null);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setCurrentLocation(position),
        (error) => console.error('Error getting location:', error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleOpenGoogleMaps = () => {
    if (!destination) return;
    
    const origin = currentLocation 
      ? `${currentLocation.coords.latitude},${currentLocation.coords.longitude}`
      : '';
    
    const url = `https://www.google.com/maps/dir/${origin}/${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
  };

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Search Destination</h1>
      
      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          onClick={handleGetCurrentLocation}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2"
        >
          <MapPin className="w-5 h-5" />
          Get Current Location
        </button>
        
        <button
          onClick={handleOpenGoogleMaps}
          disabled={!destination}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Navigation className="w-5 h-5" />
          Get Directions
        </button>
      </div>

      <LoadScript googleMapsApiKey="AlzaSyChubci7qnbkrgvZBtvEwH4DJP1Op8ehaU">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
        >
          <TrafficLayer />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}