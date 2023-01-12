import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function BottomCard(): JSX.Element {
  const title = (
    <Typography
      variant={"h5"}
      className="text-title font-AmazonEmberMedium text-font13"
    >
      PRODUCT DETAILS
    </Typography>
  );
  return (
    <Card>
      <CardHeader title={title} />
      <hr />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {` Download RC FPV app from IOS store and Google play store to connect to
          the drone's camera Age: 14+ Product Specifications: Model: TXD-8S
          Style: black, white. Body type: 28 cm x 28 cm x 11 cm. Remote control
          battery: AA battery * 4 (not included) Operating mode: remote control
          / app control Transmission power: 2.4 GHz Gyro: 6 axles. Charging
          mode: universal USB interface Battery capacity: 3.7 V 1800 mAh lithium
          battery. Flight time: 25 minutes. Charging time: 120 minutes. Flight
          distance: safety distance 150 to 200 metres.`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BottomCard;
