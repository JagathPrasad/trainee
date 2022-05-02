
import './Vendors.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Vendors = () => {
  const [user_details, setUserDetails] = useState([]);
  const [bind_user, setBindUser] = useState({});
  const [user_type, setUserType] = useState('');
  const [istrue, setTrue] = useState(false);

  const [showpopup, setPopup] = useState(false);

  const Getusers = (x) => {
    axios.get('https://cometh.prelinehealthcare.com/api/admin/getactivevendors').then((res) => {
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

    const ShowDetails = (data, type) => {
      console.log('data', data);
      setBindUser(data);
      setUserType(type);
      //for different methods
      // if (type == 'view') {
      //   setUserType(type);
      // } else if (type == 'edit') {
      //   setUserType(type);
      // }else{
      // }
      
      //for handling true or false in if method
      //setTrue(true);
    }
    const RenderView = () => {
      console.log('bind', bind_user);
      return <div class="bg-gray-200 shadow overflow-hidden sm:rounded-lg side">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6  font-medium text-blue-900">Vendor </h3>
      </div>
        
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 left-top">
              <dt class="text-sm font-medium text-gray-500">Photo</dt>
              <img

                    class="w-10 h-10 rounded-full"

                    src={bind_user.photo} alt=""  />
              
            </div>
        <div class="border-t border-gray-200">
          <dl>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">ID_card</dt>
              <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                src={bind_user.identity_card}
                                alt=""
                              />
                            </div>
              {/* <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.identity_card}</dd> */}
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.name}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">      
              <dt class="text-sm font-medium text-gray-500">Mobile No</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.mobile_no}</dd>
            </div>
            
           
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Isfemaile</dt>
              {(() => {
              if (bind_user.isfemaile == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
              }
            })()}
              
            </div>
            {/* <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Attachments</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div class="w-0 flex-1 flex items-center">
  
                      <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 flex-1 w-0 truncate"> resume_back_end_developer.pdf </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                    </div>
                  </li>
                  <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div class="w-0 flex-1 flex items-center">
  
                      <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-2 flex-1 w-0 truncate"> coverletter_back_end_developer.pdf </span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>;
    }
    const RenderEdit = () => {
      return <div class="bg-white shadow overflow-hidden sm:rounded-lg w-6/12 right">
         <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 bg-gray-200 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-3 sm:px-0">
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-3">
              <form action="#" method="POST">   
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-3 py-2 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700 ">identity_card</label>
                        <img
                                class="w-full h-full rounded-full"
                                // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                src={bind_user.identity_card}
                                alt=""
                              />
                        
                      </div>
  
                      <div class="col-span-6 sm:col-span-3 ">
                        <label for="Full-name" class="block text-sm font-medium text-gray-700">Full name</label>
                        <input type="text" name="full-name" id="full-name" autocomplete="family-name" value={bind_user.name} class="mt-1 focus:ring-indigo-500  bg-gray-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-grey-300 rounded-md" />
                      </div>
  
                      <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium  text-gray-700">Mobile_no</label>
                        <input type="text" name="Phone_no" id="Mobile_No" autocomplete="mobile_No"value={bind_user.mobile_no} class="mt-1 focus:ring-indigo-500  bg-gray-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
  
                      <div class="col-span-6 sm:col-span-3">
                        <label for="Isfemaile" class="block text-sm font-medium text-gray-700">Isfemaile</label>
                        <select id="Isfemaile" name="Isfemaile" autocomplete="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <option>True</option>
                          <option>False</option>
                        
                        </select>
                      </div> 
  
                      {/* <div class="col-span-6">
                        <label for="street-address" class="block text-sm font-medium text-gray-700">User_ID</label>
                        <input type="text" name="user_id" id="user_id" autocomplete="user_id" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div> */}
  
  <div class="col-span-6 sm:col-span-4">

<label for="email-address" class="block text-sm font-medium text-gray-700">Image</label>

<div class="flex justify-center">

<div class="mb-3 w-96">

<label for="formFile" class="form-label inline-block mb-2 text-gray-700"> Select an Iamge</label>

<input class="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded

transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"></input>

</div>

</div> </div>
  
                       {/* <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="region" class="block text-sm font-medium text-gray-700">Isfemaile</label>
                         <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div> */}
  
                      {/* <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>  */}
                    </div> 
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6sm:flex sm:flex-row-reverse">
                    <button type="update" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">update</button>
                  
                    <button type="cancel" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
      </div>;
    }
    const RenderDelete = () => {
      return <div class="relative inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full deletecenter">
        <div class="bg-white px-6 pt-6 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500 text-align:center">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </div>;
    }  
  

  return (
    <div>
      

      <div class=" container mx-auto px-3 sm:px-4">
        <div class="py-3">
          <div>
            <h2 class="text-2xl font-semibold leading-tight text-left text-blue-900">VENDORS</h2>
          </div>
          <div class="-mx-4 sm:-mx-8 px-3 sm:px-8 py-3 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-8 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                    >
                      Mobile_no
                    </th>
  
                    
                    {/* <th
                      class="px-4 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                    >
                      Status
                    </th> */}
                    <th
                      class="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Action
                    </th>
                    <th
                      class="px-3 py-4 border-b-2 border-gray-200 bg-gray-100"
                    ></th>
                  </tr>
                </thead>
                
                <tbody>
                  {user_details.map((x, index) => {
                    return (
                      <tr key={index}>


                        <td class="px-2 py-4 border-b border-gray-100 bg-white text-sm ">
                          <div class="flex">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                src={x.photo}
                                alt=""
                              />
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-400 whitespace-no-wrap">
                                {x.name}
                              </p>

                            </div>
                          </div>
                        </td>
                        <td class="px-2 py-4 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">{x.mobile_no}</p>
                          {/* <p class="text-gray-600 whitespace-no-wrap">INR</p> */}
                        </td>

                        <td class="px-0 py-5 border-b border-gray-200 bg-white text-sm text-right">
                          <button onClick={() => ShowDetails(x, 'view')}>

                            <td >       

                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 24 24" stroke="blue" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />

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
                          <button onClick={() => ShowDetails(x, 'delete')}>
                            <td>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 24" stroke="red" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
     
    </div>



  )
}

export default Vendors;