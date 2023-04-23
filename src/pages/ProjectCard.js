import {useEffect, useState} from "react"
import axios from "axios";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import './Card.css'
import { useNavigate } from "react-router-dom";

import AdSense from 'react-adsense';
import { Button, Form } from "react-bootstrap";
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";
import ReactGA from "react-ga";


const ProjectCard= () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
    //----------------------------google Analytics---------------------
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[]);
    //----------------------------end google Analytics------------------
    const navigate = useNavigate();
    // const handleClick = (projectName) => {
    //     history.push(`/api/project/${projectName}`);
    // };
    const fetchData = async () => {
        fetch(`/api/project/projects?page=${pageNumber}`)
        //      const response = await axios.get(`/api/project/projects?page=${page}`)
              .then((response) => response.json())
              .then(({ totalPages, projects }) => {
                  setProject(projects);
                setNumberOfPages(totalPages);
              });
        // const response = await axios.get('/api/project/projects')
        // setProject(response.data)
        // console.log(response.data);

    }
    const [Project, setProject] = useState([]);
    useEffect(()=>{
        //const fetchData = async () => {
            fetch(`/api/project/projects?page=${pageNumber}`)
      //      const response = await axios.get(`/api/project/projects?page=${page}`)
            .then((response) => response.json())
            .then(({ totalPages, projects }) => {
                setProject(projects);
              setNumberOfPages(totalPages);
            });
            //setProject(response.data)
            //console.log(response.data);

    //    }
      //  fetchData()
    },[pageNumber])

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
    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
      };
    
      const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
      };
    
    return (
        <div>
            <Navbar/>


            <section className="page-header bg-tertiary">

                <BreadcrumbShapes></BreadcrumbShapes>




                <h1 style={{ textAlign: "center" }}>Projects</h1>
                <div style={{marginTop:"2%"}}>
                
                {/* search */}
                <div class="d-flex justify-content-center align-items-center">
       <div class="search col-lg-4">
         <Form className="d-flex">
           <Form.Control
             type="search"
             placeholder="Search"
             className="me-2"
             aria-label="Search"
             onChange={searchHandle}
           />
           <Button variant="success" className="btn btn-primary">
             Search
           </Button>
         </Form>
       </div>
     </div>
     
                     <button style={{position:"absolute", right: 100}} className="btn btn-primary" onClick={() => navigate("/new-project")}>Add project</button>
                 </div>
            </section>
            
           
            <div className="container">
            
           {/* Google Absense  */}
            <AdSense.Google
        client='6953905789'
        slot='pub-5945465024662753'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
      />
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5945465024662753"
     crossorigin="anonymous"></script>




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

            <div class="col-12">
							<nav class="mt-4">
								
								<nav class="mb-md-50">
									<ul class="pagination justify-content-center">

                                    <li class="page-item"  onClick={gotoPrevious}>
											<a class="page-link"  aria-label="Pagination Arrow"> <i class="fas fa-angle-left"></i>
											</a>
										</li>

                                        {pages.map((pageIndex) => (
  <li className={`page-item ${pageIndex === pageNumber ? 'active' : ''}`} key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
    <a className="page-link">{pageIndex + 1}</a>
  </li>
))}

										<li class="page-item"  onClick={gotoNext}>
											<a class="page-link"  aria-label="Pagination Arrow"> <i class="fas fa-angle-right"></i>
											</a>
										</li>
									</ul>
								</nav>
							</nav>
						</div>



        
            <Footer/>

        </div>
    )
}

export default ProjectCard