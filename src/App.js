import React from 'react';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import header from './image/header.png'
import footerimg from './image/footer.png'
import Trainer from './components/Trainer';
import Class from './components/Class';
import Footer from './components/Footer';





const App = () => {
  return (
   <Fragment>
    <div style={{
      width:'100%;',
      height: '81vh',
      backgroundRepeat: 'no-repeat',
      backgroundImage:`url(${header})`
    }}>
    <Navbar></Navbar>
    </div>
    <Trainer></Trainer>
    <Class></Class>
    <div style={{
      width:'100%',
      height:'50vh',
      backgroundRepeat:'no-repeat',
      backgroundImage:`url(${footerimg})`
    }}>
    <Footer></Footer>
    
    
    </div>
   
   </Fragment>
  );
};

export default App;