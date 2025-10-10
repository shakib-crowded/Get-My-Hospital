import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const specialties = [
    "General Medicine",
    "Cardiology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Gynecology",
    "Dentistry",
    "Emergency",
  ];

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

  // Filter hospitals based on search and specialty
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "" ||
      hospital.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

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
      <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Find Government Hospitals
          </h1>
          <p className="text-lg text-center opacity-90 max-w-2xl mx-auto">
            Discover nearby government hospitals with real-time availability and
            book appointments instantly
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 max-w-6xl py-6">
        {/* Hospitals List */}
        <div className="space-y-6">
          {filteredHospitals.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2zM9 7h6m-6 4h6m-6 4h6"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                No hospitals found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or location
              </p>
            </div>
          ) : (
            filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {hospital.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {hospital.isEmergency && (
                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                              Emergency
                            </span>
                          )}
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {hospital.availableSlots} slots available
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {hospital.address} • {hospital.distance} km away
                        </div>

                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          OPD Timings: {hospital.opdTimings}
                        </div>

                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                            />
                          </svg>
                          Contact: {hospital.contact}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">
                          Specialties:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {hospital.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-6 mt-4 lg:mt-0">
                      <Link
                        to={`/book-appointment/${hospital.id}`}
                        state={{ hospital }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Map Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Hospitals Near You</h3>
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p>Interactive Map View</p>
              <p className="text-sm">
                (Map integration would show hospital locations here)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
