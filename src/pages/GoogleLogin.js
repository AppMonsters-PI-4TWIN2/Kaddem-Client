import {useAuthContext} from "../hooks/useAuthContext";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";


import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {useLoginGoogle} from "../hooks/useLoginGoogle";
import {useState} from "react";
import {useLogin} from "../hooks/useLogin";

const GoogleLogin = () => {

    const {loginGoogle, error, isLoading} = useLoginGoogle()
    const location = useLocation();
    const { email, googleId } = queryString.parse(location.search);
    window.localStorage.setItem('email', JSON.stringify(email));
    const loginwithgoogle = async (e) => {
        e.preventDefault()

        await loginGoogle(email, googleId)

        window.location.href = '/';
    }

    const {user} = useAuthContext()
    return (

        <div>
            <Navbar/>

            <div className="home" style={{ minHeight: "100vh"}}>
                <h1 style={{textAlign: "center" ,marginTop:"10%"}}>Continue as {email}</h1>
                <div style={{textAlign: "center"}}>
                <button style={{display:"block", margin:"0 auto"}}className="btn btn-primary col-4" onClick={loginwithgoogle}>Continue</button>
                </div>



            </div>
            <Footer/>
        </div>
    )
}

export default GoogleLogin