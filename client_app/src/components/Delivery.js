import Tabs from "./Tabs";
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './deliverytabs.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Delivery = () => {
    const [vendordelivery_details, setVendordeliveryDetails] = useState([]);

    const Getvendors = (x) => {
        //alert();
        let vendor_id = '1bab575b-d40f-485a-a038-023747a29e82';
        axios.get('https://cometh.prelinehealthcare.com/api/delivery/getallvendordelivery/' + vendor_id).then((res) => {
            console.log(res, 'success');
            setVendordeliveryDetails(res.data);
            console.log('vendordelivery_details', vendordelivery_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }
    useEffect(() => {
        Getvendors();
    },
        []);


        const [userdelivery_details, setUserdeliveryDetails] = useState([]);

  const Usersdeliverylist = (x) => {
    axios.get('https://cometh.prelinehealthcare.com/api/delivery/getalluserdelivery/{user_id}').then((res) => {
      console.log(res.data, 'success');
      setUserdeliveryDetails(res.data);
      console.log('userdelivery_details', userdelivery_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }
  useEffect(() => {
    Usersdeliverylist ();
  },
    []);

    return (
      <div>
          <Navbar />
            <Sidebar />
            <center>
                <br></br>
            <h1 class=" text-2xl font-bold leading-tight text-center text-blue-900">DELIVERY</h1>
            </center>
        
        <Tabs>
          <div label="Vendor">
                
                <div class=" container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class=" text-xl font-semibold leading-tight text-center text-blue-900">VENDOR DELIVERY DETAILS</h2>
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
                                            USER NAME
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            MobileNo
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Address
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Order
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Payment
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {vendordelivery_details.map((x) => {
                                        return (
                                            <tr>

                                            </tr>

                                        );
                                    })} */}
                     <tr>
                      

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Logesh
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">980124789</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Airport Road, Bangalore</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Cake</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Paid</span>
                        </span>
                      </td>
                      </tr>
                      <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Mangai
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">990224789</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Palace Road, Bangalore</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Idli</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Pending</span>
                        </span>
                      </td>
                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>   
            </div>    
        


          </div>
          <div label="User">
          <div class=" container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-xl font-semibold leading-tight text-center text-blue-900">USER DELIVERY DETAILS</h2>
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
                      USER NAME
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      MobileNo
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Order
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {userdelivery_details.map((x) => {
                    return(
                    <tr>
                      
                    </tr>
                     
                  );})} */}
                  <tr>
                      

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Sangeetha
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">980124789</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Airport Road, Bangalore</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Pizza</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Paid</span>
                        </span>
                      </td>
                      </tr>
                      <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Mahima
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">990224789</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Palace Road, Bangalore</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Idli</p>
                        
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Pending</span>
                        </span>
                      </td>
                    </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Tabs>
      </div>
    );
    }
  export default Delivery;