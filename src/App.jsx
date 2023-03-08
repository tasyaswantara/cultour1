import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// pages
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/404';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import AuthRoute from './components/Routes/AuthRoute';
import { AuthContext } from './config/Auth';



function App() {
  const isAnyToken = JSON.parse(localStorage.getItem("token"));
  const userId = JSON.parse(localStorage.getItem("id"));
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
        {/* <Route element={<ProtectedRoute/>}> */}
        <Route path='/' element={<Home />} />
        {/* </Route> */}
        {/* <Route element={<AuthRoute/>}> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        {/* </Route> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </AuthContext.Provider>
  )
}

function Appa() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
