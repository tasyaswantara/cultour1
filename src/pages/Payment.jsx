import AppLayout from "../components/partials/applayout/AppLayout";
import { NavLink } from "react-router-dom";
import { PaketLangganan } from "../components/utils/PaketLangganan";

const Payment= ()=>{
    return(
        <AppLayout>
            <div className=" w-[700px] h-[400px] m-auto mt-[50px] rounded-xl border-[2px] border-[grey]">
                <div className="w-full  h-[50px] p-[10px]">
                    <h3 className="font-semibold text-[20px]">Harga langganan</h3>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full  h-[250px] p-[10px]">
                    <h3 className="font-normal text-[15px] float-left">3 Bulan (90 hari)</h3>
                    <h3 className="font-normal text-[15px] float-right">Rp 4.500.000</h3>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full h-[30px] p-[10px]">
                    <h3 className="font-semibold text-[15px] float-left">Jumlah tagihan</h3>
                    <h3 className="font-normal text-[15px] float-right">Rp 4.500.000</h3>
                    
                </div>
                <div className="w-full  h-[30px] p-[10px]">
                <NavLink
        to="/detailpayment"
        className="block w-[60px] float-right bg-[#7E370C] mt-2 py-2 px-[15px] rounded-[5px] text-white font-semibold text-[12px]"
      >
        Bayar
      </NavLink>
                    
                </div>
            </div>
        </AppLayout>
            
       
    )
}
export default Payment