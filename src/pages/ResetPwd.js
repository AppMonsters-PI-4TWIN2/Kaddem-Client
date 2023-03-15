import { useState } from "react";
import {useResetPwd} from "../hooks/useResetPwd"
import { Navigate } from "react-router-dom";

const ResetPwd = () => {
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const email = localStorage.getItem('email')
  //const email= "taha.jemli@esprit.tn"
  const {resetpwd, error, isLoading} = useResetPwd()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await resetpwd(email,password,newpassword);
    
  };

  return (
    <div className={"bodyy"}>
      <div className="boxx">
        <form
          autoComplete="off"
          className="formm signup"
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
              type="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span>New Password</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input
              type="password"
              required="required"
              onChange={(e) => setNewpassword(e.target.value)}
              value={newpassword}
            />
            <span>Confirm New Password</span>
            <i></i>
          </div>
          <div style={{ opacity: "0" }}>
            ----------------------------------------
            ----------------------------------------
          </div>
          <button className="btn btn-primary ms-2 ms-lg-3 " disabled={isLoading}>Change</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};
export default ResetPwd;
