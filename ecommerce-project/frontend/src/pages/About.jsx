/* eslint-disable no-unused-vars */
import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletter from '../components/Newsletter';
const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={' US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img
                    className="w-full md:max-w-[450px]"
                    src={assets.about_img}
                    alt=""
                />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Totam, reprehenderit! Architecto, doloremque
                        cupiditate? Commodi voluptate, dolor ex saepe natus
                        optio asperiores laboriosam eum aut odio eveniet eaque
                        vero voluptatem, error quia quidem nesciunt? Repellendus
                        fuga quo eum possimus rem totam tempore ad, sequi omnis
                        quidem dolorem ut animi quibusdam ipsum!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Totam, reprehenderit! Architecto, doloremque
                        cupiditate? Commodi voluptate, dolor ex saepe natus
                        optio asperiores laboriosam eum aut odio eveniet eaque
                        vero voluptatem, error quia quidem nesciunt? Repellendus
                        fuga quo eum possimus rem totam tempore ad, sequi omnis
                        quidem dolorem ut animi quibusdam ipsum!
                    </p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Doloribus unde quaerat blanditiis, magnam placeat
                        amet, dolor earum illo maxime, velit beatae minima
                        laboriosam voluptas quos debitis fugiat provident
                        ducimus vitae? Iusto impedit, reiciendis inventore
                        quibusdam at ex porro. Eum earum culpa illo. Laborum,
                        quidem quas?
                    </p>
                </div>
            </div>
            <div className="text-2xl py-4">
                <Title text1={'WHY'} text2={' CHOOSE US'} />
            </div>
            <div className=" flex flex-col md:flex-row text-sm mb-20">
                <div className="  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quanity Assurance</b>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore, officia odit qui, quia sed eaque minima
                        laborum vitae ea nobis consectetur est adipisci tempora
                        fuga facere aliquid praesentium voluptatibus asperiores
                        officiis ipsa commodi mollitia vel.
                    </p>
                </div>
                <div className="  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenince</b>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore, officia odit qui, quia sed eaque minima
                        laborum vitae ea nobis consectetur est adipisci tempora
                        fuga facere aliquid praesentium voluptatibus asperiores
                        officiis ipsa commodi mollitia vel.
                    </p>
                </div>
                <div className="  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service</b>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore, officia odit qui, quia sed eaque minima
                        laborum vitae ea nobis consectetur est adipisci tempora
                        fuga facere aliquid praesentium voluptatibus asperiores
                        officiis ipsa commodi mollitia vel.
                    </p>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default About;
