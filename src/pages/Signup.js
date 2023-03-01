import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className={"bodyy"} >
            <div className="boxx">


                <form autoComplete="off" className="formm signup" onSubmit={handleSubmit}>
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

                    <div style={{opacity:"0"}}>
                        ----------------------------------------
                    </div>
                    <div style={{opacity:"0"}}>
                        ----------------------------------------
                    </div>
                    <div style={{opacity:"0"}}>
                        ----------------------------------------
                    </div>
                    <button className="btn btn-primary ms-2 ms-lg-3 " disabled={isLoading}>Sign up</button>
                    {error && <div className="error">{error}</div>}


                </form>
            </div>
        </div>

    )
}

export default Signup