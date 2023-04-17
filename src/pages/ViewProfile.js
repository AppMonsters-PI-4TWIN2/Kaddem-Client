import Navbar from "../components/Common/Navbar/navbar";
import Footer from "../components/Common/Footer/footer";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";

const ViewProfil = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    let { userName } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/user/finduser/${userName}`);
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    setLoading(false);
                    console.log(data)
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [userName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="home" style={{ minHeight: "100vh" }}>
                <section className="page-header bg-tertiary">

                    <BreadcrumbShapes></BreadcrumbShapes>

                    <img style={{borderRadius: "25%",marginLeft:"15%",position:"static"}} loading="prelaod" decoding="async" className="img-fluid" height="175" width="175" src={user.avatar}/>

                    <h1 style={{textAlign:"center",position:"relative",marginTop:"-7%"}}>{user.userName}</h1>
                    <div style={{textAlign:"center",display: "flex",justifyContent: "center", alignItems: "center",marginTop:"1%"}} >
                        <button className="btn btn-primary col-lg-1 align-content-sm-start"  >Chat</button>
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
            <Footer />
        </div>
    );
};

export default ViewProfil;