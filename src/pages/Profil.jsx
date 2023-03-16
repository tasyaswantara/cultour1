import AppLayout from "../components/partials/applayout/AppLayout";

const Profil= ()=>{
    return(
        <AppLayout>
            <div className="w-[500px] h-[500px] bg-[#7E370C] m-auto mt-[20px] text-white rounded-xl py-[20px] shadow-[8px_8px_4px_rgb(0,0,0,0.25)]">
                <h3 className="font-bold text-[30px] text-center">Profile</h3>
                <div className="w-[150px] h-[150px] rounded-full bg-slate-400 mx-auto my-[40px]"></div>
                <div className="mx-auto text-[30px] font-semibold text-center h-[50px] w-full">Tasyaswantara</div>
                <div className="w-[60%] h-[30px] mx-auto text-[16px] my-[10px] flex pl-[20px]">
                    <div className="mr-[10px]">Name :</div>
                    <div className="ml-[15px]"> Natasya Desinta Swantara</div>
                </div>
                
                <div className="w-[60%] h-[30px] mx-auto text-[16px] my-[10px] pl-[20px] flex">
                    <div className="mr-[10px]">Email :</div>
                    <div className="ml-[15px]">tasyaswantara@gmail.com</div>
                </div>
            </div>
        </AppLayout>
            
       
    )
}
export default Profil