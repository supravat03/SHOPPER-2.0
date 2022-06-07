import React from "react";
import './tablist.css'


export const Tablist = ({lists}) => {


    return (
        <div className=" tablist d-flex justify-content-around align-items-center">
           
           {
               lists.map((obj,index)=>{
                return(
                    <div key={index}>
                        {obj.title}
                    </div>
                )
               })
           }

            
        </div>
    )
}