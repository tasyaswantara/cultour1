import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../../config/Auth";
import { NavLink } from "react-router-dom";
import User from "../../../assets/icons/user.png"


const Span = styled.span`
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 49px;
color: #7E370C;
margin-left:18px;
`;

const NavAuth=()=>{
  return(
    <Span >
            Cultour
    </Span>
  )
}

const TopAppBar = () => {
  const { setAndGetTokens } = useAuth();
  const handleLogout = () => {
    setAndGetTokens();
    localStorage.clear();
  };
  
  return (
    <>
    <nav className="px-2 sm:px-4 pt-1  fixed w-full bg-white z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center md:mx-0 mx-auto">
          <Span >
            Cultour
          </Span>
        </a>
        <div className="flex md:order-2">
        <div
          className="items-center justify-between w-full flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul className="flex p-4 mt-4 mx-auto rounded-lg bg-white flex-row space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
            <NavLink to="/berlangganan" className="block py-2 pl-3 pr-4  text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700" activeclassname="active">
              Berlangganan            
            </NavLink>
            </li>
            
            {window.localStorage.getItem('token')?
            (
              <>
              <li>
              <NavLink
                to="/course" activeclassname="active"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                Course
              </NavLink>
            </li>
              
            <li>
              <a
                onClick={handleLogout}
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] cursor-pointer hover:duration-700"
              >
                Logout
              </a>
            </li>
            <li>
              <NavLink
                to="/profil" activeclassname="active"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                <img src={User} className="w-[20px] h-[20px]"/>
              </NavLink>
            </li>
            </>
            ):(
              <>
              <li>
              <NavLink
                to="/signup"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                Login
              </NavLink>
            </li>
            </>
            )
            }
            
            
          </ul>
          
        </div>
                    
        </div>
        
      </div>
    </nav>
    </>
  );
};

export default TopAppBar;
export {NavAuth}
