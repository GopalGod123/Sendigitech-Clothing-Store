/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const fetchProductData = async () => {
            const foundProduct = products.find(
                (item) => item._id === productId
            );
            if (foundProduct) {
                setProductData(foundProduct);
                setImage(foundProduct.image[0]); // Use foundProduct instead of item
            }
        };
        fetchProductData();
    }, [productId, products]);
    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* product images  */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                alt=""
                            />
                        ))}
                    </div>
                    <div className="w-80% sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt="" />
                    </div>
                </div>
                {/* product info  */}

                <div className="flex-1 ">
                    <h1 className="font-medium text-2xl mt-2">
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img
                            src={assets.star_dull_icon}
                            alt=""
                            className="w-3 5"
                        />
                        <p className="p-2 l">(122)</p>
                    </div>
                    <p className="m-t5 text-3xl font-medium">
                        {currency}
                        {productData.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">
                        {productData.description}
                    </p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${
                                        item === size ? 'border-orange-500' : ''
                                    }`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            addToCart(productData._id, size);
                        }}
                        className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 "
                    >
                        ADD TO CART
                    </button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is availalbe on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/* decsription and review section  */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className="border px-5 py-3 text-sm">Reviews (122)</p>
                </div>
                <div className="flex flex-col mt-2 gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>
                        Sendigitech is a cutting-edge e-commerce platform that
                        revolutionizes the way you shop online. With a vast
                        array of products at your fingertips, you can browse and
                        purchase from the comfort of your own home. From fashion
                        and electronics to home goods and more, our platform
                        offers a seamless and intuitive shopping experience.
                    </p>
                    <p>
                        At Sendigitech, we're dedicated to providing a
                        hassle-free online shopping experience. Our platform is
                        designed to make it easy for you to find what you're
                        looking for, with features like user-friendly
                        navigation, detailed product descriptions, and secure
                        payment processing. Plus, with our fast and reliable
                        shipping, you can get your purchases delivered right to
                        your doorstep. Experience the future of e-commerce with
                        Sendigitech!
                    </p>
                </div>
            </div>
            {/* Display related products  */}
            <RelatedProducts
                category={productData.category}
                subCategory={productData.subCategory}
            />
        </div>
    ) : (
        <div className="opacity-0">Loading...</div>
    );
};

export default Product;
