import { Box } from "@mui/material";
import React from "react";
import CheckoutInfo from "../../components/CheckoutInfo";
import OrderSummary from "../../components/OrderSummary";
import styles from "../../styles/Home.module.css";

function index(): JSX.Element {
  return (
    <main className={`flex flex-row items-center justify-center space-x-5`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "75%",
        }}
        className="mt-8"
      >
        <CheckoutInfo />
        <OrderSummary />
      </Box>
    </main>
  );
}

export default index;
