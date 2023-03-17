import axios from "axios";
import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Google from "../../assets/icons/Vector.png";
import LoginPopup from "../partials/Popup/LoginPopup";

const LoginForm = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [success,setSuccess]=useState('')
  const [showPopup, setShowPopup] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [error,setError]= useState({
    message: '',
    status: ''
  })
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleLogin = (event) => {    
    event.preventDefault()
    console.log("disubmit")
    axios.post("https://anugrah.aenzt.tech/auth/login",{
      email: email,
      password: password
    }
      
    )
      .then((response) => {
        console.log(response);
        window.localStorage.setItem('token',response.data.data)
        setToken(response.data.data)
        setSuccess(response.data.message)
        setShowPopup(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data)
      });
  };
  return (
    <form onSubmit={handleLogin} className="bg-white mt-10 px-[100px] pb-[40px]">
      <h1 className="text-[#7E370C] font-bold text-2xl mb-1">
        Selamat Datang!
      </h1>
      <p className="text-[10px] font-normal text-[#7E370C] mb-[50px]">
        Daftarkan akun kamu di <strong>Cultour</strong> untuk pengalaman yang
        menakjubkan!
      </p>
      {showPopup && <LoginPopup handleClose={handleClosePopup} />}
      <div className="my-[30px]">
       
        <span className="text-[10px] font-bold text-[#7E370C] mb-[50px]">
          Email
        </span>
        <div className="flex items-center border-[1.5px] border-[#7E370C] py-2 px-3 rounded-[5px]">
          <input
            className="pl-2 outline-none w-full border-none text-[12px] text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50"
            
            name="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            placeholder="Masukkan Email Anda"
          />
        </div>
      </div>
      <div className="mt-[30px]">
        <span className="text-[10px] font-bold text-[#7E370C] mb-[50px]">
          Password
        </span>
        <div className="flex items-center border-[1.5px] border-[#7E370C] py-2 px-3 rounded-[5px]">
          <input
            className="pl-2 outline-none w-full border-none text-[12px] text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50"
            type="password"
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            required
            placeholder="Masukkan Password Anda"
          />
        </div>
      </div>
      {success === 'Login successful' ? (
        
        <h3 className="text-[blue] text-[10px] mt-2 font-bold">{success}</h3>
      ):(
        <h3 className="text-[red] text-[10px] mt-2 font-bold">{error.message}</h3>
      )}
      
      
      <div className="text-[12px] my-[20px] float-right w-full font-semibold text-[#7E370C]">
        <input type="checkbox" className="align-middle mr-2" />
        Ingatkan saya
        <div className="float-right opacity-50 hover:text-[#7E370C] hover:opacity-100 cursor-pointer">
          Lupa Password ?
        </div>
      </div>
      <button
        type="submit"
        className="block w-full bg-[#7E370C] mt-4 py-2 rounded-[5px] text-white font-semibold text-[10px]"
      >
        Log in
      </button>
      
      <div className="flex justify-center items-center py-2">
        <div className="bg-[#7E370C] w-[40%] h-[1px] opacity-50"></div>
        <div className="bg-white w-[40%] h-[18px] text-[10px] text-[#7E370C] opacity-50 text-center">
          or Login with
        </div>
        <div className="bg-[#7E370C] w-[40%] h-[1px] opacity-50"></div>
      </div>
      <NavLink to="/signup">
      <div
        type="submit"
        className="flex justify-center items-center border-[1.5px] border-[#7E370C] py-2 px-7 rounded-[5px]"
      >
        <div className="flex pl-2 outline-none w-[90%] border-none justify-center items-center text-center text-[10px] font-semibold text-[#7E370C] m-auto ">
          <img className="w-[13px] mr-1" src={Google} alt="Google" />
          Sign Up with Google
        </div>
      </div>
      </NavLink>
    </form>
  );
};
export default LoginForm;
