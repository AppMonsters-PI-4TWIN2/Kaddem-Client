import {useEffect, useState} from "react"
import axios from "axios";
import Footer from "../components/Common/Footer/footer";
import Alert from "../components/Alert";
import ProjectDetails from "../components/ProjectDetails";
import NavbarAdmin from "../components/Common/NavbarAdmin/navbarAdmin";


const ShowAllProjects = () => {
    const OnDelete = (id__) => {
        axios.delete(`/api/project/${id__}`)
            .then((response) => {
                console.log('Project deleted successfully', response.data);

            })
            .catch((error) => {
                console.log('Error deleting Project', error);
            });
    }

    const [projects, setProject] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {

            const response = await axios.get('/api/project/getProjects')
            setProject(response.data)
            console.log(response.data);

        }
        fetchData()
    },[])
    return (
        <div>
            <NavbarAdmin/>

            <div className="container">

                <div className="col-8 mx-auto text-center" style={{marginTop:"10%"}}>
                    <h1 className="mb-3 text-capitalize">List of Projects</h1>
                </div>

            </div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div  className="col align-self-center">
                                <table className="table table-hover " style={{color: '#2F4F4F '}} >
                                    <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>

                                        <th scope="col">Project Name</th>

                                        <th scope="col">Creator </th>

                                        <th scope="col">Project Location</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Actions</th>
                                        <th scope="col">Social</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        projects.map(({ProjectName,Creator,ProjectLocation,Description,Image,_id}) =>(

                                            <ProjectDetails  key={_id} ProjectName={ProjectName} Creator={Creator} ProjectLocation={ProjectLocation} Description={Description} Image={Image} id={_id} OnDelete={OnDelete} />

                                        ))
                                    }


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default ShowAllProjects