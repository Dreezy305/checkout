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
import Checkout from "../../components/Checkout";
import OrderSummary from "../../components/OrderSummary";
import styles from "../../styles/Home.module.css";

function index(): JSX.Element {
  return (
    <main className={`${styles.main} space-x-5`}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Checkout />
        <OrderSummary />
      </Box>
    </main>
  );
}

export default index;
