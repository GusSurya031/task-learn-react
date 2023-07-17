import React from "react";
import "../App.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="content-image">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="description">
                <h3>{props.name} <span>${props.price}</span></h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;