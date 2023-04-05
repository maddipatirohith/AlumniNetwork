/* eslint-disable  */
import React from "react";
import Navbar from "./Navbar";
import EventsCard from "./Cards/Events";
import NoticesCard from "./Cards/Notices";
import { useEffect, useState } from "react";


const addEvents = () => {
    const [events, setEvents] = useState([]);
    const [notices, setNotices] = useState([]);
    const token = localStorage.getItem("token");

    const getEvents = async () => {
        const response = await fetch("http://localhost:8080/api/getEvents", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
        const json = await response.json()

        setEvents(json)

    }
    const getNotices = async () => {
        const response = await fetch("http://localhost:8080/api/getNotices", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
        const json = await response.json()

        setNotices(json)

    }

    useEffect(() => {
        getEvents();
        getNotices();
    }, [])


    function AddEvents(props) {

        return <EventsCard
            title={props.title}
            description={props.description}
            url={props.url}
            _id={props._id}
            delete="false"
        />
    }
    function AddNotices(props) {

        return <NoticesCard
            title={props.title}
            description={props.description}
            _id={props._id}
            delete="false"
        />
    }




    return (
        <div style={{ "backgroundColor": "#e8e8e8", "paddingBottom": "50%" }}>
            <Navbar />
            <div className="card col-11 my-3 mx-auto mb-4 pb-5 " >
                <p style={{ "fontSize": "40px" }}>Events</p>
                {events.map(AddEvents)}
            </div>

            <div className="card col-8 mx-auto mb-4 pb-5 " >
                <p style={{ "fontSize": "50px" }}>Notice</p>
                {notices.map(AddNotices)}

            </div>
        </div>

    );


}
export default addEvents;

