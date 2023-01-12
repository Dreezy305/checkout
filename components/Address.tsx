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

function Address() {
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
      <Typography
        component={"h5"}
        className="font-AmazonEmberMedium text-font13 text-gray-400"
      >
        CHECKOUT
      </Typography>

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
            JOHN DOE
          </Typography>
          <Typography variant="body2" color="text.secondary">
            krispy kreme, bishop aboyade cole street, victoria island,
            LEKKI-ONIRU ESTATE, Lagos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +2347062383712
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Address;
