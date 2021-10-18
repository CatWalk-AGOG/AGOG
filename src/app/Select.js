
import SelectTag from './SelectTag.js'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
 productAsync,products,initProduct,selProduct,damnProduct
} from '../features/counter/counterSlice'
import { productsArray } from './products.js';

export default function Select() {
    const dispatch = useDispatch()
    const product = useSelector(products)
    const selProd = useSelector(selProduct) 
    
    
   

   

    return (


        <div className="sm:col-span-8 lg:col-span-7 grid  grid-rows-3 items-start gap-4">
            <div className="place-content-start">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex justify-items-start ">
                    <div className="flex items-start">

                        <svg className="text-gray-900 h-3 w-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-900 h-3 w-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-900 h-3 w-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-900 h-3 w-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>


                        <svg className="text-gray-200 h-3 w-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p className="sr-only"> out of 5 stars</p>
                    <a href="#" className=" text-xs font-medium text-indigo-600 hover:text-indigo-500">Read all reviews</a>
                </div>
            </div>
            <h5 className='' >CATEGORY</h5>
            <h2 className="text-2xl font-extrabold text-gray-900 ">
                Expanded Product
            </h2>
            <h2 className="text-2xl font-extrabold text-gray-900">
           
            </h2>


            <section aria-labelledby="information-heading" className="">
                <h3 id="information-heading" className="sr-only">Product information</h3>

                <p className="text-2xl text-gray-900">
                  
                </p>
                <h4>
                    STYLE / SELECTED STYLE
                </h4>

            </section>

            <section aria-labelledby="options-heading" className="">
                <h3 id="options-heading" className="sr-only">Product options</h3>

                <form>

                    <div>
                        <h4 className="text-sm text-gray-900 font-medium">Color</h4>

                        <fieldset className="">
                            <legend className="sr-only">
                                Choose a color
                            </legend>
                            <div className="items-center space-x-3 flex flex-row">
                                <div>
                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-green-700">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                        <p id="color-choice-0-label" className="sr-only">
                                            green
                                        </p>
                                        <span aria-hidden="true" className="h-16 w-16 bg-green-700 border border-black border-opacity-10 rounded-full" onClick={()=>dispatch(initProduct(product[0])) } ></span  >
                                    </label>


                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-non ring-yellow-900">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                        <p id="color-choice-0-label" className="sr-only">
                                            Brown
                                        </p>
                                        <span aria-hidden="true" className="h-16 w-16 bg-yellow-900 border border-black border-opacity-10 rounded-full" onClick={()=>dispatch(initProduct(product[1]))}   ></span  >
                                    </label>
                                </div>
                                <div>
                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-blue-700">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                        <p id="color-choice-0-label" className="sr-only">
                                            Blue
                                        </p>
                                        <span aria-hidden="true" className="h-16 w-16 bg-blue-700 border border-black border-opacity-10 rounded-full" onClick={()=>dispatch(initProduct(product[2]))}   ></span>
                                    </label>


                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-600">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                        <p id="color-choice-0-label" className="sr-only">
                                            Red 
                                        </p>
                                        <span aria-hidden="true" className="h-16 w-16 bg-red-600 border border-black border-opacity-10 rounded-full" onClick={()=>dispatch(initProduct(product[3]))}  ></span>
                                    </label>
                                </div>
                                <div>
                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                        <p id="color-choice-0-label" className="sr-only">
                                            White
                                        </p>
                                        <span aria-hidden="true" className="h-16 w-16 bg-gray-400 border border-black border-opacity-10 rounded-full" onClick={()=>dispatch(initProduct(product[4]))} ></span>
                                    </label>

                                    <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                                        <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                        <p id="color-choice-0-label" className="sr-only">
                                            gray
                                        </p>
                                        <span aria-hidden="true" className="h-16 w-16 bg-gray-700 border border-black border-opacity-10 rounded-full" onClick={()=>dispatch(initProduct(product[5]))} ></span>
                                    </label>
                                </div>
                                
                        


                            </div>
                        </fieldset>
                    </div>

                </form>

            </section>
            <SelectTag />
            <label class=" text-left flex gap-6 " >
                <button type="submit" className={` w-60 border border-transparent rounded-md border-gray-200  flex items-center gap-28 h-12 text-base font-medium text-black hover:bg-gray-700 `}><p className="m-2 " >Add to bag</p> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" cliprule="evenodd" />
                </svg></button>
                <select class="form-select block w-16 h-12">
                    <option>1</option>
                    
                    </select>
              </label>
          
        </div>
    )
}