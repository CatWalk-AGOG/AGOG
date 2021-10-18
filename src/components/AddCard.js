
import React from 'react'

export default function AddCard() {
    return (
        <div >
            <section className="text-gray-600 body-font ml-1">
                <div  className="container px-4 py-4 mx-auto">
                    <div className="-mx-4">YOUR OUTFIT</div>
                    <div className="flex flex-wrap -m-4">
                        <div className=" w-11/12  mt-8 h-80 border-2 border-gray-400 focus:border-blue-500">

                            <a href="" className="block relative overflow-hidden">

                                <div  className="object-cover object-center w-full h-52 block bg-gray-200">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 pt-2 text-black ml-44 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-20 mt-14 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </a>
                            <div className="text-gray-500 text-xs title-font mr-40">CATEGORY</div>
                            <h4 className="text-gray-900 title-font text-sm font-medium">Expanded Product Name With Extra Text</h4>



                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                            <div className="mt-4">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}