import React from "react";
import Booking from "../Components/Booking";
import { Link } from "react-router-dom";
const Booked = ({ lowerDeck, upperDeck }) => {
  return (
    <div>
      <Link to='/dashboard'>Dashboard</Link>
      <Booking data={lowerDeck} type="lowerDeck" />
      <Booking data={upperDeck} type="upperDeck" />
    </div>
  );
};

export default Booked;
