import React, { useState, useEffect } from "react";
import './Shop.css'
import { Filter } from "../../components/shop-component/filter/filter";
import { ProductCard } from "../../components/product-card/product-card";
import { getAllProducts } from "../../core/services/api/product";
import { Loader } from "../../components/Loader/Loader";
import { BufferToString } from "../../utils/product.utils";

// import { priceAscending } from "../../utils/product.utils";




export const Shop = () => {


    const [productData, setProductData] = useState([]);
    const [productWomen, setProductWomen] = useState([]);
    const [productMen, setProductMen] = useState([]);
    const [productAccessories, setProductAccessories] = useState([]);
    const [activeTab, setActiveTab] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // console.log('useEffect runs');
        const getProduct = async () => {
            try {
                const response = await getAllProducts();
            
                const data = await Promise.all(response.map(async (object) => {
                    return {
                        ...object,
                        image_1: await (BufferToString(object.image_1)),
                        image_2: await (BufferToString(object.image_2)),
                        image_3: await (BufferToString(object.image_3))
                    }
                }));
                setProductData(data);
                setProductWomen([...data.filter(product => product.product_category === 0)]);
                setProductMen([...data.filter(product => product.product_category === 1)]);
                setProductAccessories([...data.filter(product => product.product_category === 2)]);
                // console.log(productWomen);
                setLoading(false);
            } catch (error) {
                console.log("shop error", error);
                setLoading(false);
            }
        }
        getProduct();
    }, []);


    const activeTabHandler = (e) => {
        const tab = e.target.id;
        console.log('tab:', tab);
        setActiveTab(tab);
    }

    if (loading) {
        return (
            <Loader />
        )
    }




    return (

        <section className="container product-list-container" >
            <Filter
                activeTabHandler={activeTabHandler}
                activeTab={activeTab}
                setProductWomen={setProductWomen}
                setProductMen={setProductMen}
                setProductAccessories={setProductAccessories}
            />
            <div className="tab-content" >
                <div className="tab-pane fade show active" id="All">
                    <div className="row product-row">
                        {
                            productData.map((object) => {
                                return <ProductCard key={object.product_id} object={object} />
                            })
                        }
                    </div>
                </div>

                <div className="tab-pane fade " id="Women">
                    <div className="row product-row">

                        {
                            productWomen.map((object) => {
                                return <ProductCard key={object.product_id} object={object} />
                            })
                        }
                    </div>
                </div>


                <div className="tab-pane fade" id="Men">
                    <div className="row product-row">

                        {
                            productMen.map((object) => {
                                return <ProductCard key={object.product_id} object={object} />
                            })
                        }
                    </div>
                </div>


                <div className="tab-pane fade" id="Accessories">
                    <div className="row product-row">

                        {
                            productAccessories.map((object) => {
                                return <ProductCard key={object.product_id} object={object} />
                            })
                        }
                    </div>
                </div>

            </div>
        </section>

    )
}
