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

      <>  
      
      
      
        { project.projectName && idUser === user.id 
                && (
        <div class="icon-box-item col-md-12">
   <div class="block bg-white">
     <li key={id}>
         {isValid === "pending" ?(<div className="rounded"  style={{backgroundColor:"#f9ca24",width:"150px" ,float:"right",color:"white",textAlign:"center"}}>Pending</div>):isValid === "rejected" ?(<div className="rounded" style={{backgroundColor:"#ff6b6b",width:"150px" ,float:"right",color:"white",textAlign:"center"}}>Rejected</div>):(<div className="rounded" style={{backgroundColor:"#51B56D",width:"150px" ,float:"right",color:"white",textAlign:"center"}} >Accepted</div>)}

       <h3 class="mb-3">Amount : {montant} $</h3>
         {/* <p class="mb-0">user     : {fullName.firstName} {fullName.lastName}</p> */}
         <p class="mb-0">Project: {project.projectName}</p>
         {/* <p class="mb-0">Project Category: {project.Category}</p>  */}
       

      { isValid!="accepted" && 
       <Button className="btn btn-primary" onClick={() => setShow(true)}>
       Delete
       </Button> }
 
   <Modal  show={show} onHide={handleClose}>
   <Modal.Header style={{backgroundColor: '#198754', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
  <Modal.Title >
  <img style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} loading="prelaod" decoding="async" className="img-fluid" width="160" src="/images/logo.png"
                             alt="Kaddem"  />
    </Modal.Title>
  
       </Modal.Header>
       <Modal.Body  >Are you sure to delete this investment ? </Modal.Body>
       <Modal.Footer>
         <Button  className="btn btn-primary"   onClick={handleClose}>
           Close
         </Button>
         <Button  className="btn btn-primary "   onClick={() => { handleClose(); OnDelete(id) ;fetchData() }}>
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
