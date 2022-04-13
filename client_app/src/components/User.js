
import './user.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
  const [user_details, setUserDetails] = useState([]);

  const Getusers = (x) => {
    axios.get('https://cometh.prelinehealthcare.com/api/admin/getactiveusers').then((res) => {
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
            <h2 class="text-2xl font-semibold leading-tight text-center text-blue-900">USERS</h2>
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
                      MOBILE NO
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      USER ID
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
                  {user_details.map((x,index) => {
                    return(
                    <tr key={index}>
                      

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {x.name}
                            </p>
                           
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{x.mobile_no}</p>
                        {/* <p class="text-gray-600 whitespace-no-wrap">INR</p> */}
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{x.user_id}</p>
                        {/* <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
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
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                      >
                        <button
                          type="button"
                          class="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            class="inline-block h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                     
                  );})}


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

export default User;