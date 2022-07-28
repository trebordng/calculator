import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import "../App.css";

const Header = () => {
  return (
    <AppBar className="navbar" position="static">
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;
