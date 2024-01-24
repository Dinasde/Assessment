import React from "react";
import Reservation from "../Components/Reservation";
import {Link,Routes,Route} from 'react-router-dom';

const Dashboard = ({ lowerDeckBookingList, upperDeckBookingList }) => {

  return (
    <div>
        <Link to='/'>Home</Link>
      <h1>Reservation Details</h1>
      <h2>Lower Deck</h2>
      <Reservation data={lowerDeckBookingList} />
      <h2>Upper Deck</h2>
      <Reservation data={upperDeckBookingList} />
    </div>
  );
};

export default Dashboard;
