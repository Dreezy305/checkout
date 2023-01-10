import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function RelatedItems() {
  const title = (
    <Typography
      variant={"h5"}
      className="text-title font-AmazonEmberBold text-font14 leading-5"
    >
      Products related to items in your cart
    </Typography>
  );

  const subHeader = (
    <Typography component={"div"} className="flex flex-col">
      <Typography
        component={"span"}
        className="text-lightGrey text-font11 no-underline cursor-text font-AmazonEmberRegular pt-1 font-normal"
      >
        Sponsored
      </Typography>
    </Typography>
  );

  return (
    <Card sx={{ borderRadius: "8px" }}>
      <CardHeader title={title} subheader={subHeader} />
      <CardContent
        sx={{ display: "flex", flexDirection: "column" }}
        className="space-y-3"
      >
        <Box
          sx={{ display: "flex", flexDirection: "row" }}
          className="space-x-2 align-baseline"
        >
          <CardMedia
            component="img"
            sx={{ width: "23%", height: "100%" }}
            image="https://res.cloudinary.com/africahacks/image/upload/v1606074022/chimoney/Purple-100_z05fgn.jpg"
            alt="Live from space album cover"
            className=""
          />

          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography component={"div"}>
              <Typography component={"span"} className="truncate">
                Adobe Acrobat Professional DC | PDF converter | 12-month
                Subscription with auto-renewal, PC/Mac
              </Typography>
            </Typography>
          </CardContent>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RelatedItems;
