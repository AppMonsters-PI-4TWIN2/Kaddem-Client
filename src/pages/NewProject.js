import {useAuthContext} from "../hooks/useAuthContext";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import ProjectCreationForm from "../components/ProjectCreationForm";



const NewProject = () => {


    const {user} = useAuthContext()
    return (

        <div>
            <Navbar/>

            <div className="home">

                <ProjectCreationForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default NewProject