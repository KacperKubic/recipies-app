import React from "react";
import { Link } from "react-router-dom";

const RecepieCard = ({name, image, id}) => {
    return ( 
        <div className="recepie-card">
            <img src={image} alt={name}></img>
            <Link to={`/recipie/${id}`}><h3>{name}</h3></Link>
        </div>
     );
}
 
export default RecepieCard;