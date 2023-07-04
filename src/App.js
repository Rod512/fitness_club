import React from 'react';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import header from './image/header.png'


const App = () => {
  return (
   <Fragment>
    <div className='w-full h-screen bg-no-repeat' style={{
      backgroundImage:`url(${header})`
    }}>
    <Navbar></Navbar>
    </div>
   
   </Fragment>
  );
};

export default App;