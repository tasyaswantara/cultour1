import AppLayout from "../components/partials/applayout/AppLayout";
import { NavLink } from "react-router-dom";
import BCA from "../assets/icons/bca.png"
import Mandiri from "../assets/icons/mandiri.png"
import Bri from "../assets/icons/bri.png"

const DetailPayment= ()=>{
    return(
        <AppLayout>
             <div className=" w-[700px] h-[420px] m-auto mt-[50px] rounded-xl border-[2px] border-[grey]">
                <div className="w-full  h-[50px] p-[10px]">
                    <h3 className="font-semibold text-[20px]">Transfer Bank</h3>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full  h-[150px] p-[10px] flex">
                    <div className="w-[200px] h-[100px] border-[1px] border-[gray] py-[15px] rounded-xl mx-[20px]">
                        <img src={BCA} className="w-[200px] my-auto"/>
                    </div>
                    <div className="w-[200px] h-[100px] border-[1px] border-[gray] py-[15px] px-[10px] rounded-xl mx-[20px]">
                        <img src={Mandiri} className="w-[180px] my-auto"/>
                    </div>
                    <div className="w-[200px] h-[100px] border-[1px] border-[gray] py-0 rounded-xl mx-[20px]">
                        <img src={Bri} className="w-[180px] my-auto"/>
                    </div>
                </div>
                <form className="px-[30px]">
                    Upload Bukti Transfer disini:
                    <h3 className="font-normal text-[15px] float-right">Rp 4.500.000</h3>
                    <input type="file" className="w-full h-[100px] my-[20px]"/>
                    <NavLink
        to="/home"
        className="block w-[60px] float-right bg-[#7E370C] mt-2 py-2 px-[12px] rounded-[5px] text-white font-semibold text-[12px]"
      >
        Selesai
      </NavLink>
                </form>
                <div className="w-full h-[1px] bg-[grey]"></div>
                
                
                 
                    
                
                
               
            </div>
        </AppLayout>
            
       
    )
}
export default DetailPayment