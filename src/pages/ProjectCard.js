import {useEffect, useState} from "react"
import axios from "axios";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import './Card.css'
import { useNavigate } from "react-router-dom";
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";


const ProjectCard= () => {
    const navigate = useNavigate();
    // const handleClick = (projectName) => {
    //     history.push(`/api/project/${projectName}`);
    // };

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
            <section className="page-header bg-tertiary">

                <BreadcrumbShapes></BreadcrumbShapes>



                <h1 style={{ textAlign: "center" }}>Projects</h1>
            </section>
            <div style={{marginTop:"2%"}}>
                <button style={{position:"absolute", right: 100}} className="btn btn-primary" onClick={() => navigate("/new-project")}>Add project</button>
            </div>
            <div className="container">


                {
                    Project.map((curElem) => {
                        return (
                            <div className="card_item" key={curElem.id}>

                                <div className="card_inner">
                                    <img src={curElem.Image|| "/images/no-image.png"} style={{ width: "150px", height: "150px" }} alt="" />


                                    <div className="ProjectName">{curElem.ProjectName}</div>
                                    <div style={{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "3", height: "4.5em",marginBottom:"2%"}}>{curElem.Description}</div>


                                    <button className="btn btn-primary" onClick={() => navigate(`/project/${curElem.ProjectName}`)}>See More</button>
                      
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