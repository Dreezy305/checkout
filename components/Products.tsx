import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";
import React from "react";

function Product(): JSX.Element {
  const subHeader = (): JSX.Element => {
    return <span>Select All Items</span>;
  };
  return (
    <Card sx={{}} className="px-3">
      <CardHeader title="Shopping Cart" subheader="Select All Items" />
      <hr />
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        className="py-3 items-start justify-between"
      >
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://res.cloudinary.com/africahacks/image/upload/v1606074022/chimoney/Purple-100_z05fgn.jpg"
          alt="Live from space album cover"
          className=""
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>hello</Box>

        <Typography component={"div"} variant={"h6"}>
          $179.99
        </Typography>
      </Box>
    </Card>
  );
}

export default Product;
