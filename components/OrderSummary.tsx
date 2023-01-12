import { Box, Typography } from "@mui/material";
import React from "react";
import Summary from "./Summary";
function OrderSummary(): JSX.Element {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      className="w-1/4 pr-3 space-y-2"
    >
      <Typography
        component={"h5"}
        className="font-AmazonEmberMedium text-font13 text-gray-400"
      >
        ORDER SUMMARY
      </Typography>
      <Summary />
    </Box>
  );
}

export default OrderSummary;
