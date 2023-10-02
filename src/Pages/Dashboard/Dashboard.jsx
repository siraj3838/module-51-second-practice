import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="max-w-screen-2xl mx-auto flex justify-end">
            <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
                <li className="flex justify-center items-center">
                    <div>
                        <img className="w-24 rounded-full" src={user.photoURL} alt="" />
                    </div>
                    <h1 className="text-xl">
                        {user?.displayName}
                    </h1>
                </li>
                <li>
                    <details open>
                        <summary>

                            My Files
                        </summary>
                        <ul>
                            <li><a>

                                <Link to={'/profile'}>Your Profile</Link>
                            </a></li>
                            <li><a>

                                <Link to={'/'}>Your Projects</Link>
                            </a></li>
                            <li>
                                <details open>
                                    <summary>

                                        Settings
                                    </summary>
                                    <ul>
                                        <li><a>

                                           <Link to={'/'}>Update Profile</Link>
                                        </a></li>
                                        <li>
                                            <Link>Password and authentication</Link>
                                        </li>
                                        <li>
                                            <details open>
                                                <summary>

                                                    Others
                                                </summary>
                                                <ul>
                                                    <li><a>

                       <Link to={'/'}>Your Stars</Link>
                                                    </a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><a>
<Link to={'/'}>Set Status</Link>
                </a></li>
            </ul>
        </div>
    );
};

export default Dashboard;