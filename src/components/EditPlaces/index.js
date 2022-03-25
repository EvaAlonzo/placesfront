import {Navbar} from "../index";
import "./stylesEditPlaces.css";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { useState } from "react";
import { editPlaces, deletePlaces } from "../../services/places";
import { uploadCloud } from "../../services/uploadCloud";
import flecha from "../../Images/Flecha.png";
import camera from "../../Images/Camera.png"

const EditPlaces = (props) => {
    const [theImage, setTheImage] = useState([]);
    const [fullPlace, setFullPlace] = useState({});
    const [responseStatus, setResponseStatus] = useState(undefined);

    const uploadImage = (e) => {
        setTheImage([...e.target.files]);
      };
    
      const handleSubmitImage = async (e) => {
        try {
          const dataUpload = { images: theImage };
          const formData = new FormData();
          for (let key in dataUpload) {
            //docs  [{},{}]
            if (key === "images") {
              // multiples imagenes
              for (let file of Array.from(dataUpload[key])) {
                formData.append(key, file);
              }
            } else {
              formData.append(key, dataUpload[key]);
            }
          }
          e.preventDefault();
          const { data, status, errorMessage } = await uploadCloud(formData);
          if (status) {
            let images = data.result.map((item) => item.newPath.url);
            setFullPlace({ ...fullPlace, images: images[0] });
          }
        } catch (error) {
          console.log("error", error);
        }
      };


    console.log("fullplace", fullPlace)
      const handleChange = (e) => {
        setFullPlace({
          ...fullPlace,
          _id: props.place._id,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmitFormPlace = (e) => {
        e.preventDefault();
        console.log("foma de user", fullPlace);
        editPlaces(fullPlace).then((response) => {
          console.log("elresponse", response);
          props.authenticate(response.data.result);
          const { status } = response;
          if (status) {
            setResponseStatus(status);
          } else {
            setResponseStatus(status);
          }
        });
      };
    
      const { place  } = props;

    
    return(
        <div className="EditPlaces">
        <div><header><Navbar/></header></div>
        <h1>Edit your Profile</h1>
      <div className="USERCONT">
      <Link to={PATHS.USER}> 
          <img className="FlechaUser" src={flecha} alt="icon-flecha" />
        </Link>
        <div key={place._id}>
          <form className="USERCARD" onSubmit={handleSubmitFormPlace}>
            <input name="file" type="file" onChange={uploadImage} className="inputfile" id="file"/>
            <label for="file"><img src={camera} alt="iconcamera" className="CAMERICON"/></label>
            <img src={""} alt="icon-place" />
            <button onClick={handleSubmitImage}>Upload image</button>
            <hr />
            <span><b>Title:</b></span>
            <input className="INPUTUSEREDIT"
              name="title"
              type="text"
              placeholder="title"
              onChange={handleChange}
            />
            <hr />
            <span><b>Address:</b></span>
            <input className="INPUTUSEREDIT"
              name="address"
              type="text"
              placeholder="address"
              onChange={handleChange}
            />
            <span><b>Description:</b></span>
            <input className="INPUTUSEREDIT"
              name="description"
              type="text"
              placeholder="description"
              onChange={handleChange}
            />
            <span><b>Rating:</b></span>
            <select className="INPUTUSEREDIT"
              name="rating"
              type="number"
              placeholder="rating"
              onChange={handleChange}
            >
              <option className="select-css">Select Option</option>
                <option >5</option>
                <option >4</option>
                <option >3</option>
                <option >2</option>
                <option >1</option>
              </select>
            <span><b>Mood:</b></span>
            <select className="INPUTUSEREDIT"
              name="status"
              type="text"
              placeholder="status"
              onChange={handleChange}
            >
              <option className="select-css">Select Option</option>
                <option className="select-css" value="I Found">I Found</option>
                <option className="select-css" value="Pending">Pending</option>
                <option className="select-css" value="Done">Done</option>
              </select>
            <span
              className={` displaynone ${
                responseStatus ? "succes displayblock " : "error"
              }`}
            >
              {responseStatus ? "Your changes was submit successfully" : ""}
            </span>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
        </div>
    )
}

export default EditPlaces;