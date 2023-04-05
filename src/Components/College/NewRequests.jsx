
import React from "react";
import Navbar from "./Navbar";
import UsersCard from "./Cards/Users";
import { useEffect, useState } from "react";

const NewRequests = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/api/getNewUsers", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    })
    const json = await response.json()
    setData(json)

  }
  useEffect(() => {
    getUsers();
  }, [])


  function AddUsers(props) {

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
    <div style={{ "backgroundColor": "#e8e8e8", "paddingBottom": "50%" }} >

      <Navbar />
      {data.map(AddUsers)}

    </div>



  )
}
export default NewRequests;