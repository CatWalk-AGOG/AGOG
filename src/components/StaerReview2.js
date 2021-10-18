import React from 'react'
import moment from 'moment'
function StaerReview2({date,reviewer_name,response}) {
    return (
        <div className="col-start-1 grid grid-cols-12 ">
        <div className=" col-span-6">
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
          />
          <ul className="flex flex-row ">
            {response.map((e,key)=>(
               <li>
                 
               <i className="fas fa-star fa-sm text-black -500 mr-1 text-left"></i>
             </li>
            ))}
           
            
          </ul>
        </div>
        <div className=" col-span-6  ">
          <div className='felx felx-row grid grid-cols-8'>
            <div className='col-span-1'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            </div>
            <div  className='col-span-7 font-thin'>
            

           {reviewer_name},{moment(new Date(date)).format('MMMM DD, YYYY')}
          </div>
          </div>
          
        </div>
  
        
      </div>
    )
}

export default StaerReview2
