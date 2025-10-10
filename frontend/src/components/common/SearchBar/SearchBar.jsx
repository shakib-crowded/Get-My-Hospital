// src/components/common/SearchBar/SearchBar.jsx
import React, { useState } from "react";
import {
  Paper,
  InputBase,
  IconButton,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Search, MyLocation } from "@mui/icons-material";

const SearchBar = ({ onSearch, placeholder = "Search hospitals..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Handle location-based search
          console.log("Location:", position.coords);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <IconButton
        sx={{ p: "10px" }}
        aria-label="current location"
        onClick={handleCurrentLocation}
      >
        <MyLocation />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
      />

      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearch}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
