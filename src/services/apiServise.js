import axios from "axios";
import {baseURL} from "../constans/urls";

const apiServise=axios.create({baseURL})
export {apiServise}