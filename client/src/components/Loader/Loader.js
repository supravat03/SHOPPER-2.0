import React from "react";
export const Loader = () => {
    return (
        <div className="d-flex justify-content-center" style={{marginTop:'200px'}}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}