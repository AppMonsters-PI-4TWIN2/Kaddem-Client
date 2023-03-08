
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {useAuthContext} from "./hooks/useAuthContext";

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ResetPwd from './pages/ResetPwd'
import ForgotPwd from './pages/ForgotPwd'
import Navbar from "./components/Common/Navbar/navbar";
import Footer from "./components/Common/Footer/footer";
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
              <Route path="/" element={<Home />}/>
              <Route path="/resetpwd" element={<ResetPwd />}/>
              <Route path="/forgotpwd" element={<ForgotPwd />}/>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" onNavigate={() => window.location.reload()} />}/>
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;
