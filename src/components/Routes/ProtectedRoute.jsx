import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute=()=>{
if(window.localStorage.getItem('token')){
    return <Outlet/>
}else{
    return <Navigate to="/login"/>
}
}
export default ProtectedRoute