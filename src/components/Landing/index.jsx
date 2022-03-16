import "./styleLanding.css"
import {Login, Signup }from "../index"
import { useState } from 'react'

function Landing() {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ signedIn, setSignedIn ] = useState(false);

    const handleClick = () => {
        setLoggedIn(!loggedIn) 
    }

    const handleClick2 = () => {
        setSignedIn(!signedIn)
    }


    console.log("status", loggedIn)
    return(
        <div className="Landing">
        
        <button className="buttonLanding" onClick={handleClick}>Log In</button>
        <button className="buttonLanding" onClick={handleClick2}>Signup</button>
        
        { loggedIn ? <Login/> : <></> }
        { signedIn ? <Signup/> : <></> }
        

        </div>
    )
}

export default Landing;