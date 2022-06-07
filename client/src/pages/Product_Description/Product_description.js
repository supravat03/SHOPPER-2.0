import React, { useEffect, useState } from 'react';
import './Product_description.js';

import { DisplayProduct } from '../../components/Product_Description/Display_product.js';
import { ProductDetails } from '../../components/Product_Description/Product_details.js';
import { getProductById } from '../../core/services/api/product.js';
import { Loader } from '../../components/Loader/Loader.js';
import { BufferToString } from '../../utils/product.utils.js';

export const Product_description=(props)=>{

    const [productData, setProuctData]= useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        
        const getProduct=async()=>{
            try {
                const {id}= props.match.params;
                const response= await getProductById(id);
                const data={
                    ...response,
                    image_1: await BufferToString(response.image_1),
                    image_2: await BufferToString(response.image_2),
                    image_3: await BufferToString(response.image_3),
                }
                setProuctData(data);
                // console.log(data);

                setLoading(false);
            } catch (error) {
                console.log("product_description error",error);
                setLoading(false);
            }
        }
        getProduct();

    },[props]);


    if(loading){
        return(
            <Loader />
        )
    }





    return(
        [
            <DisplayProduct key='1' product={productData} />,
            <ProductDetails key='2'  product={productData} />
        ]
    )
}