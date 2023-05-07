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
import Loading from "../components/Common/Loading";



const ProjectCard= () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
    const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(true);
        fetch(`/api/project/projects?page=${pageNumber}`)
            //      const response = await axios.get(`/api/project/projects?page=${page}`)
            .then((response) => response.json())
            .then(({ totalPages, projects }) => {
                setProject(projects);
                setNumberOfPages(totalPages);
            }) .finally(() => setIsLoading(false));
        // const response = await axios.get('/api/project/projects')
        // setProject(response.data)
        // console.log(response.data);

    }
    const [Project, setProject] = useState([]);
    useEffect(()=>{
        //const fetchData = async () => {
        setIsLoading(true);
        fetch(`/api/project/projects?page=${pageNumber}`)
            //      const response = await axios.get(`/api/project/projects?page=${page}`)
            .then((response) => response.json())
            .then(({ totalPages, projects }) => {
                setProject(projects);
                setNumberOfPages(totalPages);
            }).finally(() => setIsLoading(false));
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
    if (isLoading) {
        return <Loading/>;
    }

    return (
        <div>
            <Navbar/>


            <section className="page-header bg-tertiary">

                <BreadcrumbShapes></BreadcrumbShapes>




                <h1 style={{ textAlign: "center" }}>Projects</h1>
                <div style={{marginTop:"2%"}}>

                    {/* search */}
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="search col-lg-4">
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
                        crossOrigin="anonymous"></script>




                {
                    Project.map((curElem) => {
                        return (
                            <div className="card_item" key={curElem.id}>

                                <div className="card_inner">
                                    <img src={curElem.Image.url|| "/images/no-image.png"} style={{ width: "150px", height: "150px" }} alt="" />



                                    {curElem.IsVerified === 1 ? (
                                        <>
                                            <div className="ProjectName">{curElem.ProjectName}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-check-circle-fill"
                                                     viewBox="0 0 16 16" style={{color: "#3498db",marginLeft:"2%"}}>
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                                </svg>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="ProjectName">{curElem.ProjectName}</div>
                                    )}
                                    <div style={{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "3", height: "4.5em",marginBottom:"2%"}}>{curElem.Description}</div>


                                    <button className="btn btn-primary" onClick={() => navigate(`/project/${curElem.ProjectName}`)}>See More</button>

                                </div>

                            </div>
                        )
                    })
                }

            </div>

            <div className="col-12">
                <nav className="mt-4">

                    <nav className="mb-md-50">
                        <ul className="pagination justify-content-center">

                            <li className="page-item"  onClick={gotoPrevious}>
                                <a className="page-link"  aria-label="Pagination Arrow"> <i className="fas fa-angle-left"></i>
                                </a>
                            </li>

                            {pages.map((pageIndex) => (
                                <li className={`page-item ${pageIndex === pageNumber ? 'active' : ''}`} key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                                    <a className="page-link">{pageIndex + 1}</a>
                                </li>
                            ))}

                            <li className="page-item"  onClick={gotoNext}>
                                <a className="page-link"  aria-label="Pagination Arrow"> <i className="fas fa-angle-right"></i>
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