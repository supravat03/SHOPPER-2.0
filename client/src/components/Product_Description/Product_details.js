import React from "react";
import './Product_details.css'
import { Card } from "../Card/Card";



export const ProductDetails = () => {
    return (
        <section className="product-description">
            <div className="container product-description-container">
                <ul className="nav nav-tabs d-flex justify-content-center align-items-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#description" type="button"
                            role="tab" aria-controls="home" aria-selected="true">Description</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#additional" type="button"
                            role="tab" aria-controls="profile" aria-selected="false">Additional information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#review" type="button"
                            role="tab" aria-controls="contact" aria-selected="false">Review</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium facere dolore molestias accusamus.
                            Officia saepe minima repudiandae architecto quisquam. Doloribus laborum deleniti, fugiat provident eius fuga
                            natus commodi ducimus incidunt.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero velit vel praesentium facilis provident,
                            vitae,
                            explicabo quos ea similique ad magnam repellat incidunt sint minus quam earum cum porro est.
                            Doloribus vitae velit, saepe architecto aliquid inventore totam veniam et, consequatur dolores libero
                            eveniet
                            obcaecati repellat quisquam maxime? Dolorum ullam eos laboriosam enim totam fugiat iusto voluptas, molestiae
                            quas fugit!
                            Magnam consectetur, culpa impedit facilis porro aliquid cum, saepe dolor temporibus eius explicabo commodi
                            beatae illum numquam inventore maiores iste quibusdam soluta. Vero placeat reprehenderit in autem vel. Modi,
                            temporibus!
                        </p>
                    </div>
                    <div className="tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-tab">
                        <p>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit quaerat amet quidem cum quia
                            maiores atque corporis? Officia minus minima rerum commodi distinctio porro nulla nemo provident saepe
                            animi?
                            Suscipit quas exercitationem natus voluptatum, amet cupiditate reiciendis dolores tenetur facilis. Libero
                            vero magni, tempora distinctio esse illo, ipsam autem officia nesciunt, incidunt suscipit temporibus nulla
                            placeat aspernatur voluptas natus?
                        </p>
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div className="d-flex  align-items-center justify-content-center review-tab">



                            {/* <!-- Card --> */}
                            <Card img_src={"./pics/gallery-09.jpg"} card_title={"Card title"}
                                card_text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime, dolorum nulla adipisci magni omnis, sed commodi numquam quidem error voluptatum! Consequatur pariatur error delectus impeditvero. Nisi, adipisci dolor? "
                                } muted_text={"Last updated 3 mins ago"}
                            />
                            {/* <!-- Card --> */}

                            <Card img_src={"./pics/gallery-06.jpg"} card_title={"Card title"}
                                card_text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime, dolorum nulla adipisci magni omnis, sed commodi numquam quidem error voluptatum! Consequatur pariatur error delectus impeditvero. Nisi, adipisci dolor? "
                                } muted_text={"Last updated 3 mins ago"}
                            />

                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}