import { axiosCall, axiosCallInterceptor } from "../axios/get-data"


export const getUserData = async (user_id) => {
    try {
        const data = await axiosCall('get', `api/user/${user_id}`, {});
        // console.log(data);
        return data;
    } catch (error) {
        console.log('get user data api error', error);
        throw error;
    }

}

/**
 * 
 * @param {string} newPassword 
 * @param {string} oldPassword 
 * @returns updated_data
 */
export const updatePassword = async (newPassword, oldPassword) => {
    try {
        const object = {
            newPassword: newPassword,
            oldPassword: oldPassword
        }
        const data = await axiosCallInterceptor('put', 'api/user/updatePassword', object);
        // console.log(data);
        if (data.error) throw data;
        return data;
    } catch (error) {
        console.log('update password api error: ', error);

    }
}


export const saveAddress = async (first_name, last_name, house_no, street, pin, state, telephone) => {
    try {
        const object = {
            first_name: first_name,
            last_name: last_name,
            house_no: house_no,
            street: street,
            pin: pin,
            state: state,
            telephone: telephone
        }

        const data= await axiosCallInterceptor('post','api/user/addAddress',object);
        if(data.error) throw data;
        return  data;

    } catch (error) {
        console.log('save address api error', error);

    }
}

export const getAllAddress=async()=>{
    try {
        const data= await axiosCallInterceptor('post','api/user/getAddress',{});
        if(data.error) throw data;
        return data;
        
    } catch (error) {
        console.log('get address api error:',error);
        
    }

}

export const deleteAddressById= async(id)=>{
    try {
        // console.log('id is',id);
        const data= await axiosCallInterceptor('delete',`api/user/address/${id}`,{});
        if(data.error) throw data;
        return data;
        
    } catch (error) {
        console.log('delete address api:',error);
        
    }
}

export const updateAddressById=async(id,first_name, last_name, house_no, street, pin, state, telephone)=>{
    try {
        const object = {
            first_name: first_name,
            last_name: last_name,
            house_no: house_no,
            street: street,
            pin: pin,
            state: state,
            telephone: telephone
        }
        const data= await axiosCallInterceptor('put',`api/user/address/${id}`,object);
        if(data.error) throw data;
        return data;
        
    } catch (error) {
        console.log('update address api error:',error);
        
    }
}