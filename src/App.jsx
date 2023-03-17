import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import ProtectedRoute from './components/Routes/ProtectedRoute';
import AuthRoute from './components/Routes/AuthRoute';
import { AuthContext } from './config/Auth';

// pages
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/404';
import Course from './pages/Course';
import Berlangganan from './pages/Berlangganan';
import DeskripsiCourse from './pages/DeskripsiCourse';
import DetailCourse from './pages/DetailCourse';
import Profil from './pages/Profil';
import Payment from './pages/Payment';
import DetailPayment from './pages/DetailPayment';




function App() {
  const isAnyToken = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("id");
  const [authToken, setAuthToken] = useState(isAnyToken);
  const [user, setUser] = useState(userId);

  const setAndGetTokens = (token, id) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("id", JSON.stringify(id));
    setAuthToken(token);
    setUser(id);
  }
  return (
    <AuthContext.Provider value={{ authToken, setAndGetTokens, user }}>
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute/>}>
        <Route path='/home' element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route path='/deskripsi/:idcourse' element={<DeskripsiCourse/>}/>
        <Route path='/deskripsi/detailcourse/:idcourse' element={<DetailCourse/>}/>
        <Route path='/berlangganan' element={<Berlangganan />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/payment/:idpaket' element={<Payment />} />
        <Route path='/payment/detailpayment/:idpaket' element={<DetailPayment />} />
       
        </Route>
        <Route element={<AuthRoute/>}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        </Route>
        <Route path='*' element={<NotFound />} />        
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
    </AuthContext.Provider>
  )
}


export default App
