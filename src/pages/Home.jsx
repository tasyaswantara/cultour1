import AppLayout from "../components/partials/applayout/AppLayout";
import styled from "styled-components";
import Batik from "../assets/icons/batik.png";
import Orang1 from "../assets/images/fix1.png";
import Orang2 from "../assets/icons/orangs.png";
import Budies from "../assets/icons/Buddies.png";
import { NavLink } from "react-router-dom";
import { dataStatistik1, ourCourse1 } from "../components/utils/dataHome";

const Home = () => {
  const Konten = styled.div`
    width: 90%;
    height: 250px;
    background-color: #7e370c;
    margin: auto;
    border-radius: 0 0 30px 30px;
    box-shadow: 10px 10px 15px #aaaaaa;
    @media only screen and (min-width: 780px) {
      width: 60%;
      min-width: 750px;
      height: 350px;
    }
  `;
  const Konten2 = styled.div`
    width: 80%;
    height:600px;
    margin: 50px auto;
    width:80%;   
    margin-top: -20px;
    margin-bottom:0;
    
    @media only screen and (min-width: 780px) {
      height:400px;
    }
  `;
  const GbrBatik = styled.img`
    width: 90%;
    height: 60px;
    margin: auto;
    margin-top: 20px;
    background-color: #7e370c;
    border-radius: 30px 30px 0 0;
    
    box-shadow: 10px 10px 15px #aaaaaa;
    @media only screen and (min-width: 780px) {
      width: 60%;
      min-width: 750px;
      height: 100px;
    }
  `;
  const JudulSection = styled.h2`
    color: #ffce45;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin: 80px 0;
  `;
  const KontainerPutih = styled.div`
    border: 2px solid #7e370c;
    background-color: white;
    margin: auto;
    width: 100%;
    display: flex;
    height:200px;
    border-radius: 20px;
    position:relative;
    @media only screen and (min-width: 1000px) {
      height: 300px;
      width: 1000px;
    }
  `;
  return (
    <AppLayout>
      <section>
        

        <GbrBatik src={Batik} alt="Batik" />
        <Konten className="min-w-min">
          <div className="float-left w-[60%] h-[300px]">
            <h3 className="font-bold text-2xl md:mx-7 mx-1 px-7 md:pt-16 pt-10 text-white">
              Belajar Budaya di Indonesia <br />
              dengan Satu Klik!
            </h3>
            <p className="text-xs hidden md:block mx-7 px-7 py-5 text-white">
              Lebih dari 4,000+ pakaian, bahasa, makanan, musik, tari, hingga
              upacara adat yang dapat kamu pelajari. Ayo belajar berbagai budaya
              dan pelajari agar kita bisa berpartisipasi dalam melestastarikan
              budaya Indonesia
            </p>
            <form className="flex items-center md:mt-5 mt-9">
              <div className="relative w-[300px] md:pl-14 pl-8">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-[#7E370C] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 "
                  placeholder="Cari course disini..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 text-[#7E370C] px-3 ml-2 text-sm font-medium bg-[#FFCE45] rounded-lg border border-[#FFCE45] hover:bg-[#7E370C] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#FFCE45]"
              >
                Mulai
              </button>
            </form>
          </div>
          <div className="float-right w-[40%] pt-0">
          <img
            className="w-[250px] h-full mt-0 "
            src={Orang2}
            alt="Man"
          ></img>
          </div>
          
        </Konten>
      </section>
      <section>
        <img
          className="absolute w-[15%] ml-[250px] -mt-[50px] hidden xl:flex"
          src={Budies}
          alt="Buddies"
        />

        <div className="bg-[#FFCE45] md:w-[50%] w-[90%] h-[120px] mx-auto mt-24 rounded-[20px]">
          <h3 className="font-semibold text-[25px] mx-7 lg:pl-[100px] pt-2 text-black">
            Taukah Kamu?
          </h3>
          <p className="text-[10px] mx-7 lg:pl-[100px] font-bold text-[#7E370C]">
            Upacara adat Tabuik di Pariaman, Sumatera Barat, yang dilakukan
            sebagai penghormatan terhadap cucu Nabi Muhammad, Husain. Upacara
            ini melibatkan prosesi pemikulan Tabuik, yaitu patung kayu berbentuk
            kuburan yang diarak menuju laut dan dibakar di pantai.
          </p>
        </div>
      </section>
      <section>
        <JudulSection>About Us</JudulSection>
        <Konten2>
          <div className="md:float-left md:block hidden w-[200px] h-[200px] bg-[#7E370C] my-[70px] rounded-3xl min-w-min">
            <h3 className="text-3xl font-bold text-[#FFCE45] text-center my-[80px]">
              Cultour
            </h3>
          </div>
          <div className="md:float-right md:w-[70%] w-full h-[100%] rounded-3xl px-10">
            <p className="text-[14px] font-normal text-[#7E370C] text-left md:my-[30px]">
              Selamat datang di Cultour! Kami menyediakan kursus online yang
              dirancang untuk membantu Anda mempelajari dan memahami budaya
              dengan cara yang menarik dan interaktif.
              <br /> <br />
              Dalam kursus ini, Anda akan mempelajari berbagai aspek budaya dari
              seluruh dunia, seperti sejarah, seni, musik, tarian, adat
              istiadat, dan banyak lagi. Anda akan diperkenalkan dengan berbagai
              budaya yang berbeda, dan mendapatkan pemahaman yang lebih dalam
              tentang bagaimana budaya memengaruhi kehidupan sehari-hari kita.
              <br /> <br />
              Kursus ini dilengkapi dengan video, artikel, dan kuis yang
              menarik, serta bimbingan ahli dan forum diskusi untuk
              mendiskusikan topik budaya yang menarik hati Anda. Anda dapat
              memilih untuk mempelajari kursus ini secara mandiri, atau
              bergabung dengan kelompok diskusi untuk belajar bersama dengan
              orang lain yang memiliki minat yang sama.
              <br /> <br />
              Jadi, jangan ragu untuk bergabung dengan kami di Virtual Course
              tentang Budaya, dan mari kita mulai petualangan belajar yang
              menarik ini bersama-sama!
            </p>
          </div>
        </Konten2>
        <div className="grid-cols-3 md:gap-4 gap-1 p-[10px] w-[100%] flex justify-center bg-white">
          {dataStatistik1.map((datastas) => {
            return (
              <div className="w-[120px] h-[100px] md:mx-[100px] mx-[20px] ">
                <div className="w-[100%] h-[60px] text-[30px] text-center font-bold">
                  {datastas.jumlah}
                </div>
                <div className="w-[100%] h-[40px] text-s text-center font-bold">
                  {datastas.kategori}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <JudulSection>Our Course</JudulSection>
        <div className="absolute m-auto w-[100%] h-[300px]"></div>
        <div className="bg-[#7E370C] md:h-[500px] h-[400px] py-[100px] min-w-full">
          <KontainerPutih>
            {ourCourse1.map((datacourse) => {
            return (
              <div className="h-[100%] md:w-[300px] w-[25%] bg-white rounded-[20px] py-[40px] px-[20px] hover:bg-[#FFCE45] hover:scale-110 hover:duration-1000 hover:shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
        <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-[#7E370C]">
          {datacourse.judul}
        </div>
        <div className="w-[100%] hidden md:block h-[120px] text-xs text-center font-medium text-[#7E370C] pt-[20px]">
          {datacourse.deskripsi}
        </div>
        <NavLink to="/course">
        <div className="md:w-[120px] w-[50px] md:h-[25px] h-[40px] mt-[25px] p-[3px] m-auto rounded-full md:text-xs text-[9.5px] text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
          Read more
        </div>
        </NavLink>
      </div>
            );
          })}
          </KontainerPutih>
        </div>

        <img src={Batik} alt="batik" className="bg-[#7E370C] min-w-full"></img>
      </section>
    </AppLayout>
  );
};

export default Home;
