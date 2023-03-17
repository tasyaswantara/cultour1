import AppLayout from "../components/partials/applayout/AppLayout";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import BCA from "../assets/icons/bca.png"
import Mandiri from "../assets/icons/mandiri.png"
import Bri from "../assets/icons/bri.png"
import axios from "axios";


const DetailPayment= ()=>{
  // const handlePost = async (val) => {
  //  val.prevetDefault()
  //   const formData = new FormData();
  //   formData.append("token", window.localStorage.getItem('token'));
  //   formData.append("file", val.file);
  //   console.log(val);
  //   try {
  //     const response = await axios
  //       .post("https://1871-2404-8000-1021-57-11c-ea10-d060-efb2.ap.ngrok.io/subscription/subscribe", formData)
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const dummyRequest = ({ file, onSuccess }) => {
  //   setTimeout(() => {
  //     onSuccess("ok");
  //   }, 0);
  // };
    const [value, setValue] = useState("bca");
  const handleNav = (val) => {
    setValue(val);
  };
    return(
        <AppLayout>
             <div className=" w-[700px] h-[420px] m-auto mt-[50px] rounded-xl border-[2px] border-[grey]">
                <div className="w-full  h-[50px] p-[10px]">
                    <h3 className="font-semibold text-[20px]">Transfer Bank</h3>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full  h-[150px] p-[10px] flex">
                <NavLink
              className={value == "bca" ? "bayar" : ""}
              onClick={(e) => {
                handleNav("bca");
              }}
            >
              <div className="w-[200px] h-[100px] border-[1px] border-[gray] py-[15px] rounded-xl mx-[12px]">
                        <img src={BCA} className="w-[200px] my-auto"/>
                    </div>
            </NavLink>
            <NavLink
              className={value == "mandiri" ? "bayar" : ""}
              onClick={(e) => {
                handleNav("mandiri");
              }}
            >
                    <div className="w-[200px] h-[100px] border-[1px] border-[gray] py-[15px] px-[10px] rounded-xl mx-[12px]">
                        <img src={Mandiri} className="w-[180px] my-auto"/>
                    </div>
                    </NavLink>
                    <NavLink
              className={value == "bri" ? "bayar" : ""}
              onClick={(e) => {
                handleNav("bri");
              }}
            >
                    <div className="w-[200px] h-[100px] border-[1px] border-[gray] py-0 rounded-xl mx-[12px]">
                        <img src={Bri} className="w-[180px] my-auto"/>
                    </div>
                    </NavLink>
                </div>
                
                <form className="px-[30px]">
                    <h3 className="font-semibold text-[25px] mt-3 float-right">Rp 4.500.000</h3>
                    {value == "bca" ? (
                        <>
                    <h3 className="text-[15px] font-semibold">Virtual Account</h3>
                    <p>11233422123123345666</p>
                    <h3 className="text-[15px] font-semibold">Rekening</h3>
                    <p>08277789354353</p>
                    </>
                    ):null}
                    {value == "mandiri" ? (
                        <>
                    <h3 className="text-[15px] font-semibold">Virtual Account</h3>
                    <p>112387264387264864827</p>
                    <h3 className="text-[15px] font-semibold">Rekening</h3>
                    <p>38447847997978978979</p>
                    </>
                    ):null}
                    {value == "bri" ? (
                        <>
                    <h3 className="text-[15px] font-semibold">Virtual Account</h3>
                    <p>1147987968768768768</p>
                    <h3 className="text-[15px] font-semibold">Rekening</h3>
                    <p>3786487624878624864</p>
                    </>
                    ):null}
                    <div className="w-full h-[1px] bg-[grey] my-[10px]"></div>
                    <NavLink to="/"
        
        className="w-[150px] h-[40px] float-right bg-[#7E370C] mt-1 py-3 px-[12px] rounded-[5px] text-white text-center font-semibold text-[12px]"
      >
        Selesai
      </NavLink>
                    <h3 className="text-[15px] font-semibold mt-[20px]"> Upload Bukti Transfer disini:</h3>                 
                    <input type="file" className="float-left w-full h-[100px] my-[10px]"/>
                    
                </form>
                
                
                
                
                 
                    
                
                
               
            </div>
        </AppLayout>
            
       
    )
}
export default DetailPayment