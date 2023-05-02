import { Link } from 'react-router-dom'
import { useLogout } from '../../../hooks/useLogout'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {
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

            <nav className="navbar navbar-expand-xl navbar-light  py-2" style={{backgroundColor:"f4f5f7",boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.1)", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}} >
            <h3 style={{marginLeft:"2%",marginTop:"0.5%",fontSize:"250%"}}>Admin Panel</h3>
            <div className="container">

                <a className="navbar-brand" href="index.html">
                    <img loading="prelaod" decoding="async" className="img-fluid" width="160" src="/images/logo.png"
                         alt="kaddem"/>
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/admin/users">Users</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/admin/projects">Projects</a>
                        </li>
                         
                        <li className="nav-item "><a className="nav-link" href="/chat">Chat </a>
                            </li>
                        {/*
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#"
                                                             id="navbarDropdown" role="button"
                                                             data-bs-toggle="dropdown"
                                                             aria-expanded="false">Pages</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item " href="blog.html">Blog</a>
                                </li>
                                <li><a className="dropdown-item " href="blog-details.html">Blog Details</a>
                                </li>
                                <li><a className="dropdown-item " href="service-details.html">Service Details</a>
                                </li>
                                <li><a className="dropdown-item " href="faq.html">FAQ&#39;s</a>
                                </li>
                                <li><a className="dropdown-item " href="legal.html">Legal</a>
                                </li>
                                <li><a className="dropdown-item " href="terms.html">Terms &amp; Condition</a>
                                </li>
                                <li><a className="dropdown-item "
                                       href="privacy-policy.html">Privacy &amp; Policy</a>
                                </li>
                            </ul>
                        </li>
                        */}
                    {user && (
                        <li className="nav-item dropdown" style={{position:"absolute",right:"10%"}} ><img src={LoggedInUser.avatar} className="profile"  height="55" width="55" style={{borderRadius: "25%"}}/>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{marginTop:"30%"}}>
                                <li><a className="dropdown-item " href="/edit-profile">Edit my profile</a>
                                </li>
                                <li><a className="dropdown-item " href="blog-details.html">Blog Details</a>
                                </li>
                                <li><a className="dropdown-item " href="service-details.html">Service Details</a>
                                </li>
                                <li><a className="dropdown-item " href="faq.html">FAQ&#39;s</a>
                                </li>
                                <li><a className="dropdown-item " href="legal.html">Legal</a>
                                </li>
                                <li><a className="dropdown-item " href="terms.html">Terms &amp; Condition</a>
                                </li>
                                <li><button className="btn btn-warning col-12 " style={{color:"white"}}   onClick={handleClick}  type="button" >Log out</button>
                                </li>
                            </ul>
                        </li>
                    )}
                </ul>
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

export default NavbarAdmin