import Popup from 'reactjs-popup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config/config';
import PopUp from './popDiv';

export default function One(props) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40347/related/',
            { headers: { Authorization: `${config.Token}` } }
        )
            .then(async (response) => {
                const detailsDatas = await response.data.reduce(async (memo, v, i) => {
                    const results = await memo;
                    const detailedData = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${response.data[i]}/styles`,
                        { headers: { Authorization: `${config.Token}` } })
                    return [...results, ...detailedData.data.results];
                }, []);
                return detailsDatas
            })

            .then((response) => {
                setData(response)

            })

    }, []);

    return (
        <div className="wrapper">
                 {data.map((e,key)=>{
      return(
        <div key={key}>
              <section className="text-gray-600 body-font ml-1">
     
              <div className="container px-3 mx-auto">
             
                <div className="flex flex-wrap -m-4">
     
                  <div className=" w-11/12  mt-8 h-80 border-2 border-gray-400 focus:border-blue-500">
     
                    <a href="" className="block relative overflow-hidden">
    
                      <div alt="ecommerce" className="object-cover object-center w-full h-52 block bg-gray-200">
                        
                        <div>                    
                           <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-5 mt-2 ml-44 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                        
                        <div > <PopUp/><div><img  className="-my-44 bg-local" src={e.photos[0].url}/></div> </div> 
                         
                      </div>
                      
                    </a>
    
                    <div className="text-gray-500 text-xs title-font mr-40">
                    CATEGORY
                  </div>
                  <h4 className="text-gray-900 title-font text-sm font-medium">
                    {e.name}
                  </h4>
                  <p className="mb-1 ml-1">{e.original_price}</p>
                  <ul className="flex pl-1">
                    <li>
                      <i className="fas fa-star fa-xs text-black mb-2"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-xs text-black mb-3 mr-1"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-xs text-black mb-3 mr-1"></i>
                    </li>
                  </ul>
    
                   </div>
                   </div>
    
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
                    <div className="mt-4"></div>         
              </div>
            </section>
            </div>
            )
          })}
        </div>
      );

}