import React from "react";
import { Grid, Select, MenuItem } from "@mui/material";
import "../App.css";

const UserInput = (props) => {
  const handleChange = (event) => {
    props.setPr(event.target.value);
  };
  return (
    <Grid container item xs={6} md={3}>
      <Grid xs={12} className="input-name">
        Print Required?
      </Grid>
      <Grid xs={12}>
        <Select
          className="input-field"
          value={props.pr}
          onChange={handleChange}
        >
          <MenuItem value={1}> 1 Colour</MenuItem>
          <MenuItem value={2}> 2 Colour</MenuItem>
          <MenuItem value={3}> 3 Colour</MenuItem>
          <MenuItem value={"CMYK"}> CMYK</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default UserInput;
