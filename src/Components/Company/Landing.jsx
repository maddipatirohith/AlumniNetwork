/*  eslint-disable */
import React,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import UsersCard from "./Users";





const companyLanding = () => {
  const [data, setData] = useState([]);

  const getAlumni = async () => {
    const response = await fetch("http://localhost:8080/api/getAlumni", {
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
      profileImage={props.profileImage}
      resume={props.resume}
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
