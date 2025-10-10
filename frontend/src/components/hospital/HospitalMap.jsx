import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocalHospital,
  LocationOn,
  MyLocation,
  Directions,
} from "@mui/icons-material";

const HospitalMap = ({ height = "500px" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const markersRef = useRef([]); // Store markers for cleanup

  const sampleHospitals = [
    {
      id: 1,
      name: "AIIMS Hospital",
      lat: 28.5676,
      lng: 77.2108,
      address: "Ansari Nagar, New Delhi",
      type: "Government",
      phone: "011-26588500",
    },
    {
      id: 2,
      name: "Safdarjung Hospital",
      lat: 28.5672,
      lng: 77.205,
      address: "Ansari Nagar East, New Delhi",
      type: "Government",
      phone: "011-26165060",
    },
  ];

  // Load Leaflet resources
  const loadLeafletResources = async () => {
    try {
      // Check if Leaflet is already loaded
      if (window.L) {
        return window.L;
      }

      // Load CSS
      await new Promise((resolve, reject) => {
        if (!document.querySelector('link[href*="leaflet"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
          link.onload = resolve;
          link.onerror = reject;
          document.head.appendChild(link);
        } else {
          resolve();
        }
      });

      // Load JS
      await new Promise((resolve, reject) => {
        if (!document.querySelector('script[src*="leaflet"]')) {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.onload = () => {
            // Wait for Leaflet to be fully available
            const checkL = () => {
              if (window.L) {
                resolve();
              } else {
                setTimeout(checkL, 100);
              }
            };
            checkL();
          };
          script.onerror = reject;
          document.head.appendChild(script);
        } else {
          resolve();
        }
      });

      return window.L;
    } catch (error) {
      console.error("Failed to load Leaflet:", error);
      throw new Error("Failed to load map library");
    }
  };

  // Initialize map
  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current) return;

      setLoading(true);
      setError("");

      try {
        const L = await loadLeafletResources();

        if (!L) {
          throw new Error("Leaflet library not available");
        }

        // Initialize map
        const leafletMap = L.map(mapRef.current).setView([28.6139, 77.209], 12);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(leafletMap);

        setMap(leafletMap);
        getUserLocation(leafletMap);
      } catch (err) {
        console.error("Map initialization error:", err);
        setError(err.message || "Failed to initialize map");
        setLoading(false);
      }
    };

    initMap();

    // Cleanup function
    return () => {
      if (map) {
        // Clear all markers
        markersRef.current.forEach((marker) => {
          if (marker && marker.remove) {
            marker.remove();
          }
        });
        markersRef.current = [];

        // Remove map
        map.remove();
      }
    };
  }, []);

  const fetchHospitalsOverpass = async (latitude, longitude, radiusKm = 5) => {
    try {
      // Simplified query for better reliability
      const query = `
        [out:json][timeout:25];
        (
          node["amenity"="hospital"](around:${
            radiusKm * 1000
          },${latitude},${longitude});
          way["amenity"="hospital"](around:${
            radiusKm * 1000
          },${latitude},${longitude});
          relation["amenity"="hospital"](around:${
            radiusKm * 1000
          },${latitude},${longitude});
        );
        out center;
      `;

      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `data=${encodeURIComponent(query)}`,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch hospital data");
      }

      const data = await response.json();

      const hospitals = data.elements
        .map((element, index) => {
          const lat = element.lat || element.center?.lat;
          const lng = element.lon || element.center?.lon;

          if (!lat || !lng) return null;

          return {
            id: element.id || index,
            name: element.tags?.name || "Hospital",
            lat: lat,
            lng: lng,
            address:
              element.tags?.["addr:full"] ||
              element.tags?.["addr:street"] ||
              "Address not available",
            type: "Hospital",
            phone: element.tags?.phone || "Not available",
          };
        })
        .filter(Boolean)
        .slice(0, 10); // Limit to 10 hospitals

      return hospitals.length > 0 ? hospitals : sampleHospitals;
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      return sampleHospitals;
    }
  };

  const getUserLocation = async (leafletMap) => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      displayHospitals(leafletMap, sampleHospitals);
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          if (leafletMap) {
            leafletMap.setView([latitude, longitude], 13);

            // Add user location marker
            const L = window.L;
            if (L) {
              const userMarker = L.marker([latitude, longitude])
                .addTo(leafletMap)
                .bindPopup("Your Location")
                .openPopup();

              markersRef.current.push(userMarker);
            }
          }

          const hospitalsData = await fetchHospitalsOverpass(
            latitude,
            longitude
          );
          displayHospitals(leafletMap, hospitalsData);
        } catch (error) {
          console.error("Error getting location:", error);
          setError("Error getting your location. Showing sample data.");
          displayHospitals(leafletMap, sampleHospitals);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setError("Location access denied. Showing sample data.");
        displayHospitals(leafletMap, sampleHospitals);
      },
      {
        timeout: 10000,
        enableHighAccuracy: true,
      }
    );
  };

  const displayHospitals = (leafletMap, hospitalsData) => {
    if (!leafletMap || !window.L) {
      setError("Map not available");
      setLoading(false);
      return;
    }

    const L = window.L;

    // Clear existing markers
    markersRef.current.forEach((marker) => {
      if (marker && marker.remove) {
        marker.remove();
      }
    });
    markersRef.current = [];

    // Add hospital markers
    hospitalsData.forEach((hospital) => {
      try {
        const hospitalIcon = L.divIcon({
          html: `
            <div style="
              background: #d32f2f;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              border: 3px solid white;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L4 7V22H20V7L12 2Z"/>
              </svg>
            </div>
          `,
          className: "hospital-marker",
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const marker = L.marker([hospital.lat, hospital.lng], {
          icon: hospitalIcon,
        }).addTo(leafletMap).bindPopup(`
            <div style="min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #1976d2;">${hospital.name}</h3>
              <p style="margin: 0 0 8px 0; color: #666;">${hospital.address}</p>
              <p style="margin: 0 0 8px 0; color: #388e3c;">${hospital.type}</p>
              <p style="margin: 0; color: #ff9800;">📞 ${hospital.phone}</p>
            </div>
          `);

        markersRef.current.push(marker);
      } catch (error) {
        console.error("Error adding hospital marker:", error);
      }
    });

    setHospitals(hospitalsData);
    setLoading(false);
  };

  const getDirections = (hospital) => {
    if (userLocation) {
      window.open(
        `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${hospital.lat},${hospital.lng}`,
        "_blank"
      );
    } else {
      window.open(
        `https://maps.google.com/?q=${hospital.lat},${hospital.lng}`,
        "_blank"
      );
    }
  };

  const reloadLocation = () => {
    setLoading(true);
    setError("");
    if (map) {
      getUserLocation(map);
    }
  };

  return (
    <Box sx={{ width: "100%", height, position: "relative" }}>
      {/* Map Container */}
      <Box
        ref={mapRef}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: theme.shadows[3],
        }}
      />

      {/* Loading Overlay */}
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            zIndex: 1000,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress size={40} />
            <Typography variant="body2" sx={{ mt: 2 }}>
              Loading map and finding hospitals...
            </Typography>
          </Box>
        </Box>
      )}

      {/* Error Message */}
      {error && (
        <Alert
          severity="warning"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            right: 16,
            zIndex: 1000,
          }}
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}

      {/* Hospital List Panel */}
      {!loading && hospitals.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: isMobile ? 16 : 16,
            left: isMobile ? 16 : "auto",
            width: isMobile ? "calc(100% - 32px)" : 320,
            maxHeight: "400px",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: theme.shadows[4],
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              p: 2,
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LocalHospital sx={{ mr: 1 }} />
              Nearby Hospitals
            </Typography>
            <Chip
              label={`${hospitals.length} hospitals`}
              size="small"
              sx={{
                mt: 1,
                backgroundColor: "white",
                color: "primary.main",
                fontWeight: "bold",
              }}
            />
          </Box>

          <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
            {hospitals.map((hospital) => (
              <Box
                key={hospital.id}
                sx={{
                  p: 2,
                  borderBottom: "1px solid",
                  borderColor: "grey.200",
                  "&:hover": { backgroundColor: "grey.50" },
                  "&:last-child": { borderBottom: "none" },
                }}
              >
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  {hospital.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                  {hospital.address}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Chip
                    label={hospital.type}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Button
                    size="small"
                    startIcon={<Directions />}
                    onClick={() => getDirections(hospital)}
                    variant="outlined"
                  >
                    Directions
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Control Button */}
      <Box sx={{ position: "absolute", bottom: 16, left: 16, zIndex: 1000 }}>
        <Button
          variant="contained"
          startIcon={<MyLocation />}
          onClick={reloadLocation}
          size="small"
        >
          My Location
        </Button>
      </Box>
    </Box>
  );
};

export default HospitalMap;
