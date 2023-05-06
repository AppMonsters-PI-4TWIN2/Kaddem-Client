import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../components/Common/NavbarAdmin/navbarAdmin'
import { Button, Form } from 'react-bootstrap'
import ReportDetails from '../components/ReportDetails';
import axios from 'axios';

function Reports() {
    
    const [report, setReport] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {

            const response = await axios.get('/report/all')
            setReport(response.data)
            console.log(response.data);

        }
        fetchData()
    },[])
  return (
    <div style={{backgroundColor:"#f4f5f7"}}>
            <NavbarAdmin/>
        <div>

                <div className="col-8 mx-auto text-center" style={{marginTop:"10%"}}>
                    <h1 className="mb-3 text-capitalize">List of Reports</h1>
                </div>

            </div>
            <div className="search col-lg-4 " style={{margin: "0 auto"}}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                       // onChange={searchHandle}
                    />
                    <Button variant="success" className='btn-dark' style={{backgroundColor:"1E1E2C"}} >Search</Button>
                </Form>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div  className="col align-self-center" style={{backgroundColor:"#ffffff",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"}}>
                                <table className="table table-hover " >
                                    <thead  style={{backgroundColor:"f4f5f7",color:"black",fontSize: "1.2em", padding: "20px"}}>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">Reporter</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">reported By </th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}}  width="500%" scope="col">Reason</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}}  width="500%" scope="col">Date</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}}  width="500%" scope="col">Project</th>
                                        <th style={{textAlign: "center", verticalAlign: "middle"}}  width="500%" scope="col">State</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        report.map(({reported,reportedBy,reason,date,project,isTraited,_id}) =>(

                                            <ReportDetails  key={_id} reported={reported} reportedBy={reportedBy} reason={reason} date={date} isTraited={isTraited} project={project} id={_id}  />
                                            


                                            

                                        ))
                                    } 


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                </div>



        </div>
  )
}

export default Reports