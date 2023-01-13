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
import React, { useEffect, useState } from "react";

function NavBar(): JSX.Element {
  const [cartData, setCartDat] = useState<any>([]);
  useEffect(() => {
    const count: any = localStorage.getItem("cart");
    if (count) {
      setCartDat(count);
    }
  }, []);

  console.log(cartData, "lop");
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
              <Badge badgeContent={cartData?.length} color="success">
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
