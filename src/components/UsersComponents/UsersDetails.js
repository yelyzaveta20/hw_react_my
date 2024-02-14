import {useLoaderData, useLocation, useParams} from "react-router-dom";
// import {useState} from "react";
import UserDetails from "./UserDetails";

const UsersDetails = () => {
    // const [userDetails, setUserDetails] = useState(null)
    // const {id} = useParams();
    // const {state} = useLocation();
    const {data} = useLoaderData();


    return (
        <div>
            <UserDetails key={data.id} userDetails={data}/>
        </div>
    );
};

export default UsersDetails;