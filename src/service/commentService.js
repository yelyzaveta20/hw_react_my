
import {url} from "../constans/url";
import {apiService} from "./apiService";


const commentService={
    getAll:()=> apiService.get(url.comments),
    create:(data)=>apiService.post(url.comments, data)
}
export {
    commentService
}