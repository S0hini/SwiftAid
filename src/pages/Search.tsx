import React, { useState, useEffect } from "react";
import { 
  LoadScript, 
  GoogleMap, 
  Marker, 
  DirectionsService, 
  DirectionsRenderer 
} from "@react-google-maps/api";

const libraries: ("places")[] = ["places"];

const Search: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [destination, setDestination] = useState("");
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  // Function to Get User's Current Location (Browser API)
  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCurrentLocation({ lat, lng });
          console.log("Accurate Location:", lat, lng);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Geolocation permission denied. Trying Google API...");
          fetchGoogleLocation(); // Fallback to Google API
        },
        {
          enableHighAccuracy: true, // Ensures GPS precision
          timeout: 10000, // Wait max 10 seconds
          maximumAge: 0, // No cached location
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Function to Fetch More Accurate Location from Google Geolocation API
  const fetchGoogleLocation = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/geolocation/v1/geolocate?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.location) {
        setCurrentLocation({
          lat: data.location.lat,
          lng: data.location.lng,
        });
        console.log("Google Geolocation:", data.location.lat, data.location.lng);
      }
    } catch (error) {
      console.error("Error fetching location from Google API:", error);
    }
  };

  // Automatically fetch location on component mount
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Function to Calculate Route
  const getDirections = () => {
    if (!currentLocation) {
      alert("Please allow location access first.");
      return;
    }
    if (!destination) {
      alert("Please enter a destination.");
      return;
    }

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: currentLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          alert("Error fetching directions. Check the destination.");
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} libraries={libraries}>
      <div>
        <h2 className="text-xl font-bold">Search Destination</h2>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
          className="border p-2 w-full mt-2"
        />
        <button
          onClick={getCurrentLocation}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Use My Location
        </button>
        <button
          onClick={getDirections}
          className="bg-green-500 text-white px-4 py-2 mt-2 ml-2 rounded"
        >
          Get Directions
        </button>

        {/* Google Map */}
        <GoogleMap
          center={currentLocation || { lat: 22.5726, lng: 88.3639 }} // Default to Kolkata if no location
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "400px", marginTop: "20px" }}
        >
          {currentLocation && <Marker position={currentLocation} label="You" />}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Search;