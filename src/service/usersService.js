import {apiService} from "./apiService";
import {url} from "../constans/urls";


const usersService={
    getAll:()=> apiService.get(url.users),
    create:(data)=>apiService.post(url.users, data)
}
export {
    usersService
}