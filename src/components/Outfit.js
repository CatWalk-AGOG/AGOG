import React, { useEffect, useState } from 'react';
import AddCard from "./AddCard";
import axios from 'axios';
import config from '../config/config';

export default function Outfit() {
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
    return (
        <div className="wrapper">
            <div className="-my-6 row-start-1 row-end-2 text-gray-500">

                <AddCard />
            </div>
            {data.map((e, key) => {
                return (
                    <div key={key}>
                        <section className="text-gray-600 body-font">
                            <div className="container px-3 py-4 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    <div className=" w-11/12  mt-8  border-2 border-gray-400 focus:border-blue-500">

                                        <a href="" className="block relative overflow-hidden">

                                            <div alt="ecommerce" className="object-cover object-center w-full h-52 block bg-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 h-7 w-7 pt-2 text-black ml-44" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div><img src={e.photos[0].url} /></div>
                                            </div>
                                        </a>
                                        <div className="text-gray-500 text-xs title-font mr-40">CATEGORY</div>
                                        <h4 className="text-gray-900 title-font text-sm font-medium">{e.name}</h4>
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

                                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                                        <div className="mt-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )




            })}
        </div>
    )



}