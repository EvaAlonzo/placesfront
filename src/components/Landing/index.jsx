import "./styleLanding.css"
import {Login, Signup }from "../index"
import { useState } from 'react'

function Landing(props) {
    console.log("props landing", props)
    const [ isLoggin, setIsLoggin ] = useState(null);

    const getForm = (value) => {
        if( value ){
            return <div className="LOGLAND"><Login {...props}/></div>
        }
        return <div className="LOGLAND"><Signup {...props}/></div>
    }

    return(
        <div className="Landing">
        <div className="buttonCard">
        <button className="buttonLanding" onClick={ ()=> setIsLoggin(true)}>Log In</button>
        <button className="buttonLanding" onClick={ () => setIsLoggin(false)}>Signup</button>
        
        { isLoggin !== null ? getForm(isLoggin) : <></> }
        </div>
        </div>
    )
}

export default Landing;