import {apiService} from "./apiService";
import {urls} from "../constans/url";

const albumsServices={
    getAll:apiService.get(urls.albums)
}
export {albumsServices}