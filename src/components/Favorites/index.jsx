import "./stylesFavorites.css"
import {Navbar} from "../index"
import * as PATHS from "../../utils/paths";
import { Link } from "react-router-dom";
const Favorites = (props) => {
    return(
        <div className="Home">
        <div><header><Navbar/></header></div>
        <Link to={PATHS.HOME}><button>Return</button></Link>
        
        aqui van los favoritos
        </div>
    )
}

export default Favorites;