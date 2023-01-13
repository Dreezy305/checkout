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
import { productInterface } from "../utils/interfaces";

type props = {
  queryObject?: productInterface;
};

function BottomCard({ queryObject }: props): JSX.Element {
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
          {queryObject?.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BottomCard;
