import "./stylesDone.css";
import {Navbar} from "../index";
import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";

const Done = (props) => {
    return(
        <div className="Done">
        <div><header><Navbar/></header></div>
        <Link to={PATHS.HOME}><button>Return</button></Link>
        aqui van los ya visitados
        </div>
    )
}

export default Done;