
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import EditProfilForm from "../components/EditProfil";



const EditProfil = () => {



    return (

        <div>
            <Navbar/>

            <div className="home" style={{ minHeight: "100vh"}}>

                <EditProfilForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default EditProfil