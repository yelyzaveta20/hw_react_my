import axios from "axios";

import {baseURL} from "../constans/url";

const apiService=axios.create({baseURL})
export {apiService}