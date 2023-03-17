import AppLayout from "../components/partials/applayout/AppLayout";
import styled from "styled-components";
import Batik from "../assets/icons/batik.png";
import Orang1 from "../assets/images/fix1.png";
import Budies from "../assets/icons/Buddies.png";
import { NavLink } from "react-router-dom";
import { dataStatistik1, ourCourse1 } from "../components/utils/dataHome";

const Home = () => {
  const Konten = styled.div`
    width: 60%;
    height: 350px;
    background-color: #7e370c;
    margin: auto;
    border-radius: 0 0 30px 30px;
    min-width: 750px;
    box-shadow: 10px 10px 15px #aaaaaa;
  `;
  const Konten2 = styled.div`
    width: 80%;
    height: 400px;
    margin: 50px auto;
    min-width: 800px;
    margin-top: -20px;
  `;
  const GbrBatik = styled.img`
    width: 60%;
    height: 100px;
    margin: auto;
    margin-top: 20px;
    background-color: #7e370c;
    border-radius: 30px 30px 0 0;
    min-width: 750px;
    box-shadow: 10px 10px 15px #aaaaaa;
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
    height: 300px;
    width: 1000px;
    display: flex;
    border-radius: 20px;
    position: absolute;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  `;
  return (
    <AppLayout>
      <section>
        

        <GbrBatik src={Batik} alt="Batik" />
        <Konten className="min-w-min">
          <div className="float-left w-[70%] h-[300px]">
            <h3 className="font-bold text-2xl mx-7 px-7 pt-16 text-white">
              Belajar Budaya di Indonesia <br />
              dengan Satu Klik!
            </h3>
            <p className="text-xs mx-7 px-7 py-4 text-white">
              Lebih dari 4,000+ pakaian, bahasa, makanan, musik, tari, hingga
              upacara adat yang dapat kamu pelajari. Ayo belajar berbagai budaya
              dan pelajari agar kita bisa berpartisipasi dalam melestastarikan
              budaya Indonesia
            </p>
            <form className="flex items-center mt-5">
              <div className="relative w-[300px] pl-14">
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
          <img
            className="absolute w-[220px] mb-[50px] ml-[510px] "
            src={Orang1}
            alt="Man"
          ></img>
          <div className="flex flex-col w-[20%] bg-[#FFCE45] h-[229px] float-right mt-[40px] mr-10 rounded-t-full"></div>
        </Konten>
      </section>
      <section>
        <img
          className="absolute w-[15%] ml-[250px] -mt-[50px] hidden xl:flex"
          src={Budies}
          alt="Buddies"
        />

        <div className="bg-[#FFCE45] w-[50%] h-[120px] mx-auto mt-24 rounded-[20px] min-w-[600px]">
          <h3 className="font-semibold text-[25px] mx-7 pl-[100px] pt-2 text-black">
            Taukah Kamu?
          </h3>
          <p className="text-[10px] mx-7 pl-[100px] font-bold text-[#7E370C]">
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
          <div className="float-left w-[200px] h-[200px] bg-[#7E370C] my-[70px] rounded-3xl min-w-min">
            <h3 className="text-3xl font-bold text-[#FFCE45] text-center my-[80px]">
              Cultour
            </h3>
          </div>
          <div className="float-right w-[70%] h-[100%] rounded-3xl px-10">
            <p className="text-[14px] font-normal text-[#7E370C] text-left my-[30px]">
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
        <div className="grid-cols-3 gap-4 p-[10px] flex justify-center bg-white">
          {dataStatistik1.map((datastas) => {
            return (
              <div className="w-[120px] h-[100px] mx-[100px] ">
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
        <div className="absolute m-auto w-[100%] h-[300px] min-w-[900px]"></div>
        <div className="bg-[#7E370C] h-[500px] px-[130px] py-[100px]">
          <KontainerPutih>
            {ourCourse1.map((datacourse) => {
            return (
              <div className="h-[100%] w-[300px] bg-white rounded-[20px] py-[40px] px-[20px] hover:bg-[#FFCE45] hover:scale-110 hover:duration-1000 hover:shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
        <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-[#7E370C]">
          {datacourse.judul}
        </div>
        <div className="w-[100%] h-[120px] text-xs text-center font-medium text-[#7E370C] pt-[20px]">
          {datacourse.deskripsi}
        </div>
        <NavLink to="/course">
        <div className="w-[120px] h-[25px] mt-[20px] p-[3px] m-auto rounded-full text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
          Read more
        </div>
        </NavLink>
      </div>
            );
          })}
          </KontainerPutih>
        </div>

        <img src={Batik} alt="batik" className="bg-[#7E370C] w-[100%]"></img>
      </section>
    </AppLayout>
  );
};

export default Home;
