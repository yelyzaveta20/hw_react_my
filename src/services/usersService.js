import {apiService} from "./apiService";
import {urls} from "../constans/url";

const usersService={
    getAll:()=>apiService.get(urls.users.base),
    getById:(id)=>apiService.get(urls.users.getById(id)),
    getPost:(id)=>apiService.get(urls.users.getPost(id))
}
export {usersService}