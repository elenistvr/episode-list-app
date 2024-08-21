import React, { ReactNode } from "react";
import { AppBar, Toolbar, Grid } from "@mui/material";

interface ToolbarComponentProps {
  children: ReactNode;
}

const ToolbarComponent: React.FC<ToolbarComponentProps> = ({ children }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#F5F5F5" }}>
      <Toolbar
        sx={{
          display: "flex",
          padding: 2,
          backgroundColor: "#F5F5F5",
          borderBottom: `1px solid #ccc`,
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          {children}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
