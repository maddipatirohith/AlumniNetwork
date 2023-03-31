import React from "react";


function Card(props) {
    

    return (
        <div>
            <div className="card-body col-8 mt-3 mx-auto" style={{ "backgroundColor": "#ECF9FF", "textAlign": "center" }}>

                <div >
                    <h5 className="card-title" >{props.title}</h5>

                    <p className="card-text">{props.description}</p>

                    <a href={props.url} className="card-link ">{props.url}
                    </a>

                </div>


            </div>
        </div>
    )
}
export default Card;