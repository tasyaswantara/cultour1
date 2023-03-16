import AppLayout from "../components/partials/applayout/AppLayout";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Coba from "../assets/images/indo.jpg";
import Bintang from "../assets/icons/star.png";
import Jam from "../assets/icons/jam.png";
import Group from "../assets/icons/peoplegrup.png";
import { Testimoni } from "../components/utils/Testimoni";
import axios from "axios";

const DeskripsiCourse = () => {
  const [deskripsi, setDeskripsi] = useState({
    name: "tes",
    category: "tes",
    province: "tes",
  });
  // const handleAPI = async () => {
  //   try {
  //     const response = await axios
  //       .get("https://anugrah.aenzt.tech/course/view")
  //       .then((res) => {
  //         setDeskripsi({
  //           name: res.data.data.name,
  //           category: res.data.data.category,
  //           province: res.data.data.province,
  //           city:res.data.data.city,
  //           article:res.data.data.article,
  //           picture:res.data.data.picture,
  //           video:res.data.data.video,
  //           rating:res.data.data.rating,
  //           createAt:res.data.data.createAt,
  //           updateAt:res.data.data.updateAt
  //         });
  //         console.log("sukses panggil api");
  //       });
  //   } catch (error) {
  //     console.log("errornya:" + error.message);
  //   }
  // };
  const handleAPI = () => {    
   
    console.log("disubmit")
    axios.get("https://anugrah.aenzt.tech/auth/login",{
      name: "Tari Saman"
    }
      
    )
      .then((response) => {
        console.log(response);
        setDeskripsi({
          name: res.data.data.name,
          category: res.data.data.category,
          province: res.data.data.province
          
        });
      })
      .catch((err) => {
        console.log("errornya:" + err.message);
        
      });
  };

  // useEffect(() => {
  //   handleAPI();
  // }, []);

  const { idcourse } = useParams();
  const [value, setValue] = useState("deskripsi");
  const handleNav = (val) => {
    setValue(val);
  };

  return (
    <AppLayout>
      <div className="w-full h-[600px] mt-[80px]">
        <div className="w-[80%] h-[220px] m-auto flex">
          <div className="w-[280px] h-[180px] my-auto mx-[10px] rounded-2xl">
            <img
              src={Coba}
              alt="gambar budaya"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="w-[400px] h-[180px] my-auto mx-[50px] p-[20px]">
            <div className="flex w-full font-semibold">
              <img src={Bintang} className="w-[25px] mr-[10px]" />
              4.85
            </div>
            <h3 className="font-semibold my-[10px] ">
              Mulai Belajar Benteng Roterdam
            </h3>
            <p className="text-[10px] w-[200px]">
              Mempelajari tentang Budaya yang terdapat pada Benteng Rotterdam
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
          <NavLink to="/deskripsi/detailcourse">
            <div
              onClick={handleAPI}
              className="w-full h-[30px] border-[1px] rounded-[10px] bg-[#7E370C] text-white px-[58px]"
            >
              Mulai
            </div>
            </NavLink>
            <div className="w-full bg-[grey] h-[1px] my-[10px]"></div>
            <div className="w-full h-[30px] border-[1px] border-[grey] rounded-[10px] bg-white pl-[25px]">
              Informasi Kelas
            </div>
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
                <img src={Jam} className="w-[40px] m-auto "></img>
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
                <img src={Jam} className="w-[40px] m-auto "></img>
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
                <img src={Jam} className="w-[40px] m-auto "></img>
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
      <div className="w-full h-[1px] bg-[grey] my-[5px]"></div>
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
                Selamat datang di kelas video tentang Benteng Rotterdam! Kelas
                ini akan membawa Anda pada sebuah petualangan sejarah yang
                mengesankan. Benteng Rotterdam, atau dalam bahasa Belanda
                disebut Fort Rotterdam, adalah sebuah benteng peninggalan
                kolonial Belanda yang terletak di kota Makassar, Sulawesi
                Selatan, Indonesia. Dalam kelas ini, Anda akan diajak untuk
                menjelajahi sejarah Benteng Rotterdam dan memahami peran
                pentingnya dalam perkembangan Kota Makassar dan wilayah
                sekitarnya. Anda akan mempelajari sejarah dan arsitektur
                benteng, termasuk bentuk pertahanannya dan penggunaannya selama
                masa kolonial Belanda. <br /> <br />
                Selain itu, Anda juga akan mengenal tokoh-tokoh penting dalam
                sejarah Benteng Rotterdam dan belajar tentang peran mereka dalam
                menjaga keamanan dan perdamaian di wilayah sekitarnya. <br />{" "}
                <br />
                Kelas video ini dilengkapi dengan gambar, video, dan narasi yang
                menarik sehingga Anda dapat mempelajari sejarah Benteng
                Rotterdam dengan mudah dan menyenangkan. Selain itu, kelas ini
                juga dilengkapi dengan tanya jawab interaktif yang dapat
                membantu Anda memperdalam pemahaman Anda tentang materi yang
                telah dipelajari. <br /> <br />
                Setelah menyelesaikan kelas video ini, Anda akan memiliki
                pemahaman yang lebih baik tentang sejarah dan arsitektur Benteng
                Rotterdam dan memahami betapa pentingnya benteng ini dalam
                sejarah Indonesia. Anda juga dapat mengunjungi Benteng Rotterdam
                secara langsung dan mengaplikasikan pengetahuan yang telah
                dipelajari dalam kelas ini.
                <br /> <br />
                Gabunglah dengan kelas video ini dan temukan keindahan sejarah
                Benteng Rotterdam yang mengesankan!
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
