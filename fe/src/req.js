import axios from "axios";
import {baseApi} from "./api";

/**
 * @description axios instance for ajax requests
 */
let client = axios.create({
    baseURL: baseApi,
});

export default client;