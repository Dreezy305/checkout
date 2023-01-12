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

function CheckoutInfo(): JSX.Element {
  const title = (
    <Typography
      component={"div"}
      className="flex flex-row items-center justify-between"
    >
      <Typography
        component={"span"}
        className="text-title font-AmazonEmberMedium "
      >
        1. ADDRESS DETAILS
      </Typography>

      <Typography
        component={"span"}
        className="text-gold font-AmazonEmberMedium cursor-pointer"
      >
        CHANGE
      </Typography>
    </Typography>
  );
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      className="w-3/4 space-y-2 pl-3"
    >
      <Typography component={"h5"} className="">
        CHECKOUT
      </Typography>

      <Card>
        <CardHeader title={title} />
        <hr />
      </Card>
    </Box>
  );
}

export default CheckoutInfo;
