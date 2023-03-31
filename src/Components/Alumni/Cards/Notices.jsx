import React from "react";


function Card(props) {
    

    return (
        <div>
            <div className="card-body col-6 mt-3 mx-auto" style={{ "backgroundColor": "#ECF9FF" }}>
                
                <div >
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>



            </div>

        </div>
    )
}
export default Card;