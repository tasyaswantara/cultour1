import TopAppBar from "../appbar/TopAppBar";


const AppLayout = ({ children }) => {

    return (
        <>
            <TopAppBar />
            <div className="w-full min-[100px]:w-full mx-auto md:pt-16 pt-36 ">
                {children}
            </div>
                
        </>
    );
}

export default AppLayout;
