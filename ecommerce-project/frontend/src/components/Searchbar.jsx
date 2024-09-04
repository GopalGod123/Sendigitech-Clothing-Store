// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
    const { search, setSearch, showSearch, setShowSearch } =
        useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection') && showSearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setShowSearch(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [setShowSearch]);

    return showSearch && visible ? (
        <div className="border-t border-b bg-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="flex-1 outline-none bg-inherit text-sm"
                    placeholder="Search"
                    aria-label="Search"
                />
                <img
                    className="w-4"
                    src={assets.search_icon}
                    alt="Search icon"
                />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className="inline w-3 cursor-pointer"
                src={assets.cross_icon}
                alt="Close search bar"
            />
        </div>
    ) : null;
};

export default Searchbar;
