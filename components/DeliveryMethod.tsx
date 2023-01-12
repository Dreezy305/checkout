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

function DeliveryMethod(): JSX.Element {
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
    </Typography>
  );
  return <div>DeliveryMethod</div>;
}

export default DeliveryMethod;
