import React, {useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import '../App.css';
import { useNavigate } from "react-router-dom";

const Address = (props) => {

    const [user_details, setUserDetails] = useState([]);

    const Getusers = (x) => {
      axios.get('https://cometh.prelinehealthcare.com/api/user/getuseraddress/1bab575b-d40f-485a-a038-023747a29e82').then((res) => {
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
             <Navbar />
            <Sidebar /> 

            <div class=" container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight text-center text-blue-900">Address</h2>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-15 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Address
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Landmark
                                        </th>                                        
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}






export default Address;