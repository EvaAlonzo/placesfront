import "./stylesUser.css"
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
const User = (props) => {
    return(
        <div className="Home">
        <Link to={PATHS.HOME}><button>Return</button></Link>
        aqui va User
        <Link to={PATHS.EDITUSER}><button>Edit User</button></Link>
        </div>
    )
}

export default User;