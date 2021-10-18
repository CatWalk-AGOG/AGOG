import React from 'react'

function Help({addhelp,counter}) {
 
    return (
        <div>
             <div className=" flex flex-row  " >
          <p className=' font-thin'>Helpful? </p>
      <button className='font-thin underline'  onClick={()=>addhelp()}>Yes</button>
      <p className='font-thin'>({counter}) | </p> 
       <p className='font-thin underline'>Report</p>
      </div>
      <hr className="new1"/>
        </div>
    )
}

export default Help
