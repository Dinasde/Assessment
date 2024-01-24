import "./App.css";
import Booking from "./Components/Booking";
import { useState, useEffect, createContext } from "react";
import Reservation from "./Components/Reservation";
import moment from "moment";
import { BookingContext } from "./BookingContext";
import Dashboard from "./Dashboard/Dashboard";
import { Link, Routes, Route } from "react-router-dom";
import Booked from "./Booking/Booked";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [lowerDeck, setLowerDeck] = useState(() =>
    Array.from({ length: 20 }, (_, index) => ({ id: `lower_deck_${uuidv4()}` }))
  );
  const [upperDeck, setUpperDeck] = useState(() =>
    Array.from({ length: 20 }, (_, index) => ({ id: `upper_deck_${uuidv4()}` }))
  );

  console.log({lowerDeck});
  console.log({upperDeck});

  const [lowerDeckBookingList, setLowerDeckBookingList] = useState([]);

  const [upperDeckBookingList, setUpperDeckBookingList] = useState([]);
  const [bookingdetails, setBookingdetails] = useState({
    name: "",
    email: "",
  });

  const inputHandler = (e) => {
    setBookingdetails({ ...bookingdetails, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = useState(false);
  // const [editOpen, setEditOpen] = useState(false);

  const [value, setValue] = useState(new Date());

  // console.log(value)

  const handleEdit = (data) => {
    setOpen(true);
    setBookingdetails(data);
  };

  const handleOpen = (data, type) => {
    console.log({type})
    if (!data?.bookingId) {
      setOpen(true);
      setBookingdetails({ ...bookingdetails, id: data?.id, type });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bookingHandler = () => {
    // event?.preventDefault();

    // const formattedDate = dateObj.format("DD/MM/YYYY");
    console.log({ bookingdetails});
    if (bookingdetails?.bookingId) {
      const updatedData = (bookingdetails?.type === "lowerDeck" ? lowerDeck : upperDeck)?.map(
        (item) =>
          item?.id === bookingdetails?.id
            ? { ...item, ...bookingdetails }
            : item
      );
      bookingdetails?.type === "lowerDeck"
        ? setLowerDeck(updatedData)
        : setUpperDeck(updatedData);
    } else {
      const bookingId = uuidv4();
      const updatedData = (bookingdetails?.type === "lowerDeck" ? lowerDeck : upperDeck)?.map(
        (item) =>
          item?.id === bookingdetails.id
            ? { ...item, ...bookingdetails, bookingId }
            : item
      );
      bookingdetails?.type === "lowerDeck"
        ? setLowerDeck(updatedData)
        : setUpperDeck(updatedData);
    }

    handleClose();
    setBookingdetails({});
  };
  console.log(bookingdetails);

  useEffect(() => {
    const lowerDeckFilteredData = lowerDeck?.filter(
      (item) => "bookingId" in item
    );
    const upperDeckFilteredData = upperDeck?.filter(
      (item) => "bookingId" in item
    );

    setLowerDeckBookingList(lowerDeckFilteredData);
    setUpperDeckBookingList(upperDeckFilteredData);
  }, [lowerDeck, upperDeck]);
  const deleteBooking = (data) => {
    
    
    const deleted = (data?.type === "lowerDeck" ? lowerDeck : upperDeck)?.map(
      (item) => {

        console.log(bookingdetails)
        return (item?.id === data?.id ? { id: item.id } : item)
      } 
    );
    data?.type === "lowerDeck" ? setLowerDeck(deleted) : setUpperDeck(deleted);
    console.log(deleted);
  };
  // console.log(bookingdata)

  return (
    <BookingContext.Provider
      value={{
        lowerDeck,
        upperDeck,
        handleOpen,
        handleClose,
        inputHandler,
        bookingHandler,
        bookingdetails,
        setBookingdetails,
        lowerDeckBookingList,
        upperDeckBookingList,
        open,
        value,
        setValue,
        deleteBooking,
        handleEdit,
      }}
    >
      <div className="App">
        <h1
          style={{
            backgroundColor: "purple",
            color: "white",
            padding: "3px",
          }}
        >
          Booking App in React
        </h1>
       
        

        {/* <Booking data={lowerDeck} type='lowerDeck'  />
        <Booking data={upperDeck}  type='upperDeck' /> */}
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                lowerDeckBookingList={lowerDeckBookingList}
                upperDeckBookingList={upperDeckBookingList}
              />
            }
          ></Route>
          <Route
            path="/"
            element={<Booked lowerDeck={lowerDeck} upperDeck={upperDeck} />}
          ></Route>
        </Routes>

        {/* <Reservation  lowerDeckBookingList={lowerDeckBookingList} upperDeckBookingList={upperDeckBookingList}/> */}
      </div>
    </BookingContext.Provider>
  );
};

export default App;
