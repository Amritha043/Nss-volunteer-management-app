import axios from "axios";
import React, { useState } from "react";

const AddVolunteer = () => {

  const [input, changeInput] = useState({
    volunteer_id: "",
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    blood_group: "",
    department: "",
    year_of_Study: "",
    camp_name: "",
    hours_completed: "",
    address: "",
    unit_number: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("http://localhost:3001/add-volunteer", input)
      .then((response) => {
        console.log(response.data);
        alert("Volunteer Registered Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Registration Failed");
      });
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="main-heading">
          <i className="bi bi-person-heart me-2"></i>
          NSS Volunteer Registration
        </h2>
        <p className="text-muted">
          Register a volunteer for NSS activities
        </p>
      </div>

      <div className="row g-4">

        {/* Personal Details */}

        <div className="col-lg-6">
          <div className="card form-card h-100">

            <div className="card-header card-title1">
              <i className="bi bi-person-fill me-2"></i>
              Personal Details
            </div>

            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">
                  Volunteer ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="volunteer_id"
                  value={input.volunteer_id}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  value={input.full_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={inputHandler}
                />
              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    name="date_of_birth"
                    value={input.date_of_birth}
                    onChange={inputHandler}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">
                    Gender
                  </label>

                  <select
                    className="form-select"
                    name="gender"
                    value={input.gender}
                    onChange={inputHandler}
                  >
                    <option value="">
                      Select Gender
                    </option>

                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>

                  </select>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Academic Details */}

        <div className="col-lg-6">

          <div className="card form-card h-100">

            <div className="card-header card-title2">
              <i className="bi bi-mortarboard-fill me-2"></i>
              Academic Details
            </div>

            <div className="card-body">

              <div className="mb-3">

                <label className="form-label">
                  Department
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={input.department}
                  onChange={inputHandler}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Year of Study
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="year_of_Study"
                  value={input.year_of_Study}
                  onChange={inputHandler}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Blood Group
                </label>

                <select
                  className="form-select"
                  name="blood_group"
                  value={input.blood_group}
                  onChange={inputHandler}
                >
                  <option value="">Select Blood Group</option>

                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>

                </select>

              </div>
                            <div className="mb-3">

                <label className="form-label">
                  Unit Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="unit_number"
                  value={input.unit_number}
                  onChange={inputHandler}
                />

              </div>

            </div>

          </div>

        </div>

        {/* NSS Details */}

        <div className="col-lg-6">

          <div className="card form-card h-100">

            <div className="card-header card-title3">
              <i className="bi bi-award-fill me-2"></i>
              NSS Details
            </div>

            <div className="card-body">

              <div className="mb-3">
                <label className="form-label">
                  Camp Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="camp_name"
                  value={input.camp_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Hours Completed
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="hours_completed"
                  value={input.hours_completed}
                  onChange={inputHandler}
                />
              </div>

            </div>

          </div>

        </div>

        {/* Address */}

        <div className="col-lg-6">

          <div className="card form-card h-100">

            <div className="card-header card-title4">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Address
            </div>

            <div className="card-body">

              <div className="mb-3">

                <label className="form-label">
                  Full Address
                </label>

                <textarea
                  rows="6"
                  className="form-control"
                  name="address"
                  value={input.address}
                  onChange={inputHandler}
                ></textarea>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Submit Button */}

      <div className="text-center mt-5">

        <button
          className="btn btn-success btn-lg px-5 register-btn"
          onClick={readValue}
        >
          <i className="bi bi-check-circle-fill me-2"></i>
          Register Volunteer
        </button>

      </div>

    </div>
  );
};

export default AddVolunteer;