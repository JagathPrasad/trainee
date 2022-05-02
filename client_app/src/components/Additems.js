import React, { useEffect, useState, useCallback } from 'react'
import './additems.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { render } from '@testing-library/react';
import { v4 as uuid } from 'uuid';

const AddItems = () => {


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
    const image = (e) => {
        setSelectedfile(e.target.files);
        console.log(e.target.files[0]);
        console.log(e.target.files[0].name);
        console.log(e.target.files[0].size);
        console.log(e.target.files[0].type);
    };

    const baseimg = (image) => {
        var reader = new FileReader();
        console.log('file upload');
        if (image) {
            reader.ReaderAsDataURL();
            reader.onload = () => {
                var Base64 = reader.result;
                console.log(Base64);
                setImage64(Base64);
            };
            reader.onerror = (error) => {
                console.log('error :', error);
            };
        }

    };
    //baseimg(selectedfile[0])
    const onSubmit = (data, e) => {
        let item = {
            id: '00000000-0000-0000-0000-000000000000',
            name: data.name,
            caption: data.caption,
            image: image64,
            description: data.description,
            amount: data.amount,
            serving: data.serving,
            isveg: data.isveg,
            coupon: data.coupon,
            coupon_percentage: data.coupon_percentage,
            is_premium: data.is_premium,
            category_id: data.category_id,
        };
        console.log("data", data);
        axios.post('https://cometh.prelinehealthcare.com/api/item/postadditem', item).then((res) => {

        }).catch(() => {

        })
    }
    //  useEffect(() => {
    //    additems();
    // }, []);
    const refreshPage = () => {
        window.location.reload();
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
                                            <input type="text" name="name" id="name" class=" mt-1 block w-6/12  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>

                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="caption" class="block text-sm font-medium text-gray-700"> Caption</label>
                                            <input type="text" name="caption" id="caption" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>
                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="description" class="block text-sm font-medium text-gray-700"> Discription</label>
                                            <input type="text" name="description" id="description" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>


                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="amount" class="block text-sm font-medium text-gray-700"> Price</label>
                                            <input type="text" name="amount" id="amount" autocomplete="amount" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>



                                        <div class=" col-span-1 sm:col-span-3">
                                            <label for="image" class="block text-sm font-medium text-gray-700"> Food Image</label>
                                            <input type="file" name="image" id="image" autocomplete="image" onChange={() => { baseimg('') }} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>


                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="serving" class="block text-sm font-medium text-gray-700">Serving</label>
                                            <input type="text" name="serving" id="serving" autocomplete="serving" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="isveg" class="block text-sm font-medium text-gray-700">VEG</label>
                                            <select id="isveg" name="isveg" autocomplete="isveg" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>True</option>
                                                <option>False</option>

                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="coupon" class="block text-sm font-medium text-gray-700"> Coupon</label>
                                            <input type="text" name="coupon" id="coupon" autocomplete="coupon" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="coupon_percentage" class="block text-sm font-medium text-gray-700"> Coupon Percentage</label>
                                            <input type="text" name="coupon_percentage" id="coupon_percentage" autocomplete="coupon_percentage" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="is_premium" class="block text-sm font-medium text-gray-700">Premium</label>
                                            <select id="is_premium" name="is_premium" autocomplete="is_premium" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>True</option>
                                                <option>False</option>

                                            </select>
                                        </div>
                                        <div class="col-span-1 sm:col-span-3">
                                            <label for=" category_id" class="block text-sm font-medium text-gray-700"> Category Id</label>
                                            <input type="number" name=" category_id" id=" category_id" autocomplete=" category_id" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>

                                        <div class="col-span-1 sm:col-span-3">
                                            <label for=" vendorprepartiontime" class="block text-sm font-medium text-gray-700"> Waiting</label>
                                            <input type="number" name=" vendorprepartiontime" id=" vendorprepartiontime" autocomplete=" vendorprepartiontime" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>

                                        <div class="col-span-1 sm:col-span-3">
                                            <label for="city" class="block text-sm font-medium text-gray-700">Slots</label>
                                            <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>




                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-300 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    <button onClick={refreshPage} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Clear</button>

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