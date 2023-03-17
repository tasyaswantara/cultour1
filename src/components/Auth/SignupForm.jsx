import axios from "axios";
import { useState } from "react";
import Google from "../../assets/icons/Vector.png"
import { NavLink } from "react-router-dom";
import SignUpPopup from "../partials/Popup/SignUpPopup";
const SignupForm = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const [showPopup, setShowPopup] = useState(false);
  const [success,setSuccess]=useState('')
  const [error,setError]= useState({
    message: '',
    status: ''
  })
  const handleSignup =(event)=>{
    event.preventDefault()
    axios.post('https://anugrah.aenzt.tech/auth/register',{
      username: name,
      email: email,
      password: password
    })
    .then((apapun)=>{
      console.log(apapun)
      setSuccess(apapun.data.message)
      setShowPopup(true);
    })
    .catch((error)=>{
      console.log(error)
      setError(error.response.data)
    })
  }
  return (
    <form onSubmit={handleSignup} className="bg-white mt-10 px-[100px] pb-[40px]">
      <h1 className="text-[#7E370C] font-bold text-2xl mb-1">
        Selamat Datang!
      </h1>
      <p className="text-[10px] font-normal text-[#7E370C] mb-[30px]">
        Daftarkan akun kamu di <strong>Cultour</strong> untuk pengalaman yang
        menakjubkan!
      </p>
      {showPopup && <SignUpPopup/>}
      <div className="my-[15px]">
        <span className="text-[10px] font-bold text-[#7E370C] mb-[50px]">
        Nama
        </span>
        <div className="flex items-center border-[1.5px] border-[#7E370C] py-2 px-3 rounded-[5px]">
          <input
            className="pl-2 outline-none w-full border-none text-[12px] text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50"
            type="text"
            name="nama"
            onChange={(e)=>{setName(e.target.value)}}
            required
            placeholder="Masukkan Nama Anda"
          />
        </div>
      </div>
      <div className="my-[15px]">
        <span className="text-[10px] font-bold text-[#7E370C] mb-[50px]">
          Email
        </span>
        <div className="flex items-center border-[1.5px] border-[#7E370C] py-2 px-3 rounded-[5px]">
          <input
            className="pl-2 outline-none w-full border-none text-[12px] text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50"
            type="text"
            name="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            placeholder="Masukkan Email Anda"
          />
        </div>
      </div>
      <div className="mt-[15px]">
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
      {success === 'Register Successful' ? (
        
        <h3 className="text-[blue] text-[10px] mt-2 font-bold">{success}</h3>
      ):(
        <h3 className="text-[blue] text-[10px] mt-2 font-bold">{error.message}</h3>
      )}
      <div className="text-[12px] my-[20px] float-right w-full font-semibold text-[#7E370C]">
        <input type="checkbox" className="align-middle mr-2"/>
        Ingat saya
        <div className="float-right opacity-50 hover:text-[#7E370C] hover:opacity-100 cursor-pointer">
          Lupa Password ?
        </div>
      </div>
      <button
        type="submit"
        className="block w-full bg-[#7E370C] mt-4 py-2 rounded-[5px] text-white font-semibold text-[10px]"
      >
        Create Account
      </button>
      <div className="flex justify-center items-center py-2">
        <div className="bg-[#7E370C] w-[40%] h-[1px] opacity-50"></div>
        <div className="bg-white w-[40%] h-[18px] text-[10px] text-[#7E370C] opacity-50 text-center">
          Sudah punya akun?
        </div>
        <div className="bg-[#7E370C] w-[40%] h-[1px] opacity-50"></div>
      </div>
      <NavLink to="/login">
      <div
        type=" "
        className="flex justify-center items-center border-[1.5px] border-[#7E370C] py-2 px-7 rounded-[5px]"
      >
        
        <div className="flex pl-2 outline-none w-[90%] border-none justify-center items-center text-center text-[10px] font-semibold text-[#7E370C] m-auto ">
          Log In
        </div>
        
      </div>
      </NavLink>
    </form>
  );
};
export default SignupForm;
