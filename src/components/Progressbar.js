import React from 'react'

function Progressbar() {
    return (
        <div>
              <div className="grid grid-cols-6">
        <div className="underline">5starts</div>
        <div className="relative h-1 my-2 col-start-3 col-end-6 ">
          <div className="absolute w-full h-full bg-gray-200"> </div>
          <div className="absolute w-3/5 h-full bg-gray-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="underline">4starts</div>
        <div className="relative h-1 my-2 col-start-3 col-end-6 ">
          <div className="absolute w-full h-full bg-gray-200"> </div>
          <div className="absolute w-2/5 h-full bg-gray-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="underline">3starts</div>
        <div className="relative h-1 my-2 col-start-3 col-end-6 ">
          <div className="absolute w-full h-full bg-gray-200"> </div>
          <div className="absolute w-full h-full bg-gray-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="underline">2starts</div>
        <div className="relative h-1 my-2 col-start-3 col-end-6 ">
          <div className="absolute w-full h-full bg-gray-200"> </div>
          <div className="absolute w-3/6 h-full bg-gray-500"></div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="underline">1starts</div>
        <div className="relative h-1 my-2 col-start-3 col-end-6 ">
          <div className="absolute w-full h-full bg-gray-200"> </div>
          <div className="absolute w-1/5 h-full bg-gray-500"></div>
        </div>
      </div>
        <br></br>
        
      <div className="grid grid-cols-3 gap-4 w-3/4 m-auto">
        <div className="border-t-4 border-gray-200 pt-4"></div>
        <div className="border-t-4 border-gray-200 pt-4 font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg></div>
        <div className="border-t-4 border-gray-200 pt-4 "></div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 w-3/4 m-auto">
        <div className="border-t-4 border-gray-200 pt-4"></div>
      
        <div className="border-t-4 border-gray-200 pt-4 font-medium"></div>
        <div className="border-t-4 border-gray-200 pt-4 "></div>
      </div>
 
        </div>
    )
}

export default Progressbar
