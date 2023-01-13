/* eslint-disable @next/next/no-img-element */
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { productInterface } from "../utils/interfaces";

type props = {
  queryObject?: productInterface;
};

function TopCard({ queryObject }: props): JSX.Element {
  const router = useRouter();
  const [cart, setCart] = useState<any>([]);
  const [plus, setPlus] = useState<boolean>(false);
  const [count, setCount] = useState(1);

  const increaseQty = (item: any, count: any) => {
    let cartCopy: any = [...cart];
    const newVal = parseInt(item.quantity) + count;
    let newObj = { ...item, totalQty: newVal };
    cartCopy.push(newObj);
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    return cartCopy;
  };

  const decreaseQty = (item: any, count: any) => {
    let cartCopy: any = [...cart];
    const newVal = count - parseInt(item.quantity);
    let newObj = { ...item, totalQty: newVal };
    cartCopy.pop();
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
    console.log(cartCopy, "lo");
    return cartCopy;
  };

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
              {queryObject?.name}
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
              {queryObject?.price}
            </Typography>

            <Typography component={"div"} className="flex flex-col">
              {/* <Typography
                component={"span"}
                className="text-gold font-AmazonEmberMedium text-font13"
              >
                {queryObject?.quantity} units left
              </Typography> */}
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

            {plus ? (
              <Box sx={{ display: "flex" }}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={() => {
                    setCount((prev) => prev - 1);
                    decreaseQty(queryObject, count);
                  }}
                >
                  <IndeterminateCheckBoxIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  {count < 0 ? 0 : count}
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={() => {
                    setCount((prev) => prev + 1);
                    increaseQty(queryObject, count);
                  }}
                >
                  <AddBoxIcon />
                </IconButton>
              </Box>
            ) : (
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
                onClick={() => {
                  increaseQty(queryObject, 0);
                  setPlus(true);
                }}
                // onClick={() => {
                //   addItem(queryObject);
                //   setPlus(true);
                // }}
              >
                ADD TO CART
              </Button>
            )}
            {/* <Button
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
              onClick={() => {
                addItem(queryObject);
                setPlus(true);
              }}
             
            >
              ADD TO CART
            </Button> */}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default TopCard;
