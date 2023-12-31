import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const logoutHandle = () => {
        logoutUser()
            .then(() => {
                toast("Logout Successfully");
            })
            .catch(err => {
                console.log(err)
            })
    }
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>

        {!user ? <><li><NavLink to={'/login'}>Login</NavLink></li>
            <li><NavLink to={'/registration'}>Registration</NavLink></li></>
            :
            ''
        }

        {user ? <>
            <li><NavLink to={'/orders'}>Orders</NavLink></li>

            <li><NavLink to={'/profile'}>Profile</NavLink></li>
            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        </>
        :
        ''
        }
    </>
    return (
        <div className="navbar bg-[#EDC6B1]">
            <ToastContainer />
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">51 Module</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p>{user.email}</p>
                        <Link to={'/login'}><button onClick={logoutHandle} className="btn btn-ghost">Logout</button></Link>
                    </>
                        :
                        <Link to={'/login'}><button className="btn btn-ghost">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;