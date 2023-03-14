import { useEffect, useState } from "react"
import { useLogin } from "../hooks/useLogin"

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
                    <a href="#">Signup</a>
                </div>
                <div style={{opacity:"0"}}>
                    ----------------------------------------
                </div>
                <button className="btn btn-primary ms-2 ms-lg-3 " disabled={isLoading}>Log in</button>
                {error && <div className="error">{error}</div>}


            </form>
        </div>
        </div>

    )
}

export default Login