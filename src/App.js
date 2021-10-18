import React from 'react';
import Nav from "./app/Nav";
import Selector from "./app/Selector";
import SliderImage from "./app/SliderImage";
import './App.css';

const App = () => {


  return (
 <div className='md:px-48' >
   <Nav/>
  <div className='text-xs flex justify-center py-4' >
    <p  > SITE-WIDE ANNOUNCEMENT MESSAGE!- SALE/DISCOUNT OFFER - NEWPRODUCT HIGHLIGHT </p>
  </div>
  <div className='grid grid-rows-8 gap-0 min-h-screen'>
     
    <div className=' row-span-2 grid grid-cols-12 gap-6 '>   
        <div className=' col-span-7' >
          <SliderImage  />
        </div>
          <Selector/>   
          
    </div>
    <div className=' row-span-2 bg-gray-600 h-64 ' > 
       <div></div>
       <div></div>
    </div>
  </div>
 </div>
  )
}

  export default App;
