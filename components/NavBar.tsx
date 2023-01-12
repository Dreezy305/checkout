import { ShoppingCart } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

function NavBar(): JSX.Element {
  const getCart = (): any => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      return cart;
    }
  };
  console.log(getCart());
  const count = getCart();
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              sx={{ mr: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              className="font-AmazonEmberBold"
            >
              Amazon
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              sx={{ mr: 2, float: "right" }}
              color="inherit"
              aria-label="menu"
            >
              <Badge badgeContent={count !== null ? count : 0} color="success">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
