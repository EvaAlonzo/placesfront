import { Link } from "react-router-dom";
import "./stylesCreatePlaces.css";
import * as PATHS from "../../utils/paths";
import { Navbar } from "../index";
import { uploadCloud } from "../../services/uploadCloud";
import { useState } from "react";
import { createPlaces } from "../../services/places";
import { successStatus } from "../../utils/clearres";
import flecha from "../../Images/Flecha.png"
import camera from "../../Images/Camera.png"
import { useNavigate } from "react-router-dom";

const CreatePlaces = () => {
  const [theImage, setTheImage] = useState([]);
  const [fullPlace, setFullPlace] = useState({
    title: "",
    address: "",
    description: "",
    rating: "",
    status: "",
  });
  const [ responseStatus, setResponseStatus ] = useState(undefined);
  

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
      const { data, status, errorMessage} = await uploadCloud(formData);
      if(status){
          let images = data.result.map(item =>  item.newPath.url)
          setFullPlace({...fullPlace, images})
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFullPlace({
      ...fullPlace,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("la forma", fullPlace);
    createPlaces(fullPlace).then((response) => {
      const { status } = response;
      if (status) {
        setResponseStatus(status);
        navigate(PATHS.HOME);
      } else {
        setResponseStatus(status);
      }
    });
  };


  return (
    <div className="CreatePlaces">
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <form className="CreateFullCard" method="POST" >
      <Link to={PATHS.HOME}> 
        <img className="Flecha" src={flecha} alt="icon-flecha"/>
      </Link>
        <div className="cont-image">
          <h1>Add a new Place</h1>
          <input name="file" type="file" className="inputfile2" id="file" onChange= { uploadImage } />
          <label for="file">
          <img src={camera} alt="iconcamera2" className="CAMERICON2"/></label> 
          <button onClick= { handleSubmitImage } type="submit">Upload image </button>

          <span
            className={` displaynone ${
              theImage ? "succes displayblock " : "error"
            }`}
          >
            {theImage.length >= 1
              ? "You have one file pending, please upload"
              : "Submit an Image" ? "" : "Already to update" } 
 
            {console.log("Que trae theImage:", theImage)}
            {console.log("Que trae handleStatusImage:")}
          </span>

          <hr />
        </div>

        <div className="formButton">
          <div className="FormContCreate">
            <div className="form-creteindvi">
              <label className="cont-info-CP">Title:</label>
              <input type="text" name="title" onChange={handleChangeForm} />
            </div>
            <div className="form-creteindvi">
              <label className="cont-info-CP">Address:</label>
              <input type="text" name="address" onChange={ handleChangeForm } />
            </div>
            <div className="form-creteindvi">
              <label className="cont-info-CP">Description:</label>
              <input
                type="text"
                name="description"
                onChange={ handleChangeForm }
              />
            </div>
            <div className="form-creteindvi-select">
            <label className="cont-info-CP">Rating:</label>
              <select
                className="selectcont"
                name="rating"
                onChange={ handleChangeForm }
              >
              <option className="select-css">Select Option</option>
                <option >5</option>
                <option >4</option>
                <option >3</option>
                <option >2</option>
                <option >1</option>
              </select>
            </div>
            <div className="form-creteindvi-select">
              <label className="cont-info-CP">Mood:</label>
              <select
                className="selectcont"
                name="status"
                onChange={ handleChangeForm }
              >
                <option className="select-css">Select Option</option>
                <option className="select-css" value="I Found">I Found</option>
                <option className="select-css" value="Pending">Pending</option>
                <option className="select-css" value="Done">Done</option>
              </select>
            </div>
          </div>
          <span
            className={` displaynone ${
              responseStatus ? "succes displayblock " : "There was an error please try again"
            }`}
          >
            {responseStatus
              ? "Your place was created successfully"
              : "" }
          </span>
          <div>
            <button type="submit" onClick={ handleSubmitForm }>
              Create
            </button>
            {/* { responseStatus === "Your place was created successfully"
            : redirectPlace} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePlaces;
