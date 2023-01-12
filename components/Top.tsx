/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Stack,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function TopCard(): JSX.Element {
  const router = useRouter();
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ maxWidth: "40%", height: "auto" }}
        image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8236371/1.jpg?0528"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component={"div"} className="flex flex-col">
            <Typography
              component="span"
              className="font-AmazonEmberRegular text-font18"
            >
              Adobe Acrobat Professional DC | PDF converter | 12-month
              Subscription with auto-renewal, PC/Mac
            </Typography>
            <Typography component={"span"}>
              <Rating
                name="half-rating"
                defaultValue={4.5}
                precision={0.5}
                size="small"
                readOnly
                className="pt-1"
              />
            </Typography>
          </Typography>
          <hr />
          <Typography
            component={"div"}
            className="flex flex-col space-y-3 mb-2"
          >
            <Typography
              component="span"
              className="text-title text-font18 font-AmazonEmberBold pt-3"
            >
              $179.99
            </Typography>

            <Typography component={"div"} className="flex flex-col">
              <Typography
                component={"span"}
                className="text-gold font-AmazonEmberMedium text-font13"
              >
                5 units left
              </Typography>
              <Typography
                component={"span"}
                className="text-title font-AmazonEmberMedium text-font13"
              >
                Delivery will be completed 3 days after order was placed
              </Typography>
            </Typography>
          </Typography>
          <hr />
          <Typography
            component={"div"}
            className="flex flex-col space-y-3 mt-3"
          >
            <Typography
              component="span"
              className="font-AmazonEmberRegular text-font18"
            >
              NO VARIATION AVAILABLE
            </Typography>

            <Button
              variant="outlined"
              startIcon={
                <img
                  src={"/cartplus.svg"}
                  alt="shopping cart plus"
                  className=""
                />
              }
              className="w-full text-AmazonEmberMedium focus:border-yellowBorder"
              sx={{
                background: "#f68b1e !important",
                border: "#f68b1e !important",
                color: "#fff",
                borderRadius: "5px",
                boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)",
                textTransform: "none",
                outline: "none",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              onClick={() => router.push("/cart")}
            >
              ADD TO CART
            </Button>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default TopCard;
