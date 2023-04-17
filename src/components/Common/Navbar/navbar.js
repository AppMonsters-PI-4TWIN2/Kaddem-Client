import { Link } from 'react-router-dom'
import { useLogout } from '../../../hooks/useLogout'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    var LoggedInUser = JSON.parse( localStorage.getItem('user') );
    const navigate=useNavigate()  ;
  
    const handleClick = () => {
        logout()
        navigate("/")
    }

    return (
        <header className="navigation bg-tertiary">
            <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img loading="prelaod" decoding="async" className="img-fluid" width="160" src="/images/logo.png"
                             alt="Kaddem"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/projects">projects</a>
                            </li>
                            <li className="nav-item "><a className="nav-link" href="contact.html">Contact</a>
                            </li>
                            { user &&
                                <>
                                    <li className="nav-item "><a className="nav-link" href="/feed">my Feed</a>
                                    </li>
                            <li className="nav-item "><a className="nav-link" href="/investment">investments</a>

                            </li>
                            <li className="nav-item "><a className="nav-link" href="/myInvestment">my Investments</a>
                            </li>
                           
                             <li className="nav-item "><a className="nav-link" href="/chat">Chat </a>
                            </li>
                                </>}
                           
                          
                        </ul>
                        {user && (
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                                <li className="nav-item "><a className="nav-link" href="">{LoggedInUser.firstName} {LoggedInUser.lastName}</a>
                                </li>
                                <li className="nav-item dropdown" >

                                <img src={LoggedInUser.avatar}  loading="prelaod" decoding="async"  className="profile img-fluid"  height="55" width="55" style={{borderRadius: "25%"}}/>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{marginTop:"30%",textAlign:"center"}}>


                                    <li><a className="dropdown-item " href="/edit-profile">Edit my profile</a>
                                    </li>
                                    <li><a className="dropdown-item " href={'/user/' + LoggedInUser.userName}>See my profile</a>
                                    </li>
                                    <li><a className="dropdown-item " href="service-details.html">Settings</a>
                                    </li>

                                    <li><button className="btn btn-warning col-12 " style={{color:"white"}}   onClick={handleClick}  type="button" >Log out</button>
                                    </li>
                                </ul>
                            </li>
                            </ul>
                        )}

                        {!user && (
                            <div>
                                <a href="/login" className="btn btn-outline-primary">Log In</a>
                                <a href="/signup" className="btn btn-primary ms-2 ms-lg-3">Sign Up</a>
                            </div>
                        )}

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar