
import React, { useEffect, useState } from "react";

import NavbarAdmin from "../components/Common/NavbarAdmin/navbarAdmin";
import axios from "axios";



// récupérer le token depuis localStorage
var user = JSON.parse( localStorage.getItem('user') );



const AdminDashboard = () => {
    const [Count, setCount] = useState({});
    useEffect(() => {
        const getCounts = async () => {
            try {
                const response = await axios.get('/api/stat/count');
                const counts = response.data;
                console.log(counts)
                setCount(counts);
            } catch (error) {
                console.error(error);
            }
        };

        getCounts();
    }, []);


    return (
        <div style={{backgroundColor:"#f4f5f7",minHeight: "100vh"}}>

            <NavbarAdmin/>


                <section className="section-sm">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-9 mb-5 mb-lg-0">
                            <div className="bg-dark shadow rounded-lg p-4 sticky-top"  style={{textAlign: "center"}}>
                                <p style={{color: "white", fontSize: "56px",fontWeight:"bold"}}>Welcome !</p>
                            </div>
                        </div>
                    </div>
                </section>
            <div className="row justify-content-md-center">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <div className="bg-warning shadow rounded-lg p-4 sticky-top" style={{position: "relative",opacity:"60%"}}>
                        <p style={{color: "white", fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.verifiedProjectCount}</p>
                        <span style={{color: "white", fontSize: "24px"}}>Number of untreated report</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px", fill: "white"}}><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"/></svg>
                        </div>
                </div>
                <div className="col-lg-3 mb-5 mb-lg-0" >
                    <div className="bg-body shadow rounded-lg p-4 sticky-top" style={{position: "relative"}}>
                        <p style={{ color: "#343a40",fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.postCount}</p>
                        <span style={{color: "#343a40", fontSize: "24px"}}>Number of posts</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px",fill:"#343a40"}}><path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"/></svg>

                    </div>
                </div>
                <div className="col-lg-3 mb-5 mb-lg-0" >
                    <div className="bg-body shadow rounded-lg p-4 sticky-top" style={{position: "relative"}}>
                        <p style={{ color: "#343a40",fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.acceptedInvestmentCount}</p>
                        <span style={{color: "#343a40", fontSize: "24px"}}>Number of accepted investments</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px",fill:"#343a40"}}><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg>
                         </div>
                </div>
            </div>
            <hr style={{visibility:"hidden"}}></hr>
                <div className="row justify-content-md-center">
                    <div className="col-lg-5 mb-5 mb-lg-0" >
                        <div className="bg-body shadow rounded-lg p-4 sticky-top" style={{position: "relative"}}>
                            <p style={{ color: "#343a40",fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.userCount}</p>
                            <span style={{color: "#343a40", fontSize: "24px"}}>Number of users</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px",fill:"#343a40"}}><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="bg-danger shadow rounded-lg p-4 sticky-top" style={{position: "relative",opacity:"75%"}}>
                            <p style={{color: "white", fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.bannedUsersCount}</p>
                            <span style={{color: "white", fontSize: "24px"}}>Number of banned users</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px", fill: "white"}}><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L381.9 274c48.5-23.2 82.1-72.7 82.1-130C464 64.5 399.5 0 320 0C250.4 0 192.4 49.3 178.9 114.9L38.8 5.1zM545.5 512H528L284.3 320h-59C136.2 320 64 392.2 64 481.3c0 17 13.8 30.7 30.7 30.7H545.3l.3 0z"/></svg></div>
                    </div>
                </div>
            <hr style={{visibility:"hidden"}}></hr>
            <div className="row justify-content-md-center">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="bg-info shadow rounded-lg p-4 sticky-top" style={{position: "relative",opacity:"75%"}}>
                        <p style={{color: "white", fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.verifiedProjectCount}</p>
                        <span style={{color: "white", fontSize: "24px"}}>Number of verified projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px", fill: "white"}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                    </div>
                </div>
                <div className="col-lg-5 mb-5 mb-lg-0" >
                    <div className="bg-body shadow rounded-lg p-4 sticky-top" style={{position: "relative"}}>
                        <p style={{ color: "#343a40",fontSize: "56px",fontWeight:"bold", margin: 0}}>{Count.projectCount}</p>
                        <span style={{color: "#343a40", fontSize: "24px"}}>Number of projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px",fill:"#343a40"}}><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>

                    </div>
                </div>
            </div>




        </div>


    )
}

export default AdminDashboard