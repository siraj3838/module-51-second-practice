import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ImGoogle2 } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';

const Login = () => {
    const { loginUser, googleLogin, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const googleHandle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const githubHandle = () =>{
        githubSignIn()
        .then(res => {
            console.log(res.user)
            navigate('/')
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div className="min-w-full mx-auto py-24 min-h-screen pb-10 bg-[#2F3C7E]">
            <div className="max-w-xl mx-auto bg-[#EDC6B1] rounded-md">
                <h2 className="text-3xl text-center font-semibold py-5 text-[#2F3C7E]">Login Now</h2>
                <div className="p-10">
                    <form onSubmit={handleLogin}>
                        <input className="w-full py-2 text-center" type="email" name="email" placeholder="Enter Your Email" required />
                        <br />
                        <br />
                        <input className="w-full py-2 text-center" type="password" name="password" placeholder="Enter Your Password" id="" required />
                        <br />
                        <br />
                        <a className="text-[#2F3C7E]" href="">Forgot Password?</a>
                        <br />
                        <input className=" mt-3 w-full text-xl py-2 bg-[#2F3C7E] text-[#FBEAEB] rounded-md" type="submit" value="Login" />
                    </form>
                    <p className="mt-4">New To Our Site? Please <Link to={'/registration'} className="text-xl text-[#751a1a] font-semibold">Registration</Link></p>
                    <p className="flex gap-5 mt-5">
                        <button onClick={googleHandle}><ImGoogle2 className="bg-white text-4xl text-red-700"></ImGoogle2></button>
                        <button onClick={githubHandle}><FaGithubSquare className="bg-white text-black text-4xl"></FaGithubSquare></button>
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;