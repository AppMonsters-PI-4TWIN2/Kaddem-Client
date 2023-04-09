import axios from 'axios';
import React, { useState } from 'react'

function InvestmentDetails({id,montant,idUser,idProject,isValid}) {
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
     return (

      <>   {idUser !== user.id  && (
         <div class="icon-box-item col-md-6">
    <div class="block bg-white">
      <li key={id}>
        <div class="icon rounded-number"></div>
        <h3 class="mb-3">montant : {montant}</h3>
        <p class="mb-0">id user : {idUser} {isValid}</p>
        <button style={{ fontSize: '12px !important' }}  className={`btn btn-${isInvestmentValid ? 'success' : 'danger'}`}  onClick={handleToggleValid}>
          {isInvestmentValid ? 'valid' : 'Not valid'}
        </button>

      </li>
   </div> </div> )} 
    

   {idUser === user.id  && (
         <div class="icon-box-item col-md-6">
    <div class="block bg-white">
      <li key={id}>
        <div class="icon rounded-number"></div>
        <h3 class="mb-3">montant : {montant}</h3>
        <p class="mb-0">id user : {idUser} {isValid}</p>
        

      </li>
   </div> </div> )} 
    



      </>

  )
}

export default InvestmentDetails