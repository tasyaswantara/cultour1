const DataStatistik = () => {
  return (
    <>
      <div className="grid-cols-3 gap-4 p-[10px] flex justify-center bg-white">
        <div className="w-[100px] h-[100px] mx-[100px] ">
          <div className="w-[100%] h-[60px] text-[30px] text-center font-bold">
            12rb+
          </div>
          <div className="w-[100%] h-[40px] text-s text-center font-bold">
            Total Siswa
          </div>
        </div>
        <div className="w-[120px] h-[100px] mx-[100px] ">
          <div className="w-[100%] h-[60px] text-[30px] text-center font-bold">
            3rb+
          </div>
          <div className="w-[100%] h-[40px] text-s text-center font-bold">
            Total Pengajar
          </div>
        </div>
        <div className="w-[120px] h-[100px] mx-[100px] ">
          <div className="w-[100%] h-[60px] text-[30px] text-center font-bold">
            40rb+
          </div>
          <div className="w-[100%] h-[40px] text-s text-center font-bold">
            Total Course
          </div>
        </div>
      </div>
    </>
  );
};
const OurCourse = () => {
  return (
    <>
      <div className="h-[100%] w-[300px] bg-white rounded-[20px] py-[40px] px-[20px] hover:bg-[#FFCE45] hover:scale-110 hover:duration-1000 hover:shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
        <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-[#7E370C]">
          Daerah
        </div>
        <div className="w-[100%] h-[120px] text-xs text-center font-medium text-[#7E370C] pt-[20px]">
          Selamat datang di kursus tentang Budaya! Kursus ini bertujuan untuk
          membantu Anda memahami budaya lebih mendalam dan menghargai keragaman
          budaya yang ada di Indonesia
        </div>
        <div className="w-[120px] h-[25px] mt-[20px] p-[3px] m-auto rounded-full text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
          Read more
        </div>
      </div>
      <div className="h-[100%] w-[300px] bg-white rounded-[20px] py-[40px] px-[20px] hover:bg-[#FFCE45] hover:scale-110 hover:duration-1000 hover:shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
        <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-[#7E370C]">
          Bahasa
        </div>
        <div className="w-[100%] h-[120px] text-xs text-center font-medium text-[#7E370C] pt-[20px]">
        Selamat datang di kursus tentang Budaya! Kursus ini bertujuan untuk membantu Anda memahami budaya lebih mendalam dan menghargai keragaman budaya yang ada di Indonesia
        </div>
        <div className="w-[120px] h-[25px] mt-[20px] p-[3px] m-auto rounded-full text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
          Read more
        </div>
      </div>
      <div className="h-[100%] w-[300px] bg-white rounded-[20px] py-[40px] px-[20px] hover:bg-[#FFCE45] hover:scale-110 hover:duration-1000 hover:shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
        <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-[#7E370C]">
          Tarian
        </div>
        <div className="w-[100%] h-[120px] text-xs text-center font-medium text-[#7E370C] pt-[20px]">
        Selamat datang di kursus tentang Budaya! Kursus ini bertujuan untuk membantu Anda memahami budaya lebih mendalam dan menghargai keragaman budaya yang ada di Indonesia
        </div>
        <div className="w-[120px] h-[25px] mt-[20px] p-[3px] m-auto rounded-full text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
          Read more
        </div>
      </div>
      <div className="h-[100%] w-[300px] bg-white rounded-[20px] py-[40px] px-[20px] hover:bg-[#FFCE45] hover:scale-110 hover:duration-1000 hover:shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
        <div className="w-[100%] h-[40px] text-[25px] text-center font-semibold text-[#7E370C]">
          Budaya
        </div>
        <div className="w-[100%] h-[120px] text-xs text-center font-medium text-[#7E370C] pt-[20px]">
        Selamat datang di kursus tentang Budaya! Kursus ini bertujuan untuk membantu Anda memahami budaya lebih mendalam dan menghargai keragaman budaya yang ada di Indonesia
        </div>
        <div className="w-[120px] h-[25px] mt-[20px] p-[3px] m-auto rounded-full text-xs text-center text-[#7E370C] font-semibold bg-[#FFCE45] hover:bg-[#7E370C] hover:text-white hover:duration-300 cursor-pointer">
          Read more
        </div>
      </div>
    </>
  );
};
const FormSearch=()=>{
  return(
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
            className="inline-flex items-center py-2.5 text-[#7E370C] px-3 ml-2 text-sm font-medium bg-[#FFCE45] rounded-lg border border-[#FFCE45] hover:bg-[#7E370C] focus:ring-4 focus:outline-none focus:ring-[#FFCE45]"
          >
            Mulai
          </button>
        </form>
  )
}

export default DataStatistik;
export { OurCourse,FormSearch};
