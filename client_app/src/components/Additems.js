import React, { useEffect, useState } from 'react'
import './additems.css';

import axios from 'axios';



  
    

const AddItems = () => {
    const [item_details, setItemDetails] = useState([]);
    const Setitems = () => {
        axios.get('https://cometh.prelinehealthcare.com/api/item/postadditem').then((res) => {
            console.log(res.data, 'success');
            //setTimeout(1000)      
            setItemDetails(res.data);
            console.log('Item_details', item_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }

    useEffect(() => {
        Setitems();
    }, []);


return(
        <div class=" overflow-hidden sm:rounded-lg additems">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium  text-gray-900">ADD FOOD DETAILS</h3>
        
        </div>
        <div class="mt-10 sm:mt-0  bg-grey-200">
          <div class="md:grid md:grid-cols-3 md:gap-6 ">
            
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST" class="w-full">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="name" class="block text-sm  font-medium text-gray-700">Food Name</label>
                        <input type="text" name="name" id="name" class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
    
                      <div class="col-span-6 sm:col-span-3">
                        <label for="caption" class="block text-sm font-medium text-gray-700"> Caption</label>
                        <input type="text" name="caption" id="caption"  class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label for="description" class="block text-sm font-medium text-gray-700"> Discription</label>
                        <input type="text" name="description" id="description"  class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
    
                     
                      <div class="col-span-6 sm:col-span-3">
                        <label for="amount" class="block text-sm font-medium text-gray-700"> Price</label>
                        <input type="text" name="amount" id="amount" autocomplete="amount" class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium text-gray-700"> Food Image</label>
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
   
    </div>
    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for="serving" class="block text-sm font-medium text-gray-700">Serving</label>
                        <input type="text" name="serving" id="serving" autocomplete="serving" class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label for="isveg" class="block text-sm font-medium text-gray-700">VEG</label>
                        <select id="isveg" name="isveg" autocomplete="isveg" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <option>True</option>
                          <option>False</option>
                          
                        </select>
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label for="coupon" class="block text-sm font-medium text-gray-700"> Coupon</label>
                        <input type="text" name="coupon" id="coupon" autocomplete="coupon"  class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label for="coupon_percentage" class="block text-sm font-medium text-gray-700"> Coupon Percentage</label>
                        <input type="text" name="coupon_percentage" id="coupon_percentage" autocomplete="coupon_percentage"  class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label for="is_premium" class="block text-sm font-medium text-gray-700">Premium</label>
                        <select id="is_premium" name="is_premium" autocomplete="is_premium" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <option>True</option>
                          <option>False</option>
                          
                        </select>
                      </div>
                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for=" category_id" class="block text-sm font-medium text-gray-700"> Category Id</label>
                        <input type="number" name=" category_id" id=" category_id" autocomplete=" category_id" class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      
                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for=" vendorprepartiontime" class="block text-sm font-medium text-gray-700"> Waiting</label>
                        <input type="number" name=" vendorprepartiontime" id=" vendorprepartiontime" autocomplete=" vendorprepartiontime" class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
    
                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for="city" class="block text-sm font-medium text-gray-700">Slots</label>
                        <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 bg-blue-100 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
    
                   
    
                     
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button  onClick={() => AddItems('Added Succesfully')}class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ADD</button>
                   
                    <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>
                 
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