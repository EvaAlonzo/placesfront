import "./stylesHome.css"
import {Navbar} from "../index"
import places from "../../Images/Places.png"
import pending from "../../Images/Pending.png"
import done from "../../Images/Done.png"
import { Link } from "react-router-dom"
import * as PATHS from "../../utils/paths";


const Home = (props) => {
    return(
        <div><header><Navbar/></header>
        <div className="Home">
        
        <div className="homeImgs">
        <Link to={PATHS.PLACES}>
        <img src={places} alt="ifonund-icon"/>
        </Link>
        <Link to={PATHS.PENDING}>
        <img src={pending} alt="wantvisit-icon"/>
        </Link>
        <Link to={PATHS.DONE}>
        <img src={done} alt="visited-icon"/>
        </Link>
        </div>

        <div className="buttonsHome">
            <Link to={PATHS.FAVORITES}>
            <button><b>♥</b></button>
            </Link>
            <Link to={PATHS.CREATEPLACES}>
            <button><b>+</b></button>
            </Link>
        </div>

        </div>
        </div>
    )
}

export default Home;