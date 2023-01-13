/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import BottomCard from "../../../components/Bottom";
import NavBar from "../../../components/NavBar";
import Policy from "../../../components/policy";
import TopCard from "../../../components/Top";
import styles from "../../../styles/Home.module.css";

function ProductDetails(): JSX.Element {
  const router = useRouter();
  console.log(router.query);
  const queryObject = router.query;
  return (
    <>
      <NavBar />
      <main className={`${styles.main} space-x-5`}>
        <div className={`w-3/4 flex flex-col space-y-3`}>
          <TopCard queryObject={queryObject} />
          <BottomCard queryObject={queryObject} />
        </div>
        <div className={`w-1/4`}>
          <Policy />
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
