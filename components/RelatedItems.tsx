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
        className="space-y-2"
      >
        {[1, 2, 3].map((i: any, index:any) => {
          return (
            <>
              <Box
                sx={{ display: "flex", flexDirection: "row" }}
                className="space-x-1 items-start w-full"
                key={index}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "23%", height: "100%" }}
                  image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8236371/1.jpg?0528"
                  alt="Live from space album cover"
                  className="pt-4"
                />

                <CardContent
                  sx={{ display: "flex", flexDirection: "column" }}
                  className="overflow-hidden w-5/6"
                >
                  <Typography
                    component={"div"}
                    className="flex flex-col space-y-1"
                  >
                    <Typography
                      component={"span"}
                      className="text-link text-font14 text-ellipsis overflow-hidden ... font-AmazonEmberRegular"
                    >
                      Adobe Acrobat Professional DC | PDF
                    </Typography>
                    <Typography
                      component={"span"}
                      className="font-AmazonEmberRegular text-link text-font12"
                    >
                      143
                    </Typography>
                    <Typography
                      component={"span"}
                      className="text-font13 text-brown font-AmazonEmberRegular"
                    >
                      $3,143
                    </Typography>
                    <Typography
                      component={"div"}
                      className="text-font11 font-AmazonEmberRegular buymore py-1 w-auto borders"
                    >
                      See all buying options
                    </Typography>
                  </Typography>
                </CardContent>
              </Box>
            </>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default RelatedItems;
