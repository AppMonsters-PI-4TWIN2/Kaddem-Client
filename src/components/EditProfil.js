import {useState} from "react";
import {useEditProfil} from "../hooks/useEditProfil";


const EditProfilForm=()=>{
    var LoggedInUser = JSON.parse( localStorage.getItem('user') );
    const emailLoggedin=localStorage.getItem("email")
    const [firstName,setFirstName]=useState(LoggedInUser.firstName)
    const [userName,setUserName]=useState(LoggedInUser.userName)
    const [lastName,setLastName]=useState(LoggedInUser.lastName)
    const [region,setRegion]=useState(LoggedInUser.region)
    const [country,setCountry]=useState(LoggedInUser.country)
    const [email,setEmail]=useState(LoggedInUser.email)
    const [aboutMe,setAboutMe]=useState(LoggedInUser.aboutMe)
    const [phoneNumber,setPhoneNumber]=useState(LoggedInUser.phoneNumber)
    const [avatar,setAvatar]=useState(LoggedInUser.avatar)
    const {editProfil, error, isLoading} = useEditProfil()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await editProfil(email,firstName,lastName,aboutMe,avatar,region,country,phoneNumber,userName)
        window.location.href = '/';


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
                                            <div className="d-flex align-items-end mt-75 ms-1" style={{marginBottom:"5%",marginRight:"4%"}}>

                                                    {LoggedInUser.avatar==="" &&

                                                            <img  style={{borderRadius: "25%",marginRight:"4%"}} height="100" width="100" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiPIGaj3zV2VbDQxmjKhx7_nhuHagTs0X_Nw&usqp=CAU"}/>

                                                    }
                                                    {LoggedInUser.avatar!=="" &&

                                                            <img style={{borderRadius: "25%",marginRight:"4%"}} height="100" width="100" src={LoggedInUser.avatar}/>

                                                    }

                                                <div>


                                                    <button type="button" id="account-reset"
                                                            className="btn btn-sm btn-primary mb-75 me-75">Upload
                                                    </button>
                                                    <p className="mb-0">Allowed file types: png, jpg, jpeg.</p>
                                                </div>
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setUserName(e.target.value)}
                                                       value={userName}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label" >First Name</label>
                                                <input className="form-control shadow-none" type={"text"}
                                                       onChange={(e)=>setFirstName(e.target.value)}
                                                       value={firstName}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setLastName(e.target.value)}
                                                       value={lastName}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                                <input className="form-control shadow-none"
                                                       readOnly={true}
                                                       type={"text"}
                                                       onChange={(e)=>setEmail(e.target.value)}
                                                       value={email}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> Country</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setCountry(e.target.value)}
                                                       value={country}
                                                />

                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> Region</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setRegion(e.target.value)}
                                                       value={region}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> Phone Number</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setPhoneNumber(e.target.value)}
                                                       value={phoneNumber}
                                                />
                                            </div>
                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label"> About Me</label>
                                                <textarea className="form-control shadow-none"
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