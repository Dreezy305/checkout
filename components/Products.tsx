import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function Product(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(true);
  const [age, setAge] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
            <Box className="grid grid-cols-4 gap-x-2 items-baseline">
              <FormControl fullWidth={false} className="">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={onChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Box className="flex items-center justify-center">
                <Typography component={"span"}>Delete</Typography>
              </Box>
              <Box className="flex items-center justify-center">
                <Typography component={"span"}>Save for later</Typography>
              </Box>
              <Box className="flex items-center justify-center">
                <Typography component={"span"}>See more like this</Typography>
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
