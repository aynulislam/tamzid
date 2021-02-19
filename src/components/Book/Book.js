import React, { useEffect, useState } from "react";

function Book() {
  const [allService, setAllService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
      });
  }, [allService]);

  function deleteProduct(id) {
    fetch("http://localhost:5000/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
  }
  function updateBook(id) {
    fetch("http://localhost:5000/update/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        <span style={{ color: "black" }}> Book list </span>
      </h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 mb-4">
            <div class="card shadow mb-4">
              <div class="card-header py-6">
                <h4 class="m-0 font-weight-bold text-center text-info">
                  All Dish List
                </h4>
              </div>
              <div class="mt-5 ml-5 mb-4"></div>
              <div class="card-body">
                <div class="table-responsive">
                  <table
                    class="table table-bordered text-center"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Delete</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allService.map((service) => (
                        <tr>
                          <th>{service.title}</th>
                          <th>{service.author}</th>
                          <th>
                            <button
                              class="btn btn-danger"
                              onClick={() => deleteProduct(service._id)}
                            >
                              delete
                            </button>
                          </th>
                          <th>
                            <button
                              class="btn btn-info"
                              onClick={() => updateBook(service._id)}
                            >
                              Update
                            </button>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
