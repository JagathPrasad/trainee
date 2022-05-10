import React, { useEffect, useState, useCallback } from 'react'
import './additems.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from './utility/api_config';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'

const AddItems = () => {

  //  console.log('baseUrl', baseUrl);
    const { Add, handleSubmit } = useForm();
    //     const [item_details, setItemDetails] = useState([]);
    //     const Setitems = () => {
    //         axios.get('').then((res) => {
    //             console.log(res.data, 'success');
    //             //setTimeout(1000)      
    //             setItemDetails(res.data);
    //             console.log('Item_details', item_details);
    //         }).catch((error) => {
    //             console.log(error, 'success');
    //         });
    //     }
    const [selectedfile, setSelectedfile] = useState([]);
    const [image64, setImage64] = useState("");
    const [name, setName] = useState("");
    const [caption, setCaption] = useState("");
    const [Discription, setDiscription] = useState("");
    const [Price, setPrice] = useState("");
    const [Serving, setServing] = useState("");
    const [isveg,setisveg] = useState("");
    const [Coupon,setCoupon] = useState("");
    const [CouponPercentage, setCouponPercentage] = useState("");
    const [isPremium, setisPremium] = useState("");
    const [CategoryId, setCategoryId] = useState("");
    const [Waiting, setWaiting] = useState("");
    const [Slots, setSlots] = useState("");
    const [user_type, setUserType] = useState('');
    const image = (e) => {
        setSelectedfile(e.target.files);
        console.log(e.target.files[0]);
        console.log(e.target.files[0].name);
        console.log(e.target.files[0].size);
        console.log(e.target.files[0].type);
    };

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
  // console.log('name',name);
    //baseimg(selectedfile[0])
    const onSubmit = (data, e) => {
       // console.log('data',data);
        let item = {
            id: '00000000-0000-0000-0000-000000000000',
            name: name,
            caption: caption,
            image: image64,
            description: Discription,
            amount: Price,
            serving: Serving,
            isveg: isveg,
            coupon: Coupon,
            coupon_percentage: CouponPercentage,
            is_premium: isPremium,
            category_id: CategoryId,
        };
       console.log("item", item);
        axios.post(baseUrl+'item/postadditem', item).then((res) => {
console.log('item added',res.data);
   Added()
        }).catch(() => {

        })
    }
    //  useEffect(() => {
    //    additems();
    // }, []);
    const refreshPage = () => {
        window.location.reload();
    }
const list =()=>{
    console.log('name :',name,'caption :',caption,'Price :',Price,'Coupon :',Coupon,image64);
}
const Added = () => {
    confirmAlert({
      
      message: 'Item added succesfully',
      buttons: [
        
        {
          label: 'OK',
          
        }
      ]
    })
  }

    return (
        <div class="  overflow-hidden sm:rounded-lg  additems">
            <div class="px-4 py-5sm:px-6">
                <h3 class="text-lg leading-6 font-medium  text-gray-900">ADD FOOD DETAILS</h3>


                <div class="mt-10 sm:mt-0 bg-gray-200 ">

                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)} method="POST" class="w-full  bg-blue-300">
                            <div class=" bg-blue-300 shadow  overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-gray-300 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="name" class="block text-sm  font-medium border-black text-gray-700">Food Name</label>
                                            <input type="text" name="name" id="name" Value={name} onChange={(e)=>setName(e.target.value)} class=" mt-1 block w-6/12  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>

                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="caption" class="block text-sm font-medium text-gray-700"> Caption</label>
                                            <input type="text" name="caption" id="caption"Value={caption} onChange={(e)=>setCaption(e.target.value)}  class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>
                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="description" class="block text-sm font-medium text-gray-700"> Discription</label>
                                            <input type="text" name="description" id="description"Value={Discription} onChange={(e)=>setDiscription(e.target.value)}  class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>


                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="amount" class="block text-sm font-medium text-gray-700"> Price</label>
                                            <input type="text" name="amount" id="amount" autocomplete="amount"Value={Price} onChange={(e)=>setPrice(e.target.value)}  class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>



                                        <div class=" col-span-1 sm:col-span-3">
                                            <label for="image" class="block text-sm font-medium text-gray-700"> Food Image</label>
                                            <input type="file" name="image" id="image" autocomplete="image" onChange={ConvertImageToBase64} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>


                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="serving" class="block text-sm font-medium text-gray-700">Serving</label>
                                            <input type="text" name="serving" id="serving" autocomplete="serving" Value={Serving} onChange={(e)=>setServing(e.target.value)} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="isveg" class="block text-sm font-medium text-gray-700">VEG</label>
                                            <select id="isveg" name="isveg" autocomplete="isveg"Value={isveg} onChange={(e)=>setisveg(e.target.value)}  class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>True</option>
                                                <option>False</option>

                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="coupon" class="block text-sm font-medium text-gray-700"> Coupon</label>
                                            <input type="text" name="coupon" id="coupon" autocomplete="coupon" Value={Coupon} onChange={(e)=>setCoupon(e.target.value)} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="coupon_percentage" class="block text-sm font-medium text-gray-700"> Coupon Percentage</label>
                                            <input type="text" name="coupon_percentage" id="coupon_percentage"Value={CouponPercentage} onChange={(e)=>setCouponPercentage(e.target.value)} autocomplete="coupon_percentage" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="is_premium" class="block text-sm font-medium text-gray-700">Premium</label>
                                            <select id="is_premium" name="is_premium" autocomplete="is_premium" Value={isPremium} onChange={(e)=>setisPremium(e.target.value)}class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>True</option>
                                                <option>False</option>

                                            </select>
                                        </div>
                                        <div class="col-span-1 sm:col-span-3">
                                            <label for=" category_id" class="block text-sm font-medium text-gray-700"> Category Id</label>
                                            <input type="number" name=" category_id" id=" category_id" autocomplete=" category_id" Value={CategoryId} onChange={(e)=>setCategoryId(e.target.value)} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>

                                        <div class="col-span-1 sm:col-span-3">
                                            <label for=" vendorprepartiontime" class="block text-sm font-medium text-gray-700"> Waiting</label>
                                            <input type="number" name=" vendorprepartiontime" id=" vendorprepartiontime" autocomplete=" vendorprepartiontime"  Value={Waiting} onChange={(e)=>setWaiting(e.target.value)}class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>

                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="city" class="block text-sm font-medium text-gray-700">Slots</label>
                                            <input type="text" name="city" id="city" autocomplete="address-level2"  Value={Slots} onChange={(e)=>setSlots(e.target.value)}class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>




                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-300 text-right sm:px-6">
                                    <button  onClick={list} type="submit" class="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    <button onClick={refreshPage} class="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Clear</button>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        
        </div>
    )

}


export default AddItems