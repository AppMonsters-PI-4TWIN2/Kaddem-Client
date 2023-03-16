
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuthContext} from "./hooks/useAuthContext";

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ResetPwd from './pages/ResetPwd'
import ForgotPwd from './pages/ForgotPwd'
import EditProfil from './pages/EditProfil'
import Navbar from "./components/Common/Navbar/navbar";
import Footer from "./components/Common/Footer/footer";
import Users from './pages/Users';
import GoogleLogin from "./pages/GoogleLogin";
import NotFound from './pages/NotFound';
import CheckMail from './pages/CheckMail';
function Navcheck() {
  if (window.location.pathname==="/login" || window.location.pathname==="/signup" )
    return null
  else return <Navbar />
}
function Footercheck() {
  if (window.location.pathname==="/login" || window.location.pathname==="/signup" )
    return null
  else return <Footer />
}
function App() {
  
  const { user } = useAuthContext()
  
  return (
      <div className="App">
        <BrowserRouter>

          <div className="pages">
            <Routes>
            <Route path="/users" element ={user && user.role === 'admin' ?<Users />:<Navigate to="/" />} />
              <Route path="/" element={<Home />}/>
              <Route path="/editProfil" element={user ? < EditProfil/>:<Navigate to="/" />}/>
              <Route path="/googleLogin" element={<GoogleLogin />}/>
              <Route path="/login" element={!user ? <Login /> : user.role ==="admin" ? <Navigate to="/users"  /> : <Navigate to="/editProfil" />}/>
              {/* <Route path="/signup" element={!user ? <Signup /> : user.role == 'admin' ? <Navigate to="/users" /> : <Navigate to ="/" />}    /> */}
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/checkmail" />} />
              <Route path="/resetpwd" element={!user ? <ResetPwd /> : <Navigate to="/login" />}/>
              <Route path="/forgotpwd" element={!user ? <ForgotPwd /> : <Navigate to="/checkmail" />}/>
              <Route path="/checkmail" element={<CheckMail />}/>
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;
