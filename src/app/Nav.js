import React from 'react'

export default function Nav() {
    return (
        
            <header className=" grid-span-2 bg-gray-600 border-b md:flex md:items-center md:justify-between p-8 pb-0 shadow-lg md:pb-3">
                <div className="flex items-center justify-between mb-8 md:mb-0">
                    <h1 className="leading-none underline text-white text-2xl text-grey-darkest">
                        <a className="no-underline text-grey-darkest hover:text-white" href="#">
                            Logo
                        </a>
                    </h1>

                    <a className="text-black hover:text-orange underline md:hidden" href="#">
                        <i className="fa fa-2x fa-bars"></i>
                    </a>
                </div>

                <form className="w-full md:mb-0 md:w-1/6  flex justify-end mb-8">
                    <input className="appearance-none input bg-transparent border-none w-full text-gray-700 mr-3 py-1 input px-2 leading-tight focus:outline-none" type="text" placeholder="" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                </form>
            </header>
    
    )
}