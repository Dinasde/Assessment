import React, { useContext, useState } from "react";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { BookingContext } from "../BookingContext";
import { Modal, Box } from "@mui/material";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";

function Reservation({ data,type }) {
  //   const [value, setValue] = useState(new Date());
  // const [bookingDetails,setBookingDetails] = useState({
  //   name:'',
  //   email:''
  // })
  const {
    open,
    value,
    setValue,
    inputHandler,
    handleClose,
    bookingHandler,
    handleOpen,
    handleEdit,
    bookingdetails,
    bookingList,
    setBookingdetails,
    deleteBooking,
  } = useContext(BookingContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // const editHandler =(e)=>{
  // setBookingDetails({...bookingDetails,[e.target.name]:e.target.value})
  // }

  // const editbookingHandler =(e)=>{
  // e.preventDefault()
  // }

  return (
    <>
      <div>
        {data?.map((item) => {
          return (
            <Card
              sx={{
                width: "300px",
                height: "300px",
                border: "1px solid black",
              }}
            >
              <h5>Name:{item.name}</h5>
              <h5>Email:{item.email}</h5>
              <h5>Booking Date:{moment(item?.date).format("DD/MM/YYYY")}</h5>
              <h5>Booking Id:{item.bookingId}</h5>

              <Button
                variant="contained"
                color="warning"
                onClick={() => deleteBooking(item)}
              >
                Delete 
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleEdit(item)}
              >
                Edit
              </Button>
            </Card>
          );
        })}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={bookingdetails?.name}
              onChange={inputHandler}
              placeholder="Enter your Name"
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={bookingdetails?.email}
              onChange={inputHandler}
              placeholder="Enter your Email"
            />
            <DateTimePicker
              value={bookingdetails?.date}
              onChange={(data) => {
                setBookingdetails({ ...bookingdetails, date: data });
              }}
            />
            <button onClick={() => bookingHandler()}>Submit</button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Reservation;
