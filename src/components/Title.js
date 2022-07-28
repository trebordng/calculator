import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import "../App.css";
const Title = () => {
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <Grid item xs={12} md={3}>
        Box Style
      </Grid>
      {isMed ? null : (
        <React.Fragment>
          <Grid item xs={12} md={3}>
            Plain (UnPrinted)
          </Grid>
          <Grid item xs={12} md={3}>
            Digital Print
          </Grid>

          <Grid item xs={12} md={3}>
            Flexo Print
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Title;
