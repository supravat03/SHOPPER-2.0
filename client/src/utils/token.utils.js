import jwt_decode from "jwt-decode";
import { axiosCall } from "../core/services/axios/get-data";


/**
 *
 * @returns Access token saved in local storage
 */
export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

/**
 * remove access token from local storage
 */
export const removeAccessToken = () => {
  localStorage.removeItem("access_token");
};

/**
 *
 * @param {string} accessToken
 */
export const saveAccessToken = (accessToken) => {
  localStorage.setItem("access_token", accessToken);
};

/**
 *
 * @param {string} accessToken
 * @returns decoded_data
 */
export const decodeToken = async (accessToken) => {
  try {
    let decodedData = await jwt_decode(accessToken);
    return decodedData;
  } catch (error) {
    throw error;
  }
};

/**
 * 
 * @returns new_access_token
 */
export const getNewAccessToken = async () => {
    try {
        const data = await axiosCall('post', 'api/refresh_token',{});
        // console.log(data);
        return data.access_token;
    } catch (error) {
        console.log("get new access token error",error);
    }

}