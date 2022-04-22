import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import './Order.css';


const Order = () => {

  const [order_details, setorderdetails] = useState([]);
  const [bind_user, setBindUser] = useState({});
    const [user_type, setUserType] = useState('');

  const GetOrder = (x) => {
    axios.get('https://cometh.prelinehealthcare.com/api/order/getallorder').then((res) => {
      console.log(res.data, 'success');
      setorderdetails(res.data);
      console.log('order_details', order_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }


  useEffect(() => {
    GetOrder();
  }, []);

  const ShowDetails = (data, type) => {
    console.log('data', data);
  setBindUser(data);
  setUserType(type);
  }

  const RenderEdit = () => {
    console.log('data', bind_user);
    return <div>

        <div class="mt-10 sm:mt-0 right">
            <div class="md:grid md:grid-cols-3  bg-gray-200 md:gap-6">

                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0">

                                        <h3 class="text-lg font-medium leading-6 text-gray-900">Order Details</h3>
                                        
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div class="grid grid-cols-3 gap-3">
                                    <div class="col-span-4 sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Address</label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" value={bind_user.address} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-3 sm:col-span-3">
                                        <label for="Item_name" class="block text-sm font-medium text-gray-700">Status</label>
                                        <input type="text" name="Item_Name" id="Item_name" autocomplete="Item_Name" value={bind_user.status} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-2">
                                        <label for="street-address" class="block text-sm font-medium text-gray-700">Amount</label>
                                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" value={bind_user.AMOUNT} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <br />
                                    <br />


                                    <div class="col-span-2">
                                        <label for="street-address" class="block text-sm font-medium text-gray-700">delivery_time</label>
                                        <input type="text" name="Amount" id="Amount" autocomplete="Amount`" value={bind_user.delivery_time} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>           
                                   



                                    <div class="col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">iscancelled</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.iscancelled}</dd>

                                    </div>

                                    <div class="col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">isconfirm</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isconfirm}</dd>
                                    </div>

                                    <div class="col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">isdaily</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isdaily}</dd>
                                    </div>

                                    <div class="col-span-2">
                                        <dt class="text-sm font-medium text-gray-500">isdelivered</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isdelivered}</dd>
                                    </div>

                                    


                                </div>
                            </div>


                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                <button class="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">Update</button>
                                <button class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>;
}


const RenderDelete = () => {
  return <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full center">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Delete account</h3>
                  <div class="mt-2">
                      <p class="text-sm text-gray-500">Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
      </div>
  </div>;
}


const RenderView = () => {
  console.log('bind', bind_user);
  return <div class="bg-white shadow overflow-hidden sm:rounded-lg right">
      <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Order Information</h3>
          
      </div>
      <div class="border-t border-gray-200b">
          <dl>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 box:bordre-box">
                  <dt class="text-sm font-medium text-gray-500">Address</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.address}</dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Amount</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.amount}</dd>
              </div>

              
              
              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">completed_days</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">let {bind_user.completed_days} = new Date(0)</dd>

              </div>

              <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">delivery_time</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.delivery_time}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">iscancelled</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.iscancelled}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">isconfirm</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isconfirm}</dd>
              </div>

              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">isdaily</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isdaily}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">isdelivered</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isdelivered}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">ismonthly</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.ismonthly}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">isrejected</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isrejected}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">isweekly</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.isweekly}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">items</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.items}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">ordertime</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.ordertime}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">reason</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.reason}</dd>
              </div>
              <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">serving</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.serving}</dd>
              </div>             

          </dl>
      </div>
  </div>;
}



    return (
      <div>
        {/* <Navbar />
          <Sidebar /> */}

        <div class=" container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight text-left text-blue-900">ORDER DETAILS</h2>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div
                class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
              >
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        class="px-15 py-6 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-purple-700 uppercase tracking-wider"
                      >
                      ADDRESS
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                      >
                        STATUS
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                      >
                        AMOUNT
                      </th>
                      
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                      >
                        ACTIONS

                      </th>
   
                      
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                  


                                    {order_details.map((x, index) => {
                                        return (
                                            <tr key={index}>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        {x.address}
                                                    </p>

                                                </div>

                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            {x.status}

                                                        </div>

                                                    </div>
                                                </td>

                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            {x.amount}

                                                        </div>

                                                    </div>
                                                </td>
                                                    
                                                    <td class="px-5 py-5 border-b border-gray-200  text-sm">
                                                    <button
                                                        type="button"
                                                        class="inline-block text-gray-500 hover:text-gray-700"
                                                        onClick={() => ShowDetails(x, 'edit')}
                                                    >
                                                        <svg class="w-6 h-6" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="darkblue!important"><path stroke-linecap="round" stroke-linejoin="round" stroke-color='green' stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="inline-block text-gray-500 hover:text-gray-700"
                                                        onClick={() => ShowDetails(x, 'delete')}
                                                    >
                                                        <svg class="w-6 h-6 dark:text-white" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" color="darkred!important"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4/>}"></path></svg>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        class="inline-block text-gray-500 hover:text-gray-700"
                                                        onClick={() => ShowDetails(x, 'view')}
                                                    >
                                                        <svg class="w-6 h-6" fill="none" stroke="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                                    </button>


                                                </td>

                                                
                                                </tr>
                                        );
                                        
                                    })}
                                    
                  </tbody>

                  
                </table>
              </div>
            </div>
            <div>{(() => {
                        switch (user_type) {
                            case "view": return RenderView();
                            case "edit": return RenderEdit();
                            case "delete": return RenderDelete();
                            default: return "";
                        }
                    })()}</div>
          </div>
        </div>
        
      </div>



    );
  }
  export default Order;