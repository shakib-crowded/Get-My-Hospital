// src/components/common/Footer/Footer.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocalHospital,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocalHospital sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h6" color="primary.main">
                Touch My Hospital
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Making healthcare accessible and efficient through digital
              innovation. Supporting the vision of Digital India.
            </Typography>
          </Grid>

          <Grid>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                component={RouterLink}
                to="/hospitals"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Find Hospitals
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                color="inherit"
                sx={{ mb: 1 }}
              >
                Our Services
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                sx={{ mb: 1 }}
              >
                About Us
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                OPD Slot Booking
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Medicine Availability
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Hospital Locator
              </Typography>
              <Typography variant="body2">Real-time Updates</Typography>
            </Box>
          </Grid>

          <Grid>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1, fontSize: "small" }} />
              <Typography variant="body2">
                Government of India Initiative
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: "small" }} />
              <Typography variant="body2">104 (Health Helpline)</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ mr: 1, fontSize: "small" }} />
              <Typography variant="body2">
                support@touchmyhospital.gov.in
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <IconButton size="small" sx={{ mr: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton size="small" sx={{ mr: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton size="small" sx={{ mr: 1 }}>
                <Instagram />
              </IconButton>
              <IconButton size="small">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid #e0e0e0", mt: 4, pt: 3 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Touch My Hospital. A Digital India
            Initiative.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
