import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function Subtotal() {
  const router = useRouter();
  return (
    <Card sx={{ borderRadius: "0px" }}>
      <CardContent className="flex flex-col items-center justify-center space-y-3 mb-3">
        <Box className="w-full flex flex-col items-start px-2">
          <Typography className="flex flex-row items-center w-full justify-start pb-2">
            <Typography
              component={"span"}
              className="font-AmazonEmberRegular text-font18 text-title flex flex-row"
            >
              Subtotal (5 items):{" "}
              <Typography
                component={"span"}
                className="font-AmazonEmberBold text-font18"
              >
                $1,109.92
              </Typography>
            </Typography>
          </Typography>

          <Button
            variant="contained"
            className="w-full cursor-pointer font-AmazonEmberRegular text-font13"
            sx={{
              fontFamily: "AmazonEmberRegular",
              background: "#FFD814 !important",
              border: "#FCD200",
              color: "#0F1111",
              borderRadius: "8px",
              boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)",
              textTransform: "none",
            }}
            onClick={() => router.push("/checkout")}
          >
            <span className="capitalize">Proceed</span> &nbsp;<span>to</span>{" "}
            &nbsp;
            <span>checkout</span>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Subtotal;
