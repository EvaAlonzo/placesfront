import "./stylesPlaces.css";
import { placesList } from "../../services/places.js";
import React, { useState, useEffect } from "react";
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
import { Navbar } from "../index";
import flecha from "../../Images/Flecha.png";
import editpencil from "../../Images/Edit.png"; 

const Places = (props) => {
  const [getPlaces, setGetplaces] = useState([]);
  const [fav, setFav] = React.useState();

  useEffect(() => {
    async function callPLaces() {
      const { data } = await placesList();
      setGetplaces(data.result);
    }
    callPLaces();
  }, []);

  //rating
  const Rating = (props) => {
    const stars = Math.round(props.children);
    const drawStars = "★".repeat(stars) + "☆".repeat(5 - stars);
    return drawStars;
  };

  const buttonClick = () => {
    setFav((prevState) => !prevState);
  };
  console.log("favstatus", fav);


  return (
    <div className="Places">
      <div>
        <header>
          <Navbar />
        </header>
      </div>

      <div className="CARDPLACES">
        <Link to={PATHS.HOME}>
          <img className="FlechaPlaces" src={flecha} alt="icon-flecha" />
        </Link>
        <div className="CONTFLECHA">
          {getPlaces.map((place) => (
            <div key={place._id}>
              <div className="PLACESCONT">
                <img
                  className="PLACESIMG"
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
                  <Rating>{place.status}</Rating>
                </font>
                <br></br>
                <br></br>
                <div className="buttonCARD">
                  <button
                    className="butttonFav"
                    onClick={buttonClick}
                    // value={place.favorite}
                  >
                    { fav === false ? "☆" : "★"}
                  </button>
                  <Link to={PATHS.EDITPLACES}>
                    <img
                      src={editpencil}
                      alt="icon-edit"
                      className="buttonEdit"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
