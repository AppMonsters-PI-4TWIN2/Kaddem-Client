import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

const ViewProject = () => {

    const [Project, setProject] = useState({});
 const navigate = useNavigate();


    const percentageAchieved=(Project.AmountAlreadyRaised*100/Project.FundingGoal).toFixed(2)
   const [loading, setLoading] = useState(true);
    let { ProjectName } = useParams();
    const date = new Date(Project.createdAt);
    const formattedDate = date.toLocaleDateString('en-US');
     //modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLoginToInvest= () =>{
      window.location.href = '/login';
  };
  const [montant,setMontant] =useState( ) ;
  const [idUser,setIdUser] =useState('') ;
const [idProject ,setIdProject] = useState('')
  var user = JSON.parse( localStorage.getItem('user') );
  const addInvestment = async (idUser, idProject, montant, token) => {
    idUser=user.id
      try {
      const response = await axios.post('/investment/add', {
        idUser,
        idProject,
        montant,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.response.data.message || 'Failed to add investment');
    }
  };
  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/project/${ProjectName}`);
                if (response.ok) {
                    const data = await response.json();
                    setProject(data);
                    setIdProject(Project._id)
                    setLoading(false);
                    console.log(data)
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [ProjectName]);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/user/findById/${Project.Creator}`);
                if (response.ok) {
                    const user = await response.json();
                    setProject((prevProject) => ({
                        ...prevProject,
                        creatoruserName: user.userName,
                    }));
                }
            } catch (error) {
                console.error(error);
            }
        };
        if (Project.Creator) {
            fetchUser();
        }
    }, [Project.Creator]);
    if (loading) {
        return <div>Loading...</div>;
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');

        await addInvestment(idUser, Project._id, montant, user.token)
        handleClose()
       // window.location.reload(true)


    }

 
    return (
        <div>
            <Navbar />

            <div className="home" style={{ minHeight: "100vh" }}>
                <div className="section">
                    <div className="container">
                        <div className="row justify-content-center" style={{minWidth:"100%"}}>
                            <div className="col-lg-10">
                                <div className="mb-5">
                                    <div>
                                    <h1 className="mb-4" style={{lineHeight:"1.5"}}>{Project.ProjectName}</h1>

                                        {/*progress bar*/}
                                        <div className={"boxxx"} style={{float:"right",top:"-200px"}}>
                                            <div className={"percent"}>
                                                <svg>
                                                    <circle cx={70} cy={70} r={70}></circle>
                                                    <circle cx={70} cy={70} r={70} style={{ strokeDashoffset: `calc(440 - (440 * ${percentageAchieved}) / 100)` }}></circle>
                                                </svg>
                                                <div className={"number"}>
                                                    <h1>{percentageAchieved}<span>%</span></h1>

                                                </div>
                                            </div>
                                            <p>Raised {Project.AmountAlreadyRaised} $ of {Project.FundingGoal} $</p>

                                        </div>
                                        {/*end progress bar*/}

                                        {user?.id ? (
                                            Project.Creator !== user.id ? (
                                                <Button className="btn btn-primary " style={{float:"right",left:"24%",marginTop:"100px",width:"21%"}} onClick={handleShow}>
                                                    invest
                                                </Button>
                                            ) : (

                                                <div/>

                                            )
                                        ) : (
                                            <Button className="btn btn-primary" style={{float:"right",left:"24%",marginTop:"100px",width:"21%"}} onClick={handleLoginToInvest}>
                                                invest
                                            </Button>
                                        )}
                                      
                                      <Modal  show={show} onHide={handleClose}>
                                      <Modal.Header style={{backgroundColor: '#198754', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
  <Modal.Title >
  <img style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} loading="prelaod" decoding="async" className="img-fluid" width="160" src=""
                             alt="Kaddem"  />
    </Modal.Title>
  
</Modal.Header>

                                      <Modal.Body   >
                                      <p style={{color:'black' , fontWeight: 'bold', fontSize: '24px', textAlign: 'center'}} >
                                      Invest in {Project.ProjectName}</p>
                                                      <form className="create" onSubmit={handleSubmit}>

                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize: '16px' ,color:'black'}}>  Enter the amount you would like to invest in {Project.ProjectName}  :</label>
                                                <input style={{color :'#343a40'}} 
                                                     
                                                       className="form-control shadow-none"
                                                       type="number"
                                                       inputMode="numeric"
                                                       onChange={(e)=>setMontant(e.target.value)}
                                                       value={montant} 
                                                />
                                                
                                            </div>

                                            <div className={" col-12"}>
                                                <button style={{color:'black'}} className="btn btn-primary col-12" >Invest</button>
                                                {/* {error && <div className="error">{error}</div>} */}
                                            </div>
                                        </form>
                                        </Modal.Body>
                                      
                                           </Modal>





                                    </div>
                                    <span>Project created : {formattedDate} <span className="mx-2">/</span> </span>
                                    <p className="list-inline-item">Creator : <a href={`/user/${Project.creatoruserName}`} className="ml-1">{Project.creatoruserName} </a></p>
                                    <p>Project location: {Project.ProjectLocation}  <span className="mx-2">/</span> Project category:{Project.Category}</p>
                                    <p >{Project.Description}</p>
                                </div>

                                <div className="mb-5 text-center" style={{marginTop:"5%"}}>
                                    <div className="post-slider rounded overflow-hidden">
                                        <img loading="lazy" decoding="async" src={Project.Image.url || "/images/no-image.png"} style={{ width: "500px", height: "500px" }} alt="Project Image"/>



                                    </div>
                                </div>
                                <div className="content">
                                    <h4 id="heading-example">Detailed Description</h4>
                                    <p>{Project.DetailedDescription}</p>




                                        <hr></hr>
                                            <h5 id="link">Impact Or Goal</h5>
                                            <p>{Project.ImpactOrGoal}</p>
                                            <hr></hr>
                                                <h5 id="paragraph">About the team</h5>
                                                <p>{Project.Team}</p>
                                                <hr></hr>


                                                            <h5 id="unordered-list">Funding Model</h5>
                                                         <p>{Project.FundingModel}</p>
                                                        <hr></hr>
                                                            <h4 id="notice">Project stage</h4>
                                                            <div className="notices note">
                                                                <p>{Project.Stage}</p>
                                                            </div>

                                                            <hr></hr>

                                                                    <h5 id="link">Legal or regulatory considerations</h5>
                                                                    <p>{Project.LegalConsiderations}</p>









                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ViewProject;