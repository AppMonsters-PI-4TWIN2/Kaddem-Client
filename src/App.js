
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
import ViewProfile from "./pages/ViewProfile";
import Chat from "./pages/chat";
import axios from 'axios';
import Post from "./pages/Post";

function App() {
 
  const { user } = useAuthContext()
  var LoggedInUser = JSON.parse( localStorage.getItem('user') );


  return (
      <div className="App">
        <BrowserRouter>

          <div className="pages">
            <Routes>
            <Route path="/users" element ={LoggedInUser && LoggedInUser.role === 'admin' ?<Users />:<Navigate to="/" />} />
              <Route path="/" element={<Home />}/>
              <Route path="/edit-profile" element={LoggedInUser ? < EditProfil/>:<Navigate to="/" />}/>
              <Route path="/googleLogin" element={<GoogleLogin />}/>
              <Route path="/login" element={!LoggedInUser ? <Login /> : LoggedInUser.role ==="admin" ? <Navigate to="/users"  /> : <Navigate to="/edit-profile" />}/>
              {/* <Route path="/signup" element={!user ? <Signup /> : user.role == 'admin' ? <Navigate to="/users" /> : <Navigate to ="/" />}    /> */}
              <Route path="/signup" element={!LoggedInUser ? <Signup /> : <Navigate to="/checkmail" />} />
              <Route path="/resetpwd" element={!LoggedInUser ? <ResetPwd /> : <Navigate to="/login" />}/>
              <Route path="/forgotpwd" element={!LoggedInUser ? <ForgotPwd /> : <Navigate to="/checkmail" />}/>
              <Route path="/checkmail" element={<CheckMail />}/>
              <Route path="/chat" element={<Chat />}/>
              <Route path="/post" element={<Post />}/>
              <Route path="/user/:userName" element={<ViewProfile />} />
              <Route path="/*" element={<NotFound />}/>
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;
