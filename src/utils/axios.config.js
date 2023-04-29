import axios from "axios";

let URL;

switch (process.env.REACT_APP_ENVIRONMENT) {
    case "DEVELOPMENT":
        URL = "http://localhost:5000/";
        break;
    case "PRODUCTION":
        URL = "https://itzone-server.vercel.app";
        break;
    default:
        URL = "https://itzone-server.vercel.app";
}

const instance = axios.create({
    baseURL: URL,
});

export default instance;