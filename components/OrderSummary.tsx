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

function OrderSummary() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography component={"h5"} className="">
        ORDER SUMMARY
      </Typography>
    </Box>
  );
}

export default OrderSummary;
