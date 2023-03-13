import { useState } from "react"
import {useForgotPwd} from "../hooks/useForgotPwd"
const ForgotPwd = () => {
    const [email, setEmail] = useState("");

    const {forgotpwd, error, isLoading} = useForgotPwd()


    const handleSubmit = async (e) => {
      e.preventDefault();
      await forgotpwd(email)
    };
  
    return (
      <div className={"bodyy"}>
        <div className="boxx">
          <form
            autoComplete="off"
            className="formm login"
            onSubmit={handleSubmit}
          >
            <img
              loading="prelaod"
              decoding="async"
              className="img-fluid"
              width="160"
              src="images/logo.png"
              alt="Wallet"
            />
            <div style={{ opacity: "0" }}>
              ----------------------------------------
              ----------------------------------------
            </div>
  
            <div className="inputBox">
              <input
                type="email"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span>Email adress</span>
              <i></i>
            </div>
            <div style={{ opacity: "0" }}>
              ----------------------------------------
              ----------------------------------------
              ----------------------------------------
              ----------------------------------------
              ----------------------------------------
            </div>
            <button className="btn btn-primary ms-2 ms-lg-3 ">Verify</button>
          </form>
        </div>
      </div>
    );
}
export default ForgotPwd;