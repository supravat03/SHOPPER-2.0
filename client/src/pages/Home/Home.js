import React from "react";
import './Home.css';
import { Carosel } from "../../components/carosel/carosel";
import { ThirdContainer } from "../../components/Home-components/thirdContainer/thirdContainer";
import { SectionTitle } from "../../components/product-card/section-title";
import { Tablist } from "../../components/product-card/tablist";
import { ProductCard } from "../../components/product-card/product-card";
import { CategoryCard } from "../../components/Home-components/categoryComponent/category-card";
// import {socket} from "../../config/socket"
import { toast } from 'react-toastify';

import {io} from "socket.io-client";
 const socket= io("http://localhost:3001");


 socket.once("new-product", (message)=>{
  console.log(message);
  toast.success(message);

})
// const Hello=(...message)=>{
//     console.log(message[0]);
//     toast.success(message[0]);
//     socket.off("hello", Hello);
// }
// socket.on("hello", Hello);



export const Home=(props)=>{
   


    const productList_first=[
        { product_id: '10', image_1: '25.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        { product_id: '12', image_1: '25.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        { product_id: '15', image_1: '25.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        { product_id: '16', image_1: '25.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        
    ]
    const productList_second=[
        { product_id: '10', image_1: '9.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        { product_id: '11', image_1: '9.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        { product_id: '12', image_1: '9.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' },
        { product_id: '13', image_1: '9.jpg', option: 'Add To Cart', product_name: 'Lorem ipsum kids six', product_price: '1000' }
    ]
    const categoryList=[
        {imgPath:'./pics/category/banner-04.jpg',title:'Women',link:'#'},
        {imgPath:'./pics/category/banner-05.jpg',title:'Men',link:'#'},
        {imgPath:'./pics/category/banner-09.jpg',title:'Accessories',link:'#'}

    ]


    

    return(
        // <h1>home</h1>
        [
         <Carosel />,
         <ThirdContainer />,
        <section className="container" style={{marginBottom: '50px'}}>
            <SectionTitle title={'DAILY DEALS !'} />
            <Tablist lists={[{title:'New Arrivals'},{title:'New Arrivals'},{title:'New Arrivals'}]} />
            <div className="row product-row">
                {
                    productList_first.map((object,index)=> <ProductCard key={index} object={object} />)
                }
            </div>
            <SectionTitle title={'Top Deals !'} />
            <div className="row product-row">
                {
                    productList_second.map((object,index)=> <ProductCard key={index} object={object} />)
                }
            </div>
        </section>,

          <section className="container-fluid category">
            <div className="row">
                {
                    categoryList.map((object,index)=> <CategoryCard key={index} object={object} /> )
                }
            </div>
            </section>

        ]
    )
}