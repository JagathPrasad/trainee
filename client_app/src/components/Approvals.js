
import Tabs from "./Tabs";
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './tabs.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Approvals = () => {
  const [pending, setItemDetails] = useState([]);
  const GetUsers = () => {
    axios.get('https://cometh.prelinehealthcare.com/api/admin/getpendingapproval').then((res) => {
        console.log(res.data, 'success');
        //setTimeout(1000)      
        setItemDetails(res.data);
        console.log('Item_details', pending);
    }).catch((error) => {
        console.log(error, 'success');
    });
    
}
useEffect(() => {
  GetUsers();
}, []);

    return (
      <div>
        <div>
          <Navbar />
            <Sidebar />
            <center>
            <div>
                        <h2 class=" text-xl font-semibold leading-tight text-center text-blue-900">PENDING APPROVAL</h2>
                    </div>
            </center>
        
        <Tabs>
          <div label="Vendor">
                
                <div class=" container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class=" text-xl font-semibold leading-tight text-center text-blue-900">VENDOR APPROVAL</h2>
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
                                            ORDER ID
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                           AMOUNT
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
                                    {/* {vendordelivery_details.map((x) => {
                                        return (
                                            <tr>

                                            </tr>

                                        );
                                    })} */}


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
            <h2 class="text-xl font-semibold leading-tight text-center text-blue-900">USER APPROVAL</h2>
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
                      ORDER ID
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                       AMOUNT
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
                  


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Tabs>
      </div>
      </div>
    );
    }
  export default Approvals;