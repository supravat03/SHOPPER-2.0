import { axiosCall, axiosCallInterceptor } from "../axios/get-data";

/**
 * 
 * @param {pagination} object 
 * @returns all_products_array
 */
export const getAllProducts=async(object)=>{
    try {
        const data= await axiosCall('get','api/product/',object);
        return data;  
    } catch (error) {
        console.log('get all products api error: ', error);       
    }

}

/**
 * 
 * @param {product_id} id 
 * @returns particular_product_data
 */
export const getProductById=async(id)=>{
    try {
        const data= await axiosCall('get',`api/product/${id}`,{});
        return data[0];    
    } catch (error) {
        console.log('get all product by id api error: ', error);       
    }

}

/**
 * 
 * @param {form_data} object 
 * @returns response
 */
export const uploadProduct=async(object)=>{
    try {
        // console.log("object",object);
        const data= await axiosCallInterceptor('post','api/product/upload',object);
        return data;
    } catch (error) {
        console.log(error);
    }
}