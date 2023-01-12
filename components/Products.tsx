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
import React, { useState } from "react";

function Product(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(true);
  const [age, setAge] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const onChange = (event: any) => {
    setAge(event.target.value as string);
  };
  const subHeader = (
    <Typography component={"div"} className="flex flex-col">
      <Typography
        component={"span"}
        className="text-link text-font14 no-underline cursor-pointer hover:underline font-AmazonEmberRegular"
      >
        Deselect All Items
      </Typography>
      <Typography
        component={"span"}
        className="text-grey text-font14 no-underline cursor-text font-AmazonEmberRegular float-right place-self-end"
      >
        Price
      </Typography>
      <hr />
    </Typography>
  );
  const title = (
    <Typography variant={"h5"} className="text-title font-AmazonEmberMedium">
      Shopping Cart
    </Typography>
  );

  return (
    <Card sx={{ borderRadius: "0px" }} className="px-3">
      <CardHeader title={title} subheader={subHeader} />
      {[1, 2, 3, 4, 5].map((i: any, index: any) => {
        return (
          <>
            <Box
              sx={{ display: "flex", flexDirection: "row" }}
              className="items-start justify-between pb-5 pt-4"
              key={index}
            >
              {/* LEFT */}
              <Box
                sx={{ display: "flex", flexDirection: "row", width: "90%" }}
                className="space-x-1"
              >
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{ boxShadow: "none", outline: "none" }}
                />
                <CardMedia
                  component="img"
                  sx={{ width: "23%" }}
                  image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/8236371/1.jpg?0528"
                  alt="Live from space album cover"
                  className=""
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography
                      component="span"
                      className="font-AmazonEmberRegular text-font18"
                    >
                      Adobe Acrobat Professional DC | PDF converter | 12-month
                      Subscription with auto-renewal, PC/Mac
                    </Typography>
                    <Typography
                      component="span"
                      className="flex flex-col items-start pt-2"
                    >
                      <Typography
                        component={"span"}
                        className="font-AmazonEmberRegular text-font12 text-success"
                      >
                        In Stock
                      </Typography>
                      <Typography
                        component="span"
                        className="font-AmazonEmberRegular text-font12"
                      >
                        Shipped from: Amazon.com Services LLC
                      </Typography>
                      <Typography
                        component="span"
                        className="font-AmazonEmberRegular text-font12"
                      >
                        <span className="text-grey">This will be a gift.</span>
                        <Link
                          href="/product-details/89s-123-abcd"
                          className="font-AmazonEmberRegular text-link text-font12 no-underline hover:underline"
                        >
                          Learn more
                        </Link>
                      </Typography>
                    </Typography>
                  </CardContent>
                  {/* <Typography component={"span"} className="">
              <Checkbox
                checked={checked}
                size="small"
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{ boxShadow: "none", outline: "none" }}
              />
              <Typography
                component="span"
                className="font-AmazonEmberRegular text-font12"
              >
                <span className="text-grey">This will be a gift.</span>
                <Link
                  href="/"
                  className="font-AmazonEmberRegular text-link text-font12 no-underline hover:underline"
                >
                  Learn more
                </Link>
              </Typography>
            </Typography> */}
                  <Typography
                    component={"div"}
                    className="flex flex-row space-x-2 items-baseline pl-4"
                  >
                    <select className="w-20 py-1 px-2 borders outline-none shadow-none">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                        (i: any, idx: any): JSX.Element => {
                          return (
                            <option value={i} key={idx + 1}>
                              {i}
                            </option>
                          );
                        }
                      )}
                    </select>

                    <Box className="flex items-center justify-center border-l-2 border-r-2 px-3">
                      <Typography
                        component={"span"}
                        className="text-link text-font14 no-underline cursor-pointer hover:underline font-AmazonEmberRegular"
                      >
                        Delete
                      </Typography>
                    </Box>
                    <Box className="flex items-center justify-center border-r-2 px-3">
                      <Typography
                        component={"span"}
                        className="text-link text-font14 no-underline cursor-pointer hover:underline font-AmazonEmberRegular"
                      >
                        Save for later
                      </Typography>
                    </Box>
                    <Box className="flex items-center justify-center px-3">
                      <Typography
                        component={"span"}
                        className="text-link text-font14  no-underline cursor-pointer hover:underline font-AmazonEmberRegular"
                      >
                        See more like this
                      </Typography>
                    </Box>
                  </Typography>
                </Box>
              </Box>

              {/* RIGHT */}
              <Box>
                <Typography
                  component={"span"}
                  className="float-right text-title text-font18 font-AmazonEmberBold pt-4"
                >
                  $179.99
                </Typography>
              </Box>
            </Box>
            <hr />
          </>
        );
      })}
      <Box className="pt-2 pb-5 mb-7">
        <Typography
          component={"div"}
          className="flex flex-row items-center justify-end"
        >
          <Typography
            component={"span"}
            className="font-AmazonEmberRegular text-font18 text-title"
          >
            Subtotal (5 items):
          </Typography>
          &nbsp;
          <Typography
            component={"span"}
            className="font-AmazonEmberBold text-font18"
          >
            $1,109.92
          </Typography>
        </Typography>
      </Box>
    </Card>
  );
}

export default Product;
