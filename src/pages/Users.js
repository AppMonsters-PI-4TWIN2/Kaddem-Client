
import Footer from "../components/Common/Footer/footer";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetails from "../components/RowDetails";
import Alert from "../components/Alert";
import NavbarAdmin from "../components/Common/NavbarAdmin/navbarAdmin";
import FooterAdmin from "../components/Common/Footer/footerAdmin";
import {Button, Form} from "react-bootstrap";
// stocker le token dans localStorage


// récupérer le token depuis localStorage
var user = JSON.parse( localStorage.getItem('user') );



const Users = () => {
  const [users,setUsers]=useState([])
  const [form ,setForm]=useState({}); 
const [errors,setErrors]= useState({})
const[show,setShow]=useState(false) ; 
const[message,setMessage]=useState("") ; 





//delete
    const OnDelete = (id__) => {
        axios.delete(`/list/users/${id__}`, {
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

   //ban
   const OnBan=(id__)=>{
    if(window.confirm("are you sur to ban this user "))
  {axios.put(`/api/user/users/ban/${id__}`)
      .then(res => {
          setShow(true)
          setTimeout(() => {
              setMessage(res.data.message)
              setShow(false)
          }, 4000);
      })
   }}

   const fetchData = async () => {
    const token = localStorage.getItem('token'); // Récupère le token stocké dans le local storage du navigateur

    const response = await axios.get('/list/users', {
        headers: {'Authorization': `Bearer ${user.token}`},
    })
    setUsers(response.data)
    console.log(response.data);

  }

/* find all users */
 useEffect(()=>{
    const fetchData = async () => {
      
     const response = await axios.get('/list/users', {
          headers: {'Authorization': `Bearer ${user.token}`},
      })
      setUsers(response.data)
      console.log(response.data);

    }
    fetchData()
  },[])


   // const {user} = useAuthContext()
    return (
        <div style={{backgroundColor:"#f4f5f7"}}>
          
       <NavbarAdmin/>
       <Alert message={message} show={show}/>
            {/*
       <div className="row">
       <div  className="col  align-self-start">
       </div>
       <div  className="col align-self-center">
  <table className="table table-hover " style={{color: '#2F4F4F '}} >
  <thead className="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">role</th>
     
      <th scope="col">status</th>
      <th scope="col">created</th>
      <th scope="col">Banned</th>
     <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
{
    users.map(({email,password,role,created,status,isBanned,_id}) =>(
     
        <RowDetails key={_id} email={email} password={password} role={role} status={status} isBanned={isBanned} created ={created} id={_id} OnDelete={OnDelete} OnBan={OnBan} fetchData={fetchData}/>
    
    ))
}
  </tbody>
</table>
</div>
<div className="col align-self-end"></div>
</div>

         </div>
*/}
            <div className="container">

                <div className="col-8 mx-auto text-center" style={{marginTop:"10%"}}>
                    <h1 className="mb-3 text-capitalize">List of Users</h1>
                </div>

            </div>
            <div className="search col-lg-4 " style={{margin: "0 auto"}}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"

                    />
                    <Button variant="success" className='btn-dark' style={{backgroundColor:"1E1E2C"}} >Search</Button>
                </Form>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div  className="col align-self-center" style={{backgroundColor:"#ffffff",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"}}>
                                <table className="table table-hover " style={{color: '#2F4F4F '}} >
                                    <thead className="thead-light" style={{backgroundColor:"f4f5f7",color:"black",fontSize: "1.2em", padding: "20px"}}>
                                    <tr>
                                        {/* <th style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">#</th>*/}
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}}  scope="col">Username</th>
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}}  scope="col">email</th>
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">role</th>
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">status</th>
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">created</th>
                                        <th  style={{textAlign: "center", verticalAlign: "middle"}} width="30%" scope="col">Banned</th>
                                        {/* <th scope="col">Actions</th> */}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.map(({email,password,role,created,status,isBanned,_id,userName}) =>(

                                            <RowDetails key={_id} userName={userName} email={email} password={password} role={role} status={status} isBanned={isBanned} created ={created} id={_id} OnDelete={OnDelete} OnBan={OnBan} fetchData={fetchData}/>

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

export default Users