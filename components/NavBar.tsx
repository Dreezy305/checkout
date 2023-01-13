/* eslint-disable react-hooks/exhaustive-deps */
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
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type props = {
  cartObject?: any[];
};

function NavBar({ cartObject }: props): JSX.Element {
  const router = useRouter();
  const [cartObj, setCartDat] = useState<any>([]);

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
              onClick={() => localStorage.clear()}
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
              sx={{ mr: 2, float: "right", cursor: "pointer" }}
              color="inherit"
              aria-label="menu"
              onClick={() => router.push("/cart")}
            >
              <Badge
                badgeContent={<span>{cartObj?.length || 0}</span>}
                // badgeContent={<span>{cartFromStorage?.length}</span>}
                color="success"
              >
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
