import {apiService} from "./apiService";
import {urls} from "../constans";

const carService={
    getAll:()=>apiService.get(urls.cars.base),
    createCar:(data)=>apiService.post(urls.cars.base, data),
    updateCar:(id, data)=>apiService.put(urls.cars.getById(id), data),
    deleteCar:(id)=>apiService.delete(urls.cars.getById(id))
}
export {carService}