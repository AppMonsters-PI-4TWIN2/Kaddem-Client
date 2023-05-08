import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import Loading from "../components/Common/Loading";

const ViewProfil = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const[reason,setReason]=useState('');
    const[reported,setReported]=useState('');
    const[date,setDate]=useState('');
    const[reportedBy,setReportedBy]=useState('')
    
    const[project,setProject]=useState('')
    const[isTraited,setIsTraited]=useState(false)
    let { userName } = useParams();
    const [selectedProject, setSelectedProject] = useState('');
    const [Projects, setProjects] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var thisUser = JSON.parse( localStorage.getItem('user') );
    const userId = thisUser.id;
    const addReport = async (reported, reportedBy, reason) => {
       // reported=thisUser.id
          try {
          const response = await axios.post('/report/add', {
            reported,
            reportedBy,
            reason,
            date:Date.now(),
            isTraited,
            project
          });
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error(error.response.data.message || 'Failed to add investment');
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        console.log("aa")
        console.log(thisUser.id)
        console.log(user._id)
        setReported(user._id)
        setReportedBy(thisUser.id)
        setDate(Date.now())
            await addReport(user._id, thisUser.id, reason,date,isTraited,project, user.token)
            handleClose()
       // window.location.reload(true)

    }
    const fetchDataReport = async () => {

        const response = await axios.get(`/api/project/projects/${userId}`)
        setProjects(response.data)
        console.log(response.data);

    }
    const handleSelect = (event) => {
        const project = event.target.value;
        setProject(project);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/user/finduser/${userName}`);
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                  console.log(user.id)
                    setLoading(false);
                    console.log(data)
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
        fetchDataReport()
    }, [userName]);

    if (loading) {
        return <div><Loading/></div>;
    }

    return (
        <div>
            <Navbar />

            <div className="home" style={{ minHeight: "100vh" }}>
                <section className="page-header bg-tertiary">

                    <BreadcrumbShapes></BreadcrumbShapes>

                    <img style={{borderRadius: "25%",marginLeft:"15%",position:"static"}} loading="prelaod" decoding="async" className="img-fluid" height="175" width="175" src={user.avatar}/>

                    <h1 style={{textAlign:"center",position:"relative",marginTop:"-7%"}}>{user.userName}

                    </h1>
                    <div style={{textAlign:"center",display: "flex",justifyContent: "center", alignItems: "center",marginTop:"1%"}} >
                        <button className="btn btn-primary col-lg-1 align-content-sm-start" onClick={() => navigate(`/chat`)}  >Chat</button>
                        {thisUser  &&  <button className="btn btn-danger col-lg-1 align-content-sm-start" style={{marginLeft:"1%"}} onClick={handleShow} >report</button>}
                     
                    </div>
                </section>
                <section className="section-sm">
                    <div >
                        <div className="row g-5">
                            <div className="col-lg-4 mb-5 mb-lg-0">
                                <div className="bg-white shadow rounded-lg p-4 sticky-top" style={{top:"30px" ,marginLeft:"10%"}}>
                                    <h4 className="has-line-end">About Me</h4>
                                    <p>{user.aboutMe}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-white shadow rounded-lg p-4 sticky-top">
                                    <h4 className="has-line-end">Full Name</h4>
                                    <p>{user.firstName} {user.lastName}</p>
                                    <h4 className="has-line-end">Email</h4>
                                    <p>{user.email}</p>
                                    <h4 className="has-line-end">From</h4>
                                    <p>{user.region},{user.country}</p>
                                    <h4 className="has-line-end">Phone Number</h4>
                                    <p>{user.phoneNumber}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

               
            <Modal  show={show} onHide={handleClose}>
                                      {/* <Modal.Header style={{backgroundColor: '#198754', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
  <Modal.Title >
  <img style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} loading="prelaod" decoding="async" className="img-fluid" width="160" src=""
    alt="Kaddem"  />
    </Modal.Title>
  
</Modal.Header> */}

                                      <Modal.Body   >
                                      <p style={{color:'black' , fontWeight: 'bold', fontSize: '24px', textAlign: 'center'}} >
                                      Report  {user.userName}</p>
                                                      <form className="create" onSubmit={handleSubmit}>

                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize: '16px' ,color:'black'}}>  Reason  :</label>
                                                <input style={{color :'#343a40'}} 
                                                     
                                                     className="form-control shadow-none"
                                                       type="text"
                                                     
                                                       onChange={(e)=>setReason(e.target.value)}
                                                       list="suggestions"
                                                       />
                                                       <datalist id="suggestions">
                                                         <option value="Offensive language" />
                                                         <option value="Inappropriate behavior" />
                                                         
                                                       </datalist>

           {/* <select value={project} onChange={handleSelect}>
                    <option value="">Select a project</option>
                    {Projects.map((project) => (
                        <option key={project._id} value={project._id}>
                            {project.ProjectName}
                        </option>
                    ))}
                   
                </select> */}
             
                                                
                                            </div>

                                            <div className={" col-12"}>
                                                <button style={{color:'white'}} className="btn btn-danger col-12" >Report</button>
                                                {/* {error && <div className="error">{error}</div>} */}
                                            </div>
                                        </form>
                                        </Modal.Body>
                                      
                                           </Modal>
            <Footer />
        </div>
    );
};

export default ViewProfil;