import AppLayout from "../components/partials/applayout/AppLayout";
import { NavLink } from "react-router-dom";
import { PaketLangganan } from "../components/utils/PaketLangganan";

const Payment= ()=>{
    return(
        <AppLayout>
            <div className=" w-[700px] h-[420px] m-auto mt-[50px] rounded-xl border-[2px] border-[grey]">
                <div className="w-full  h-[50px] p-[10px]">
                    <h3 className="font-semibold text-[20px]">Harga langganan</h3>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full  h-[70px] p-[10px] py-[20px]">
                    <h3 className="font-normal text-[15px] float-left">3 Bulan (90 hari)</h3>
                    <h3 className="font-normal text-[15px] float-right">Rp 4.500.000</h3>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full  h-[200px] p-[10px] py-[20px]">
                <h3 className="font-semibold text-[20px]">Kode Promo</h3>
                <p>Bayar lebih hemat dengan promo</p>
                    <div className="w-[400px] h-[50px] my-[30px]">
                        <input placeholder="Masukkan kode promo" className="float-left w-[50%] px-[10px] h-full rounded-xl border-[1px] border-[#7E370C] text-[15px] text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50"/>
                        <a href="#">
                        <div className="float-right w-[45%] h-full text-white text-center py-[11px] rounded-xl cursor-pointer bg-[#7E370C]">Terapkan</div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[grey]"></div>
                <div className="w-full h-[20px] p-[10px]">
                    <h3 className="font-semibold text-[15px] float-left">Jumlah tagihan</h3>
                    <h3 className="font-normal text-[15px] float-right">Rp 4.500.000</h3>                    
                </div>
                <div className="w-full  h-[20px] p-[10px] my-[10px]">
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