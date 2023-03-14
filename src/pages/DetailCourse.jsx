import AppLayout from "../components/partials/applayout/AppLayout";
import Jam from "../assets/icons/jam.png";
import Group from "../assets/icons/peoplegrup.png";
import Video from "../assets/video/contoh.mp4"
import Batik from "../assets/icons/batik.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DetailCourse= ()=>{
    const [value, setValue] = useState("langkah1");
  const handleOpt = (val) => {
    setValue(val);
  };
    return(
        <AppLayout>
            <div className="w-full min-h-[80vh] flex">
                <div className="h-full w-[30%] mx-[50px]">
                <div
                className={value == "langkah1" ? "aktif" : ""}
                onClick={(e) => {
                  handleOpt("langkah1");
                }}
              >
                    <div className="mx-auto my-[20px] rounded-[10px] w-[80%] h-[100px] border-[1px] border-[#7E370C] hover:bg-[#7E370C] hover:text-white hover:duration-1000">
                        <div className="m-auto w-[80%] h-[90%] py-[5px] text-[12px] font-semibold">
                            <div className="my-[5px]">Langkah 1</div>
                            <div className="my-[5px]">Belajar Asal Muasal Benteng Rotterdam</div>
                            <div className="flex h-[20px] w-full">
                                <div><img src={Jam} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">12 Menit</div>
                                <div><img src={Group} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">26 Siswa Terdaftar</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div
                className={value == "langkah2" ? "aktif" : ""}
                onClick={(e) => {
                  handleOpt("langkah2");
                }}
              >
                    <div className="mx-auto my-[20px] rounded-[10px] w-[80%] h-[100px] border-[1px] border-[#7E370C] hover:bg-[#7E370C] hover:text-white hover:duration-1000 cursor-pointer">
                        <div className="m-auto w-[80%] h-[90%] py-[5px] text-[12px] font-semibold">
                            <div className="my-[5px]">Langkah 2</div>
                            <div className="my-[5px]">Belajar Asal Muasal Benteng Rotterdam</div>
                            <div className="flex h-[20px] w-full">
                                <div><img src={Jam} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">12 Menit</div>
                                <div><img src={Group} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">26 Siswa Terdaftar</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div
                className={value == "langkah3" ? "aktif" : ""}
                onClick={(e) => {
                  handleOpt("langkah3");
                }}
              >
                    <div className="mx-auto my-[20px] rounded-[10px] w-[80%] h-[100px] border-[1px] border-[#7E370C] hover:bg-[#7E370C] hover:text-white hover:duration-1000 cursor-pointer">
                        <div className="m-auto w-[80%] h-[90%] py-[5px] text-[12px] font-semibold">
                            <div className="my-[5px]">Langkah 3</div>
                            <div className="my-[5px]">Belajar Asal Muasal Benteng Rotterdam</div>
                            <div className="flex h-[20px] w-full">
                                <div><img src={Jam} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">12 Menit</div>
                                <div><img src={Group} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">26 Siswa Terdaftar</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div
                className={value == "kuis" ? "aktif" : ""}
                onClick={(e) => {
                  handleOpt("kuis");
                }}
              >
                    <div className="mx-auto my-[20px] rounded-[10px] w-[80%] h-[100px] border-[1px] border-[#7E370C] hover:bg-[#7E370C] hover:text-white hover:duration-1000">
                        <div className="m-auto w-[80%] h-[90%] py-[5px] text-[12px] font-semibold">
                            <div className="my-[5px]">Kuis</div>
                            <div className="my-[5px]">Belajar Asal Muasal Benteng Rotterdam</div>
                            <div className="flex h-[20px] w-full">
                                <div><img src={Jam} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">12 Menit</div>
                                <div><img src={Group} className="w-[12px] mt-[2px]"/></div>
                                <div className="mx-[10px] text-[10px]">26 Siswa Terdaftar</div>
                            </div>
                        </div>
                    </div>                
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#7E370C] via-[#fceae0] to-[#7E370C] w-[2px] h-[75vh] my-auto"></div>
                
                <div className="w-[60%] h-full mx-[10px] py-[20px]">
                {value == "langkah1" ? (
                    <div className="w-[80%] h-[450px] m-auto p-0">
                        <video controls className="w-full h-full">
                            <source src={Video} type="video/mp4"/>
                        </video>
                    </div>
                    ) : null}
                    {value == "kuis" ? (
                    <div className="w-[80%] h-[450px] m-auto p-0">
                        <h3>KUUUUUUUUUUUUUIIIIIIIIIIssss</h3>
                    </div>
                    ) : null}
                </div>
                
            </div>
            <div className="h-[38px] w-full">
      <img src={Batik} className="w-full h-full"></img>
      </div>
        </AppLayout>
            
       
    )
}
export default DetailCourse