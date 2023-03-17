import React from 'react';
import { NavLink } from "react-router-dom";

const SignUpPopup = () => {
  return (
    <div className="popup">
      <div className="w-[300px] h-[350px] fixed bg-[#7E370C] text-[white] rounded-xl py-[20px] z-50 scale-125">
        <div className="w-full h-[200px] mt-[100px]">
        <h2 className="text-center font-semibold">Berhasil Register</h2>
        <div className="mx-auto w-[85px] p-[10px] h-[40px] my-1">
        <NavLink className="bg-[#fdbe4c] ml-[15px] text-black p-[5px] text-[13px] rounded-[5px] hover:scale-125 hover:duration-300" to="/login">Login</NavLink>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SignUpPopup;
