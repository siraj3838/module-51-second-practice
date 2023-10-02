import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivetRoute;