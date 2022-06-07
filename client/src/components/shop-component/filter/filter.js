import React from "react";
import './filter.css'
import { FilterColumn, TagsColumn } from "./filter-column";
// import $ from 'jquery';
import { priceAscending } from "../../../utils/product.utils";

export const Filter = ({activeTabHandler,activeTab,setProductWomen,setProductMen,setProductAccessories}) => {


    const filterColumns = [
        {
            heading: 'Sort By',
            options: [
                { name: 'Default', link: '/' },
                { name: 'Popularity', link: '/' },
                { name: ' Average rating', link: '/' },
                { name: 'Latest', link: '/' },
                { name: 'Price: Low to High', link: '/',id:'LTH' },
                { name: 'Price: High to Low', link: '/',id:'HTL' },
            ]
        },
        {
            heading: 'Price',
            options: [
                { name: 'All', link: '/' },
                { name: '₹0.00 - ₹50.00', link: '/' },
                { name: '₹50.00 - ₹100.00', link: '/' },
                { name: '₹100.00 - ₹150.00', link: '/' },
                { name: '₹150.00 - ₹200.00', link: '/' },
                { name: ' ₹200.00+', link: '/' },
            ]
        },
        {
            heading: 'Color',
            options: [
                { name: 'Black', link: '/' },
                { name: 'Blue', link: '/' },
                { name: 'Grey', link: '/' },
                { name: 'Green', link: '/' },
                { name: 'Red: Low to High', link: '/' },
                { name: 'White', link: '/' },
            ]
        },
        {
            options: [
                'Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts'
            ]
        }
    ]


    // const toggleDiv = () => {
    //     $('.hidden-menu').slideToggle("slow")
    // }



    return (
        [

            <div key={"1st_ele"} className="product-list-option-container d-flex justify-content-between">
                <div className="d-flex justify-content-between nav nav-tabs" id="nav-tab" role="tablist">
                    <button onClick={activeTabHandler} id="ALL" className="option-btn" data-bs-toggle="tab" data-bs-target="#All" >All Products</button>
                    <button onClick={activeTabHandler} id="WOMEN" className="option-btn" data-bs-toggle="tab" data-bs-target="#Women" >Women</button>
                    <button onClick={activeTabHandler} id="MEN" className="option-btn" data-bs-toggle="tab" data-bs-target="#Men" >Men</button>
                    <button onClick={activeTabHandler} id="ACCESS" className="option-btn" data-bs-toggle="tab" data-bs-target="#Accessories" >Accessories</button>
                </div>
                <div className="d-flex">
                    <button type="button" className="filter" id="filter-btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Filter</button>
                    <button className="filter">Search</button>

                </div>

            </div>,

            <div key={"2nd_ele"} className="collapse " id="collapseExample" style={{transition: '700ms'}}>
                <div className="panel-filter w-100 pt-30 hidden-menu" >
                    <div className="d-flex justify-content-around wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">

                        <FilterColumn  object={filterColumns[0]} />
                        <FilterColumn  object={filterColumns[1]} />
                        <FilterColumn  object={filterColumns[2]} />
                        <TagsColumn object={filterColumns[3]} />


                    </div>
                </div>
            </div>


        ]
    )
}