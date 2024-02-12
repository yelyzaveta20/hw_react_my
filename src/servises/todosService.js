import {apiService} from "./apiService";
import {urls} from "../constans/url";

const todosService={
    getAll:apiService.get(urls.todos)
}
export {todosService}