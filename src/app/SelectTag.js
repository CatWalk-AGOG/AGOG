import React, {useState} from 'react'
import { selProduct } from '../features/counter/counterSlice'
import { useSelector } from 'react-redux'


    

export default function SelectTag() {
    const selprod = useSelector(selProduct)
    const [size,useSize] = useState(0)
 
  const Target = (event)=> {
    useSize(event.target.value)
     
  }
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css" rel="stylesheet" />

            <label class=" text-left flex gap-6" >
               
                <select class="form-select block w-56 h-12" onClick={Target} >
                     {Object.values(selprod.skus).map((e,k)=>{
                         return <option key={k} value={e.quantity} >{e.size}</option>
                     })}
                     
                </select>
                <select class="form-select block w-20 h-12">
                    <option>{size}</option>
                   
                </select>
            </label>
        </div>
    )
}






