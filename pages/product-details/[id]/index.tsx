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
import styles from "../../../styles/Home.module.css";

function ProductDetails() {
  const title = (
    <Typography
      variant={"h5"}
      className="text-title font-AmazonEmberMedium text-font13"
    >
      DELIVERY & RETURNS
    </Typography>
  );
  return (
    <main className={`${styles.main} space-x-5`}>
      <div className={`w-3/4`}>
        <Card></Card>
      </div>
      <div className={`w-1/4`}>
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
                  Delivery ₦ 520
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
              <img src={"/pickup.svg"} alt="pick up" />
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
                  Pick up costs ₦ 200
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
        </Card>
      </div>
    </main>
  );
}

export default ProductDetails;

// /Free delivery on thousands of products in Lagos, Ibadan & Abuja Details
