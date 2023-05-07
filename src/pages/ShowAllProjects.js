import React, {useEffect, useState} from "react"
import axios from "axios";
import Footer from "../components/Common/Footer/footer";
import Alert from "../components/Alert";
import ProjectDetails from "../components/ProjectDetails";
import NavbarAdmin from "../components/Common/NavbarAdmin/navbarAdmin";
import {Button, Form} from "react-bootstrap";


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
    const OnVerify = (id__) => {
        axios.patch(`/api/project/verify/${id__}`)
            .then((response) => {
                console.log('Project is now verified', response.data);

            })
            .catch((error) => {
                console.log('Error verifying the project', error);
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

    const searchHandle = async (event)=>{
        let key = event.target.value ;
        if(key){
        let result = await fetch(`/api/project/search/${key}`)
        result = await result.json()
        if(result){
            setProject(result);
        } 
    }else{
        fetchData();
    }
    }
    return (
        <div style={{backgroundColor:"#f4f5f7"}}>
            <NavbarAdmin/>
        <div>

                <div className="col-8 mx-auto text-center" style={{marginTop:"10%"}}>
                    <h1 className="mb-3 text-capitalize">List of Projects</h1>
                </div>

            </div>
            <div className="search col-lg-4 " style={{margin: "0 auto"}}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={searchHandle}
                    />
                    <Button variant="success" className='btn-dark' style={{backgroundColor:"1E1E2C"}} >Search</Button>
                </Form>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div  className="col align-self-center" style={{backgroundColor:"#ffffff",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"}}>
                                <table className="table table-hover " >
                                    <thead  style={{backgroundColor:"f4f5f7",color:"black",fontSize: "1.2em", padding: "20px"}}>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">Project Name</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">Creator </th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}}  width="500%" scope="col">Project Location</th>
                                        {/* <th scope="col">Description</th> */}
                                        <th style={{textAlign: "center", verticalAlign: "middle"}} scope="col">Social</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}} scope="col">Verify</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}} scope="col">Delete</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        projects.map(({ProjectName,Creator,ProjectLocation,Description,Image,_id,IsVerified}) =>(

                                            <ProjectDetails  key={_id} ProjectName={ProjectName} Creator={Creator} ProjectLocation={ProjectLocation} Description={Description} Image={Image} id={_id} OnVerify={OnVerify} IsVerified={IsVerified} OnDelete={OnDelete} />
                                            
                                            

                                        ))
                                    }


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                </div>



        </div>
    )
}

export default ShowAllProjects