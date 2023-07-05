import React from 'react';
import { Fragment } from 'react';
import class1 from '../image/yoga.png'
import class2 from '../image/crossfit.png'
import class3 from '../image/stretchhing.png'
import class4 from '../image/core.png'
import class5 from '../image/boxing.png'
import class6 from '../image/exercise.png'


const Class = () => {
    return (
        <Fragment>
            <div className='md:px-40 px-7 mt-20'>
                <div className='md:flex justify-between items-center'>
                    <h2 className='font-bold text-2xl'>CLASSES</h2>
                    <button className='border border-indigo-600 px-10 py-3'>SEE ALL CLASSES</button>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 text-center mt-20">
                    <div className="grid justify-items-stretch gap-4">
                        <div class="w-full justify-self-center">
                            <img src={class1} alt=""/>
                        </div>
                        <div class="grid gap-y-3">
                            <h2 class="text-xl font-bold">ASHTANGA YOGA</h2>
                            <p className='leading-7'>Quis autem vel eum iure reprehenderit <br /> qui in ea voluptate velit esse quam <br /> nihil molestiae consequatu</p>
                        </div>
                    </div>

                    <div className="grid justify-items-stretch gap-4">
                        <div class="w-full justify-self-center">
                            <img src={class2} alt=""/>
                        </div>
                        <div class="grid gap-y-3">
                            <h2 class="text-xl font-bold">CROSSFIT</h2>
                            <p className='leading-7'>Quis autem vel eum iure reprehenderit <br /> qui in ea voluptate velit esse quam <br /> nihil molestiae consequatu</p>
                        </div>
                    </div>

                    <div className="grid justify-items-stretch gap-4">
                        <div class="w-full justify-self-center">
                            <img src={class3} alt=""/>
                        </div>
                        <div class="grid gap-y-3">
                            <h2 class="text-xl font-bold">STRETCHING</h2>
                            <p className='leading-7'>Quis autem vel eum iure reprehenderit <br /> qui in ea voluptate velit esse quam <br /> nihil molestiae consequatu</p>
                        </div>
                    </div>

                    <div className="grid justify-items-stretch gap-4">
                        <div class="w-full justify-self-center">
                            <img src={class4} alt=""/>
                        </div>
                        <div class="grid gap-y-3">
                            <h2 class="text-xl font-bold">CORE</h2>
                            <p className='leading-7'>Quis autem vel eum iure reprehenderit <br /> qui in ea voluptate velit esse quam <br /> nihil molestiae consequatu</p>
                        </div>
                    </div>

                    <div className="grid justify-items-stretch gap-4">
                        <div class="w-full justify-self-center">
                            <img src={class5} alt=""/>
                        </div>
                        <div class="grid gap-y-3">
                            <h2 class="text-xl font-bold">BOXING</h2>
                            <p className='leading-7'>Quis autem vel eum iure reprehenderit <br /> qui in ea voluptate velit esse quam <br /> nihil molestiae consequatu</p>
                        </div>
                    </div>

                    <div className="grid justify-items-stretch gap-4">
                        <div class="w-full justify-self-center">
                            <img src={class6} alt=""/>
                        </div>
                        <div class="grid gap-y-3">
                            <h2 class="text-xl font-bold">EXERCISE</h2>
                            <p className='leading-7'>Quis autem vel eum iure reprehenderit <br /> qui in ea voluptate velit esse quam <br /> nihil molestiae consequatu</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Class;