import React, { useEffect, useState } from 'react'
import './Payment.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';


const Itemdetails = () => {
    const [item_details, setItemDetails] = useState([]);
    const GetUsers = () => {
        axios.get('https://cometh.prelinehealthcare.com/api/item/getallvendoritem/1bab575b-d40f-485a-a038-023747a29e82/48785bc4-7eb1-4eee-aaf0-13450b061f23').then((res) => {
            console.log(res.data, 'success');
            //setTimeout(1000)      
            setItemDetails(res.data);
            console.log('Item_details', item_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }

    useEffect(() => {
        GetUsers();
    }, []);


    return (
        <div>
            <Navbar />
            <Sidebar />

            <div class=" container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight text-center text-blue-900">MENU</h2>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-15 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            NAME
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            AMOUNT
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            CAPTION

                                        </th>

                                        <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                             > VENDOR 
                                        </th>
                                        <th
                                             class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                             > COUPON 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {item_details.map((x) => {
                                        return (
                                           
                                      
                                    
                                <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap font-bold">
                    {x.name}
                    </p>
                   
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap font-bold"> {x.amount} /-</p>
                
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-green-600 whitespace-no-wrap"> {x.caption}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">{x.vendor_name}</span>
                </span>
              </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{x.coupon}</p>
                  </td>
              
             
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700 bg-green-300"
                >
                  SHOW 
                </button>
              </td>
            </tr>
              )
            })}
             
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>



    )

}
export default Itemdetails