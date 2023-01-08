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

function Product(): JSX.Element {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const subHeader = (): JSX.Element => {
    return <span>Select All Items</span>;
  };
  return (
    <Card sx={{}} className="px-3">
      <CardHeader title="Shopping Cart" subheader="Select All Items" />
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
              <Typography component="span">
                This will be a gift. &nbsp;<Link href="/">Learn more</Link>
              </Typography>
            </Typography>
            <CardContent></CardContent>
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
