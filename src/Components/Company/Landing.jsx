/*  eslint-disable */
import React,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import UsersCard from "./Users";





const companyLanding = () => {
  const [data, setData] = useState([]);

  const getAlumni = async () => {
    const response = await fetch("http://localhost:5000/api/getAlumni", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    })
    const json = await response.json()
    setData(json)

  }
  useEffect(() => {
    getAlumni();
  }, [])


  function addAlumni(props) {

    return <UsersCard
      userName={props.userName}
      email={props.email}
      description={props.description}
      phoneNo={props.phoneNo}
      college={props.college}
      _id={props._id}
      delete="false"
    />
  }


  return (
    <div className='container-fluid' style={{ "backgroundColor": 'aliceblue', }}>
      <Navbar />
      <br/>
 

      <h4 className="text-center">Find the Best Alumni Here!</h4>
      <div style={{ "paddingBottom": "50%" }} >

      {data.map(addAlumni)}

    </div>
      


    </div>
  )
}
export default companyLanding;
{/* 
<div className="leftsearch col-md-2 ms-3" style={{ backgroundColor: 'whitesmoke' }}><div className="search_box mb-4">
        <div className="nest1 row ">
          <h5>Search using keywords: </h5>
        </div>
        <div className="mt-2">
          <i className="fa-solid fa-magnifying-glass" /> <input type="text" style={{ width: '80%' }} placeholder=" Job Description, Company name" />
        </div>
      </div>
    </div> 
  </div>*/}
