import { useState } from 'react'
import { Modal } from 'react-bootstrap';
const ProjectCreationForm=()=>{
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [Valid, setValid] = useState(null)
    const [ProjectName,setProjectName]=useState('')
    const [Description,setDescription]=useState('')
    const [DetailedDescription,setDetailedDescription]=useState('')
    const [Category,setCategory]=useState('')
    const [Stage,setStage]=useState('')
    const [FundingGoal,setFundingGoal]=useState('')
    const [AmountAlreadyRaised,setAmountAlreadyRaised]=useState('')
    const [ImpactOrGoal,setImpactOrGoal]=useState('')
    const [Image,setImage]=useState([])
    const [ProjectLocation,setProjectLocation]=useState('')
    const [FundingModel,setFundingModel]=useState('')
    const [Website,setWebsite]=useState('')
    const [Team,setTeam]=useState('')
    const [LegalConsiderations,setLegalConsiderations]=useState('')
    const [FundingDeadline,setFundingDeadline]=useState()
    var LoggedInUser = JSON.parse( localStorage.getItem('user') );
    const [Creator,setCreator]=useState(LoggedInUser.id)

    const addProject = async ( ProjectName, Description, DetailedDescription,Team,LegalConsiderations,AmountAlreadyRaised,Category,ImpactOrGoal,FundingGoal,ProjectLocation,FundingModel,Website,FundingDeadline,Creator,Stage,Image) => {
        setIsLoading(true)



        const response = await fetch('/api/project/new', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  ProjectName, Description, DetailedDescription,Team,LegalConsiderations,AmountAlreadyRaised,Category,ImpactOrGoal,FundingGoal,ProjectLocation,FundingModel,Website,FundingDeadline,Creator,Image})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)

        }
        if (response.ok) {
            // update loading state
            setIsLoading(false)
            setValid(true)
        }

    }
    //upload image from cloudinary
    //handle and convert it in base 64
    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setImage(reader.result);
        }

    }
    //fin upload

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            ProjectName !== '' &&
            Description !== '' &&
            DetailedDescription !== '' &&
            Team !== '' &&
            AmountAlreadyRaised !== '' &&
            Category !== '' &&
            ImpactOrGoal !== '' &&
            FundingGoal !== '' &&
            FundingModel !== ''&&
            Image !== ''
        ){
            if (ProjectName.length > 30) {
                setError("The Project name should not exceed a maximum length of 30 characters");
                return;
            }
            if (FundingGoal < 100) {
                setError("Funding goal should be higher than 100 $");
                return;
            }
            if (AmountAlreadyRaised < -1) {
                setError("The amount already raised can not be a negative number");
                return;
            }
            if (AmountAlreadyRaised > FundingGoal) {
                setError("The amount already raised can not be higher than the funding goal");
                return;
            }

                await addProject( ProjectName, Description, DetailedDescription,Team,LegalConsiderations,AmountAlreadyRaised,Category,ImpactOrGoal,FundingGoal,ProjectLocation,FundingModel,Website,FundingDeadline,Creator,Stage,Image)
                if (Valid) {
                setShowModal(true); // show the modal
                }
        }else {
            setError(
                "You must complete all the required inputs (you can see * in front of the required inputs)"
            );
        }
    }
    return(



        <section className="section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <p className="text-primary text-uppercase fw-bold mb-3">Add New Project</p>
                            <h1>Fill Project Form</h1>
                            <p>In this section you will provide detailed information about the project and funding needs to potential investors </p>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="shadow rounded p-5 bg-white">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <h4>Add Project</h4>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-form">
                                        <form className="create" onSubmit={handleSubmit}>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label" >Brand Name Or Company Name *</label>
                                                <input className="form-control shadow-none" type={"text"}
                                                       onChange={(e)=>setProjectName(e.target.value)}
                                                       value={ProjectName}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">High level concept or small Description * </label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setDescription(e.target.value)}
                                                       value={Description}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Detailed description *</label>
                                                <textarea className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setDetailedDescription(e.target.value)}
                                                       value={DetailedDescription}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> Category *</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setCategory(e.target.value)}
                                                       value={Category}
                                                />
                                            </div>

                                            <div className="col1 name_box P_STADY">
                                                The stage of the project *
                                            </div>
                                            <div className={"input-group mb-4"}>
                                                <select style={{color:"black"}} className="form-select" id="inputGroupSelect04" onChange={(event) => setStage(event.target.value)}>
                                                    <option value="Idea Stage">Idea Stage</option>
                                                    <option value="Prototype Stage">Prototype Stage</option>
                                                    <option value="Development Stage">Development Stage</option>
                                                    <option value="Testing Stage">Testing Stage</option>
                                                    <option value="Launch Stage">Launch Stage</option>
                                                    <option value="Growth Stage">Growth Stage</option>
                                                    <option value="Maintenance Stage">Maintenance Stage</option>
                                                </select>
                                            </div>

                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Funding goal *</label>
                                                <input className="form-control shadow-none"
                                                       type="number"
                                                       inputMode="numeric"
                                                       onChange={(e)=>setFundingGoal(e.target.value)}
                                                       value={FundingGoal}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Amount already raised *</label>
                                                <input className="form-control shadow-none"
                                                       type="number"
                                                       inputMode="numeric"
                                                       onChange={(e)=>setAmountAlreadyRaised(e.target.value)}
                                                       value={AmountAlreadyRaised}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Funding deadline</label>
                                                <input className="form-control shadow-none"
                                                       type={"date"}
                                                       onChange={(e)=>setFundingDeadline(e.target.value)}
                                                       value={FundingDeadline}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Impact or goal *</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setImpactOrGoal(e.target.value)}
                                                       value={ImpactOrGoal}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Project location</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setProjectLocation(e.target.value)}
                                                       value={ProjectLocation}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Funding model *</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setFundingModel(e.target.value)}
                                                       value={FundingModel}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">About the team *</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setTeam(e.target.value)}
                                                       value={Team}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Legal or regulatory considerations</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setLegalConsiderations(e.target.value)}
                                                       value={LegalConsiderations}
                                                />
                                            </div>

                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Website address</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setWebsite(e.target.value)}
                                                       value={Website}
                                                />
                                            </div>
                                            <label className="form-label" htmlFor="form4Example2">Image</label>
                                            <div className="form-outline mb-4">
                                                <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
                                                
                                            </div>
                                            <img className="img-fluid" src={Image} alt="" />


                                            <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>Add Project</button>
                                            {error    && <div  className="notices info" style={{textAlign:"center", backgroundColor:"#ff6b6b",opacity:"0.6",color:"white",borderRadius: "30px",marginTop:"3%"}}> <p>{error}</p></div>}


                                        </form>
                                    </div>
                                </div>
                                {/* Modal component */}
                                <Modal show={showModal} onHide={() => setShowModal(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Success!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Your form has been submitted successfully.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button variant="primary"  className="btn btn-primary " onClick={() => window.location.href = "/"}>Close</button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ProjectCreationForm