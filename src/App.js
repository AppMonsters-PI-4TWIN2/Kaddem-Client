
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
import Feed from './pages/Feed';
import Investment from './pages/Investment';
import NewProject from "./pages/NewProject";
import ViewProject from "./pages/ViewProject";
import MyInvest from "./pages/myInvest" ;
import ShowAllProjects from "./pages/ShowAllProjects";
import ProjectCard from "./pages/ProjectCard";
import EditProject from "./pages/EditProject";
import ReactGA from "react-ga";
const TRACKING_ID="G-HQD2QMXMD6";
ReactGA.initialize(TRACKING_ID);

function App() {
 
  const { user } = useAuthContext()
  var LoggedInUser = JSON.parse( localStorage.getItem('user') );


  return (
      <div className="App">
        <BrowserRouter>

          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />}/>
              {/*admin routes*/}
              <Route path="/admin/users" element ={LoggedInUser && LoggedInUser.role === 'admin' ?<Users />:<Navigate to="/" />} />
                <Route path="/admin/projects" element={LoggedInUser && LoggedInUser.role === 'admin' ?<ShowAllProjects/>:<Navigate to="/" />}/>
                {/*end admin routes*/}
              <Route path="/edit-profile" element={LoggedInUser ? < EditProfil/>:<Navigate to="/" />}/>
              <Route path="/googleLogin" element={<GoogleLogin />}/>
              <Route path="/login" element={!LoggedInUser ? <Login /> : LoggedInUser.role ==="admin" ? <Navigate to="/admin/users"  /> : <Navigate to="/edit-profile" />}/>
              {/* <Route path="/signup" element={!user ? <Signup /> : user.role == 'admin' ? <Navigate to="/users" /> : <Navigate to ="/" />}    /> */}
              <Route path="/signup" element={!LoggedInUser ? <Signup /> : <Navigate to="/check-email" />} />
              <Route path="/reset-password" element={!LoggedInUser ? <ResetPwd /> : <Navigate to="/login" />}/>
              <Route path="/forgot-password" element={!LoggedInUser ? <ForgotPwd /> : <Navigate to="/check-email" />}/>
              <Route path="/check-email" element={<CheckMail />}/>
              <Route path="/chat" element={LoggedInUser ? <Chat />:<Navigate to="/" />}/>
              <Route path="/feed" element={<Feed />}/>
              <Route path="/user/:userName" element={<ViewProfile />} />

           <Route path="/investment" element={<Investment/>}></Route>

           <Route path="/myInvestment" element={<MyInvest/>}></Route>
              <Route path="/new-project" element={<NewProject />}/>
              <Route path="/edit-project/:ProjectName" element={<EditProject />}/>
              <Route path="/project/:ProjectName" element={<ViewProject />}/>


              <Route path="/projects" element={<ProjectCard/>}/>



              <Route path="/*" element={<NotFound />}/>
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;
