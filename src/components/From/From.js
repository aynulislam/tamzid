import React, { useState } from "react";
import "./From.css";
function From() {
  const [serviceInfo, setServiceInfo] = useState({});
  const handleBlur = (e) => {
    const newInfo = { ...serviceInfo };
    newInfo[e.target.name] = e.target.value;
    setServiceInfo(newInfo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    fetch("http://localhost:5000/addBooking", {
      method: "POST",
      body: JSON.stringify(serviceInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <section className="mt-5 p-4 pr-5 design" style={{ width: "60%" }}>
      <form onSubmit={handleSubmit}>
        <h3 className="brand">Create Book</h3>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="title"
            placeholder="Book name"
          />
        </div>
        <div className="form-group">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="author"
            placeholder="Author"
          />
        </div>
        <div className="form-group">
          <textarea
            onBlur={handleBlur}
            name="description"
            className="form-control"
            id=""
            cols="30"
            rows="5"
            placeholder="Description"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    </section>
  );
}

export default From;
