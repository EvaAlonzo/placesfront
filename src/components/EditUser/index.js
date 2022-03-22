import "./stylesEditUser.css"
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
const EditUser = (props) => {
    return(
        <div className="Home">
        <Link to={PATHS.HOME}><button>Return</button></Link>
        aqui va el editUser 
        </div>
    )
}

export default EditUser;