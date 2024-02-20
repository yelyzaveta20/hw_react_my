import {apiServise} from "./apiServise";
import {urls} from "../constans/urls";

const chractersServise={
    getAll:()=>apiServise.get(urls.character.base),
    getById:(id)=>apiServise.get(urls.character.getById(id))
}
export {chractersServise}