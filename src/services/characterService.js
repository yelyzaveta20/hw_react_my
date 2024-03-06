import {apiService} from "./apiService";
import {urls} from "../constans";

const characterService={
    getById:(id)=>apiService.get(urls.characters.getById(id))
}
export {characterService}