import React, { useState, useEffect, useContext } from "react";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import { Stack } from "@mui/material";
import { BookingContext } from "../BookingContext";
import ModalComponent from "./Modal";

function Booking({ data, type }) {
  const {
    handleOpen,
    handleClose,
    inputHandler,
    bookingHandler,
    bookingList,
    open,
    value,
    setValue,
  } = useContext(BookingContext);

console.log({type})
  return (
    <div>
      <Stack
        sx={{
          border: "1px solid black",
          boxShadow: "0 0 10px",
          padding: "20px",
          spacing: 2,
          width: "75%",
          marginLeft: "170px",
          marginTop: "90px",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "purple",
          }}
        >
          {type}
        </h1>
        <Grid container spacing={1} direction={"row"}>
          {data?.map((items) => {
            return (
              <Grid
                item
                lg={1}
                md={4}
                // sx={{
                //     border: '1px solid black'
                // }}
              >
                <Card
                  sx={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: items?.bookingId ? "red" : "lightgray",
                  }}
                  onClick={() => handleOpen(items, type)}
                ></Card>
              </Grid>
            );
          })}
        </Grid>

        <ModalComponent type={type}/>

        {/* <h4 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
        Total Seats:{data?.length}
      </h4>
      <h4 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
        Booked Seats:{bookingList.length}{" "}
      </h4>
      <h4 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
        Available Seats:{data.length - bookingList.length}
      </h4> */}
      </Stack>
    </div>
  );
}

export default Booking;
