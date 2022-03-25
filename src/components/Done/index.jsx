import "./stylesDone.css"; 
import { Navbar } from "../index";
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { placesList } from "../../services/places.js";
import flecha from "../../Images/Flecha.png";
import editpencil from "../../Images/Edit.png"; 
import React from "react";

const Done = (props) => {
  const [getPlaces, setGetplaces] = useState([]);
  const [fav, setFav] = React.useState();

  useEffect(() => {
    async function callPLaces() {
      const { data } = await placesList();
      setGetplaces(data.result);
    }
    callPLaces();
  }, []); 
  console.log("Pendingplaces", getPlaces);

  const buttonClick = () => {
    setFav((prevState) => !prevState);
  };


  return (
    <div className="Done">
      <div>
        <header>
          <Navbar />
        </header>
      </div>

      <div className="CARDPLACES3">
        <Link to={PATHS.HOME}>
          <img className="FlechaPlaces" src={flecha} alt="icon-flecha" />
        </Link>
        <div className="CONTFLECHA3">
          {getPlaces.map((place) => (
            <div key={place._id}>
            {place.status !== "Done" ? (
                  <></>
                    ) : (
              <div className="PLACESCONT3">
                <img
                  className="PLACESIMG3"
                  src={place.images[0]}
                  alt="icon-place"
                />
                <h1>{place.title}</h1>
                <hr />
                <font size="3">
                  <b>Address:</b>
                </font>{" "}
                <font size="2">{place.address}</font>
                <br></br>
                <br></br>
                <font size="3">
                  <b>Description:</b>
                </font>{" "}
                <font size="2">{place.description}</font>
                <br></br>
                <br></br>
                <font size="3">
                  <b>Rating:</b>
                </font>{" "}
                <font size="2">{place.rating}</font>
                <br></br>
                <br></br>
                <font size="3">
                  <b>Mood:</b>
                </font>{" "}
                <font>
                  {place.status}
                </font>
                <br></br>
                <br></br>
                <div className="buttonCARD3">
                  <button
                    className="butttonFav3"
                    onClick={buttonClick}
                    // value={place.favorite}
                  >
                    { fav === false ? "☆" : "★"}
                  </button>
                  <Link to={PATHS.EDITPLACES}>
                    <img
                      src={editpencil}
                      alt="icon-edit"
                      className="buttonEdit3"
                    />
                  </Link>
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Done;