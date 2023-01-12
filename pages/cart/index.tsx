import React from "react";
import NavBar from "../../components/NavBar";
import Product from "../../components/Products";
import RelatedItems from "../../components/RelatedItems";
import Subtotal from "../../components/Subtotal";
import styles from "../../styles/Home.module.css";

function Cart(): JSX.Element {
  return (
    <>
      <NavBar />
      <main className={`${styles.main} space-x-5`}>
        <div className={`${styles.productList} w-3/4`}>
          <Product />
        </div>
        <div className={`${styles.subTotalAndRelated} space-y-4 w-1/4`}>
          <Subtotal />
          <RelatedItems />
        </div>
      </main>
    </>
  );
}

export default Cart;
