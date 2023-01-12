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
        2. DELIVERY METHOD
      </Typography>
    </Typography>
  );
  return (
    <Card>
      <CardHeader title={title} />
      <hr />
      <CardContent className="pl-6">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="font-AmazonEmberMedium text-font15"
        >
          Door Delivery
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Delivery fee ₦520
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Delivery will be completed 3 days after order was placed
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DeliveryMethod;
