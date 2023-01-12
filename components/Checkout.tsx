import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

function Checkout(): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography component={"h5"} className="">
        CHECKOUT
      </Typography>
    </Box>
  );
}

export default Checkout;
