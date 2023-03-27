import {useAuthContext} from "../hooks/useAuthContext";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";



const Home = () => {


    const {user} = useAuthContext()
    return (

        <div >
            <Navbar/>

        <div className="home" style={{ minHeight: "100vh"}}>

        k
        </div>
            <Footer/>
        </div>
    )
}

export default Home