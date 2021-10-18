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
    <div className="grid grid-flow-col">
          <div className="">
            <h5></h5>
            <p></p>
          </div>
          <div className="">
            <ul>
              <li className="flex flex-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Some Stuff about guarantee
              </li>
            </ul>
          </div>
        </div>
  </div>
 </div>
  )
}

  export default App;
