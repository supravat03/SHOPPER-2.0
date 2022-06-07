import axios from 'axios';
// import jwt_decode from "jwt-decode";

import { getAccessToken, decodeToken } from './utils/token.utils';

// const getAccessToken = () => {
//     return localStorage.getItem('access_token');
// }


const getNewAccessToken = async () => {
    const response = await axiosCall('post', 'api/refresh_token');
    // console.log(response);
    return response.data.access_token;
}

const axiosJwt = axios.create();

axiosJwt.interceptors.request.use(async (config) => {
    // Do something before request is sent
    // console.log("interceptors");
    let currentTime = new Date().getTime();
    if (getAccessToken()) {
        let decoded = await decodeToken(getAccessToken());
        const expire = decoded.exp * 1000;
        // console.log(expire-currentTime);

        if (expire < currentTime) {
            // console.log('new access token genearted');
            const newAccessToken = await getNewAccessToken();
            // console.log("new access token ", newAccessToken );
            localStorage.setItem('access_token', newAccessToken);
            config.headers['Authorization'] = 'Bearer ' + newAccessToken;
        }
    }
    // console.log(config);
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});





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
        return response

    } catch (error) {
        console.log(error);

    }


}


const isLoggedIn=()=>{
    
}




// export {axiosJwt,getNewAccessToken,axiosCall};