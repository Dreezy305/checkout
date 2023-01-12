import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Policy from "../../../components/policy";
import styles from "../../../styles/Home.module.css";

function ProductDetails() {
  return (
    <main className={`${styles.main} space-x-5`}>
      <div className={`w-3/4`}>
        <Card></Card>
      </div>
      <div className={`w-1/4`}>
        <Policy />
      </div>
    </main>
  );
}

export default ProductDetails;

// /Free delivery on thousands of products in Lagos, Ibadan & Abuja Details
