import React, {useContext} from 'react'
import { BookingContext } from '../BookingContext';
import { Modal, Box,Button } from "@mui/material";
import DateTimePicker from "react-datetime-picker";

const ModalComponent = ({type})=>{
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
    return (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={inputHandler}
                placeholder="Enter your Name"
              />
              <br />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={inputHandler}
                placeholder="Enter your Email"
              />
              <DateTimePicker value={value} onChange={setValue} />
              <Button variant='contained' color='primary' onClick={(e) => bookingHandler()}>Submit</Button>
            </form>
          </Box>
        </Modal>
    )
}

export default ModalComponent