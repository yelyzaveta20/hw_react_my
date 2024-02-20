import {apiServise} from "./apiServise";
import {urls} from "../constans/urls";

const episodesServise={
    getAll:(page = '1')=>apiServise.get(urls.episode.base, {params: {page}}),
    // getById:(id)=>apiServise.get(urls.episode.getById(id))
}
export {episodesServise}