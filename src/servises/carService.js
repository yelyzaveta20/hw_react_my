import {apiService} from "./apiService";
import {urls} from "../constants";

const carService={
    base:()=>apiService.get(urls.cars.base),
    create:(data)=>apiService.post(urls.cars.base, data),
    update:(id,data)=>apiService.put(urls.cars.getById(id), data),
    delete:(id)=>apiService.delete(urls.cars.getById(id))
}
export {carService}