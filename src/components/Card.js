import Popup from 'reactjs-popup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config/config';

export default function One(props) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40345/related/',
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
    console.log('here',data)
    return (

        <div>
            <div className="Cards">

                <section className="text-gray-600 body-font ">
                    <a className="close" onClick={closeModal}>

                    </a>
                    <div className="container px-6 py-8 mx-auto">



                        <Popup open={open} closeOnDocumentClick onClose={closeModal}></Popup>

                        <div className="flex flex-wrap -m-8">
                            <div className=" w-52 mt-8 h-80 border-2 border-gray-400">
                                <a href="" className="block relative overflow-hidden">
                                    <div alt="ecommerce" className="object-cover object-center w-full h-52 block bg-red-200">
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 ml-44 pt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                            </li>
                                        </ul>

                                        <div>


                                            <button type="button" className="button ml-4 mt-1 p-20  " onClick={(e) => { e.preventDefault(); setOpen(o => !o) }}>

                                            </button>
                                            <Popup open={open} closeOnDocumentClick onClose={closeModal}>



                                                <div className="box-border mt-24  w-max h-80 ml-60 border-2 border-gray-400 bg-white">

                                                    <div className="compare">COMPARING</div>
                                                    <div className="flex gap-36  mt-3">
                                                        <div className="name1">Product Short Name</div>
                                                        <div className="name2">Product Short Name</div>
                                                    </div>




                                                    <div className="gmo flex gap-24 mb-1  text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <div>GMO and Pecticide-Free</div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>


                                                    <div className="genetic flex gap-16 mb-1  text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <div>Made with 100% genetic modificat</div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>



                                                    <div className="madeup flex gap-24 mb-1  text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <div>This is made up products</div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>


                                                    <div className="matter flex gap-28 mb-1  text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <div>It doesn't matters w</div>
                                                    </div>




                                                    <div className="feature flex gap-28 mb-1 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <div>Features description</div>
                                                    </div>




                                                    <div className="redux flex gap-28 ml-28 mb-1 text-sm">
                                                        <div>React hooks and redux</div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>


                                                    <div className="tailwind flex gap-28 ml-36 text-sm">
                                                        <div>react tailwind styl</div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </Popup>
                                        </div>


                                    </div>
                                </a>
                                <div className="text-gray-500 text-xs tracking-widest title-font mr-40 pl-1">CATEGORY</div>
                                <h4 className="text-gray-900 title-font text-sm font-medium pl-1">Expanded Product Name With Extra Text</h4>
                                <p className="mb-1 ml-1 pl-1">$123</p>
                                <ul class="flex pl-1">
                                    <li>
                                        <i class="fas fa-star fa-xs text-black mb-2"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                                    </li>
                                    <li>
                                        <i class="fas fa-star fa-xs text-black mb-3 mr-1"></i>
                                    </li>
                                    <li>
                                        <i class="far fa-star fa-xs text-black mb-3 mr-1"></i>
                                    </li>
                                    <li>
                                        <i class="far fa-star fa-xs text-black mb-3 mr-1"></i>
                                    </li>
                                </ul>
                                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                                <div className="mt-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}