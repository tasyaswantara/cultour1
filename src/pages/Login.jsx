import { NavAuth } from "../components/partials/appbar/TopAppBar";
import LoginForm from "../components/Auth/LoginForm";
import Gbrorg from "../assets/images/loginHD.png"


const Login = () => {
  return (   
      <div className="xl:flex min-h-[100vh]">        
        <div className="xl:w-1/2 justify-center py-0 items-center">
        <NavAuth/>
        <LoginForm/>
        </div>
        <div className="xl:flex w-[80%] bg-[#fdbe4c] justify-around items-center min-h-full hidden">
          <img className="w-[80%] min-h-full" src={Gbrorg} alt="Man"/>
        </div>
      </div>
  );
};

export default Login;
