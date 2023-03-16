import {useState} from "react";
import {useEditProfil} from "../hooks/useEditProfil";


const EditProfilForm=()=>{

    const emailLoggedin=localStorage.getItem("email")
    const [firstName,setName]=useState('')
    const [lastName,setLastName]=useState('')
    const [Region,setRegion]=useState('')
    const [email,setEmail]=useState('')
    const [aboutMe,setAboutMe]=useState('')
    const [Experience,setExp]=useState('')
    const [avatar,setAvatar]=useState('')
    const {editProfil, error, isLoading} = useEditProfil()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await editProfil(emailLoggedin,firstName,lastName,aboutMe,avatar)


    }
    return(
        <section className="section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <p className="text-primary text-uppercase fw-bold mb-3">Edit Information</p>
                            <h1>General Information</h1>
                            <p>In this section you will provide detailed information  </p>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="shadow rounded p-5 bg-white">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <h4>General Information</h4>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-form">
                                        <form className="create" onSubmit={handleSubmit}>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label" >FirstName</label>
                                                <input className="form-control shadow-none" type={"text"}
                                                       onChange={(e)=>setName(e.target.value)}
                                                       value={firstName}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">LastName</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setLastName(e.target.value)}
                                                       value={lastName}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setEmail(e.target.value)}
                                                       value={emailLoggedin}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> About Me</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setAboutMe(e.target.value)}
                                                       value={aboutMe}
                                                />
                                            </div>






                                            <div className={" col-12"}>
                                                <button className="btn btn-primary col-12" disabled={isLoading}>Save</button>
                                                {error && <div className="error">{error}</div>}
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default EditProfilForm