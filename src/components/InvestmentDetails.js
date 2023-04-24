import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { FacebookButton, FacebookCount } from "react-social";

function InvestmentDetails({id,montant,idUser,idProject,isValid,fetchData}) {
    const [isInvestmentValid, setInvestmentValid] = useState(isValid);
    var user = JSON.parse( localStorage.getItem('user') );
    let url = "https://github.com";

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          if (isInvestmentValid === "accepted") {
          await axios.patch(`/api/project/incrementAmountAlreadyRaised/${project.id}/${montant}`);
          }
        await axios.put(`/investment/investment/${id}`, {isValid: isInvestmentValid});
        fetchData(); // mettre à jour les données après la mise à jour
        setShow(false); // fermer la modal
      } catch (error) {
        console.error(error);
      }
    };


    //modal 
  const [show, setShow] = useState(false);
  var user = JSON.parse( localStorage.getItem('user') );
 const [project,setproject]=useState(null);
 const [idP,setIdP]=useState(null)
 const [fullName,setFullName]=useState(null);

 async function fetchProject() {
  const response = await fetch(`/api/project/name/${idProject}`);
  const data = await response.json();
  setproject(data)
} 

async function fetchUser() {
  const response = await fetch(`/api/user/byid/${idUser}`);
  const data = await response.json();
  setFullName(data)
}



useEffect (() => {
  fetchUser();   
  fetchProject() ;
},[])
if (!project) {
  return null;
}
if (!fullName) {
  return null;
}

const name = project.projectName ? `${project.projectName} ${user.Category}` :montant ;
//const fullName = fullName.firstName && fullName.lastName ? `${fullName.firstName} ${fullName.lastName}` ;


     return (
      

      <>  
      
      {/* <FacebookButton url={url} appId={251304003958960}>
        <FacebookCount url={url} />
         there's something new 
        {" Share " + url}
      </FacebookButton> */}
       {  idUser !== user.id  && project.creator ===user.id && (
         <div className="icon-box-item col-md-12">
    <div className="block bg-white">
      <li key={id} style={{listStyle: "none"}}>
          {isValid === "pending" ?(<div className="rounded"  style={{backgroundColor:"#f9ca24",width:"150px" ,float:"right",color:"white",textAlign:"center"}}>Pending</div>):isValid === "rejected" ?(<div className="rounded" style={{backgroundColor:"#ff6b6b",width:"150px" ,float:"right",color:"white",textAlign:"center"}}>Rejected</div>):(<div className="rounded" style={{backgroundColor:"#51B56D",width:"150px" ,float:"right",color:"white",textAlign:"center"}} >Accepted</div>)}

          <h3 className="mb-3">Amount : {montant}  $</h3>
        

        <p className="mb-0">user : {fullName.firstName} {fullName.lastName}</p>
          <p className="mb-0">Project Name: {project.projectName}</p>
          {isValid !== 'accepted' && (
               <div style={{float:"right"}} >
                      <form onSubmit={handleSubmit}>
                            <label>
                              Status
                              <select className="form-control shadow-none bg-white border-end-0"
                                value={isInvestmentValid}
                                onChange={(event) => setInvestmentValid(event.target.value)}
                              ><option>-</option>
                                <option value="accepted">Accept</option>
                                {/* <option value="No response">No response</option> */}
                                <option value="rejected">Decline</option>
                              </select>
                            </label>

                            <button   className="btn btn-sm btn-primary mb-75 me-75" type="submit">Update</button>
                          </form>
               </div>
          )}
          <div style={{ clear: "both" }}></div>
      </li>
   </div> </div> )} 


 


      </>

  )
}

export default InvestmentDetails