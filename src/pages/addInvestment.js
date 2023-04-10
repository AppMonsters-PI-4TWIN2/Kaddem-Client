import React, { useState } from 'react'

import axios from 'axios';

function addInvestment() {
    const [montant,setMontant] =useState( ) ;

    const [idProject,setProject] =useState() ;
    var user = JSON.parse( localStorage.getItem('user') );

    const [idUser,setIdUser] =useState(localStorage.getItem('user').id) ;

    const addInvestment = async (idUser, idProject, montant, token) => {
      idUser=user.id
        try {
        const response = await axios.post('/investment/add', {
          idUser,
          idProject,
          montant,
        }, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error(error.response.data.message || 'Failed to add investment');
      }
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        await addInvestment(idUser, idProject, montant, user.token)
       // window.location.reload(true)


    }

  return (
    <div>
             <section className="section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <p className="text-primary text-uppercase fw-bold mb-3">Edit Information</p>
                            <h1>General Information</h1>
                            <p>In this section you will provide detailed information  </p>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="shadow rounded p-5 bg-white">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <h4>General Information</h4>
                                </div>
                                <div className="col-lg-12">
                                    <div className="contact-form">
                                        <form className="create" onSubmit={handleSubmit}>

                                            <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">montant</label>
                                                <input className="form-control shadow-none"
                                                       type={"text"}
                                                       onChange={(e)=>setMontant(e.target.value)}
                                                       value={montant}
                                                />
                                            </div>
                                            {/* <div className="form-group mb-4 pb-2">
                                                <label htmlFor="exampleFormControlInput1" className="form-label" >First Name</label>
                                                <input className="form-control shadow-none" type={"text"}
                                                       onChange={(e)=>set(e.target.value)}
                                                       value={firstName}
                                                />
                                            </div> */}
                                            <div className={" col-12"}>
                                                <button className="btn btn-primary col-12" >Save</button>
                                                {/* {error && <div className="error">{error}</div>} */}
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default addInvestment