import React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import "../App.css";

const BoxDescription = (props) => {
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container className="box-wrapper">
      <Grid xs={12} md={3} className="box-name">
        {props.name}
      </Grid>
      {isMed ? (
        <Grid item xs={12} className="title-phone">
          Plain (UnPrinted)
        </Grid>
      ) : null}
      <Grid xs={12} md={3}>
        <div
          className={
            props.p === "No"
              ? "red box-field"
              : props.p === "Yes"
              ? "green box-field"
              : "white box-field"
          }
        >
          {props.p}
        </div>
      </Grid>
      {isMed ? (
        <Grid item xs={12} md={3} className="title-phone">
          Digital Print
        </Grid>
      ) : null}
      <Grid xs={12} md={3}>
        <div
          className={
            props.q === "No"
              ? "red box-field"
              : props.q === "Yes"
              ? "green box-field"
              : "white box-field"
          }
        >
          {props.q}
        </div>
      </Grid>
      {isMed ? (
        <Grid item xs={12} md={3} className="title-phone">
          Flexo Print
        </Grid>
      ) : null}
      <Grid xs={12} md={3}>
        <div
          className={
            props.r === "No"
              ? "red box-field"
              : props.r === "Yes"
              ? "green box-field"
              : "white box-field"
          }
        >
          {props.r}
        </div>
      </Grid>
    </Grid>
  );
};

export default BoxDescription;
