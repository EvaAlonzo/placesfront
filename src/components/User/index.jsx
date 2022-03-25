import "./stylesUser.css";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import flecha from "../../Images/Flecha.png";
import editpencil from "../../Images/Edit.png";

const User = (props) => {
  const { user } = props;

  return (
    <div className="User">
      <h1>Profile</h1>
      <div className="USERCONT"> 
        <Link to={PATHS.HOME}>
          <img className="FlechaUser" src={flecha} alt="icon-flecha" />
        </Link>
        <div key={user._id}>
          <div className="USERCARD">
            <img src={user.profile_pic} alt="icon-user" />
            <br></br>
            <font size="5">
              <b>{user.username}</b>
            </font>
            <font size="3">{user.email}</font>
            <br></br>
            <br></br>
            <Link to={PATHS.EDITUSER}>
              <img
                src={editpencil}
                alt="icon-edit"
                className="buttonEditUSER"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
