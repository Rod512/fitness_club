import React from 'react';
import { Fragment } from 'react';

const Button = () => {
    return (
        <Fragment>
            <div className='font-semibold '>
                <button className='border border-indigo-600 mr-5 py-2 px-5'>BUY MEMBERSHIP</button>
                <button className='border border-indigo-600 bg-indigo-600 text-white py-2 px-5 md:my-0 my-5'>BOOK CLASSES</button>
            </div>
        </Fragment>
    );
};

export default Button;