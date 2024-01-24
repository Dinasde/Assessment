import { createContext } from "react";



export const BookingContext = createContext({
    seats: [],
    handleOpen: () => {},
    handleClose: () => {},
    inputHandler: () => {},
    bookingHandler: () => {},
    bookingList: [],
    open: Boolean,
    value: "",
    setValue: () => {},
    deleteBooking: () => {},
  });