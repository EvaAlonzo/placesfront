import {Navbar} from "../index"
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
const Pending = (props) => {
    return(
        <div className="Pending">
        <div><header><Navbar/></header></div>
        <Link to={PATHS.HOME}><button>Return</button></Link>
        aqui van los pendientes
        </div>
    )
}

export default Pending;