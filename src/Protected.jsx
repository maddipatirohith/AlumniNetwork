import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('token')
        if (!login) {
 
            navigate('/signin');
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}
export default Protected