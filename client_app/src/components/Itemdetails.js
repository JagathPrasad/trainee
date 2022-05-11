import React, { useEffect, useState } from 'react'
import './tabs.css';
import { useNavigate } from "react-router-dom";
import { baseUrl } from './utility/api_config';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import axios from 'axios';


const Itemdetails = () => {
  const [item_details, setItemDetails] = useState([]);
  console.log('baseUrl', baseUrl);
  const [vendor_Items, ItemDetails] = useState([]);
  const [bind_details, setDetails] = useState({});
  const [user_type, setUserType] = useState('');
  const [showpopup, setPopup] = useState(false);
  
 
 
  const GetUsers = () => {
    axios.get(baseUrl+'item/getvendoritems').then((res) => {
      console.log(res.data, 'success');
      //setTimeout(1000)      
      setItemDetails(res.data);
      console.log('Item_details', item_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }
  const Getvendoritem = (vendorid, type) => {
    axios.get(baseUrl+'item/getallvendoritem/' + vendorid).then((res) => {
      console.log(res.data, 'success');
      //setTimeout(1000)      
      ItemDetails(res.data);
      setUserType(type);
      console.log('Vendor_Items', vendor_Items);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }  

  const Delete = (vendorid) => {
    axios.delete(baseUrl+'/item/deletevendoritem/'+ vendorid).then((res) => {
      console.log(res.data, 'success');
      //setTimeout(1000)      
      //setItemDetails(res.data);
      if(res.data == true)
      {
        Getvendoritem();
      }
      console.log('Item_details', item_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }
 

  useEffect(() => {
    GetUsers();
   
    
  }, []);

  

  
  const ShowDetails = (data, type) => {
    if (type == 'itemslist') {
      Getvendoritem(data, type);
    } else {
      console.log('data', data);
      setDetails(data);
      setUserType(type);

    }

  }
  let navigate = useNavigate();
  const routeadd = () => {
    let path = `/additems`;
    navigate(path);
  }

  const RenderallView = () => {

    console.log('bind', bind_details);
    return <div class="  rig2ht">
      <div>
        <h2 class="text-xl font-semibold leading-tight text-left  text-blue-900">{bind_details.vendor_name}</h2>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <table class=" object-left leading-normal ">
            <thead>
              <tr>
                <th
                  class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                >
                  Name

                </th>
                <th
                  class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                >
                  PRICE

                </th>
                <th
                  class="px-1 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                >
                  CAPTION

                </th>
                <th
                  class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                >


                </th>


              </tr>
            </thead>
            <tbody>
              {vendor_Items.map((x) => {
                return (



                  <tr>
                    <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">


                      <div class="inline-block text-gray-500 hover:text-gray-700">

                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap font-bold">
                            {x.name}
                          </p>

                        </div>

                      </div>
                    </td>
                    <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <p class="text-gray-900 whitespace-no-wrap font-bold"> {x.amount}.00</p>
                      </div>
                    </td>
                    <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex">
                        <p class="text-green-600 whitespace-no-wrap">{x.caption}</p>
                      </div>
                    </td>


                  </tr>
                );
              })}

            </tbody>

          </table>




        </div>
      </div>




    </div>;


  }


  const RenderView = () => {
    console.log('bind', bind_details);
    return <div class="shadow px-4 sm:rounded-lg w-7/12 rig2ht">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium  text-gray-900">Food Information</h3>

      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Food name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.name}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">caption</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.caption}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500"> Food Image</dt>
            <img
              class="w-full h-full rounded-full "
              src={bind_details.image}
              alt=""
            />
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Food Price</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.amount}</dd>
          </div>

          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Coupon</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.coupon}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Discount</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.couponpercentage}%</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Vendor Name</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.vendor_name}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Vendor Image</dt>
            <img
              class="w-full h-full rounded-full "
              src={bind_details.vendor_image}
              alt=""
            />
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Waiting Time</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.vendorprepartiontime}Min </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Slot:1</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.slots.slot1}</dd>
            <dt class="text-sm font-medium text-gray-500">Slots:2</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.slots.slot2}</dd>
            <dt class="text-sm font-medium text-gray-500">Slots:3</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.slots.slot3}</dd>
            <dt class="text-sm font-medium text-gray-500">Slots:4</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{bind_details.slots.slot4}</dd>

          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Vendor Status</dt>
            {(() => {
              if (bind_details.vendorisactive == true) {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Avaliable</dd>
              } else {
                return <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Not Avaliable
                </dd>


              }
            })()}
          </div>
        </dl>
      </div>
    </div>;
  }

  const RenderEdit = () => {


    return <div class=" shadow overflow-hidden sm:rounded-lg w-7/12 rig2ht">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium  text-gray-900">Food Information</h3>
      </div>
      <div class="border-t border-gray-200">

        <form action="#" method="POST">
          <div class="w-9/12">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <label for="first-name" class="block text-sm  font-medium text-gray-700">Food Name</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" value={bind_details.name} class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="last-name" class="block text-sm font-medium text-gray-700"> Capton</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" value={bind_details.caption} class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"> Coupon</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" value={bind_details.coupon} class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"> Food Image</label>
                  <div class="flex justify-center">
                    <div class="mb-3 w-full">
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
                  <div class="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
                    <dt class="text-sm font-medium text-gray-500">Existing Image</dt>
                    <img
                      class="col-span-6 sm:col-span-6 "
                      src={bind_details.image}
                      alt=""
                    /> </div>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700"> Price</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" value={bind_details.amount} class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label for="city" class="block text-sm font-medium text-gray-700">Waiting Time</label>
                  <input type="text" name="city" id="city" autocomplete="address-level2" value={bind_details.vendorprepartiontime} class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>


                <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label for="city" class="block text-sm font-medium text-gray-700">Slots</label>
                  <input type="text" name="city" id="city" autocomplete="address-level2" value={bind_details.slots.slot1} class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="country" class="block text-sm font-medium text-gray-700">Status</label>
                  <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Avaliable</option>
                    <option>Un Avaliable</option>

                  </select>
                </div>


              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>

              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

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
          onClick: () => Delete(bind_details.vendorid)
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  return (

    <div class= " px-8 tainer ">
      <br></br>
     <div class="  mx-auto px-4 sm:px-8 ">
          <h2 class="text-xl font-semibold leading-tight text-left text-blue-900">MENU

        
            <button onClick={routeadd} class="add w-2/12 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded">ADD
            </button>
            </h2>
           
          </div>
          
           
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
                    <th
                      class="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >


                    </th>


                  </tr>
                </thead>
                <tbody>
                  {item_details.map((x) => {
                    return (



                      <tr>
                        <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">


                          <button type="button" class="inline-block text-gray-500 hover:text-gray-700" onClick={() => ShowDetails(x.vendorid, 'itemslist')}>

                            <div class="flex">
                              <p class="text-gray-900 whitespace-no-wrap font-bold">
                                {x.name}
                              </p>

                            </div>

                          </button>
                        </td>
                        <td class="px-3 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap font-bold"> {x.amount} .00</p>

                        </td>
                        <td class="px-3 py-6 border-b border-gray-200 bg-white text-sm">
                          <p class="text-green-600 whitespace-no-wrap">{x.caption}</p>
                        </td>


                        <td
                          class="px-0 py-5 border-b border-gray-200 bg-white text-sm text-right"
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
           
        
          <div>{(() => {
            switch (user_type) {
              case "itemslist": return RenderallView();
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




  )
}

export default Itemdetails


