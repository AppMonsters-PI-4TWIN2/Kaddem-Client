import { Link } from 'react-router-dom'
import { useLogout } from '../../../hooks/useLogout'
import { useAuthContext } from '../../../hooks/useAuthContext'

const NavbarAdmin = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header className="navigation bg-tertiary">
            <nav className="navbar navbar-expand-xl navbar-light  py-2"  style={{backgroundColor: '#2F4F4F'}}>
                <div className="container">
                    
                    <a className="navbar-brand" href="index.html">
                        <img loading="prelaod" decoding="async" className="img-fluid" width="160" src="images/logo.png"
                             alt="Wallet"/>
                    </a>
                    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="index.html">Users</a>
                            </li>
                           
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
                        </ul>
                        {user && (
                            <div>
                                <span>{user.email}</span>
                                <button className="btn btn-dark"  style={{backgroundColor: '#228B22 '}} onClick={handleClick}  type="button" >Log out</button>
                            </div>
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

export default NavbarAdmin