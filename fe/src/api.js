import {api} from './env';

const baseApi = api();

// Authentication Routes
const general = {
    get_data: {
        method: "get",
        url: baseApi + "get-data"
    },
    post_data: {
        method: "post",
        url: baseApi + "post-data"
    },
};

export {
    baseApi,
    general
};