import UsersDetails from "../components/UsersComponents/UsersDetails";
import {Outlet} from "react-router-dom";


const UserDetailsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersDetails/>
        </div>
    );
};

export default UserDetailsPage;