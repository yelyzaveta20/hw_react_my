import axios from "axios";
import {baseURL} from "../constans/urlConst";

const axiosService=axios.create({baseURL})
export {axiosService}