import React, { useEffect, useState } from 'react'
import './Payment.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import Popup from './popup';

const Itemdetails = () => {
    const [item_details, setItemDetails] = useState([]);
    const GetUsers = () => {
        axios.get('https://cometh.prelinehealthcare.com/api/item/getallvendoritem/1BAB575B-D40F-485A-A038-023747A29E82').then((res) => {
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
                            <table class=" object-left leading-normal ">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-3 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            NAME
                                        </th>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            AMOUNT
                                        </th>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            CAPTION

                                        </th>

                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {item_details.map((x) => {
                                        return (
                                           
                                      
                                    
                                <tr>
              <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap font-bold">
                    {x.name}
                    </p>
                   
                  </div>
                </div>
              </td>
              <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap font-bold"> {x.amount} /-</p>
                
              </td>
              <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-green-600 whitespace-no-wrap">{x.caption}</p>
                  </td>
                  
                  <td
                                          class="px-3 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                        >
                                          <button >
                                        
                                         <td class="bg-green-500 " >
                                       
                                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 30 24" stroke="black" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  
</svg>

</td>
</button>
<button>
<td class="bg-red-500 ">
  
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 24" stroke="black" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
</td>
</button>
<button>
<td class="bg-blue-500 ">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
</td>
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