import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/episodesSlice";
import { RootState } from "../redux/store";
import { SelectChangeEvent } from "@mui/material";

const SortComponent: React.FC = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.episodes.sortBy);

  const handleSortByChange = (
    e: SelectChangeEvent<"year" | "episode" | "rating">
  ) => {
    dispatch(setSortBy(e.target.value as "year" | "episode" | "rating"));
  };

  return (
    <FormControl variant="outlined" fullWidth size="small">
      <InputLabel id="sort-by-label">Sort By</InputLabel>
      <Select
        labelId="sort-by-label"
        value={sortBy}
        onChange={handleSortByChange}
        label="Sort By"
        sx={{ backgroundColor: "white" }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "white",
            },
          },
        }}
      >
        <MenuItem value="year">Year</MenuItem>
        <MenuItem value="episode">Episode</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortComponent;
