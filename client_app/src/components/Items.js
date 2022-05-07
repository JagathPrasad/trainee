import React, { useEffect, useState } from 'react'
import './Payment.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { baseUrl } from './utility/api_config';



const Items = () => {
  
  const [item_details, setItemDetails] = useState([]);
  console.log('baseUrl', baseUrl);
  const GetUsers = () => {
    axios.get(baseUrl+'item/getallvendoritem/1bab575b-d40f-485a-a038-023747a29e82').then((res) => {
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
      {/* <Navbar />
      <Sidebar /> */}

      <div class="mx-auto px-4 sm:px-8">
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
                  <div class="bg-blue-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
                    <div class="bg-blue-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-blue-500 rounded-t-lg">
                      <p class="font-bold text-white flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                        </svg>
                        MDBootstrap </p>
                      <div class="flex items-center">
                        <p class="text-white opacity-90 text-xs">15 mins ago</p>
                        <button type="button" class="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline" data-mdb-dismiss="toast" aria-label="Close"></button>
                      </div>
                    </div>
                    <div class="p-3 bg-red-600 rounded-b-lg break-words text-white">
                      Hello, world! This is a toast message.
                    </div>
                  </div>

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
export default Items