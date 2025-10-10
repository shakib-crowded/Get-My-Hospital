import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/hospital/Header";
import SearchBar from "../components/hospital/SearchBar";
import HospitalList from "../components/hospital/HospitalList";
import HospitalMap from "../components/hospital/HospitalMap";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock API function - replace with actual API endpoint
  const fetchNearbyHospitals = async (latitude, longitude) => {
    try {
      setLoading(true);
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data - replace with actual API response
      const mockHospitals = [
        {
          id: 1,
          name: "Government Medical College & Hospital",
          address: "Sector 32, Chandigarh",
          distance: "2.5 km",
          specialties: ["General Medicine", "Cardiology", "Emergency"],
          opdTimings: "9:00 AM - 4:00 PM",
          availableSlots: 15,
          contact: "+91-172-2600000",
          isEmergency: true,
          latitude: 30.7333,
          longitude: 76.7794,
        },
        {
          id: 2,
          name: "Civil Hospital",
          address: "Sector 22, Chandigarh",
          distance: "3.8 km",
          specialties: ["General Medicine", "Pediatrics", "Dentistry"],
          opdTimings: "8:00 AM - 3:00 PM",
          availableSlots: 8,
          contact: "+91-172-2700000",
          isEmergency: true,
          latitude: 30.7259,
          longitude: 76.7694,
        },
        {
          id: 3,
          name: "PGIMER Hospital",
          address: "Sector 12, Chandigarh",
          distance: "4.2 km",
          specialties: ["Cardiology", "Orthopedics", "Gynecology", "Emergency"],
          opdTimings: "8:30 AM - 5:00 PM",
          availableSlots: 22,
          contact: "+91-172-2750000",
          isEmergency: true,
          latitude: 30.7672,
          longitude: 76.7765,
        },
        {
          id: 4,
          name: "District Government Hospital",
          address: "Sector 16, Panchkula",
          distance: "6.1 km",
          specialties: ["General Medicine", "Dermatology"],
          opdTimings: "9:00 AM - 2:00 PM",
          availableSlots: 5,
          contact: "+91-172-2650000",
          isEmergency: false,
          latitude: 30.6915,
          longitude: 76.8537,
        },
        {
          id: 5,
          name: "Civil Dispensary",
          address: "Sector 40, Chandigarh",
          distance: "1.8 km",
          specialties: ["General Medicine", "Pediatrics"],
          opdTimings: "10:00 AM - 2:00 PM",
          availableSlots: 12,
          contact: "+91-172-2680000",
          isEmergency: false,
          latitude: 30.7109,
          longitude: 76.7894,
        },
      ];

      // Calculate distances based on user location (simplified)
      const hospitalsWithDistance = mockHospitals.map((hospital) => ({
        ...hospital,
        distance: calculateDistance(
          latitude,
          longitude,
          hospital.latitude,
          hospital.longitude
        ),
      }));

      // Sort by distance
      hospitalsWithDistance.sort(
        (a, b) => parseFloat(a.distance) - parseFloat(b.distance)
      );

      setHospitals(hospitalsWithDistance);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch hospitals. Please try again.");
      setLoading(false);
    }
  };

  // Calculate distance between two coordinates (simplified Haversine)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(1);
  };

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          fetchNearbyHospitals(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Unable to access your location. Using default location.");
          // Use default location (Chandigarh coordinates)
          const defaultLat = 30.7333;
          const defaultLon = 76.7794;
          setUserLocation({ latitude: defaultLat, longitude: defaultLon });
          fetchNearbyHospitals(defaultLat, defaultLon);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      // Use default location
      const defaultLat = 30.7333;
      const defaultLon = 76.7794;
      setUserLocation({ latitude: defaultLat, longitude: defaultLon });
      fetchNearbyHospitals(defaultLat, defaultLon);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const refreshLocation = () => {
    setLoading(true);
    getUserLocation();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Finding nearby government hospitals...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Search and Filters */}
      <div className="container mx-auto px-4 max-w-6xl py-6">
        <SearchBar
          refreshLocation={refreshLocation}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <HospitalList filteredHospitals={hospitals} />
        <HospitalMap />
      </div>
    </div>
  );
};

export default Hospitals;
