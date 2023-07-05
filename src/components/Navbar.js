import React, {useState} from 'react';
import { Fragment} from 'react';
import Button from './Button';
import { BsList } from "react-icons/bs";




const Navbar = () => {
    const Links = [
        {name:"ABOUT",link:'/'},
        {name:"CLASSES",link:'/'},
        {name:"REVIEWS",link:'/'},
        {name:"BLOG",link:'/'},
        {name:"CONTACT",link:'/'},
    ]
    
    let [open,setOpen] = useState(false);
    return (
        <Fragment>
        <div className='w-full mb-0 fixed top-0 left-0 md:px-40 px-7'>
        <div className='md:flex items-center justify-between  py-4 '>
            <div className='font-bold text-2xl cursor-pointer flex items-center 
            text-gray-800'>
            GYM WEB
            </div>
        
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <BsList name={open ? 'close':'menu'}></BsList>
            </div>
  
            <div className={`md:flex justify-between md:items-center md:pb-0 pb-12 absolute bg:white md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                <ul className='md:flex font-semibold' >
                {
                    Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                    ))
                }
                
                </ul>
            </div>
            <Button></Button>
        </div>
      </div>
            <div className='pt-20 md:px-40 px-7'>
                <h2 className='text-8xl font-bold leading-snug'>SMART <br />
                FITNESS</h2>
                <button className='mt-20 text-xl border border-indigo-600 px-10 py-3 bg-indigo-600 text-white'>GET FREE CLASS</button>
            </div>

        </Fragment>
    );
};

export default Navbar;