import React from 'react';
import { Fragment } from 'react';
import batch1 from '../image/batch1.png'
import batch2 from '../image/batch2.png'
import batch3 from '../image/batch3.png'
import batch4 from '../image/batch4.png'



const About = () => {
    return (
        <Fragment>
        <div className="grid lg:grid-cols-4 gap-10 text-center mt-20 ">
            <div className="grid justify-items-stretch gap-4">
                <div class="w-20 justify-self-center">
                    <img src={batch1} alt=""/>
                </div>
                <div class="grid gap-y-3">
                    <h2 class="text-xl font-bold">5 YEARS OF EXPRIENCE</h2>
                </div>
            </div>

            <div className="grid justify-items-stretch gap-4">
                <div class="w-20 justify-self-center">
                    <img src={batch2} alt=""/>
                </div>
                <div class="grid gap-y-3">
                    <h2 class="text-xl font-bold">5 YEARS OF EXPRIENCE</h2>
                </div>
            </div>

            <div className="grid justify-items-stretch gap-4">
                <div class="w-20 justify-self-center">
                    <img src={batch3} alt=""/>
                </div>
                <div class="grid gap-y-3">
                    <h2 class="text-xl font-bold">5 YEARS OF EXPRIENCE</h2>
                </div>
            </div>

            <div className="grid justify-items-stretch gap-4">
                <div class="w-20 justify-self-center">
                    <img src={batch4} alt=""/>
                </div>
                <div class="grid gap-y-3">
                    <h2 class="text-xl font-bold">5 YEARS OF EXPRIENCE</h2>
                </div>
            </div>
        </div>
                   
        </Fragment>
    );
};

export default About;