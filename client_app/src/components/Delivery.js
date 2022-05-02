//import Tabs from "./Tabs";
import './deliverytabs.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import popup from './popup';
import moment from 'moment';
import 'tw-elements';
//reference for date formats https://momentjs.com/



const Delivery = () => {
  const [alldelivery_details, setalldeliveryDetails] = useState([]);

  const [bind_details, setBindDetails] = useState({});

  const [user_type, setUserType] = useState('');
  // const { DateTime } = luxon;
  const [showpopup, setPopup] = useState(false);
  const [allvendor_details, setallVendorDetails] = useState([]);
  //const [show_delivery, setDelivery] = useState(false);
  // const comp = '';


  const alldeliverylist = (x) => {
    axios.get('https://cometh.prelinehealthcare.com/api/delivery/getalldelivery').then((res) => {
      console.log(res.data, 'success');
      setalldeliveryDetails(res.data);
      console.log('alldelivery_details', alldelivery_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }
  const allvendorlist = (vendorid, type) => {
    axios.get('https://cometh.prelinehealthcare.com/api/delivery/getallvendordelivery/' + vendorid).then((res) => {
      console.log(res.data, 'success');
      setallVendorDetails(res.data);
      setUserType(type);
      console.log('allvendor_details', allvendor_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }

  useEffect(() => {
    alldeliverylist();
    //allvendorlist();
  },
    []);

  const ShowDetails = (data, type) => {
    if (type == 'vendordetails') {
      console.log('a', data, type);
      allvendorlist(data, type);
    } else {
      console.log('data', data);
      setBindDetails(data);
      setUserType(type);
    }

    //comp = a;
    //crate html structure for showing details    
    // setDetails(data);
    //structure should bind in setDetails
  }

  // const renderAll = () => {
  //   //console.log('render', data);
  //   return <div><div class=" container mx-auto px-4 sm:px-8">
  //     <h1 class=" text-2xl leading-tight text-left text-blue-900">Delivery Details</h1></div>;
  //   </div>
  // }

  const RenderView = () => {
    console.log('bind', bind_details);
    return <div class="bg-gray-200 shadow overflow-hidden sm:rounded-lg drighht">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6  font-medium text-blue-900">Delivery Details </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.address}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Delivery Date</dt>
            {/* <span>{ (new Date(bind_details.delivereddate)).toLocaleDateString() }</span> */}
            {/* <span>{moment(bind_details.delivereddate).format("YYYY/MM/DD")}</span> */}
            <span>{moment(bind_details.delivereddate).format('MMMM Do YYYY, h:mm:ss a')}</span>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Amount</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.amount}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Status</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.status}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Distance</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.distance}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Daily</dt>
            {(() => {
              if (bind_details.isdaily == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
              }
            })()}
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Delivered</dt>
            {(() => {
              if (bind_details.isdelivered == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
              }
            })()}
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Monthly</dt>
            {(() => {
              if (bind_details.ismonthly == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
              }
            })()}
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Weekly</dt>
            {(() => {
              if (bind_details.isweekly == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
              }
            })()}
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Serving</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.serving}</dd>
          </div>

          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Vendor Is Active</dt>
            {(() => {
              if (bind_details.vendorisactive == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
              }
            })()}
          </div>
        </dl>
      </div>
    </div>;
  }

  const RenderDelete = () => {
    return <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Deactivate account</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
            <button type="button" onClick={() => ShowDetails()} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>;
  }

  const RenderEdit = () => {
    console.log('bind', bind_details);
    return <div>

      <div class="mt-10 sm:mt-0 righht">

        <div class="px-4 sm:px-0">
          <h3 class="text-xl font-medium leading-6 text-blue-900">Delivery Details</h3>
        </div>
        <br></br>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-gray-200 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-3 sm:col-span-4">
                    <label for="address" class="block text-sm font-medium text-gray-700"> Address</label>
                    <input type="text" name="address" id="address" autocomplete="address" value={bind_details.address} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-4 sm:col-span-3">
                    <div class="flex items-center justify-center">
                      <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                        <input type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Select a date" data-mdb-toggle="datepicker" />
                        <label for="floatingInput" class="text-gray-700">Select a date</label>
                      </div>
                    </div>

                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Status</label>
                    <select id="country" name="country" autobg-whitecomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Confirmed</option>
                      <option>Pending</option>
                      <option>Cancel</option>
                    </select>
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                    <input type="text" name="amount" id="amount" autocomplete="amount" value={bind_details.amount} class="mt-1 bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div class="col-span-3 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Daily</label>
                    <select id="country" name="country" autobg-whitecomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>

                  <div class="col-span-3">
                    <label for="distance" class="block text-sm font-medium text-gray-700">Distance</label>
                    <input type="text" name="distance" id="distance" autocomplete="distance" value={bind_details.distance} class="mt-1 bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Delivered</label>
                    <select id="country" name="country" autobg-whitecomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Weekly</label>
                    <select id="country" name="country" autobg-whitecomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Monthly</label>
                    <select id="country" name="country" autobg-whitecomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Vender Is Active</label>
                    <select id="country" name="country" autobg-whitecomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div class="col-span-3 sm:col-span-3">
                    <label for="serving" class="block text-sm font-medium text-gray-700">Serving</label>
                    <input type="text" name="serving" id="serving" autocomplete="serving" value={bind_details.serving} class="mt-1 bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </div>;
  }

  const RenderVendorView = () => {
    console.log('vendordetails', bind_details);
    return <div class=" vrighht mx-auto px-4 sm:px-15">
      <h1 class=" text-2xl font-semibold leading-tight text-left text-blue-900">All Vendor Delivery Details</h1>
      <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                  >
                    Distance
                  </th>
                  <th
                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                  >
                    Daily
                  </th>
                  <th
                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                  >
                    Serving
                  </th>
                  <th
                    class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                  >
                    Delivered
                  </th>
                </tr>
              </thead>
              <tbody>
                {allvendor_details.map((x, index) => {
                  return (
                    <tr key={index}>
                      <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">

                        <div class="flex">

                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {x.distance}
                            </p>

                          </div>
                        </div>

                      </td>
                      <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                        {/* <p class="text-gray-900 whitespace-no-wrap">{x.delivereddate}</p> */}
                        {(() => {
                          if (bind_details.isdaily == true) {
                            return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
                          } else {
                            return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
                          }
                        })()}

                      </td>
                      <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{x.serving}</p>

                      </td>
                      <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                        {(() => {
                          if (bind_details.isdelivered == true) {
                            return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
                          } else {
                            return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
                          }
                        })()}

                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
  }

  // const ShowDelete = () => {
  //   console.log('showdelete', showpopup)
  //   setPopup(true);
  // }


  // const AppReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'EDIT_Delivery': {
  //       return {
  //         ...state,
  //         deliverys: state.alldelivery_details.map((x) => {
  //           return (x.address === action.payload.address) ? action.payload : x;
  //         })
  //       };
  //     }
  //     default: {
  //       return state;
  //     }
  //   }
  // };
  // const GlobalState = ({ children }) => {
  //   const [state, dispatch] = useReducer(AppReducer, {
  //     Delivery: [
  //       { id: 'uuidv4()', name: 'Bruce Wayne', location: 'Gotham', designation: 'Bachelor' }
  //     ]
  //   });}
  //   const ShowDelete = () => {
  //     console.log('showdelete', showpopup)
  //     setPopup(true);
  // }

  return (
    <div>

      <br></br>
      <div class="w-6/12 px-4 sm:px-8">
        <h1 class=" text-2xl font-bold leading-tight text-left text-blue-900">DELIVERY</h1>


        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      DeliveryDate
                    </th>
                    <th
                      class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      class="px-4 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Action
                    </th>


                  </tr>
                </thead>
                <tbody>
                  {alldelivery_details.map((x, index) => {
                    return (
                      <tr key={index}>
                        <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                          <button onClick={() => ShowDetails(x.vendorid, 'vendordetails')}>
                            {/* onClick={() => {ShowDetails(x.order.vendorid, 'userorder')}} */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </button>
                          <div class="flex">
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {x.address}
                              </p>

                            </div>
                          </div>

                        </td>
                        <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                          {/* <p class="text-gray-900 whitespace-no-wrap">{x.delivereddate}</p> */}
                          <p class="text-gray-900 whitespace-no-wrap">{moment(x.delivereddate).format('MMMM Do YYYY, h:mm:ss a')}</p>

                        </td>
                        <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">{x.amount}</p>

                        </td>
                        <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-green-900 text-l font-bold  whitespace-no-wrap">{x.status}</p>

                        </td>

                        <td class="px-0 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <button onClick={() => ShowDetails(x, 'view')}>

                            <td >

                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 24 24" stroke="blue" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />

                              </svg>
                            </td>
                          </button>
                          <button onClick={() => ShowDetails(x, 'delete')}>
                            <td>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 24" stroke="red" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </td>
                          </button>
                          <button onClick={() => ShowDetails(x, 'edit')}>
                            <td>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </td>
                          </button>
                        </td>

                      </tr>

                    );
                  })}

                </tbody>
              </table>
            </div>
            {/* {renderAll} */}
            {/* {bind_details} */}

          </div>

          <div>{(() => {
            switch (user_type) {
              case "vendordetails": return RenderVendorView();
              case "view": return RenderView();
              case "edit": return RenderEdit();
              case "delete": return RenderDelete();
              default: return "";
            }
          })()}</div>
        </div>

      </div>
      {/* <div>
        {(() => {
          if (istrue == true) {
            return RenderView()
          }
        })()}
      </div> */}
      {/* <div> */}
      {/* {renderAll()}  */}
      {/* {
          (() => {
            (!show_delivery) ? return(<p>Hi</p>) : <p>abc</p>
          })
        }      </div> */}
      {/* {() => {
        if (!show_delivery) {
          return (<div> {comp}</div>);
        } else {
          return (<div> {comp}</div>);
        }
      }} */}
    </div>

  );

}
export default Delivery;