import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useAuth } from "../../../config/Auth";


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
        <a href="/" className="flex items-center">
          <Span >
            Cultour
          </Span>
        </a>
        <div className="flex md:order-2">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
          <li>
              <a
                href="/berlangganan"
                className="block py-2 pl-3 pr-4  text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700 "
              >
                Berlangganan
              </a>
            </li>
            
            {window.localStorage.getItem('token')?
            (
              <>
              <li>
              <a
                href="/course"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                Course
              </a>
            </li>
              <li>
              <a
                onClick={handleLogout}
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] cursor-pointer hover:duration-700"
              >
                Logout
              </a>
            </li>
            </>
            ):(
              <>
              <li>
              <a
                href="/signup"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                Signup
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 pl-3 pr-4 text-[#7E370C] rounded-xl hover:bg-[#FFCE45] hover:duration-700"
              >
                Login
              </a>
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
