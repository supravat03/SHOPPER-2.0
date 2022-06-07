import React from "react";


export const FilterColumn = ({ object }) => {
    // console.log(object);
    return (
        <div className="filter-col1 p-r-15 p-b-27">
            <div className="mtext-102 cl2 pb-15">
                {object.heading}
            </div>

            <ul>
                {
                    object.options.map((option,index) => {
                        return (
                            <li key={index} className="pb-6">
                                <a href={option.link} className="filter-link stext-106 trans-04">
                                    {option.name}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}




export const TagsColumn = ({ object }) => {
    return (
        <div className="filter-col4 p-b-27">
            <div className="mtext-102 cl2 pb-15">
                Tags
            </div>

            <div className="flex-w p-t-4 m-r--5">

                {
                    object.options.map((option,index) => {
                    return (
                        <a key={index} href="/" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                            {option}
                        </a>
                        )
                    })
                }


            </div>
        </div>
    )

}