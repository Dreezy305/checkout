import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Rating,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RelatedItems from "../components/RelatedItems";
import styles from "../styles/Home.module.css";
import { productData } from "../utils/data";
import { productInterface } from "../utils/interfaces";

type props = {
  children: React.ReactNode;
};

export default function Home({ children }: props): any {
  const [cart, setCart] = useState([]);

  // const getCart = (): any => {
  //   if (typeof window !== "undefined") {
  //     const cart = localStorage.getItem("cart");
  //     return cart;
  //   }
  // };

  useEffect(() => {
    const cart: any = localStorage.getItem("cart");
    const localCart: any = JSON.parse(cart);
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  const title = (
    <Typography
      variant={"h5"}
      className="text-title font-AmazonEmberMedium pb-3"
    >
      Gift Cards
    </Typography>
  );
  const cartItems = [];
  return (
    <>
      <Head>
        <title>Cart System</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* NAVBAR  */}
      <NavBar />
      <main className={`${styles.main} space-x-5`}>
        <div className={`${styles.subTotalAndRelated} space-y-4 w-1/4`}>
          <RelatedItems />
        </div>
        <div className={`${styles.productList} w-3/4`}>
          <Card className="mb-5 pb-5">
            <CardHeader title={title} />
            <hr />
            {productData?.map((i: productInterface, index) => {
              return (
                <>
                  <Box
                    sx={{ display: "flex" }}
                    className="px-3 py-3"
                    key={i?.id}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 180 }}
                      image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8236371/1.jpg?0528"
                      alt="Live from space album cover"
                    />
                    <Box
                      sx={{ display: "flex", flexDirection: "column" }}
                      className=""
                    >
                      <CardContent sx={{ flex: "1 0 auto" }} className="">
                        <Link
                          href={{
                            pathname: `/product-details/${i.id}`,
                            query: { ...i },
                          }}
                          className="no-underline cursor-pointer hover:underline"
                        >
                          <Typography
                            component="div"
                            variant="h5"
                            className="font-AmazonEmberRegular text-font18 leading-6 text-title"
                          >
                            {i.name}
                          </Typography>
                        </Link>
                        <Typography
                          component={"div"}
                          className="flex flex-row items-end space-x-1"
                        >
                          <Typography
                            component={"span"}
                            className="text-font13 font-AmazonEmberRegular leading-3 pt-0.5 text-title"
                          >
                            4.5
                          </Typography>
                          <Rating
                            name="half-rating"
                            defaultValue={4.5}
                            precision={0.5}
                            size="small"
                            readOnly
                            className="pt-1"
                          />
                          <Typography
                            component={"span"}
                            className="text-font13 font-AmazonEmberRegular leading-4 text-link "
                          >
                            (6,145)
                          </Typography>
                        </Typography>
                        <Typography
                          component={"h5"}
                          className="text-title text-font18 font-AmazonEmberBold pt-3"
                        >
                          $179.99
                        </Typography>

                        <Typography
                          component={"span"}
                          className="text-dark text-font14 cursor-text font-AmazonEmberRegular"
                        >
                          Ships to Nigeria
                        </Typography>
                      </CardContent>
                    </Box>
                  </Box>
                  <hr />
                </>
              );
            })}
          </Card>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
