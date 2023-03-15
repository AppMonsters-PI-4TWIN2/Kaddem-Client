
import {useAuthContext} from "../../hooks/useAuthContext";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';



const GoogleLogin = () => {

    const location = useLocation();
    const { email, googleId } = queryString.parse(location.search);
    window.localStorage.setItem('email', JSON.stringify(email));
    const {user} = useAuthContext()
    return (

        <div>
            <Navbar/>

            <div className="home">

                kaaaa
            </div>
            <Footer/>
        </div>
    )
}

export default GoogleLogin