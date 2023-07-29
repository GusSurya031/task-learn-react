import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card" style={{backgroundImage: `url(${props.image})`}}>
            <div className="label-card">{props.label}</div>
        </div>
    );
};

export default Card;