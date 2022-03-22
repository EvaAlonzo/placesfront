import "./stylesPlaces.css";
import { placesList } from  "../../services/places.js";
import { useState, useEffect } from "react";
import * as PATHS from "../../utils/paths"
import { Link } from "react-router-dom";
import {Navbar} from "../index";

const Places = (props) => {
    const [ getPlaces, setGetplaces ] = useState([]);

    useEffect(() => { 
        async function callPLaces(){
            const {data} = await placesList()
            setGetplaces(data.result)
        }
        callPLaces()
    },[]);
    console.log("resultadoplaces", getPlaces )

    return(
    <div className="Places">
        <div><header><Navbar/></header></div>
        <Link to={PATHS.HOME}><button>Return</button></Link>

        <div className="CARDPLACES">
            <h1> Places </h1>
                {getPlaces.map((place) => (  
                    <div key={place._id}>
                    <div className="PLACESCONT">
                        <img src="icon-place" alt="icon-place"/>
                        <hr/>
                        <h1>Title:{place.title}</h1>
                        <hr/>
                        <h5>Address:{place.address}</h5>
                        <h5>Description:{place.description}</h5>
                        <h5>Rating: {place.rating}</h5>
                        <h5>Mood: {place.status}</h5>
                    </div>

                    <div>
                        <Link to={PATHS.EDITPLACES}>
                            <button>Edit</button>
                        </Link>
                    </div>
                    </div>
                ))};
        </div> 
    </div>
    )
}

export default Places;