import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
    const {registrationUser} = useContext(AuthContext) 
    const handleRegistration = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        registrationUser(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="min-w-full mx-auto py-24 bg-[#1AACAC] min-h-screen">
            <div className="max-w-xl mx-auto  bg-[#EDC6B1] rounded-md">
                <h2 className="text-3xl text-center font-semibold py-5 text-[#106060]">Registration Now</h2>
                <div className="p-10">
                    <form onSubmit={handleRegistration}>
                        <input className="w-full py-2 text-center" type="text" name="name" placeholder="Enter Your Name" />
                        <br />
                        <br />
                        <input className="w-full py-2 text-center" type="email" name="email" placeholder="Enter Your Email" />
                        <br />
                        <br />
                        <input className="w-full py-2 text-center" type="password" name="password" placeholder="Enter Your Password" id="" required />
                        <br />
                        <div className="flex items-center gap-3 mt-4 mb-1">
                        <input type="checkbox" name="checkbox" id="" required /> <a className="underline text-blue-600" href="/">Terms & Condition</a>
                        </div>
                        <input className="w-full text-xl py-2 bg-[#1AACAC] text-white rounded-md" type="submit" value="Registration" />
                    </form>
                    <p className="mt-4">Already Have an Account? Please <Link to={'/login'} className="text-xl text-[#751a1a] font-semibold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;