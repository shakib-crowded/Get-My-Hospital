import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital"; // For the default filled icon

import { Link } from "react-router-dom";
import { TrendingUp, People, EventAvailable, Star } from "@mui/icons-material";

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const stats = [
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />,
      number: "500+",
      label: "Hospitals Registered",
      description: "Government hospitals across India",
      color: "#1976d2",
    },
    {
      icon: <People sx={{ fontSize: 32 }} />,
      number: "50K+",
      label: "Patients Served",
      description: "Happy patients using our platform",
      color: "#2e7d32",
    },
    {
      icon: <EventAvailable sx={{ fontSize: 32 }} />,
      number: "1M+",
      label: "Appointments Booked",
      description: "Successful appointments scheduled",
      color: "#ed6c02",
    },
    {
      icon: <Star sx={{ fontSize: 32 }} />,
      number: "95%",
      label: "Patient Satisfaction",
      description: "Positive feedback from users",
      color: "#9c27b0",
    },
  ];

  return (
    <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid
          justifyContent={"center"}
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          sx={{ mb: 6 }}
        >
          {/* Content */}
          <Grid>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Transforming Healthcare{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Delivery
              </Box>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                fontSize: "1.125rem",
                lineHeight: 1.7,
              }}
            >
              Touch My Hospital is part of the Digital India initiative,
              bringing transparency, efficiency, and accessibility to government
              healthcare services across the nation.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/about"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(25, 118, 210, 0.3)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(25, 118, 210, 0.4)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More About Us
            </Button>
          </Grid>

          {/* Stats */}
          <Grid>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "grey.200",
                      background: "white",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                        borderColor: stat.color,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        p: 1.5,
                        borderRadius: "50%",
                        bgcolor: `${stat.color}15`,
                        color: stat.color,
                        mb: 2,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: stat.color,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: { xs: "none", sm: "block" },
                        fontSize: "0.75rem",
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
