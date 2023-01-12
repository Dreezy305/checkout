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

function Summary(): JSX.Element {
    const title = (
      <Typography
        variant={"h5"}
        className="text-title font-AmazonEmberMedium text-font13"
      >
        YOUR ORDER (1 item)
      </Typography>
    );
  return (
    <Card>
      <CardHeader title={title} />
      <hr />
      <CardContent>
        <Box
          sx={{ display: "flex" }}
          className="flex flex-row items-start space-x-4"
        >
          <CardMedia
            component="img"
            sx={{ width: "23%" }}
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8236371/1.jpg?0528"
            alt="Live from space album cover"
            className=""
          />
          <Typography component={"div"} className="flex flex-col">
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font12"
            >
              Galaxy S21 Ultra 5G 12+256GB G9980 Dual Sim - Black
            </Typography>

            <Typography
              component={"span"}
              className="text-gold font-AmazonEmberMedium text-font13"
            >
              ₦200
            </Typography>
            <Typography
              component={"span"}
              className="text-title font-AmazonEmberMedium text-font12"
            >
              QTY:&nbsp; <strong>1</strong>
            </Typography>
          </Typography>
        </Box>
      </CardContent>
      <hr />
      <CardContent className="space-y-3">
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
          className="flex flex-row justify-between items-center"
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
      </CardContent>
      <hr />
      <CardContent className="space-y-3">
        <Typography
          component={"div"}
          className="flex flex-row justify-between items-center"
        >
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font15"
          >
            Total
          </Typography>
          <Typography
            component={"span"}
            className="text-title font-AmazonEmberMedium text-font13"
          >
            ₦200
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Summary;
