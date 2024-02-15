import {apiService} from "./apiService";
import {urls} from "../constans/url";

const usersService={
    getAll:()=>apiService.get(urls.users.base),
    getById:(id)=>apiService.get(urls.users.getById(id)),
    getPost:(id)=>apiService.get(urls.users.getPost(id)),
    getComments:(postId)=>apiService.get(urls.comments.getComments(postId)),
    getAllComments:()=>apiService.get(urls.comments.base)
}
export {usersService}