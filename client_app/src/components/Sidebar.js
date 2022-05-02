import React, { useCallback, useState } from 'react';
import './sidebar.css';
import '../App.css';
import { useNavigate } from "react-router-dom";


const Sidebar = (props) => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/home`;
        navigate(path);
    }
    const routeChange1 = () => {
        let path = `/user`;
        navigate(path);
    }

    const deliverychange = () => {
        let path = `/delivery`;
        navigate(path);
    }

    const subscriptionchange = () => {
        let path = `/subscription`;
        navigate(path);
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {!isOpen ?
                (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        {/* <svg
            className="fixes z-30 flexmitems-center cursor-pointer right-10 top-6"
            fill="#2563EB"
            viewbox="0 0 100 80"
            width="40"
            height="40">
                <react width="100" height="10"></react>
                <react y="30" width="100" height="100"></react>
                <react y="60" width="100" height="100"></react>
            </svg> */}
                    </button>
                ) :
                (
                    <div className={"duration-1000 top-0 left-0 h-screen fixed bg-slate-50 w-100sidebar w-60 overflow-auto"}>
                        <hr />
                        <button class="text-xl text-blue fixed left"
                            onClick={() => setIsOpen(!isOpen)}>
                            X
                        </button>
                        <div className="center">
                            <ul >
                                {/* <p className="title">MAIN</p> */}
                                <br></br>
                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    {/* <div class="bt-group"> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>

                                    <button class="ml-4" onClick={() => { navigate('home') }}>Dashboard </button>

                                    {/* </div> */}
                                    </a>
                                </li>
                                

                                {/* <p className="title">BUSINESS</p> */}
                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('vendors') }}>Vendors</button>
                                </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>

                                    <button class="ml-4" onClick={() => { navigate('user') }}>Users</button>
                                </a>
                                </li>


                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('payment') }}>Payments</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('delivery') }}>Delivery</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('order') }}>Orders</button>
                                    </a>
                                </li>
                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('house') }}>Houses</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('subscription') }}>Subscription</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('items') }}>Items</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('approval') }}>Approval</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                    </svg>
                                    <button class="ml-4" onClick={() => { navigate('banner') }}>Banner</button>
                                    </a>
                                </li>

                                <li>
                                <a
                                 href="#"
                                 class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-100 hover:text-gray-700"
                                 >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <button class="ml-4">Logout</button>
                                    </a>
                                </li>

                            </ul>
                        </div>


                    </div>
                )
            }
        </>
    );
}
export default Sidebar;