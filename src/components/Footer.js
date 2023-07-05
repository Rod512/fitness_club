import React from 'react';
import { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <div className='md:px-40 px-7 flex justify-center mt-20'>
                <div className='text-white md:flex flex-col items-center mt-[10%]'>
                  <h2 className='text-6xl font-bold pb-5'>JOIN THE CLUB</h2>
                  <p className='text-xl mb-5 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />doloremque laudantium, to</p>
                  <button className='border border-indigo-600 bg-indigo-600 px-10 py-3'>BECOME A MEEMBERE</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;