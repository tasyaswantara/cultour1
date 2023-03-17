import AppLayout from "../components/partials/applayout/AppLayout";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Bintang from "../assets/icons/star.png";
import Jam from "../assets/icons/jam.png";
import Chat from "../assets/icons/chat.png";
import Youtube from "../assets/icons/youtube.png";
import Sertif from "../assets/icons/award.png";
import Group from "../assets/icons/peoplegrup.png";
import { Testimoni } from "../components/utils/Testimoni";
import { courseDataDaerah,courseDataTarian, courseDataBudaya, courseDataBahasa} from "../components/utils/dataCourse";
import axios from "axios";

const DeskripsiCourse = () => {
  const {idcourse}  = useParams();
 
  const [deskripsi, setDeskripsi] = useState({
    name: "tes",
    category: "tes",
    province: "tes",
    description: "",
    rating:0,
    picture: ""
  });
 
  const handleAPI = async () => {
    try {
      const response = await axios
        .get(`https://1871-2404-8000-1021-57-11c-ea10-d060-efb2.ap.ngrok.io/course/get/specific/${idcourse}`,{
          idcourse: {},})
        .then((res) => {
          setDeskripsi({
            name: res.data.data.name,
            category: res.data.data.category,
            province: res.data.data.province,
            description:res.data.data.description,
            rating:res.data.data.rating,
            picture:res.data.data.picture
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

  
  const [value, setValue] = useState("deskripsi");
  const handleNav = (val) => {
    setValue(val);
  };

  const tujuanHalaman=(tujuan)=>{
    const element =document.getElementById(`${tujuan}`)
    element.scrollIntoView({behavior:'smooth'})
  }
  return (
    <AppLayout>
      <div id="1" className="w-full h-[600px] mt-[80px]">
        <div className="w-[80%] h-[220px] m-auto flex">
          <div className="w-[280px] h-[180px] my-auto mx-[10px] rounded-2xl">
            <img
              src={deskripsi.picture}
              alt="gambar budaya"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="w-[400px] h-[180px] my-auto mx-[50px] p-[20px]">
            <div className="flex w-full font-semibold">
              <img src={Bintang} className="w-[25px] mr-[10px]" />
              {deskripsi.rating}
            </div>
            <h3 className="font-semibold my-[10px] ">
              Mulai Belajar {deskripsi.name}
            </h3>
            <p className="text-[10px] w-[200px]">
              Mempelajari tentang Budaya yang terdapat pada {deskripsi.name}
            </p>
            <div className="flex w-full font-normal mt-[10px] text-[12px]">
              <img src={Jam} className="w-[10px] h-[10px] mt-[3px] mr-[10px]" />
              50 Menit
            </div>
            <div className="flex w-full font-normal mt-[2px] text-[12px]">
              <img
                src={Group}
                className="w-[12px] h-[12px] mt-[3px] mr-[8px]"
              />
              240 Siswa Terdaftar
            </div>
          </div>
          <div className="border-[grey] w-[200px] h-[120px] my-auto mx-[50px] border-[1px] px-[10px] py-[20px] rounded-2xl">
          <NavLink to={"/deskripsi/detailcourse/"+ idcourse}>
            <div
              onClick={handleAPI}
              className="w-full h-[30px] border-[1px] rounded-[10px] bg-[#7E370C] text-white px-[58px] cursor-pointer"
            >
              Mulai
            </div>
            </NavLink>
            <div className="w-full bg-[grey] h-[1px] my-[10px]"></div>
            <a onClick={()=> tujuanHalaman(2)}>
            <div className="w-full h-[30px] border-[1px] border-[grey] rounded-[10px] bg-white pl-[25px] cursor-pointer">
              Informasi Kelas
            </div>
            </a>
          </div>
        </div>
        <div className="w-[80%] h-[220px] mx-auto mt-[100px] px-[20px]">
          <div className="font-semibold text-[20px]">
            Apa yang akan Anda dapatkan?
          </div>
          <div className="w-full h-[100px]  mt-[50px] flex">
            <div className="w-[280px] h-[80px] bg-[#f3f3f3] border-[2px] border[#888888] rounded-xl flex">
              <div
                className="w-[30%] h-full pt-[15px]
                            "
              >
                <img src={Sertif} className="w-[40px] m-auto "></img>
              </div>
              <div className="w-[70%] h-[80%] my-auto">
                <h3 className="font-semibold mt-[2px] ">Sertifikat</h3>
                <p className="text-[10px]">
                  Dapatkan sertifikat setelah menyelesaikan kelas ini
                </p>
              </div>
            </div>
            <div className="w-[280px] h-[80px] bg-[#f3f3f3] border-[2px] border[#888888] rounded-xl mx-[120px] flex">
              <div
                className="w-[30%] h-full pt-[15px]
                            "
              >
                <img src={Chat} className="w-[40px] m-auto "></img>
              </div>
              <div className="w-[70%] h-[80%] my-auto">
                <h3 className="font-semibold mt-[2px] ">Forum Diskusi</h3>
                <p className="text-[10px]">
                  Diskusikan materi belajar dengan mentor dan siswa lainnya
                </p>
              </div>
            </div>
            <div className="w-[280px] h-[80px] bg-[#f3f3f3] border-[2px] border[#888888] rounded-xl flex">
              <div
                className="w-[30%] h-full pt-[15px]
                            "
              >
                <img src={Youtube} className="w-[40px] m-auto "></img>
              </div>
              <div className="w-[70%] h-[80%] my-auto">
                <h3 className="font-semibold mt-[2px] ">Modul Tutorial</h3>
                <p className="text-[10px]">
                  Materi video disajikan dengan bahasa yang mudah dipahami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="2" className="w-full h-[1px] bg-[grey] my-[5px]"></div>
      <div className="w-full h-[80px] my-[5px]">
        <div className=" w-[80%] h-full m-auto flex px-[10px]">
          <div className="my-auto w-[100px] font-semibold">
            <NavLink
              className={value == "deskripsi" ? "clicked" : ""}
              onClick={(e) => {
                handleNav("deskripsi");
              }}
            >
              Deskripsi
            </NavLink>
          </div>
          <div className="my-auto w-[100px] font-semibold">
            <NavLink
              className={value == "testimoni" ? "clicked" : ""}
              onClick={(e) => {
                handleNav("testimoni");
              }}
            >
              Testimoni
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[grey] my-[5px]"></div>
      <div className="w-full h-[600px] py-[20px]">
        <div className="w-[80%] h-[80%] p-[10px] m-auto">
          {value == "deskripsi" ? (
            <>
              <h3 className="font-semibold text-[18px] my-[20px]">Deskripsi</h3>
              <p className="text-[15px] font-light my-[10px]">
               {deskripsi.description}
              </p>
            </>
          ) : null}
          {value == "testimoni" ? (
            <>
              <h3 className="font-semibold text-[18px] mt-[20px] text-center">
                Testimoni dari Siswa
              </h3>
              <p className="text-center">
                Sudah banyak siswa yang telah mengikuti course ini, coba
                dengerin kata mereka!
              </p>
              <div className="w-[90%] h-[500px] m-auto mt-[10px] flex flex-row flex-wrap">
                {Testimoni.map((testi) => {
                  return (
                    <div className="w-[405px] h-[200px] rounded-xl border-[2px]  m-[20px]">
                      <div className="w-full h-[80px] flex">
                        <div className="w-[50px] my-auto ml-[20px] bg-slate-500 rounded-full h-[50px]"></div>
                        <div className="w-[70%] h-full ml-[10px] py-[20px]">
                          <div className="text-[12px] font-semibold">
                            {testi.username}
                          </div>
                          <p className="text-[10px] my-[2px]">{testi.paket}</p>
                          <div className="w-full h-[20px] flex">
                            <img src={Bintang} className="w-[13px] h-[13px]" />
                            <img src={Bintang} className="w-[13px] h-[13px]" />
                            <img src={Bintang} className="w-[13px] h-[13px]" />
                            <img src={Bintang} className="w-[13px] h-[13px]" />
                            <img src={Bintang} className="w-[13px] h-[13px]" />
                          </div>
                        </div>
                      </div>
                      <div className="px-[20px] py-[10px] text-[12px]">
                        {testi.testi}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </AppLayout>
  );
};
export default DeskripsiCourse;
