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

function ShipmentDetails(): JSX.Element {
  const title = (
    <Typography
      component={"div"}
      className="flex flex-row items-center justify-between"
    >
      <Typography
        component={"span"}
        className="text-title font-AmazonEmberMedium "
      >
        3. SHIPMENT DETAILS
      </Typography>
    </Typography>
  );
  return (
    <Card>
      <CardHeader title={title} />
      <hr />
      <CardContent className="pl-6">
        <Typography
          component={"div"}
          className="flex flex-row justify-between items-center"
        >
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font15"
          >
            Subtotal
          </Typography>
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font13"
          >
            ₦200
          </Typography>
        </Typography>

        <Typography
          component={"div"}
          className="flex flex-row justify-between items-center pb-3"
        >
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font15"
          >
            Delivery fee
          </Typography>
          <Typography
            component={"span"}
            className="text-gold font-AmazonEmberMedium text-font13"
          >
            ₦200
          </Typography>
        </Typography>

        <hr />
        <Typography
          component={"div"}
          className="flex flex-row justify-between items-center pt-4"
        >
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font15"
          >
            Total
          </Typography>
          <Typography
            component={"span"}
            className="text-gold font-AmazonEmberMedium text-font13"
          >
            ₦200
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ShipmentDetails;
