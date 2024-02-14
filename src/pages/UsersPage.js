import Users from "../components/UsersComponents/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export default UsersPage;