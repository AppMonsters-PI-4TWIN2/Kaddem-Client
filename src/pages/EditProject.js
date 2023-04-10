import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import EditProjectForm from "../components/EditProject";

const EditProject = () => {



    return (

        <div>
            <Navbar/>

            <div className="home" style={{ minHeight: "100vh"}}>

                <EditProjectForm/>
            </div>
            <Footer/>
        </div>
    )
}
export  default  EditProject