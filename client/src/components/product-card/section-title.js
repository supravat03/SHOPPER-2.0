import React from "react";
import './section-title.css'



export const SectionTitle = ({ title }) => {
    return (
        <div className="section-title text-center ">
            <hr />
            <h2>{title}</h2>
            <hr />
        </div>
    )
}