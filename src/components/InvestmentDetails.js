import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

function InvestmentDetails({id,montant,idUser,idProject,isValid,fetchData}) {
    const [isInvestmentValid, setInvestmentValid] = useState(isValid);
    var user = JSON.parse( localStorage.getItem('user') );


    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
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

      <>   {  idUser !== user.id  && project.creator ==user.id && (
         <div class="icon-box-item col-md-6">
    <div class="block bg-white">
      <li key={id}>
        <div class="icon rounded-number">.</div>
        <h3 class="mb-3">montant : {montant}  dt</h3>
        
        <p class="mb-0">user : {fullName.firstName} {fullName.lastName}</p>
          <p class="mb-0">Project Name: {project.projectName}</p> 
   
          <form onSubmit={handleSubmit}>
                <label>
                  Status:
                  <select class="form-control shadow-none bg-white border-end-0"
                    value={isInvestmentValid}
                    onChange={(event) => setInvestmentValid(event.target.value)}
                  >
                    <option value="accepted">Accepted</option>
                    {/* <option value="No response">No response</option> */}
                    <option value="Not Accepted">Not Accepted</option>
                  </select>
                </label>
            
                <button className="btn btn-sm btn-primary mb-75 me-75" type="submit">Update</button>
              </form>

      </li>
   </div> </div> )} 


 


      </>

  )
}

export default InvestmentDetails