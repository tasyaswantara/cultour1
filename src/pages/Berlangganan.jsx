import TopAppBar from "../components/partials/appbar/TopAppBar";
import Batik from "../assets/icons/batik.png";
import { NavLink } from "react-router-dom";
import { PaketLangganan } from "../components/utils/PaketLangganan";

const Berlangganan = () => {
  return (
    <>
      <TopAppBar />
      <div className="w-[90%] h-[400px] m-auto mt-[100px] mb-6">
        <div className="w-full h-[20%] text-center">
          <h3 className="text-[20px] font-semibold">Biaya Berlangganan</h3>
          <p className="text-[12px] mt-1">
            Pilih paket langganan sebagai investasi belajar yang sesuai dengan
            kebutuhan Anda.
          </p>
        </div>
        <div className="w-full h-[80%] flex px-[10px] mt-[20px]">
          {PaketLangganan.map((langganan)=> {
            return(
              <div className="h-[100%] w-[250px] bg-[#B05E27] rounded-[20px] mx-[20px] py-[40px] px-[20px] shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
              <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-white">
                {langganan.tipe}
              </div>
              <div className="w-[100%] h-[20px] text-xs text-center font-medium text-white pt-[10px]">
                {langganan.paket}
              </div>
              <div className="w-[100%] h-[100px] text-[30px] text-center font-semibold text-white pt-[50px]">
                Rp. {langganan.biaya}
              </div>
              <NavLink to={"/payment/"+langganan.id} biaya={langganan.biaya}>
              <div className="w-[120px] h-[30px] mt-[60px] p-[3px] pt-[5px] m-auto rounded-[10px] text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
                Read more
              </div>
              </NavLink>
            </div>
            )
          })}        
        
          
         
        </div>
      </div>
      <div className="h-[50px] w-full mt-[50px]">
      <img src={Batik} className="w-full h-full"></img>
      </div>
      
    </>
  );
};
export default Berlangganan;
