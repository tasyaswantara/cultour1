import AppLayout from "../components/partials/applayout/AppLayout";
import { NavAuth } from "../components/partials/appbar/TopAppBar";
import SignupForm from "../components/Auth/SignupForm";
import Gbrorg2 from "../assets/images/Signup.png"

const Signup = () => {
    return (
        <div className="xl:flex min-h-[100vh]">
            <div className="xl:w-1/2 justify-center py-0 items-center">
            <NavAuth/>
            <SignupForm/>
            </div>            
            <div className="xl:flex w-[80%] bg-gradient-to-t from-[#b05e27] to-[#fdbe4c] justify-around items-center min-h-full hidden">
          <img className="w-[80%] min-h-full" src={Gbrorg2} alt="Man"/>
        </div>
        </div>
    );
}

export default Signup;
