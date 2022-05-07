import './house.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import popup from './popup';
import { baseUrl } from './utility/api_config';





const House = () => {
    const [house_details, setHouseDetails] = useState([]);

    const [bind_details, setBindDetails] = useState({});

    const [user_type, setUserType] = useState('');




    const houselist = (type) => {
        axios.get(baseUrl+'subscribe/gethouse/' + type).then((res) => {
            console.log(res.data, 'success');
            setHouseDetails(res.data);
            //setUserType(type);
            console.log('house_details', house_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }



    useEffect(() => {
        houselist(1);
    },
        []);

    const ShowDetails = (data, type) => {
        console.log('data', data);
        setBindDetails(data);
        setUserType(type);
    }

    const RenderView = () => {
        console.log('bind', bind_details);
        return <div class="bg-gray-200 shadow overflow-hidden sm:rounded-lg hriight">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6  font-medium text-blue-900">House</h3>
            </div>
            <div class="border-t border-gray-200">
                <dl>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Description</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.description}</dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Monday</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.mon}</dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Tuesday</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.tue}</dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Wednesday</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.wed}</dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Thursday</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.thu}</dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Friday</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.fri}</dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500"> Vendor Image</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <img
                                class="w-20 h-20 rounded-full"
                                src={bind_details.vendor_image} alt="" /></dd>
                    </div>


                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Vendor Name</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.vendor_name}</dd>
                    </div>


                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Monthly Amount</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.monthly_amount}</dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500"> Weekly Amount</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.weekly_amount}</dd>
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
              <button type="button"onClick={() => ShowDetails()} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>;
    }

    const RenderEdit = () => {
        return <div>

            <div class="mt-10 sm:mt-0 riight">

                <div class="px-4 sm:px-0">
                    <h3 class="text-xl font-medium leading-6 text-blue-900">House Details</h3>
                </div>
                <br></br>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-gray-200 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                                        <input type="text" name="description" id="description" autocomplete="description" value={bind_details.description} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-white border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-4 sm:col-span-3">
                                        <label for="monday" class="block text-sm font-medium text-gray-700"> Monday</label>
                                        <input type="text" name="monday" id="monday" autocomplete="monday" value={bind_details.mon} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-4 sm:col-span-3">
                                        <label for="tuesday" class="block text-sm font-medium text-gray-700"> Tuesday</label>
                                        <input type="text" name="tuesday" id="tueday" autocomplete="tuesday" value={bind_details.tue} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-4 sm:col-span-3">
                                        <label for="wednesday" class="block text-sm font-medium text-gray-700"> Wednesday</label>
                                        <input type="text" name="wednesday" id="wednesday" autocomplete="wednesday" value={bind_details.wed} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-4 sm:col-span-3">
                                        <label for="thursday" class="block text-sm font-medium text-gray-700"> Thursday</label>
                                        <input type="text" name="thursday" id="thursday" autocomplete="thursday" value={bind_details.thu} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-4 sm:col-span-3">
                                        <label for="friday" class="block text-sm font-medium text-gray-700"> Friday</label>
                                        <input type="text" name="friday" id="friday" autocomplete="friday" value={bind_details.fri} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address" class="block text-sm font-medium text-gray-700">Vendor Image</label>
                                        <div class="flex justify-center">
                                            <div class="mb-3 w-96">
                                                <label for="formFile" class="form-label inline-block mb-2 text-gray-700"> Select an Image</label>
                                                <input class="form-control
                     block
                     w-full
                     px-3
                     py-1.5
                     text-base
                     font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                     border border-solid border-gray-300
                     rounded
                    transition
                    ease-in-out
                      m-0
                   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"></input>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">Existing Image</dt>
                                            <img
                                                class="w-full h-full rounded-full "
                                                src={bind_details.vendor_image}
                                                alt=""
                                            />  </div>
                                    </div>

                                    <div class="col-span-4 sm:col-span-5">
                                        <label for="vendor-name" class="block text-sm font-medium text-gray-700"> Vendor Name</label>
                                        <input type="text" name="vendor-name" id="vendor-name" autocomplete="vendor-name" value={bind_details.vendor_name} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="monthly-amount" class="block text-sm font-medium text-gray-700">Monthly Amount</label>
                                        <input type="text" name="monthly-amount" id="monthly-amount" autocomplete="monthly-amount" value={bind_details.monthly_amount} class="mt-1 bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="weekly-amount" class="block text-sm font-medium text-gray-700">Weekly Amount</label>
                                        <input type="text" name="weekly-amount" id="weekly-amount" autocomplete="weekly-amount" value={bind_details.weekly_amount} class="mt-1 bg-white focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" class="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
                                <button type="submit" class="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>


        </div>;
    }

    const ChangeSubscription = (event) => {
        console.log('type', event);
        houselist(event);
        //call api by sending type
        //bind the response in setHouseDetails
    }


    return (
        <div>
            <div class="w-6/12 px-4 sm:px-8">
                <h1 class=" text-2xl font-bold leading-tight text-left text-blue-900">House</h1>
                <div className='dropposition'>
                <select onChange={(event) => ChangeSubscription(event.target.value)} name="list" id="list" accesskey="target">
                <option value='0' selected>--Select--</option>
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
            </select>
            </div>

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
                                            Vendor Name
                                        </th>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Monday to Friday Item
                                        </th>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            weekly Amount
                                        </th>
                                        <th
                                            class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                        <th
                                            class="px-4 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>


                                    </tr>
                                </thead>
                                <tbody>

                                    {house_details.map((x, index) => {
                                        return (
                                            <tr key={index}>

                                                <td class="px-2 py-3 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                class="w-full h-full rounded-full"
                                                                //src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                src={x.vendor_image}
                                                                alt=""
                                                            />
                                                        </div>

                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {x.vendor_name}
                                                            </p>

                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{x.mon}<br></br>{x.tue}<br></br>{x.wed}<br></br>{x.thu}<br></br>{x.fri}</p>

                                                </td>
                                                <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{x.weekly_amount}</p>

                                                </td>
                                                <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{x.description}</p>

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

    );

}
export default House;
