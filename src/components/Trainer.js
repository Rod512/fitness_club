import React from 'react';
import { Fragment } from 'react';
import photo from '../image/trainer.png'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import About from './About';

const Trainer = () => {
    return (
        <Fragment>
            <div className='md:px-40 pt-20 bg-gray-300 w-full pb-10'>
                <div className='md:flex justify-center gap-14'>
                    <div>
                        <img src={photo} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-md pb-10'>ABOUT</h2>
                        <h3 className='font-bold text-5xl pb-10'>CAMPBELL CAMMY</h3>
                        <p className='pb-10 text-xl'>Crossfit, Box</p>
                        <span className='md:flex pb-10 text-xl md:gap-5'>
                            <BsTwitter/>
                            <BsFacebook/>
                            <BsInstagram/>
                        </span>
                        <p className='pb-10 leading-9 text-xl'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br /> deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse <br /> quam nihil molestiae consequatu</p>
                        <button className='border border-indigo-600 px-10 py-3'>LEARN MORE</button>
                    </div>
                </div>
                <About></About>
            </div>
        </Fragment>
    );
};

export default Trainer;