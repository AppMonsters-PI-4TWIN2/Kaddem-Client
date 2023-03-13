
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuthContext} from "./hooks/useAuthContext";

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from "./components/Common/Navbar/navbar";
import Footer from "./components/Common/Footer/footer";
import Users from './pages/Users';
import NotFound from './pages/NotFound';
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
            <Route path="/users" element ={<Users />} />
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={!user ? <Login /> : user.role ==="admin" ? <Navigate to="/users"  /> : <Navigate to="/" />}/>
              
              {/* <Route path="/signup" element={!user ? <Signup /> : user.role == 'admin' ? <Navigate to="/users" /> : <Navigate to ="/" />}    /> */}
              <Route path="/signup" element={!user ? <Signup /> : (user.role === "admin" ? <Navigate to="/users" /> : <Navigate to="/" />)} />
             
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;
