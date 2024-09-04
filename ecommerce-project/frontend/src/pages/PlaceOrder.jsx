// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate } = useContext(ShopContext);
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
            {/* Left Side */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <Title text1="DELIVERY" text2="INFORMATION" />
                <div className="flex gap-3">
                    <input
                        type="text"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Last name"
                    />
                </div>
                <input
                    type="email"
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Email"
                />
                <input
                    type="text"
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Street"
                />
                <div className="flex gap-3">
                    <input
                        type="text"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="City"
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="State"
                    />
                </div>
                <div className="flex gap-3">
                    <input
                        type="number"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Number"
                    />
                    <input
                        type="text"
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        placeholder="Country"
                    />
                </div>
                <input
                    type="number"
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    placeholder="Phone"
                />
            </div>

            {/* Right Side */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title text1="PAYMENT" text2="METHOD" />
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div
                            onClick={() => setMethod('stripe')}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${
                                    method === 'stripe' ? 'bg-green-400' : ''
                                }`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.stripe_logo}
                                alt=""
                            />
                        </div>
                        <div
                            onClick={() => setMethod('razorpay')}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${
                                    method === 'razorpay' ? 'bg-green-400' : ''
                                }`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.razorpay_logo}
                                alt=""
                            />
                        </div>
                        <div
                            onClick={() => setMethod('cod')}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${
                                    method === 'cod' ? 'bg-green-400' : ''
                                }`}
                            ></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">
                                CASH ON DELIVERY
                            </p>
                        </div>
                    </div>

                    <div className="w-full text-end mt-8">
                        <button
                            onClick={() => navigate('/orders')}
                            className="bg-black text-white text-sm my-8 px-16 py-3"
                        >
                            {' '}
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
