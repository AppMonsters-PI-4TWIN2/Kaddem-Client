
const FooterAdmin = () => {


    return (
        <footer className="section-sm sm-tertiary footerp  text-center text-white"  style={{backgroundColor: '#2F4F4F',position: 'fixed',height:'10px', width: '100%', bottom: 0 }} >
        <div style={{color:'white'}}className="container">

                <div className="row align-items-center mt-5 text-center text-md-start">
                    <div className="col-lg-4">
                        <a href="index.html">
                            <img loading="prelaod" decoding="async" className="img-fluid" width="160"
                                 src="images/logo.png" alt="Wallet"/>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <ul className="list-unstyled list-inline mb-0 text-lg-center">
                            <li className="list-inline-item me-4"><a className="text-black" href="privacy-policy.html">Privacy
                                Policy</a>
                            </li>
                            <li className="list-inline-item me-4"><a className="text-black"
                                                                     href="terms.html">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
                        <ul className="list-unstyled list-inline mb-0 social-icons">
                            <li className="list-inline-item me-3"><a title="Explorer Facebook Profile"
                                                                     className="text-black"
                                                                     href="https://facebook.com/"><i
                                className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="list-inline-item me-3"><a title="Explorer Twitter Profile"
                                                                     className="text-black" href="https://twitter.com/"><i
                                className="fab fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item me-3"><a title="Explorer Instagram Profile"
                                                                     className="text-black"
                                                                     href="https://instagram.com/"><i
                                className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterAdmin