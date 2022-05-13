import React, { useEffect, useState } from 'react'
import './tabs.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { baseUrl } from './utility/api_config';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import axios from 'axios';


const Itemdetails = () => {
  const { Add, handleSubmit } = useForm();
  const [item_details, setItemDetails] = useState([]);
  // console.log('baseUrl', baseUrl);
  const [vendor_Items, ItemDetails] = useState([]);
  const [bind_details, setDetails] = useState({});
  const [user_type, setUserType] = useState('');
  const [showpopup, setPopup] = useState(false);

  const [image64, setImage64] = useState("");
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDiscription] = useState("");
  const [amount, setPrice] = useState(0)
  const [isveg, setisveg] = useState(false)
  const [coupon, setCoupon] = useState("");
  const [couponpercentage, setCouponPercentage] = useState("");
  const [isPremium, setisPremium] = useState(false)
  const [CategoryId, setCategoryId] = useState(4);
  const [serving, setServing] = useState();
  const onSubmit = (data, e) => {
    // console.log('data',data);
    let item = {
      id: bind_details.id,
      name: name,
      caption: caption,
      image: image64,
      description: description,
      amount: parseInt(amount),
      serving: parseInt(serving),
      isveg: isveg == "true" ? true : false,
      coupon: coupon,
      couponpercentage: couponpercentage,
      is_premium: isPremium == "true" ? true : false,
      category_id: parseInt(CategoryId),
    };

    console.log("item", item);
    axios.post(baseUrl + 'item/postupdateitem', item).then((res) =>
     {
      console.log('item Updated', res.data);

      Updated();
    }).catch(() => {

    })
  }
  const refreshPage = () => {
    window.location.reload();
  }


  const ConvertImageToBase64 = (event) => {
    // console.log('event', event.target.files[0]);
    let file = event.target.files[0];
    var reader = new FileReader();
    console.log('file upload');
    let base64;
    reader.readAsDataURL(file);
    reader.onload = () => {
      base64 = reader.result;
      console.log('base64', base64);
      setImage64(base64);
    };
    reader.onerror = (error) => {
      console.log('error :', error);
    };
  };

 

  const GetUsers = () => {
    axios.get(baseUrl + 'item/getvendoritems').then((res) => {
      console.log(res.data, 'success');
      //setTimeout(1000)      
      setItemDetails(res.data);
      console.log('Item_details', item_details);
    }).catch((error) => {
      console.log(error, 'success');
    });
  }
  const Getvendoritem = (vendorid, type) => {
    axios.get(baseUrl + 'item/getallvendoritem/' + vendorid).then((res) => {
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
    axios.delete(baseUrl + '/item/deletevendoritem/' + vendorid).then((res) => {
      console.log(res.data, 'success');
      //setTimeout(1000)      
      //setItemDetails(res.data);
      if (res.data == true) {
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
  const Updated = () => {
    confirmAlert({
      
      message: 'Item Updated succesfully',
      buttons: [
        
        {
          label: 'OK',
          onClick: () =>refreshPage(),
        }
      ]
    })
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
    return <div class="bg-gray-200 shadow overflow-hidden sm:rounded-lg w-full rig2ht">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium  text-gray-900">Food Information</h3>

      </div>
      <div >
        <dl>
          <div class=" bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium ">Food name</dt>
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


    return<div class="bg-gray-200 shadow overflow-hidden sm:rounded-lg w-full rig2ht">
      <div class="px-4 py-5 w-full sm:px-6">
        <h3 class="text-lg leading-6 font-medium  text-gray-900">Food Information</h3>
      </div>
      <div class="border-t border-gray-200">

        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div class="w-full">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <label for="name" class="block text-sm  font-medium text-gray-700">Food Name</label>
                  <input type="text" name="name" id="name"  Value={bind_details.name} onChange={(e) => setName(e.target.value)} class="mt-1  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="Capton" class="block text-sm font-medium text-gray-700"> Caption</label>
                  <input type="text" name="Capton" id="Capton" autocomplete="Capton" Value={bind_details.caption} onChange={(e) => setCaption(e.target.value)} class="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class="col-span-1 sm:col-span-3">
                  <label for="description" class="block text-sm font-medium text-gray-700"> Description</label>
                  <input type="text" name="description" id="description" Value={bind_details.description} onChange={(e) => setDiscription(e.target.value)} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                </div>


                <div class="col-span-6 sm:col-span-4">
                  <label for="Coupon" class="block text-sm font-medium text-gray-700"> Coupon</label>
                  <input type="text" name="Coupon" id="Coupon" autocomplete="Coupon" Value={bind_details.coupon} onChange={(e) => setCoupon(e.target.value)} class="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="CouponPercentage" class="block text-sm font-medium text-gray-700"> CouponPercentage</label>
                  <input type="number" name="CouponPercentage" id="CouponPercentage" autocomplete="CouponPercentage" Value={bind_details.couponpercentage} onChange={(e) => setCouponPercentage(e.target.value)} class="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class=" col-span-1 sm:col-span-3">
                  <label for="image" class="block text-sm font-medium text-gray-700"> Food Image</label>
                  <input type="file" name="image" id="image" autocomplete="image" onChange={ConvertImageToBase64} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div class="col-span-6 sm:col-span-4">

                  <div class="bg-gray-50 px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
                    <dt class="text-sm font-medium text-gray-500">Existing Image</dt>
                    <img
                      class="col-span-6 sm:col-span-6 "
                      src={bind_details.image}
                      alt=""
                    /> </div>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="amount" class="block text-sm font-medium text-gray-700"> Price</label>
                  <input type="text" name="amount" id="amount" autocomplete="amount" Value={bind_details.amount} onChange={(e) => setPrice(e.target.value)} class="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label for="Serving" class="block text-sm font-medium text-gray-700">Serving</label>
                  <input type="number" name="Serving" id="Serving" autocomplete="Serving" value={bind_details.serving} onChange={(e) => setServing(e.target.value)} class="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>


                <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label for="Category" class="block text-sm font-medium text-gray-700">Category</label>
                  <select id="Category" name="Category" autocomplete="Category" value={isPremium} onChange={(e) => setisPremium(e.target.value)} class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>true</option>
                    <option> false</option>

                  </select>  </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="Type" class="block text-sm font-medium text-gray-700">Type</label>
                  <select id="Type" name="Type" autocomplete="Type" value={isveg} onChange={(e) => setisveg(e.target.value)} class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>true</option>
                    <option>false</option>

                  </select>
                </div>
                <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                  <label for="CategoryId" class="block text-sm font-medium text-gray-700">CategoryId</label>
                  <input type="number" name="CategoryId" id="CategoryId" autocomplete="CategoryId" value={CategoryId} onChange={(e) => setCategoryId(e.target.value)} class="mt-1 focus:ring-indigo-500  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button  type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>

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

    <div class=" px-8 tainer ">
      <br></br>
      <div class=" w-full  mx-auto px-4 sm:px-8 ">
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


