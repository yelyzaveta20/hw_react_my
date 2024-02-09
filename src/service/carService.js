import {apiService} from "./apiService";
import {url} from "../constans/url";

const carService={
    getAll:()=>apiService.get(url.cars.base),
    create:(data)=>apiService.post(url.cars.base, data),
    update:(id,data)=>apiService.put(url.cars.getById(id),data),
    delete:(id)=>apiService.delete(url.cars.getById(id))
}
export {
    carService
}