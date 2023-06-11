import React from "react";

const RecepieCard = ({name, image}) => {
    return ( 
        <div className="recepie-card">
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
        </div>
     );
}
 
export default RecepieCard;