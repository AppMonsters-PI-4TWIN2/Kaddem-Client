import {useEffect, useState} from "react"
import axios from "axios";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import './Card.css'


const ProjectCard= () => {

    const [Project, setProject] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {

            const response = await axios.get('/api/project/projects')
            setProject(response.data)
            console.log(response.data);

        }
        fetchData()
    },[])
    return (
        <div>
            <Navbar/>


            <div className="container">


                {
                    Project.map((curElem) => {
                        return (
                            <div className="card_item" key={curElem.id}>

                                <div className="card_inner">
                                    <img src={curElem.Image} alt="" />
                                    <div className="ProjectName">{curElem.ProjectName}</div>
                                    <div className="description">{curElem.Description}</div>


                                    <button className="btn btn-primary" >See More</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>




            <Footer/>

        </div>
    )
}

export default ProjectCard