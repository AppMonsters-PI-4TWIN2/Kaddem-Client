import {useAuthContext} from "../hooks/useAuthContext";
import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";



const Home = () => {


    return (

        <div >
            <Navbar/>

        <div className="home" style={{ minHeight: "100vh"}}>
            <section className="banner bg-tertiary position-relative overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="block text-center text-lg-start pe-0 pe-xl-5">
                                <h3 style={{fontSize:"34px"}} className="text-capitalize mb-4">Welcome to Kaddem,<br/>the platform that connects project creators with investors to bring innovative ideas to life</h3>
                                <p className=" mb-4">Whether you're a project creator with a bold new idea or an investor looking for the next big thing, Kaddem is here to help you make a difference in the world.</p> <a
                                type="button"
                                className="btn btn-primary" href="#about-section">What we do ?<span style={{fontSize: "14px"}}  className="ms-2 fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-5 text-center">
                                <img loading="lazy" decoding="async"
                                     src="images/banner/banner3.png"
                                     alt="banner image" className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <BreadcrumbShapes/>
            </section>
            <section className="banner  position-relative overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="ps-lg-5 text-center">
                                <img loading="lazy" decoding="async"
                                     src="images/banner/problematic.png"
                                     alt="banner image" className="w-100"/>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="block text-center text-lg-start pe-0 pe-xl-5">
                                <h4 style={{fontSize:"34px",marginBottom:"7.5%"}}>The Problem: Bridging the Gap Between Project Creators and Investors</h4>
                                <p  className="text-capitalize mb-4">Despite the abundance of creative ideas and innovative projects out there, many project creators struggle to find the funding they need to bring their ideas to life. Similarly, investors often find it difficult to identify promising projects that align with their goals and values. This gap between project creators and investors can make it challenging to promote economic growth and create positive change in the world. At Kaddem, we're working to bridge this gap by providing a platform that connects project creators with investors who share their vision and are eager to make a difference.</p>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className="about-section section bg-tertiary position-relative overflow-hidden"id={"about-section"}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <p className="text-primary text-uppercase fw-bold mb-3">About Ourselves</p>
                                <h3 style={{fontSize:"34px",marginBottom:"7.5%"}} className="text-capitalize mb-4">The Solution: Connecting Project Creators with Investors through Kaddem</h3>
                                <p className="mb-0 mt-4">Kaddem is the solution to this problem. We're a platform that brings project creators and investors together in one place, making it easy to connect and collaborate. Our platform offers a chat feature that allows project creators to engage with potential investors and build relationships based on mutual interests and goals. Once an investment is made, Kaddem provides a dashboard for tracking project progress, allowing investors to stay informed and see the impact of their investment. We also use a machine learning algorithm to assign a score to each project, making it easier for investors to identify the most promising opportunities. With Kaddem, project creators can access the funding they need to bring their ideas to life, and investors can find projects that align with their goals and values, all in one place.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 text-center text-lg-end">
                            <img loading="lazy" decoding="async"  src="images/banner/solution.png" alt="About Ourselves" width={550}
                                 className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="has-shapes">
                    <svg className="shape shape-left text-light" width="381" height="443" viewBox="0 0 381 443"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M334.266 499.007C330.108 469.108 304.151 446.496 276.261 435.921C248.372 425.346 218.077 424.035 188.666 419.32C159.254 414.589 128.795 405.375 108.664 383.129C72.8533 343.535 83.3445 282.01 77.7634 228.587C69.3017 147.754 15.4873 73.3967 -58.0001 40.9907"
                            stroke="currentColor" strokeMiterlimit="10"/>
                        <path
                            d="M349.584 485.51C345.427 455.611 319.469 433 291.58 422.425C263.69 411.85 233.395 410.538 203.984 405.823C174.573 401.092 144.114 391.878 123.982 369.632C88.1716 330.038 98.6628 268.513 93.0817 215.09C84.62 134.258 30.8056 59.8999 -42.6819 27.494"
                            stroke="currentColor" strokeMiterlimit="10"/>
                        <path
                            d="M364.904 472.013C360.747 442.114 334.789 419.503 306.9 408.928C279.011 398.352 248.716 397.041 219.304 392.326C189.893 387.595 159.434 378.381 139.303 356.135C103.492 316.541 113.983 255.016 108.402 201.593C99.9403 120.76 46.1259 46.4028 -27.3616 13.9969"
                            stroke="currentColor" strokeMiterlimit="10"/>
                        <path
                            d="M380.24 458.516C376.083 428.617 350.125 406.006 322.236 395.431C294.347 384.856 264.051 383.544 234.64 378.829C205.229 374.098 174.77 364.884 154.639 342.638C118.828 303.044 129.319 241.519 123.738 188.096C115.276 107.264 61.4619 32.906 -12.0255 0.500103"
                            stroke="currentColor" strokeMiterlimit="10"/>
                    </svg>
                    <svg className="shape shape-right text-light" width="406" height="433" viewBox="0 0 406 433"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M101.974 -86.77C128.962 -74.8992 143.467 -43.2447 146.175 -12.7857C148.883 17.6734 142.273 48.1263 139.087 78.5816C135.916 109.041 136.681 141.702 152.351 167.47C180.247 213.314 240.712 218.81 289.413 238.184C363.095 267.516 418.962 340.253 430.36 421.687"
                            stroke="currentColor" strokeMiterlimit="10"/>
                        <path
                            d="M118.607 -98.5031C145.596 -86.6323 160.101 -54.9778 162.809 -24.5188C165.517 5.94031 158.907 36.3933 155.72 66.8486C152.549 97.3082 153.314 129.969 168.985 155.737C196.881 201.581 257.346 207.077 306.047 226.451C379.729 255.783 435.596 328.52 446.994 409.954"
                            stroke="currentColor" strokeMiterlimit="10"/>
                        <path
                            d="M135.241 -110.238C162.23 -98.3675 176.735 -66.7131 179.443 -36.254C182.151 -5.79492 175.541 24.6581 172.354 55.1134C169.183 85.573 169.948 118.234 185.619 144.002C213.515 189.846 273.98 195.342 322.681 214.716C396.363 244.048 452.23 316.785 463.627 398.219"
                            stroke="currentColor" strokeMiterlimit="10"/>
                        <path
                            d="M151.879 -121.989C178.867 -110.118 193.373 -78.4638 196.081 -48.0047C198.789 -17.5457 192.179 12.9074 188.992 43.3627C185.821 73.8223 186.586 106.483 202.256 132.251C230.153 178.095 290.618 183.591 339.318 202.965C413.001 232.297 468.867 305.034 480.265 386.468"
                            stroke="currentColor" strokeMiterlimit="10"/>
                    </svg>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <p className="text-primary text-uppercase fw-bold mb-3">Difference</p>
                                <h3 style={{fontSize:"38px"}}>What Makes Us <br/> Different From Others?</h3>
                                <div className="content mb-0 mt-4">
                                    <p>What sets Kaddem apart from other crowdfunding platforms is our unique combination of features that make it easy for project creators and investors to connect, collaborate, and track progress. Unlike other platforms that only offer basic funding options. But what really makes Kaddem different is our commitment to the United Nations' 17th Sustainable Development Goal, which is about forming partnerships for the goals. We believe that by connecting project creators with investors who share our vision of promoting economic growth, social development, and environmental sustainability, we can create positive change that benefits everyone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                                <div className="d-block d-sm-flex align-items-center m-2">
                                    <div className="icon me-4 mb-4 mb-sm-0"><i className="fas fa-users mt-4"
                                                                               style={{fontSize:"36px"}}></i>
                                    </div>
                                    <div className="block">
                                        <h3 className="mb-3">A Chat Feature</h3>
                                        <p className="mb-0">Kaddem offers a chat feature that allows project creators to communicate directly with potential investors, building relationships and establishing trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                                <div className="d-block d-sm-flex align-items-center m-2">
                                    <div className="icon me-4 mb-4 mb-sm-0"><i className="fas fa-chart-bar mt-4"
                                                                               style={{fontSize:"36px"}}></i>
                                    </div>
                                    <div className="block">
                                        <h3 className="mb-3">A Dashboard For Investors</h3>
                                        <p className="mb-0">We also provide a dashboard for tracking project progress, allowing investors to stay informed and see the impact of their investment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
                                <div className="d-block d-sm-flex align-items-center m-2">
                                    <div className="icon me-4 mb-4 mb-sm-0"><i className="fas fa-chart-line mt-4"
                                                                               style={{fontSize:"36px"}}></i>
                                    </div>
                                    <div className="block">
                                        <h3 className="mb-3">A Scoring For Each Project</h3>
                                        <p className="mb-0">We use a machine learning algorithm to score each project based on its potential for success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homepage_tab position-relative">
                <div className="section container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-4">
                            <div className="section-title text-center">
                                <p className="text-primary text-uppercase fw-bold mb-3">Benefits</p>
                                <h1 style={{fontSize:"38px"}}>Unlocking Opportunities: How Kaddem Benefits Investors and Project Creators</h1>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <ul className="payment_info_tab nav nav-pills justify-content-center mb-4" id="pills-tab"
                                role="tablist">
                                <li className="nav-item m-2" role="presentation"><a
                                    className="nav-link btn btn-outline-primary effect-none text-dark active"
                                    id="pills-how-much-can-i-recive-tab"
                                    data-bs-toggle="pill" href="#pills-how-much-can-i-recive" role="tab"
                                    aria-controls="pills-how-much-can-i-recive" aria-selected="true">As A Project Creator</a>
                                </li>
                                <li className="nav-item m-2" role="presentation"><a
                                    className="nav-link btn btn-outline-primary effect-none text-dark "
                                    id="pills-how-much-does-it-costs-tab"
                                    data-bs-toggle="pill" href="#pills-how-much-does-it-costs" role="tab"
                                    aria-controls="pills-how-much-does-it-costs" aria-selected="true">As An Investor</a>
                                </li>

                            </ul>
                            <div className="rounded shadow bg-white p-5 tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-how-much-can-i-recive"
                                     role="tabpanel"
                                     aria-labelledby="pills-how-much-can-i-recive-tab">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 order-1 order-md-0">
                                            <div className="content-block">
                                                <h3 className="mb-4">How Can You Benefit Using Kaddem?</h3>
                                                <div className="content">
                                                    <p>Kaddem provides project creators with access to a wider pool of funding and a chat feature to build relationships with potential investors. Our dashboard allows project creators to track progress and keep investors engaged, while our machine learning algorithm helps increase visibility and appeal to investors. With Kaddem, project creators can take control of their ideas and connect with investors who share their vision.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                                            <div className="image-block text-center">
                                                <img loading="lazy" decoding="async"
                                                     src="images/illustration-3.png" width={350} alt="How Much Can I Recive?"
                                                     className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade " id="pills-how-much-does-it-costs" role="tabpanel"
                                     aria-labelledby="pills-how-much-does-it-costs-tab">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 order-1 order-md-0">
                                            <div className="content-block">
                                                <h3 className="mb-4">How Can You Benefit Using Kaddem?</h3>
                                                <div className="content">
                                                    <p>Kaddem provides investors with a direct line of communication with project creators, regular progress updates, and a machine learning algorithm for informed decision-making. With a focus on sustainable development, investors can make a difference in areas such as poverty reduction, gender equality, clean energy, and climate action. With Kaddem, investors can support innovative projects that align with their values and contribute to positive change.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                                            <div className="image-block text-center">
                                                <img loading="lazy" decoding="async" width={400} src="images/illustration-4.png"
                                                     alt="How Much Does It Costs?" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="has-shapes">
                        <svg className="shape shape-left text-light" width="290" height="709" viewBox="0 0 290 709"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-119.511 58.4275C-120.188 96.3185 -92.0001 129.539 -59.0325 148.232C-26.0649 166.926 11.7821 174.604 47.8274 186.346C83.8726 198.088 120.364 215.601 141.281 247.209C178.484 303.449 153.165 377.627 149.657 444.969C144.34 546.859 197.336 649.801 283.36 704.673"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M-141.434 72.0899C-142.111 109.981 -113.923 143.201 -80.9554 161.895C-47.9878 180.588 -10.1407 188.267 25.9045 200.009C61.9497 211.751 98.4408 229.263 119.358 260.872C156.561 317.111 131.242 391.29 127.734 458.631C122.417 560.522 175.414 663.463 261.437 718.335"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M-163.379 85.7578C-164.056 123.649 -135.868 156.869 -102.901 175.563C-69.9331 194.256 -32.086 201.934 3.9592 213.677C40.0044 225.419 76.4955 242.931 97.4127 274.54C134.616 330.779 109.296 404.957 105.789 472.299C100.472 574.19 153.468 677.131 239.492 732.003"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M-185.305 99.4208C-185.982 137.312 -157.794 170.532 -124.826 189.226C-91.8589 207.919 -54.0118 215.597 -17.9666 227.34C18.0787 239.082 54.5697 256.594 75.4869 288.203C112.69 344.442 87.3706 418.62 83.8633 485.962C78.5463 587.852 131.542 690.794 217.566 745.666"
                                stroke="currentColor" strokeMiterlimit="10"/>
                        </svg>
                        <svg className="shape shape-right text-light" width="474" height="511" viewBox="0 0 474 511"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M601.776 325.899C579.043 348.894 552.727 371.275 520.74 375.956C478.826 382.079 438.015 355.5 412.619 321.6C387.211 287.707 373.264 246.852 354.93 208.66C336.584 170.473 311.566 132.682 273.247 114.593C220.12 89.5159 155.704 108.4 99.7772 90.3769C53.1531 75.3464 16.3392 33.2759 7.65012 -14.947"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M585.78 298.192C564.28 319.945 539.378 341.122 509.124 345.548C469.472 351.341 430.868 326.199 406.845 294.131C382.805 262.059 369.62 223.419 352.278 187.293C334.936 151.168 311.254 115.417 275.009 98.311C224.74 74.582 163.815 92.4554 110.913 75.3971C66.8087 61.1784 31.979 21.3767 23.7639 -24.2362"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M569.783 270.486C549.5 290.99 526.04 310.962 497.501 315.13C460.111 320.592 423.715 296.887 401.059 266.641C378.392 236.402 365.963 199.965 349.596 165.901C333.24 131.832 310.911 98.1265 276.74 82.0034C229.347 59.6271 171.895 76.4848 122.013 60.4086C80.419 47.0077 47.5905 9.47947 39.8431 -33.5342"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M553.787 242.779C534.737 262.041 512.691 280.809 485.884 284.722C450.757 289.853 416.568 267.586 395.286 239.173C373.993 210.766 362.308 176.538 346.945 144.535C331.581 112.533 310.605 80.8723 278.502 65.7217C233.984 44.6979 180.006 60.54 133.149 45.4289C94.0746 32.8398 63.2303 -2.41965 55.9568 -42.8233"
                                stroke="currentColor" strokeMiterlimit="10"/>
                            <path
                                d="M537.791 215.073C519.964 233.098 499.336 250.645 474.269 254.315C441.41 259.126 409.422 238.286 389.513 211.704C369.594 185.13 358.665 153.106 344.294 123.17C329.923 93.2337 310.293 63.6078 280.258 49.4296C238.605 29.7646 188.105 44.5741 144.268 30.4451C107.714 18.6677 78.8538 -14.3229 72.0543 -52.1165"
                                stroke="currentColor" strokeMiterlimit="10"/>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
            <Footer/>
        </div>
    )
}

export default Home