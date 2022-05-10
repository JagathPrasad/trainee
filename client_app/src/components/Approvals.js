import './approval.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from './utility/api_config';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
const Approvals = () => {
  console.log('baseUrl', baseUrl);
  const [bind_details, setDetails] = useState({});
  const [user_type, setUserType] = useState('');
  const [pending, setApprovalDetails] = useState([]);
  const [approval, setapproved] = useState([]);
  const[user_delete,setUserDelete]=useState([]);
  const GetApproval = () => {
    axios.get(baseUrl+'admin/getpendingapproval').then((res) => {
      console.log(res.data, 'success');

      setApprovalDetails(res.data);
      console.log('Pending', pending);
    }).catch((error) => {
      console.log(error, 'success');
    });

  }
  const Approved = (user_id, type) => {
    axios.get(baseUrl+'admin/getapprovevendor/' + user_id + "/" + type).then((res) => {
      console.log(res.data, 'success');
      setapproved(res.data);
      console.log('approval', approval);
    }).catch((error) => {
      console.log(error, 'success');
    });

  }
  // const Getdelete = (user_id) => {
  //   axios.get(baseUrl+ 'admin/deleteactiveuser/'+user_id).then((res) => {
  //     console.log(res.data, 'success');
  //     setUserDelete(res.data);
  //     console.log('user_delete', user_delete);
  //   }).catch((error) => {
  //     console.log(error, 'success');
  //   });
  // }
  useEffect(() => {
    GetApproval();
    // Approved()

  }, []);
  const Delete = (user_id) => {
    GetApproval();
    // Getdelete(user_id);
  }
  {/* {renderAll()} */ }

  const ShowDetails = (data, type) => {
    console.log('data', data);
    setDetails(data);
    setUserType(type);

  }


  const Approve = (user_id, type) => {

    GetApproval();
    Approved(user_id, type);

  }
  const RenderView = () => {
    console.log('bind', bind_details);
    return <div class="shadow overflow-hidden sm:rounded-lg w-full apview">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium  text-gray-900">User Information</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500"></p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.name}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Image</dt>
            <img
              class="w-full h-full rounded-full "
              src={bind_details.kyc.photo}
              alt=""
            />  </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">ID Card</dt>
            <img
              class="w-full h-full rounded-full "
              src={bind_details.kyc.identity_card}
              alt=""
            />  </div>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Mobile No</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.moobile_no}</dd>
          </div>
          <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Gender</dt>

            {(() => {
              if (bind_details.kyc.isfemale = true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Female</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Male
                </dd>


              }
            })()}
          </div>
          <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Approval Status</dt>

            {(() => {
              if (bind_details.kyc.verified == true) {
                return <dd class="mt-1 text-sm text-green-600 sm:mt-0 sm:col-span-2">Approved

                </dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Pending
                  <br></br>
                  <br></br>
                  <button onClick={() => Approve(bind_details.user_id, 'approve')} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Approve</button>
                  <button onClick={() => Approve(bind_details.user_id, 'disapprove')} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reject</button>


                </dd>


              }
            })()}
          </div>


        </dl>
      </div>
    </div>;
  }

  const RenderEdit = () => {
    return <div class=" shadow overflow-hidden sm:rounded-lg w-6/12 rig2ht">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium  text-gray-900">USER Information</h3>
    </div>
    <div class="border-t border-gray-200">

      <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5  sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm m-px  font-medium text-gray-700">User Name</label>
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" value={bind_details.name} class=" mt-1  bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>



                    <div class="col-span-6 sm:col-span-4">
                      <label for="email-address" class="block text-sm font-medium text-gray-700">Mobile</label>
                      <input type="text" name="email-address" id="email-address" autocomplete="email" value={bind_details.moobile_no} class="mt-1  bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="country" class="block text-sm font-medium text-gray-700">Approval</label>
                      <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 bg-blue-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Approve</option>
                        <option>Reject</option>

                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="country" class="block text-sm font-medium text-gray-700">Gender</label>
                      <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border bg-blue-100 border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Male</option>
                        <option>Female</option>

                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label for="email-address" class="block text-sm font-medium text-gray-700">Image</label>
                      <div class="flex justify-center">
                        <div class="mb-3 w-96">
                          <label for="formFile" class="form-label inline-block mb-2 text-gray-700"> Select an Iamge</label>
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
                          src={bind_details.kyc.identity_card}
                          alt=""
                        />  </div>
                    </div>



                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
                  <button type="submit" class="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

                </div>
              </div>
            </form>
          </div>
      
 

    </div>;
  }

  const RenderDelete = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => Delete(bind_details.user_id)
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  return (
    
      <div class=" aptainer ">


        <div class="  mx-auto px-4 sm:px-8 ">
          <h2 class="text-xl font-semibold leading-tight text-left text-blue-900">PENDING APPROVAL</h2>

        </div>



        <div >

          <div class="px-4 sm:px-8"  >
            <div class="py-8">
              <div>
                <h2 class=" text-xl font-semibold leading-tight text-left text-blue-900"></h2>
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

                        </th>



                      </tr>
                    </thead>
                    <tbody>
                      {pending.map((x) => {
                        return (
                          <tr>
                            <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <div class="flex">

                                <div class="ml-3">
                                  <p class="text-gray-900 whitespace-no-wrap font-bold">
                                    {x.name}
                                    <div class="flex-shrink-0 w-10 h-10">
                                      <img
                                        class="w-full h-full rounded-full "
                                        src={x.kyc.photo}
                                        alt=""
                                      />
                                    </div>
                                  </p>

                                </div>
                              </div>
                            </td>
                            <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                              <p class="text-gray-900 whitespace-no-wrap font-bold"> {x.moobile_no} </p>

                            </td>







                            <td
                              class="px-3 py-5 border-b border-gray-200 bg-white text-sm text-left"
                            >
                              <button
                                type="button"
                                class="inline-block text-gray-500 hover:text-gray-700"
                                onClick={() => ShowDetails(x, 'view')}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 30 24" stroke="blue" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />

                                </svg>

                              </button>
                              <button
                                type="button"
                                class="inline-block text-gray-500 hover:text-gray-700"
                                onClick={() => ShowDetails(x, 'edit')}
                              ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>

                              </button>
                              <button
                                type="button"
                                class="inline-block text-gray-500 hover:text-gray-700"
                                onClick={() => ShowDetails(x, 'delete')}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 30 24" stroke="red" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
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
              })()}
              </div>
              {/* <div>
            {(() => {
              if (istrue == true) {
                return RenderView()
              }
            })()}
          </div> */}
            </div>
          </div>
        </div>
      </div>

   



  )
}
export default Approvals;