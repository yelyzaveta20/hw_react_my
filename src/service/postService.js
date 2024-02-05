import {axiosService} from "./axiosBase";
import {urls} from "../constans/urlConst";

const postService={
    getAll:()=>axiosService(urls.posts.base),
    getPostById:(id)=>axiosService(urls.posts.byId(id))
}
export {postService}