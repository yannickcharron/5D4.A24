import axios from 'axios';
export default {
    install: (app, options) => {
        const axiosInstance = axios.create({
            baseURL: options.baseUrl
        });
        app.provide('axios', axiosInstance);
    }
};
