import { Box } from "@mui/material";
import React from "react";
import CheckoutInfo from "../../components/CheckoutInfo";
import OrderSummary from "../../components/OrderSummary";
import styles from "../../styles/Home.module.css";

function index(): JSX.Element {
  return (
    <main
      className={`${styles.main} flex flex-row items-center justify-center space-x-5`}
    >
      <div className="w-3/4 flex flex-row items-baseline justify-center space-x-5 mx-auto">
        <CheckoutInfo />
        <OrderSummary />
      </div>
    </main>
  );
}

export default index;
