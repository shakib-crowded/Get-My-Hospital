import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LocationOn, Navigation } from "@mui/icons-material";
import { Link } from "react-router-dom";
import HospitalMap from "../hospital/HospitalMap";

const HospitalMapSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 2,
            mb: 2,
          }}
        >
          Hospital Locator
        </Typography>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          Find Hospitals{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Near You
          </Box>
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: "auto",
            fontWeight: 300,
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Locate government hospitals with real-time availability, directions,
          and comprehensive facility information
        </Typography>

        <Button
          variant="outlined"
          size="large"
          startIcon={<Navigation />}
          component={Link}
          to="/hospitals"
          sx={{
            py: 1.5,
            px: 4,
            borderRadius: 3,
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          View All Hospitals
        </Button>
      </Box>

      {/* Map Container */}
      <Box
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          border: "1px solid",
          borderColor: "grey.200",
          position: "relative",
        }}
      >
        {/* Map Overlay for better UX */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            zIndex: 1,
            bgcolor: "white",
            borderRadius: 2,
            p: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <LocationOn sx={{ color: "primary.main", fontSize: 20 }} />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Interactive Map
          </Typography>
        </Box>

        <Box sx={{ height: { xs: 300, md: 450 } }}>
          <HospitalMap height="100%" />
        </Box>
      </Box>
    </Container>
  );
};

export default HospitalMapSection;
