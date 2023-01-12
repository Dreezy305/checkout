/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function Policy() {
  const title = (
    <Typography
      variant={"h5"}
      className="text-title font-AmazonEmberMedium text-font13"
    >
      DELIVERY & RETURNS
    </Typography>
  );
  return (
    <Card>
      <CardHeader title={title} />
      <hr />
      <CardContent>
        <Typography component={"div"} className="flex flex-col">
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font13"
          >
            Express Delivery
          </Typography>
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font12"
          >
            Free delivery on thousands of products in Lagos, Ibadan & Abuja
            Details
          </Typography>
        </Typography>
      </CardContent>
      <hr />
      {/* Door delivery */}
      <CardContent>
        <Box
          sx={{ display: "flex" }}
          className="flex flex-row items-start space-x-2"
        >
          <img src={"/truck.svg"} alt="delivery truck" />
          <Typography component={"div"} className="flex flex-col">
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Door Delivery
            </Typography>
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Delivery fee ₦ 520
            </Typography>
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Delivery will be completed 3 days after order was placed
            </Typography>
          </Typography>
        </Box>
      </CardContent>
      {/* pick up station */}
      <hr />
      <CardContent>
        <Box
          sx={{ display: "flex" }}
          className="flex flex-row items-start space-x-2"
        >
          <img src={"/truck.svg"} alt="pick up" />
          <Typography component={"div"} className="flex flex-col">
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Pick up
            </Typography>
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Pick up fee ₦ 200
            </Typography>
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Items will be available for pick up 3 days after order
            </Typography>
          </Typography>
        </Box>
      </CardContent>

      <hr />
      <CardContent>
        <Box
          sx={{ display: "flex" }}
          className="flex flex-row items-start space-x-2"
        >
          <img src={"/truck.svg"} alt="pick up" />
          <Typography component={"div"} className="flex flex-col">
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Return Policy
            </Typography>

            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font13"
            >
              Free return within 15 days for Official Store items and 7 days for
              other eligible items
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Policy;
