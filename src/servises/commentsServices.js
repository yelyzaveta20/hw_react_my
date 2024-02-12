import {apiService} from "./apiService";
import {urls} from "../constans/url";

const commentsServices={
    getAll:apiService.get(urls.comments.base),
    getById:(id)=>apiService.get(urls.comments.getById(id))
}
export {commentsServices}