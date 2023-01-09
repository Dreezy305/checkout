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
    <Typography
      component={"span"}
      className="text-link text-font14 no-underline cursor-pointer hover:underline font-AmazonEmberRegular"
    >
      Deselect All Items
    </Typography>
  );
  const title = (
    <Typography variant={"h5"} className="text-title font-AmazonEmberMedium">
      Shopping Cart
    </Typography>
  );

  return (
    <Card sx={{}} className="px-3">
      <CardHeader title={title} subheader={subHeader} />
      <hr />
      <Box
        sx={{ display: "flex", flexDirection: "row" }}
        className="items-start justify-between"
      >
        {/* LEFT */}
        <Box
          sx={{ display: "flex", flexDirection: "row", width: "90%" }}
          className="space-x-1 py-5"
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ boxShadow: "none", outline: "none" }}
          />
          <CardMedia
            component="img"
            sx={{ width: "25%" }}
            image="https://res.cloudinary.com/africahacks/image/upload/v1606074022/chimoney/Purple-100_z05fgn.jpg"
            alt="Live from space album cover"
            className=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{ display: "flex", flexDirection: "column" }}
              component="span"
            >
              <Typography component="span" className="font-semibold">
                Adobe Acrobat Professional DC | PDF converter | 12-month
                Subscription with auto-renewal, PC/Mac
              </Typography>
              <Typography
                component="span"
                className="flex flex-col items-start "
              >
                <Typography>In Stock</Typography>
                <Typography component="span">
                  Shipped from: Amazon.com Services LLC
                </Typography>
              </Typography>
            </CardContent>
            <Typography component={"span"} className="">
              <Checkbox
                checked={checked}
                size="small"
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                sx={{ boxShadow: "none", outline: "none" }}
              />
              <Typography component="span" className="font-AmazonEmberRegular text-font12">
                This will be a gift. &nbsp;
                <Link
                  href="/"
                  className="font-AmazonEmberRegular text-link text-font12"
                >
                  Learn more
                </Link>
              </Typography>
            </Typography>
            <Box className="flex flex-row space-x-2 items-baseline">
              <Box>
                <select className="w-20 py-2 px-2 rounded-lg">
                  <option>1</option>
                  <option>2</option>
                </select>
              </Box>
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
            </Box>
          </Box>
        </Box>

        {/* RIGHT */}
        <Typography component={"span"} className="float-right pt-9">
          $179.99
        </Typography>
      </Box>
    </Card>
  );
}

export default Product;
