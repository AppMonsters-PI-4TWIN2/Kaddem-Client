import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

function InvestmentDetails({id,montant,idUser,idProject,isValid,fetchData}) {
    const [isInvestmentValid, setInvestmentValid] = useState(isValid);
    var user = JSON.parse( localStorage.getItem('user') );



  const  handleToggleValid =() => {
    // if(!isValid){
    //   var user = JSON.parse( localStorage.getItem('user') );
    //   axios.put(`/api/project/amount/${id}`, {montant} , {
    //     headers: {
    //       Authorization: `Bearer ${user.token}`
    //     }
    //   }
    //   )
    // }
    var user = JSON.parse( localStorage.getItem('user') );
   axios.put(`/investment/valid/${id}`, { isValid: !isInvestmentValid }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
        .then(() => setInvestmentValid(!isInvestmentValid))
        .catch(err => console.log(err));
       
  }


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
         {/* <p class="mb-0">Project Category: {project.Category}</p>  */}
        <button style={{ fontSize: '12px !important' }}  className={`btn btn-${isInvestmentValid ? 'success' : 'danger'}`}  onClick={handleToggleValid}>
          {isInvestmentValid ? 'Accepted' : 'Not accepted'}
        </button>

      </li>
   </div> </div> )} 


 


      </>

  )
}

export default InvestmentDetails