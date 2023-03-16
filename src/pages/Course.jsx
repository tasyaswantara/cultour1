import AppLayout from "../components/partials/applayout/AppLayout";
import Search from "../../src/assets/icons/search.svg";
import Arrow from "../assets/icons/right-arrow.png";
import { NavLink } from "react-router-dom";
import Coba from "../assets/images/indo.jpg"
import { courseDataDaerah, courseDataTarian, courseDataBudaya, courseDataBahasa } from "../components/utils/dataCourse";


const Course = () => {
 
  return (
    <AppLayout>
      
      <div className="min-w-full h-[290px] mt-[50px]">
        <div className="h-[28px] w-[94%] m-auto flex">
          <div className="w-[12%] align-middle pl-0">
            <h3 className="text-[#7E370C] my-auto align-middle">Cari Daerah</h3>
          </div>

          <div className="w-[30%]">
            <div className="border border-[#7E370C] h-[25px] text-[10px] font-semibold mx-2 my-auto rounded-2xl pl-2 py-[2px] flex">
              <div className="w-[5%]">
                <svg
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <form className="flex items-center ml-1">
                <div className="relative w-[170px] pl-4">
                  <input
                    type="text"
                    className=" h-[20px] border-none text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50 text-[11px] font-normal w-full pl-0 p-2.5 outline-0"
                    placeholder="Masukkan Daerah"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          
          <div className="w-full text-right text-[12px] flex items-end text-[#7E370C] opacity-50 justify-end">
            lihat semua
            <img className="w-[20px] h-[15px] ml-2" src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <div className="mb-[50px] w-full h-[230px] px-5 py-2  flex">  

         {
          courseDataDaerah.map((dataDaerah) => {
            return(
              <div className="h-[200px] w-[300px] bg-white my-auto rounded-2xl mx-3">
            <div className="h-[50%] bg-gradient-to-b from-[#ffce45] rounded-t-2xl w-full">
            <img src={Coba} className="object-cover w-full h-full rounded-t-2xl opacity-75"></img>
            </div>
            <div className="bg-[#7E370C] h-[50%] rounded-b-2xl w-full px-3 py-1 text-white z-100">
              <h3 className=" font-medium text-[17px]">{dataDaerah.title}</h3>
              <p className="text-[8px]">{dataDaerah.description}</p>
              
                <NavLink to={'/deskripsi/' + dataDaerah.id}>
              <div className="w-[120px] h-[15px] mt-[8px] rounded-full text-[10px] my-auto text-center text-[#7E370C] font-medium bg-[#FFCE45] hover:scale-95 hover:duration-300 cursor-pointer">
            Pelajari sekarang
             </div>
             </NavLink>
        
            </div>
          </div>
            )
          })
         }        
          
        </div>
      </div>
      
      <div className="min-w-full h-[290px]">
        <div className="h-[28px] w-[94%] m-auto flex">
          <div className="w-[12%] align-middle pl-0">
            <h3 className="text-[#7E370C] my-auto align-middle">Cari Tarian</h3>
          </div>

          <div className="w-[30%]">
            <div className="border border-[#7E370C] h-[25px] text-[10px] font-semibold mx-2 my-auto rounded-2xl pl-2 py-[2px] flex">
              <div className="w-[5%]">
                <svg
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <form className="flex items-center ml-1">
                <div className="relative w-[170px] pl-4">
                  <input
                    type="text"
                    className=" h-[20px] border-none text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50 text-[11px] font-normal w-full pl-0 p-2.5 outline-0"
                    placeholder="Masukkan Daerah"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          
          <div className="w-full text-right text-[12px] flex items-end text-[#7E370C] opacity-50 justify-end">
            lihat semua
            <img className="w-[20px] h-[15px] ml-2" src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <div className="mb-[50px] w-full h-[230px] px-5 py-2  flex">         
         
        {
          courseDataTarian.map((dataTarian) => {
            return(
              <div className="h-[200px] w-[300px] bg-white my-auto rounded-2xl mx-3">
            <div className="h-[50%] bg-gradient-to-b from-[#ffce45] rounded-t-2xl w-full">
            <img src={Coba} className="object-cover w-full h-full rounded-t-2xl opacity-75"></img>
            </div>
            <div className="bg-[#7E370C] h-[50%] rounded-b-2xl w-full px-3 py-1 text-white z-100">
              <h3 className=" font-medium text-[17px]">{dataTarian.title}</h3>
              <p className="text-[8px]">{dataTarian.description}</p>
              <NavLink to={'/deskripsi/' + dataTarian.id}>
              <div className="w-[120px] h-[15px] mt-[8px] rounded-full text-[10px] my-auto text-center text-[#7E370C] font-medium bg-[#FFCE45] hover:scale-95 hover:duration-300 cursor-pointer">
          Pelajari sekarang
        </div>
        </NavLink>
            </div>
          </div>
            )
          })
         }       
        </div>
      </div>
      <div className="min-w-full h-[290px]">
        <div className="h-[28px] w-[94%] m-auto flex">
          <div className="w-[12%] align-middle pl-0">
            <h3 className="text-[#7E370C] my-auto align-middle">Cari Budaya</h3>
          </div>

          <div className="w-[30%]">
            <div className="border border-[#7E370C] h-[25px] text-[10px] font-semibold mx-2 my-auto rounded-2xl pl-2 py-[2px] flex">
              <div className="w-[5%]">
                <svg
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <form className="flex items-center ml-1">
                <div className="relative w-[170px] pl-4">
                  <input
                    type="text"
                    className=" h-[20px] border-none text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50 text-[11px] font-normal w-full pl-0 p-2.5 outline-0"
                    placeholder="Masukkan Daerah"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          
          <div className="w-full text-right text-[12px] flex items-end text-[#7E370C] opacity-50 justify-end">
            lihat semua
            <img className="w-[20px] h-[15px] ml-2" src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <div className="mb-[50px] w-full h-[230px] px-5 py-2  flex">         
         
        {
          courseDataBudaya.map((dataBudaya) => {
            return(
              <div className="h-[200px] w-[300px] bg-white my-auto rounded-2xl mx-3">
            <div className="h-[50%] bg-gradient-to-b from-[#ffce45] rounded-t-2xl w-full">
            <img src={Coba} className="object-cover w-full h-full rounded-t-2xl opacity-75"></img>
            </div>
            <div className="bg-[#7E370C] h-[50%] rounded-b-2xl w-full px-3 py-1 text-white z-100">
              <h3 className=" font-medium text-[17px]">{dataBudaya.title}</h3>
              <p className="text-[8px]">{dataBudaya.description}</p>
              <NavLink to={'/deskripsi/' + dataBudaya.id}>
              <div className="w-[120px] h-[15px] mt-[8px] rounded-full text-[10px] my-auto text-center text-[#7E370C] font-medium bg-[#FFCE45] hover:scale-95 hover:duration-300 cursor-pointer">
          Pelajari sekarang
        </div>
        </NavLink>
            </div>
          </div>
            )
          })
         }       
        </div>
      </div>
      <div className="min-w-full h-[290px]">
        <div className="h-[28px] w-[94%] m-auto flex">
          <div className="w-[12%] align-middle pl-0">
            <h3 className="text-[#7E370C] my-auto align-middle">Cari Bahasa</h3>
          </div>

          <div className="w-[30%]">
            <div className="border border-[#7E370C] h-[25px] text-[10px] font-semibold mx-2 my-auto rounded-2xl pl-2 py-[2px] flex">
              <div className="w-[5%]">
                <svg
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <form className="flex items-center ml-1">
                <div className="relative w-[170px] pl-4">
                  <input
                    type="text"
                    className=" h-[20px] border-none text-[#7E370C] placeholder-[#7E370C] placeholder-opacity-50 text-[11px] font-normal w-full pl-0 p-2.5 outline-0"
                    placeholder="Masukkan Daerah"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          
          <div className="w-full text-right text-[12px] flex items-end text-[#7E370C] opacity-50 justify-end">
            lihat semua
            <img className="w-[20px] h-[15px] ml-2" src={Arrow} alt="arrow"></img>
          </div>
        </div>
        <div className="mb-[50px] w-full h-[230px] px-5 py-2  flex">         
         
        {
          courseDataBahasa.map((dataBahasa) => {
            return(
              <div className="h-[200px] w-[300px] bg-white my-auto rounded-2xl mx-3">
            <div className="h-[50%] bg-gradient-to-b from-[#ffce45] rounded-t-2xl w-full">
            <img src={Coba} className="object-cover w-full h-full rounded-t-2xl opacity-75"></img>
            </div>
            <div className="bg-[#7E370C] h-[50%] rounded-b-2xl w-full px-3 py-1 text-white z-100">
              <h3 className=" font-medium text-[17px]">{dataBahasa.title}</h3>
              <p className="text-[8px]">{dataBahasa.description}</p>
              <NavLink to={'/deskripsi/' + dataBahasa.id}>
              <div className="w-[120px] h-[15px] mt-[8px] rounded-full text-[10px] my-auto text-center text-[#7E370C] font-medium bg-[#FFCE45] hover:scale-95 hover:duration-300 cursor-pointer">
          Pelajari sekarang
        </div>
        </NavLink>
            </div>
          </div>
            )
          })
         }       
        </div>
      </div>
      
        
            
          
        
     
      
    </AppLayout>
  );
};
export default Course;
