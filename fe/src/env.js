const env = process.env.REACT_APP_ENV;

const config = {
    dev: "http://localhost:1337/",
    stage: "",
    prod: ""
};

const api = function () {
    return config[env];
};

export {
    api,
};