import TopAppBar from "../appbar/TopAppBar";


const AppLayout = ({ children }) => {

    return (
        <>
            <TopAppBar />
            <div className="md:container md:mx-auto pt-16 ">
                {children}
            </div>
                
        </>
    );
}

export default AppLayout;
