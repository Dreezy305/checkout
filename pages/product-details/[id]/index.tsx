/* eslint-disable @next/next/no-img-element */

import React from "react";
import BottomCard from "../../../components/Bottom";
import Policy from "../../../components/policy";
import TopCard from "../../../components/Top";
import styles from "../../../styles/Home.module.css";

function ProductDetails(): JSX.Element {
  return (
    <main className={`${styles.main} space-x-5`}>
      <div className={`w-3/4 flex flex-col space-y-3`}>
        <TopCard />
        <BottomCard />
      </div>
      <div className={`w-1/4`}>
        <Policy />
      </div>
    </main>
  );
}

export default ProductDetails;

// /Free delivery on thousands of products in Lagos, Ibadan & Abuja Details
