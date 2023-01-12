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

function OrderSummary(): JSX.Element {
  const title = (
    <Typography
      variant={"h5"}
      className="text-title font-AmazonEmberMedium text-font13"
    >
      YOUR ORDER (1 item)
    </Typography>
  );
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      className="w-1/4 pr-3 space-y-2"
    >
      <Typography component={"h5"} className="">
        ORDER SUMMARY
      </Typography>

      <Card>
        <CardHeader title={title} />
        <hr />
      </Card>
    </Box>
  );
}

export default OrderSummary;
