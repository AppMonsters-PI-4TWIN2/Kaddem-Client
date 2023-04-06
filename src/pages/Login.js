import { useEffect, useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { GoogleIcon, FacebookIcon } from '../components/Common/Icon';

const Login = () => {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const [errorMessage, setErrorMessage] = useState('')

       
      
      


    const handleSubmit = async (e) => {
        e.preventDefault()
      const role =e.role ; 
        await login(email, password)
       setRole(role) ; 
    
    
    }

    return (

        <div className={"bodyy"} >
        <div className="boxx">


            <form autoComplete="off" className="formm login" onSubmit={handleSubmit}>
                <img loading="prelaod" decoding="async" className="img-fluid" width="160" src="images/logo.png"
                     alt="Wallet"/>

                <div className="inputBox">
                    <input type="email" required="required" onChange={(e) => setEmail(e.target.value)}
                           value={email} />
                        <span>Email adress</span>
                        <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required="required" onChange={(e) => setPassword(e.target.value)}
                           value={password} />
                        <span>Password</span>
                        <i></i>
                </div>

              
                <div className="linkss">
                    <a href="/forgotpwd">Forgot Password ?</a>
                    <a href="/signup">Signup</a>
                </div>
                <div style={{opacity:"0"}}>
                    ----------------------------------------
                </div>
                <div className={" col-12"}>
                    <button className="btn btn-primary col-12" disabled={isLoading }>Log in</button>
                    {error    && <div  style={{color:'green'}} className="error">{error}</div>}
                </div>
                <div style={{opacity:"0"}}>
                    ----------------------------------------
                </div>
                <span className='btn-text' style={{marginLeft:"30%"}}>Login with Google :</span>

                <div className='signup-provider' style={{ height: "15%",
                    width: "15%",marginLeft:"43%",marginTop:"5%"}}>
                    <a href={"http://localhost:4000/api/user/google"} className='mb-2 google-btn'>
                        <GoogleIcon />
                    </a>
                    {/*
                    <a href={`/auth/facebook`} className='facebook-btn'>
                        <FacebookIcon />
                        <span className='btn-text'>Login with Facebook</span>
                    </a>
                    */}
                </div>
            </form>
        </div>
        </div>

    )
}

export default Login