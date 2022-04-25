import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';


const Banner = () => {

    const [user_details, setUserDetails] = useState([]);

    const Getusers = (x) => {
        axios.get('http://cometh.prelinehealthcare.com/api/admin/getallbanner').then((res) => {
            console.log(res.data, 'success');
            setUserDetails(res.data);
            console.log('user_details', user_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }
    useEffect(() => {
        Getusers();
    },
        []);

    return (
        <div>


            <div class=" container mx-auto px-2 sm:px-4">
                <div class="py-3">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight text-left text-blue-900">Banner</h2>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-3 sm:px-8 py-3 overflow-x-auto">
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            class="px-4 py-5   border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                                        >
                                            Image
                                        </th>


                                    </tr>
                                </thead>

                                <tbody>
                                    {user_details.map((x, index) => {
                                        return (
                                            <tr key={index}>


                                                <td class="px-4 py-6 border-b border-gray-100 bg-white text-sm ">
                                                    <div class="flex">
                                                        <div class="ml-3">
                                                            <p class="text-gray-400 whitespace-no-wrap">
                                                                {x.name}
                                                            </p>

                                                        </div>
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                class="w-full h-full rounded-full"

                                                                src={x.image}
                                                                alt=""
                                                            />
                                                        </div>

                                                    </div>
                                                </td>


                                            </tr>

                                        );
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>





    )


}

export default Banner;