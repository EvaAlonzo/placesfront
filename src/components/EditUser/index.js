import "./stylesEditUser.css";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import { useState } from "react";
import { editUser } from "../../services/user";
import { uploadCloud } from "../../services/uploadCloud";
import flecha from "../../Images/Flecha.png";
import camera from "../../Images/Camera.png"

const EditUser = (props) => {
  const [theImage, setTheImage] = useState([]);
  const [fullUser, setFullUser] = useState({});
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
        setFullUser({ ...fullUser, profile_pic: images[0] });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (e) => {
    setFullUser({
      ...fullUser,
      _id: props.user._id,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitFormUser = (e) => {
    e.preventDefault();
    console.log("foma de user", fullUser);
    editUser(fullUser).then((response) => {
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

  const { user } = props;

  return (
    <div className="EditUser">
      <h1>Edit your Profile</h1>
      <div className="USERCONT">
      <Link to={PATHS.USER}> 
          <img className="FlechaUser" src={flecha} alt="icon-flecha" />
        </Link>
        <div key={user._id}>
          <form className="USERCARD" onSubmit={handleSubmitFormUser}>
            <input name="file" type="file" onChange={uploadImage} className="inputfile" id="file"/>
            <label for="file"><img src={camera} alt="iconcamera" className="CAMERICON"/></label>
            <img src={user.profile_pic} alt="icon-user" />
            <button onClick={handleSubmitImage}>Upload image</button>
            <hr />
            <span><b>Name:</b></span>
            <input className="INPUTUSEREDIT"
              name="username"
              type="text"
              placeholder="name"
              onChange={handleChange}
            />
            <hr />
            <span><b>Email:</b></span>
            <input className="INPUTUSEREDIT"
              name="email"
              type="text"
              placeholder="email"
              onChange={handleChange}
            />
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
  );
};

export default EditUser;
