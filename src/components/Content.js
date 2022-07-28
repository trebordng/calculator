import React, { useState, useEffect } from "react";
import { Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import "../App.css";
import { Box } from "@mui/system";
import UserInput from "./UserInput";
import PrintSelect from "./PrintSelect";
import Title from "./Title";
import BoxDescription from "./BoxDescription";
const Content = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [n8, setN8] = useState();
  const [o8, setO8] = useState();
  const [n10, setN10] = useState();
  const [o10, setO10] = useState();
  const [p12, setP12] = useState();
  const [r12, setR12] = useState();
  const [q12, setQ12] = useState();
  const [n12, setN12] = useState();
  const [o12, setO12] = useState();
  const [n14, setN14] = useState();
  const [o14, setO14] = useState();
  const [n16, setN16] = useState();
  const [o16, setO16] = useState();
  const s8 = 1350;
  const t8 = 850;
  const s9 = 2400;
  const v8 = 1000;
  const w8 = 550;
  const w9 = 850;
  const w16 = 1000000;
  const [s10, setS10] = useState();
  const [p8, setP8] = useState();
  const [q8, setQ8] = useState();
  const [r8, setR8] = useState();
  const [p10, setP10] = useState();
  const [q10, setQ10] = useState();
  const [r10, setR10] = useState();
  const [pr, setPr] = useState();
  const [p14, setP14] = useState();
  const [r14, setR14] = useState();
  const [q14, setQ14] = useState();
  const [p16, setP16] = useState();
  const [r16, setR16] = useState();
  const [q16, setQ16] = useState();
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  function reset() {
    setHeight("");
    setLength("");
    setWidth("");
  }

  useEffect(() => {
    setN8(height * 2 + length + 26);
    setO8(height * 3 + 30 + width * 2 + 37);
    setN10(height * 2.05 + length + 25);
    setO10(height * 4.05 + width * 2 + 35);
    setN12(height * 3 + width * 2 + 28);
    setO12(length + height * 4 + 35);
    setN14(height * 3 + width * 2 + 40);
    setO14(length * 1.09 + height * 4.16 + 45);
    setN16(length * 2 + width * 2 + 60);
    setO16(width + height + 25);
    setS10(length);
  }, [length, width, height]);
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setR16("");
    } else if (p16 === "Yes") {
      if ((n16 * o16) / w16 < 0.4) {
        setR16("No");
      } else {
        setR16("Yes");
      }
    } else {
      setR16("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setQ16("");
    } else if (p16 === "Yes") {
      if (n16 > v8 && o16 > v8) {
        setQ16("No");
      } else {
        setQ16("Yes");
      }
    } else {
      setQ16("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setP16("");
    } else if (n16 > s9 || o16 > s9) {
      setP16("No");
    } else {
      setP16("Yes");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setR14("");
    } else if (p14 === "Yes") {
      if (pr === "CMYK") {
        setR14("No");
      } else if (n14 < w8 || o14 < w8) {
        setR14("No");
      } else if (n14 > w8 && o14 > w9) {
        setR14("Yes");
      } else if (o14 > w8 && n14 > w9) {
        setR14("Yes");
      } else {
        setR14("No");
      }
    } else {
      setR14("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setQ14("");
    } else if (p14 === "Yes") {
      if (n14 > v8 && o14 > v8) {
        setQ14("No");
      } else {
        setQ14("Yes");
      }
    } else {
      setQ14("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setP14("");
    } else if (n14 > s8 || o14 > s8) {
      setP14("No");
    } else if (n14 > t8 && o14 > t8) {
      setP14("No");
    } else if (height > s10) {
      setP14("No");
    } else {
      setP14("Yes");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setR12("");
    } else if (p12 === "Yes") {
      if (pr === "CMYK") {
        setR12("No");
      } else if (n12 < w8 || o12 < w8) {
        setR12("No");
      } else if (n12 > w8 && o12 > w9) {
        setR12("Yes");
      } else if (o12 > w8 && n12 > w9) {
        setR12("Yes");
      } else {
        setR12("No");
      }
    } else {
      setR12("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setQ12("");
    } else if (p12 === "Yes") {
      if (n12 > v8 && o12 > v8) {
        setQ12("No");
      } else {
        setQ12("Yes");
      }
    } else {
      setQ12("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setP12("");
    } else if (n12 > s8 || o12 > s8) {
      setP12("No");
    } else if (n12 > t8 && o12 > t8) {
      setP12("No");
    } else if (height > s10) {
      setP12("No");
    } else {
      setP12("Yes");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setR10("");
    } else if (p10 === "Yes") {
      if (pr === "CMYK") {
        setR10("No");
      } else if (n10 < w8 || o10 < w8) {
        setR10("No");
      } else if (n10 > w8 && o10 > w9) {
        setR10("Yes");
      } else if (o10 > w8 && n10 > w9) {
        setR10("Yes");
      } else {
        setR10("No");
      }
    } else {
      setR10("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setQ10("");
    } else if (p10 === "Yes") {
      if (n10 > v8 && o10 > v8) {
        setQ10("No");
      } else {
        setQ10("Yes");
      }
    } else {
      setQ10("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setP10("");
    } else if (n10 > s8 || o10 > s8) {
      setP10("No");
    } else if (n10 > t8 && o10 > t8) {
      setP10("No");
    } else if (height > s10) {
      setP10("No");
    } else {
      setP10("Yes");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setR8("");
    } else if (p8 === "Yes") {
      if (pr === "CMYK") {
        setR8("No");
      } else if (n8 < w8 || o8 < w8) {
        setR8("No");
      } else if (n8 > w8 && o8 > w9) {
        setR8("Yes");
      } else if (o8 > w8 && n8 > w9) {
        setR8("Yes");
      }
    } else {
      setR8("No");
    }
  });

  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setQ8("");
    } else if (p8 === "Yes") {
      if (n8 > v8 && o8 > v8) {
        setQ8("No");
      } else {
        setQ8("Yes");
      }
    } else {
      setQ8("No");
    }
  });
  useEffect(() => {
    if (height === "" || width === "" || length === "") {
      setP8("");
    } else if (n8 > s8 || o8 > s8) {
      setP8("No");
    } else if (n8 > t8 && o8 > t8) {
      setP8("No");
    } else if (height > s10) {
      setP8("No");
    } else {
      setP8("Yes");
    }
  });
  return (
    <Box className="content">
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={2}>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
        </Grid>
        <Grid container item xs={12} md={9} spacing={2}>
          <UserInput name="Length" num={length} setNum={setLength} />
          <UserInput name="Width" num={width} setNum={setWidth} />
          <UserInput name="Height" num={height} setNum={setHeight} />
          <PrintSelect pr={pr} setPr={setPr} />
        </Grid>
      </Grid>
      <Grid container className="title-wrapper">
        <Title />
      </Grid>
      <BoxDescription
        name="Twin Front Wall (Lock in Tab - 30mm)"
        p={p8}
        q={q8}
        r={r8}
      />
      {isMed ? (
        <Grid container className="title-wrapper">
          <Title />
        </Grid>
      ) : null}
      <BoxDescription
        name="Twin Front Wall (Tuck in Top)"
        p={p10}
        q={q10}
        r={r10}
      />
      {isMed ? (
        <Grid container className="title-wrapper">
          <Title />
        </Grid>
      ) : null}
      <BoxDescription
        name="Twin Side Wall (Tuck in Top)"
        p={p12}
        q={q12}
        r={r12}
      />
      {isMed ? (
        <Grid container className="title-wrapper">
          <Title />
        </Grid>
      ) : null}
      <BoxDescription
        name="Twin Side Wall (Elephant Ears - EE)"
        p={p14}
        q={q14}
        r={r14}
      />
      {isMed ? (
        <Grid container className="title-wrapper">
          <Title />
        </Grid>
      ) : null}
      <BoxDescription name="Shipping Carton (RSC)" p={p16} q={q16} r={r16} />
    </Box>
  );
};

export default Content;
