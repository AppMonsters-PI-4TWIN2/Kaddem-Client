import { useEffect, useState } from "react"
import { useLogin } from "../hooks/useLogin"

const CheckMail = () => {
    return (

        <div className={"bodyy"} >
        <div className="boxx">
        <form autoComplete="off" className="formm login">
                <img loading="prelaod" decoding="async" className="img-fluid" width="380" src="images/logo.png"
                     alt="Wallet"/>
                <div style={{opacity:"0"}}>
                    ----------------------------------------
                    ----------------------------------------
                    ----------------------------------------
                    ----------------------------------------
                    ----------------------------------------
                    ----------------------------------------
                    
                </div>
                <p>Please ... Check your Email to verify</p>


            </form>
        </div>
        </div>

    )
    };

export default CheckMail;