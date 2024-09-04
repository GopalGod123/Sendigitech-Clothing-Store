// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProuductItem from './ProuductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);

    const [bestseller, setBestseller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestseller(bestProduct.slice(0, 5));
    }, []);
    return (
        <div className="my-10">
            <div className="text-center text-3xl py8">
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus dolore optio illo debitis quidem.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestseller.map((item, index) => (
                    <ProuductItem
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
