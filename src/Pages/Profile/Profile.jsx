import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
    const {photoURL,displayName} = user || {}
    return (
        <div className="max-w-screen-xl mx-auto mt-7">
            <h3 className="text-center text-2xl font-semibold">{displayName}</h3>
            <div className="flex justify-center pt-5">
            <img className="rounded-full w-80" src={photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;