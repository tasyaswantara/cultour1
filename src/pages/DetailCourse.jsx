import AppLayout from "../components/partials/applayout/AppLayout";
import Jam from "../assets/icons/jam.png";
import Group from "../assets/icons/peoplegrup.png";
import Video from "../assets/video/contoh.mp4"
import Batik from "../assets/icons/batik.png";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Pertanyaan } from "../components/utils/Pertanyaan";


const DetailCourse= ()=>{
    const {idcourse}  = useParams();
    const [deskripsi, setDeskripsi] = useState({
        name: "tes",
        category: "tes",
        province: "tes",
        description: "",
        video1:"",
        video2:"",
        video3:"",
        rating:0
      });
     
      const handleAPI = async () => {
        try {
          const response = await axios
            .get(`https://anugrah.aenzt.tech/course/get/id/${idcourse}`,{
                idcourse: {},})
            .then((res) => {
              setDeskripsi({
                name: res.data.data.name,
                category: res.data.data.category,
                province: res.data.data.province,
                description:res.data.data.description,
                video1: res.data.data.video1,
                video2: res.data.data.video2,
                video3: res.data.data.video3,
                rating:res.data.data.rating
              });
              console.log(res);
            });
        } catch (error) {
          console.log("errornya:" + error.message);
        }
      };
    
      useEffect(() => {
        handleAPI()
        
      }, []);
    
    const [value, setValue] = useState("langkah1");
  const handleOpt = (val) => {
    setValue(val);
  };
    return(
        <AppLayout>
            <div className="w-full min-h-[85vh] flex">
            <div className="h-full w-[30%] mx-[50px]"></div>
                <div className="h-full w-[30%] mx-[50px] fixed">
                <div
                className={value == "langkah1" ? "aktif" : ""}
                onClick={(e) => {
                  handleOpt("langkah1");
                }}
              >
                    <div className="mx-auto my-[20px] rounded-[10px] w-[80%] h-[100px] border-[1px] border-[#7E370C] hover:bg-[#7E370C] hover:text-white hover:duration-1000">
                        <div className="m-auto w-[80%] h-[90%] py-[5px] text-[12px] font-semibold">
                            <div className="my-[5px]">Langkah 1</div>
                            <div className="my-[5px]">Belajar Asal Muasal {deskripsi.name}</div>
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
                            <div className="my-[5px]">Belajar Asal Muasal {deskripsi.name}</div>
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
                            <div className="my-[5px]">Belajar Asal Muasal {deskripsi.name}</div>
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
                            <div className="my-[5px]">Belajar Asal Muasal {deskripsi.name}</div>
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
                {value =="kuis" ? (
                   <div className="bg-gradient-to-b from-[#7E370C] via-[#fceae0] to-[#7E370C] w-[2px] h-[130vh] my-auto "></div>
                ):( <div className="bg-gradient-to-b from-[#7E370C] via-[#fceae0] to-[#7E370C] w-[2px] h-[75vh] my-auto "></div>)}
             
                
                <div className="w-[60%] h-full mx-[10px] py-[20px]">
                {value == "langkah1" ? (
                    <div className="w-[80%] h-[450px] m-auto p-0">
                        <video className="w-full h-[90%]" controls>
                            <source src={deskripsi.video1}/>
                        </video>

                    </div>
                    ) : null}
                    {value == "langkah2" ? (
                    <div className="w-[80%] h-[450px] m-auto p-0">
                        <video className="w-full h-[90%]" controls>
                            <source src={deskripsi.video2}/>
                        </video>                   
                            

                    </div>
                    ) : null}
                    {value == "langkah3" ? (
                    <div className="w-[80%] h-[450px] m-auto p-0">
                        <video className="w-full h-[90%]" controls>
                            <source src={deskripsi.video3}/>
                        </video>
                       
                           

                    </div>
                    ) : null}
                    
                    {value == "kuis" ? (
                        <>
                        <div className="w-[95%] h-[450px] m-auto p-0">
                        <form>
                        {Pertanyaan.map((pertanyaan) => {
                            return(
                            <>
                                <div className="w-full h-30px my-[5px]">
                                <h3 className="text-[16px] text-left w-[80%]">{pertanyaan.pertanyaan}</h3>
                                <div className="text-[12px] font-semibold float-right block bg-white w-[60px] text-center rounded-[5px] border-[1px] my-2 border-[#7E370C]">{pertanyaan.poin} poin</div>
                                </div>
                                <label className="block">
                                <input name={pertanyaan.id} type="radio" className="rounded-[5px] w-[unset] h-[10px] border-[#7E370C] border-[1px] text-[15px] text-[#7E370C] align-middle"/> {pertanyaan.jawab1}
                                </label>
                                <label className="block">
                                <input name={pertanyaan.id} type="radio" className="rounded-[5px] w-[unset] h-[10px] border-[#7E370C] border-[1px] text-[15px] text-[#7E370C] align-middle"/> {pertanyaan.jawab2}
                                </label>
                                <label className="block">
                                <input name={pertanyaan.id} type="radio" className="rounded-[5px] w-[unset] h-[10px] border-[#7E370C] border-[1px] text-[15px] text-[#7E370C] align-middle"/> {pertanyaan.jawab3}
                                </label>
                                <label className="block">
                                <input name={pertanyaan.id} type="radio" className="rounded-[5px] w-[unset] h-[10px] border-[#7E370C] border-[1px] text-[15px] text-[#7E370C] align-middle"/> {pertanyaan.jawab4}
                                </label>
                                
                                
                                
                                </>
                            
                        );
                        })}
                        <NavLink to="/"
        type="submit"
        className="block w-[60px] float-right pl-[10px] bg-[#7E370C] mt-2 py-2 rounded-[5px] text-white font-semibold text-[12px]"
      >
        Submit
      </NavLink>
                            </form>
                        </div>
                    </>
                    ) : null}
                </div>
                
            </div>
            <div className="h-[50px] w-full">
      <img src={Batik} className="w-full h-full"></img>
      </div>
        </AppLayout>
            
       
    )
}
export default DetailCourse