import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ToolbarComponent from "./components/ToolbarComponent";
import SortComponent from "./components/SortComponent";
import SearchbarComponent from "./components/SearchComponent";
import EpisodeList from "./components/ListComponent";
import EpisodeDetails from "./components/DetailsComponent";
import {
  CssBaseline,
  Grid,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useFetchEpisodes } from "./hooks/useFetchEpisodes";
import "./styles.css";

const AppContent: React.FC = () => {
  const { loading, error } = useFetchEpisodes();

  return (
    <>
      <ToolbarComponent>
        <Grid item xs={12} md={3}>
          <SortComponent />
        </Grid>
        <Grid item xs={12} md={9}>
          <SearchbarComponent />
        </Grid>
      </ToolbarComponent>
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <CircularProgress />
                <Typography sx={{ ml: 2 }}>Loading...</Typography>
              </Box>
            ) : error ? (
              <Typography variant="h6" color="error" align="center">
                {error}
              </Typography>
            ) : (
              <EpisodeList />
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <EpisodeDetails listLoaded={!loading} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppContent />
    </Provider>
  );
};

export default App;
