import axios from "axios";
import { getAccessToken, decodeToken, getNewAccessToken } from "../../../utils/token.utils";

/**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {object} obj 
 * @returns fatched_data
 */
const axiosCall = async (method, url, obj) => {
    axios.defaults.withCredentials = true;
    try {
        if (getAccessToken()) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getAccessToken();
        }

        const config = {
            method: method,
            url: `http://localhost:3001/${url}`,
            data: obj
        };

        const response = await axios(config, { withCredentials: true });
        const data = response.data;
        return data;

    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);

    }


}








const axiosJwt = axios.create();

axiosJwt.interceptors.request.use(async (config) => {
    // Do something before request is sent
    console.log("interceptors called");
    let currentTime = new Date().getTime();
    if (getAccessToken()) {
        let decoded = await decodeToken(getAccessToken());
        const expire = decoded.exp * 1000;
        // console.log(expire-currentTime);
        if (expire < currentTime) {
            console.log('new access token genearted');
            const newAccessToken = await getNewAccessToken();
            // console.log("new access token ", newAccessToken );
            localStorage.setItem('access_token', newAccessToken);
            // config.headers['Authorization'] = 'Bearer ' + newAccessToken;
        }
        config.headers['Authorization'] = 'Bearer ' + getAccessToken();
        
    }
    // console.log(config);
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});








  const axiosCallInterceptor = async (method, url, obj) => {
    // axios.defaults.withCredentials = true;
    try {
        if (getAccessToken()) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + getAccessToken();
        }

        const config = {
            method: method,
            url: `http://localhost:3001/${url}`,
            data: obj
        };

        const response = await axiosJwt(config, { withCredentials: true });
        const data = response.data;
        // console.log('response',data);
        return data;

    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);

    }


}


export { axiosJwt, axiosCall,axiosCallInterceptor };
