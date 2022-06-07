import { axiosCall } from "../axios/get-data";


export const logIn=async (object)=>{
    try {
        const data= await axiosCall('post','api/user/login',object);
        return data;
    } catch (error) {
        console.log('login wrapper error: ', error);
    }
}

export const register=async (object)=>{
    try {
        const data= await axiosCall('post','api/user/register',object);
        return data;
    } catch (error) {
        console.log('login wrapper error: ', error);
    }
}


export const logOut=async ()=>{
    try {
        const data= await axiosCall('post','api/user/logout',{});
        // console.log(data);
        return data;
    } catch (error) {
        console.log('login wrapper error: ', error);
    }
}