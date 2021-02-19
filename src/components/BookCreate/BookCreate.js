import React from "react";
import Book from "../Book/Book";

import From from "../From/From";
import Navbar from "../Navbar/Navbar";

function BookCreate() {
  return (
    <div>
      <Navbar></Navbar>
      <From />
      <Book />
    </div>
  );
}

export default BookCreate;
