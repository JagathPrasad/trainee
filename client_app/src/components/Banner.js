
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import { useNavigate } from "react-router-dom";


const Banner = () => {

    const [banner_details, setBannerDetails] = useState([]);
    const [bind_user, setBindUser] = useState({});
    const [user_type, setUserType] = useState('');    

    const Getbanner = (x) => {
        axios.get('http://cometh.prelinehealthcare.com/api/admin/getallbanner').then((res) => {
            console.log(res.data, 'success');
            setBannerDetails(res.data);
            console.log('banner_details', banner_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }
    useEffect(() => {
        Getbanner();
    },
        []);

        let navigate = useNavigate();

  const routeadd = () => {

    let path = `/BannerAdd`;

    navigate(path);

  }

        const ShowDetails = (data, type) => {
            console.log('data', data);
            setBindUser(data);
            setUserType(type);
            
          }

        const RenderView = () => {
            console.log('bind', bind_user);
            return <div class="bg-gray-200 shadow overflow-hidden sm:rounded-lg side">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6  font-medium text-blue-900">Banner </h3>
            </div>
              
              <div class="border-t border-gray-200">
                <dl>
                
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_user.name}</dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 left-top">
                    <dt class="text-sm font-medium text-gray-500">Image</dt>
                    <img
      
                          class="w-10 h-10 rounded-full"
      
                          src={bind_user.image} alt=""  />
                    
                  </div>

                 
                </dl>
              </div>
            </div>;
          }
          const RenderEdit = () => {
            console.log('bind', bind_user);
            return <div class="mt-4 md:mt-0 md:col-span-3 right">
                
                  <form action="#" method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-2 py-3 bg-gray-200 sm:p-5">
                        <div class="grid grid-cols-0 gap-0">
                          <div class="col-span-4 sm:col-span-4">
                            <label for="address" class="block text-sm font-medium text-gray-700"> Full Name</label>
                            <input type="text" name="full name" id="fullname" autocomplete="name" value={bind_user.name} class="mt-1  focus:ring-indigo-500 bg-white focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                          </div>
        
                          <div class="col-span-3 sm:col-span-3">
                              <label for="image" class="block text-sm font-medium text-gray-700 ">Image</label>
                              <img
                                      class="w-full h-full rounded-full"
                                      
                                      src={bind_user.image}
                                      alt=""
                                    />
                              
                            </div>
        </div>
     
        <div class="px-3 py-4 bg-gray-50 text-right sm:px-4sm:flex sm:flex-row-reverse">
                          <button type="update" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">update</button>
                        
                          <button type="cancel" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">cancel</button>
                        </div>
                    </div>
                    </div>
                  </form>
                </div>
         
        
        
            ;
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


            <div class=" container mx-auto px-4     sm:px-5">
                <div class="py-5">
                    <div>
                      
                        <h2 class="text-2xl font-semibold leading-tight text-left text-blue-900">Banner</h2>
                    </div>
                    <div class="-mx-4 sm:-mx-8 px-3 sm:px-8 py- overflow-x-auto">
                   
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            class="px-4 py-5   border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-500 uppercase tracking-wider"
                                        >
                                            Image
                                        </th>
                                         <th
                      class="px-3 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Action
                    </th>            </tr>
                                </thead>

                                <tbody>
                                    {banner_details.map((x, index) => {
                                        return (
                                            <tr key={index}>


                                                <td class="px-4 py-6 border-b border-gray-100 bg-white text-sm ">
                                                    <div class="flex">
                                                        <div class="ml-3">
                                                            <p class="text-gray-400 whitespace-no-wrap">
                                                                {x.name}
                                                            </p>

                                                        </div>
                                                      </div>
                                                </td>
                                                <td class="px-4 py-6 border-b border-gray-100 bg-white text-sm ">
                                                    <div class="flex">
                                                    <div class="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                class="w-full h-full rounded-full"

                                                                src={x.image}
                                                                alt=""
                                                            />
                                                        </div>              
  </div>
                                                </td>
                                                <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm text-right">
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
                        <button type="Add"  onClick={routeadd}  class="inline-flex justify-center py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
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

export default Banner;