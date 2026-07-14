import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewVolunteer = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("http://localhost:3001/view-volunteer").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        <NavigationBar/>
      <div className="container py-5">

        <h2 className="text-center page-title mb-5">
          Registered Volunteers
        </h2>

        <div className="row g-4">

          {data.map((value, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="team-box">

                <div className="team-top">
                  <h5>{value.full_name}</h5>
                  <span>ID : {value.volunteer_id}</span>
                </div>

                <div className="team-info">

                  <p><strong>Email :</strong> {value.email}</p>

                  <p><strong>Phone :</strong> {value.phone}</p>

                  <p><strong>Date of Birth :</strong> {value.date_of_birth}</p>

                  <p><strong>Gender :</strong> {value.gender}</p>

                  <p><strong>Blood Group :</strong> {value.blood_group}</p>

                  <p><strong>Department :</strong> {value.department}</p>

                  <p><strong>Year :</strong> {value.year_of_Study}</p>

                  <p><strong>Camp Name :</strong> {value.camp_name}</p>

                  <p><strong>Hours Completed :</strong> {value.hours_completed}</p>

                  <p><strong>Unit Number :</strong> {value.unit_number}</p>

                  <p><strong>Address :</strong> {value.address}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default ViewVolunteer