import React from 'react'

function Reponse({response}) {

    let responseNullish = response ?? 'testing this repose'
    return (
       
        <div className=' bg-gray-300 felx felx-col  '>
            <p className='font-semibold '> Reponse:</p>
            <p>{responseNullish} </p>
        </div>
         
   
    )
}

export default Reponse
