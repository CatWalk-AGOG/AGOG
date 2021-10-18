

import Nav from "./app/Nav";
import Selector from "./app/Selector";
import SliderImage from "./app/SliderImage";
import './App.css';
import One from './components/Card';
import React, { useEffect, useState } from 'react';
import Outfit from './components/Outfit';
import axios from 'axios';
import Reviews from "./components/Reviews.js";
import Slider from "./components/Slider.js";

const App = () => {

  
  const [data, setData] = useState([])
  const [count, setCount] = useState(2);
  const [reponse, setReponse] = useState([]);
  const[counter,setCounter]=useState(0);
  useEffect(() => {
  // Met à jour le titre du document via l’API du navigateur
  
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344',{ headers: {"Authorization" : `${'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'}`} })
  .then((res)=>{
  
  
  console.log(res.data);
  setReponse(res.data.results)
  
    
  }
  
  )
  },[]);
  var addcounter=()=>{
  var a=count+2
  setCount(a)
  }
  var addhelp=()=>{
  var b= counter+1
  setCounter(b)
  }
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
        <div className="grid grid-cols-8 grid-rows-2 gap-3 min-h-screen m-3" >

            <div className="col-start-3 col-end-7 text-gray-500 flex justify-center gap-x-10 ml-16  "  >
                <div className="row-start-1 row-end-2" > RELATED PRODUCT   <One data={data} /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <One  data={data} /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <One  data={data}/> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <One  data={data}/> </div>

            </div>

            <div className="col-start-3 col-end-7 text-gray-500 flex justify-center gap-x-10 ml-16"  >



                <div className="row-start-1 row-end-2" > YOUR OUTFIT<Outfit /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <Outfit /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <Outfit /> </div>
                <div className="row-start-1 row-end-2 mt-6" >   <Outfit /> </div>

            </div>
          
   { console.log(count)}
     <Slider />
    <Reviews counter={counter} response={reponse} count={count} addcounter={()=>addcounter() } addhelp={()=>addhelp()}  />
    
        </div>
 </div>
  )
}

  export default App;

