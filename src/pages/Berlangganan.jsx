import TopAppBar from "../components/partials/appbar/TopAppBar";
import Batik from "../assets/icons/batik.png";

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
          <div className="h-[100%] w-[250px] bg-[#B05E27] rounded-[20px] mx-[20px] py-[40px] px-[20px] shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
            <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-white">
              Paket 1
            </div>
            <div className="w-[100%] h-[120px] text-xs text-center font-medium text-white pt-[50px]">
              Langganan selama 1 bulan (30 hari)
            </div>
            <div className="w-[120px] h-[30px] mt-[60px] p-[3px] pt-[5px] m-auto rounded-[10px] text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
              Read more
            </div>
          </div>
        
          <div className="h-[100%] w-[250px] bg-[#B05E27] rounded-[20px] mx-[20px] py-[40px] px-[20px] shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
            <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-white">
              Paket 2
            </div>
            <div className="w-[100%] h-[120px] text-xs text-center font-medium text-white pt-[50px]">
              Langganan selama 3 bulan (90 hari)
            </div>
            <div className="w-[120px] h-[30px] mt-[60px] p-[3px] pt-[5px] m-auto rounded-[10px] text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
              Read more
            </div>
          </div>

          <div className="h-[100%] w-[250px] bg-[#B05E27] rounded-[20px] mx-[20px] py-[40px] px-[20px] shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
            <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-white">
              Paket 3
            </div>
            <div className="w-[100%] h-[120px] text-xs text-center font-medium text-white pt-[50px]">
              Langganan selama 6 bulan (180 hari)
            </div>
            <div className="w-[120px] h-[30px] mt-[60px] p-[3px] pt-[5px] m-auto rounded-[10px] text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
              Read more
            </div>
          </div>

          <div className="h-[100%] w-[250px] bg-[#B05E27] rounded-[20px] mx-[20px] py-[40px] px-[20px] shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
            <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-white">
              Paket 4
            </div>
            <div className="w-[100%] h-[120px] text-xs text-center font-medium text-white pt-[50px]">
              Langganan selama 1 tahun (365 hari)
            </div>
            <div className="w-[120px] h-[30px] mt-[60px] p-[3px] pt-[5px] m-auto rounded-[10px] text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
              Read more
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px] w-full mt-[50px]">
      <img src={Batik} className="w-full h-full"></img>
      </div>
      
    </>
  );
};
export default Berlangganan;
