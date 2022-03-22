import { Link } from "react-router-dom";
import "./stylesCreatePlaces.css";
import * as PATHS from "../../utils/paths";
import {Navbar} from "../index"
import { uploadCloud } from "../../services/uploadCloud";
import { useEffect, useState } from "react";
import { createPlaces } from "../../services/places";

const CreatePlaces = () => {
        const [ theImage, setTheImage ] = useState([]);
        const [ fullPlace, setFullPlace ] = useState({
            title:"",
            address: "",
            description: "",
            rating:"",
            status:""
        });

        const uploadImage = (e) =>{
            setTheImage([...e.target.files])
        };

        const handleSubmitImage = (e) =>{
            e.preventDefault()
            console.log("las imagenes?", theImage)
            uploadCloud(theImage)
        };

        const handleChangeForm = (e) => {
            const { name, value } = e.target
            setFullPlace({
                ...fullPlace, [name]:value
            })
        };

        const handleSubmitForm = (e) => {
            e.preventDefault()
            console.log("la forma", fullPlace)
            createPlaces(fullPlace)
        };

    return(
        <div className="CreatePlaces">
        <div><header><Navbar/></header></div>
        <Link to={PATHS.HOME}><button>Return</button></Link>
        <form method="POST">
        <h1>Add a new Place</h1>
            <div className="cont-info-CP">
                <label>Place picture:</label>
                <input type="file" multiple onChange={uploadImage}/>
                <div>Add an image of this place.</div>
                <button onClick={handleSubmitImage}>Upload image</button>
            </div>
        <hr/>
            <div>
                <label className="cont-info-CP">Title:</label>
                <input type="text" name="title" onChange={handleChangeForm}/>
            </div>
            <div>
                <label className="cont-info-CP">Address:</label>
                <input type="text" name="address" onChange={handleChangeForm}/>
            </div>
            <div>
                <label className="cont-info-CP">Description:</label>
                <input type="text" name="description" onChange={handleChangeForm}/>
            </div>
            <div>
                <label className="cont-info-CP">Rating:</label>
                <input type="text" name="rating" onChange={handleChangeForm}/>
            </div>
            <div>
                <label className="cont-info-CP">Mood:</label>
                <input type="text" name="status" onChange={handleChangeForm}/>
            </div>

        <div>
            <button onClick={handleSubmitForm} type="submit">Create</button>
        </div>
        </form>
        
        </div>
    )
}

export default CreatePlaces;