import React from "react";
import { useParams } from "react-router-dom";

const Recipie = () => {
    var {id} = useParams()


    return ( 
        <div className="recipie">
            <p>{id}</p>
        </div>
     );
}
 
export default Recipie;