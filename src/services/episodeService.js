import {apiService} from "./apiService";
import {urls} from "../constans";

const episodeService={
    getAll:(page)=>apiService.get(urls.episodes.base , {params:{page}})
}
export {episodeService}