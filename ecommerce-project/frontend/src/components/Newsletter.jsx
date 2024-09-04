// eslint-disable-next-line no-unused-vars
import React from 'react';

const Newsletter = () => {
    const onSubmitHandler = () => {
        event.preventDefault();
    };
    return (
        <div className="text-center">
            <p className="text-2xl font-medium text-gray-800">
                Subscribe now and get get 20% off
            </p>
            <p className="text-gray-400 mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                soluta ipsum error officiis non!
            </p>
            <form
                className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
                action=""
            >
                <input
                    className="w-full sm:flex-1 outline-none"
                    type="email"
                    placeholder="Enter your email"
                />
                <button
                    onSubmit={onSubmitHandler}
                    type="submit"
                    className="bg-black text-white text-xs px-10 py-4"
                >
                    {' '}
                    SUBSCRIBE{' '}
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
