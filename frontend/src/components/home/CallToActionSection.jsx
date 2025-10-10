import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GetApp, Phone, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: `
          linear-gradient(135deg, 
            rgba(25, 118, 210, 0.95) 0%, 
            rgba(0, 75, 160, 0.95) 100%
          ),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')
        `,
        color: "white",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              opacity: 0.9,
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Join thousands of patients who have simplified their healthcare
            journey with Touch My Hospital
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 6 }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/register"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                py: 1.5,
                px: 4,
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                "&:hover": {
                  bgcolor: "grey.50",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Create Account
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<GetApp />}
              sx={{
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.5)",
                py: 1.5,
                px: 4,
                borderRadius: 3,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Download App
            </Button>
          </Stack>

          {/* Contact Info */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            justifyContent="center"
            divider={
              <Box
                sx={{
                  width: { xs: "100%", sm: "1px" },
                  height: { xs: "1px", sm: "20px" },
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                }}
              />
            }
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ fontSize: 20 }} />
              <Typography variant="body2">1800-XXX-XXXX</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email sx={{ fontSize: 20 }} />
              <Typography variant="body2">
                support@touchmyhospital.gov.in
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToActionSection;
