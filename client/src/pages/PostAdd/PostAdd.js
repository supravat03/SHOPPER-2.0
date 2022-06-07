import React, { useState } from "react";
import './PostAdd.css'
import { SuccessModal } from "../../components/Modal/SuccessModal";
import { ErrorModal } from "../../components/Modal/ErrorModal";
import { uploadProduct } from "../../core/services/api/product";

// import { socket } from "../../config/socket";


export const PostAdd = () => {

    const [PName, setPName] = useState('');
    const [PPrice, setPPrice] = useState('');
    const [PDescription, setPDescription] = useState('');
    const [PCategory, setPCategory] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [successModalShow, setSuccessModalShow] = React.useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');
    const [errorModalShow, setErrorModalShow] = React.useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');






    const convertImg = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = () => {
                reject(fileReader.error);
            }

        });
    }


    const handlePImage1 = async(e) => {
        // console.log(e.target.files[0]);
        const selectedFile = e.target.files[0];
        // setImage1(selectedFile);
        const base64img= await convertImg(selectedFile);
        setImage1(base64img.split(",")[1]);
        // console.log(image1.split(",")[1]);
    }
    const handlePImage2 = async(e) => {
        // console.log(e.target.files[0]);
        const selectedFile = e.target.files[0];
        // setImage2(selectedFile);
        const base64img= await convertImg(selectedFile);
        setImage2(base64img.split(",")[1]);

    }
    const handlePImage3 = async(e) => {
        // console.log(e.target.files[0]);
        const selectedFile = e.target.files[0];
        // setImage3(selectedFile);
        const base64img= await convertImg(selectedFile);
        setImage3(base64img.split(",")[1]);

    }

    const handlePName = (e) => {
        const { value } = e.target
        setPName(value);
    }
    const handlePPrice = (e) => {
        const { value } = e.target
        setPPrice(value);
    }
    const handlePDescription = (e) => {
        const { value } = e.target
        setPDescription(value);
    }
    const handlePCategory = (e) => {
        const { value } = e.target;
        setPCategory(value);
    }





    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('form submitted');
        try {
            // let formData = new FormData();
            // formData.append('file', image1);
            // formData.append('file', image2);
            // formData.append('file', image3);
            // formData.append('product_name', PName);
            // formData.append('product_description', PDescription);
            // formData.append('product_price', PPrice);
            // formData.append('product_category', PCategory);
            
            if(image1 && image2 && image3){
                const object={
                    //blob images
                    image_1: image1,
                    image_2: image2,
                    image_3: image3,
                    product_name: PName,
                    product_description: PDescription,
                    product_price: PPrice,
                    product_category: PCategory
                }
                // socket.emit("add-product",object);

            
            const data = await uploadProduct(object);
            console.log(data);
            setErrorModalShow(false);
            setSuccessModalShow(true);
            setSuccessModalMessage(data.message);
            }
        } catch (error) {
            console.log(error);
            setSuccessModalShow(false);
            setErrorModalShow(true);
            setErrorModalMessage('Please try again later');

        }

    }


    return (
        <div style={{ marginTop: '100px' }}>
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-10 col-md-10 col-sm-12 col-lg-offset-2">

                        <h1> Product Details </h1>



                        <form onSubmit={handleSubmit} id="contact-form"   >

                            <div className="Product_Descriptions"></div>

                            <div className="controls">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_name">Product Name *</label>
                                            <input onChange={handlePName} value={PName} id="form_name" type="text" name="Product_name" className="form-control" placeholder="Please enter your Product Name *" required="required" data-error="Product Name is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_Product_Price">Product Price *</label>
                                            <input onChange={handlePPrice} value={PPrice} id="form_Product_Price" type="number" name="Product_price" className="form-control" placeholder="Please enter your Product Price *" required="required" data-error="Product Price is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="form_select">Select Category *</label>
                                            <select onClick={handlePCategory} id="form_select" className="form-select" aria-label="Default select example">
                                                <option defaultValue>Please Select</option>
                                                <option value="0">Women</option>
                                                <option value="1">Men</option>
                                                <option value="2">Accessories</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_Image1">Image1 *</label>
                                            <input onChange={handlePImage1} id="form_Image1" type="file" name="Image1" className="form-control" placeholder="Please enter your Image1 *" required data-error="Valid Image1 is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_Image2">Image2 *</label>
                                            <input onChange={handlePImage2} id="form_Image2" type="file" name="Image2" className="form-control" placeholder="Please enter your Image2 *" required data-error="Valid Image3 is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="form_Image3">Image3 *</label>
                                            <input onChange={handlePImage3} id="form_Image3" type="file" name="Image3" className="form-control" placeholder="Please enter your Image3 *" required data-error="Valid Image3 is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_Product_Description">Product_Description *</label>
                                            <textarea onChange={handlePDescription} value={PDescription} id="form_Product_Description" name="Product_description" className="form-control" placeholder="Product Description for me *" rows="4" required="required" data-error="Please,leave us a Product Description."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12" style={{ margin: '30px auto' }}>
                                        <input type="submit" className="btn btn-success btn-send btn-lg" value="Submit" />
                                    </div>
                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
            {/* modal */}
            <SuccessModal show={successModalShow} onHide={() =>{ setSuccessModalShow(false); window.location.reload();}}
                modalmessage={successModalMessage} />
            <ErrorModal show={errorModalShow} onHide={() => setErrorModalShow(false)}
                modalmessage={errorModalMessage} />

        </div>
    )
}