import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import {
 selProduct
} from '../features/counter/counterSlice'


export default function SliderImage()  {
      const product = useSelector(selProduct)
     
        return (
            <div>
                
                <Carousel  interval="5000" transitionTime="1000">
                    {product.photos.map((e,k)=>{
                       return  <div>
                           <img src={e.thumbnail_url} className='h-96' ></img>
                       </div>
                    })}
                </Carousel>
            </div>
        )
    };
    
    
    
