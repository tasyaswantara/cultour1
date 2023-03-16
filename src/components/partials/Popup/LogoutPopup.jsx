import React from 'react';
import { NavLink } from "react-router-dom";

const LogoutPopup = ({handleClose}) => {
  return (
    <div className="popup">
      <div className="ease-in duration-1000 w-[300px] h-[330px] fixed bg-[#7E370C] text-[white] rounded-xl py-[20px] z-50">
        <div className="w-full h-[200px] mt-[100px]">
        <h2 className="text-center font-semibold">Yakin Logout?</h2>
        <div className="mx-auto w-[40%] h-[30px] my-3">
        <button className="float-left bg-[#fdbe4c] p-[5px] text-black text-[13px] rounded-[5px] hover:scale-125 hover:duration-300" onClick={handleClose}>Kembali</button>
        <NavLink className="float-right bg-[#fdbe4c] text-black p-[5px] text-[13px] rounded-[5px] hover:scale-125 hover:duration-300" to="/home">Logout</NavLink>
        </div>
        </div>        
      </div>
    </div>
  );
};

export default LogoutPopup;
