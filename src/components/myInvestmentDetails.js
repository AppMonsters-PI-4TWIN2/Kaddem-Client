import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';



function MyInvestmentDetails({id,montant,idUser,idProject,isValid,fetchData}) {
    const [isInvestmentValid, setInvestmentValid] = useState(isValid);
    var user = JSON.parse( localStorage.getItem('user') );
     const  handleToggleValid =() => {
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
   
  fetchProject()
},[id])
if (!project) {
  return null;
}
if (!fullName) {
  return null;
}
const name = project.projectName ? `${project.projectName} ${user.Category}` :montant ;

//delete
    const OnDelete = (id__) => {
        axios.delete(`/investment/delete/${id__}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
            .then((response) => {
                console.log('User deleted successfully', response.data);
                // do something else, such as update the UI
            })
            .catch((error) => {
                console.log('Error deleting user', error);
                // handle the error, such as displaying an error message to the user
            });
    }
     return (

      <>    { idUser === user.id  && (
        <div class="icon-box-item col-md-6">
   <div class="block bg-white">
     <li key={id}>
       <div class="icon rounded-number">.</div>
       <h3 class="mb-3">montant : {montant} dt</h3>
         {/* <p class="mb-0">user     : {fullName.firstName} {fullName.lastName}</p> */}
         <p class="mb-0">Project Name: {project.projectName}</p> 
         {/* <p class="mb-0">Project Category: {project.Category}</p>  */}
        <p class="mb-0" >acceptend : {isValid ? 'Investment accepted' : 'Waiting for a response'}</p> 

       
       
   { !isValid &&<Button  style={{backgroundColor: '#2F4F4F '}}  className="badge bg-yellow " onClick={handleShow}>
   <i className="fas fa-trash-alt"></i> 
   </Button>}
   <Modal  show={show} onHide={handleClose}>
       <Modal.Header  style={{backgroundColor: '#2F4F4F'}}  closeButton>
         <Modal.Title > Delete User </Modal.Title>
       </Modal.Header>
       <Modal.Body  >Are you sure to delete this user ? </Modal.Body>
       <Modal.Footer>
         <Button  style={{backgroundColor: '#2F4F4F '}}   onClick={handleClose}>
           Close
         </Button>
         <Button   style={{backgroundColor: '#2F4F4F '}}   onClick={() => { handleClose(); OnDelete(id) ;fetchData() }}>
           Delete

         </Button>
       </Modal.Footer>
     </Modal>


     </li>
  </div> </div> )} 



  



      </>

  )
}


export default MyInvestmentDetails
