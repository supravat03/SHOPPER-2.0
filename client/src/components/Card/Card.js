import React from "react";


export const Card = ({img_src, card_title, card_text, muted_text }) => {
    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img_src} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{card_title}</h5>
                        <p className="card-text">
                            {card_text}
                        </p>
                        <p className="card-text"><small className="text-muted">{muted_text}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}