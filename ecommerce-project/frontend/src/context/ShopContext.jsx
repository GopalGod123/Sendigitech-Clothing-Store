// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext(); // This should be exported correctly

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10; // Fixed typo
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, size, quanity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quanity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            try {
                // Ensure itemId and product._id are of the same type, usually both as strings
                let itemInfo = products.find(
                    (product) => product._id === String(itemId)
                );

                if (itemInfo) {
                    for (const size in cartItems[itemId]) {
                        if (cartItems[itemId][size] > 0) {
                            totalAmount +=
                                itemInfo.price * cartItems[itemId][size];
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        return totalAmount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider; // Default export
