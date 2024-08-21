import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/episodesSlice";

const SearchComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    dispatch(setFilter(value));
  };

  const handleClear = () => {
    setSearchText("");
    dispatch(setFilter("")); 
  };

  return (
    <TextField
      label="Search"
      placeholder="Type to filter..."
      variant="outlined"
      fullWidth
      value={searchText}
      onChange={handleFilterChange}
      size="small"
      sx={{ backgroundColor: "white" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: searchText ? (
          <InputAdornment position="end">
            <IconButton onClick={handleClear} size="small">
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ) : null,
        style: {
          backgroundColor: "white",
        },
      }}
    />
  );
};

export default SearchComponent;
