import { Navigate, Outlet } from "react-router-dom"
import Home from "../../pages/Home"

const ProtectedRoute= () => {
if(window.localStorage.getItem('token')){
    return <Outlet/>
}else{
    return <Navigate to="/"/>
}
}
export default ProtectedRoute