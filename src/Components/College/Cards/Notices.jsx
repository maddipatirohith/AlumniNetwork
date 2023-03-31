import React from "react";


function Card(props) {
    /* const token = localStorage.getItem('token')
    const handleSave = async (e) => {
        e.target.innerHTML='Saved'
        const response = await fetch('http://localhost:5000/api/jobs/savedJobs', {
            method: 'Post',
            headers: {
                'auth-token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ job_id: props._id })
        })
        


    } */
    const handleDelete = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/deleteNotices', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: props._id })
        })
        window.location.reload(true);
    }

    return (
        <div>
            <div className="card-body col-6 mt-3 mx-auto" style={{ "backgroundColor": "#ECF9FF" }}>
                <i className="far fa-trash-alt float-left" onClick={handleDelete}  style={{ "position": "relative", "marginLeft": "95%" }}></i>
                <div style={{ "width": "95%","marginTop":"-6%"}}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>



            </div>

        </div>
    )
}
export default Card;