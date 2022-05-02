   import React, { useEffect, useState } from 'react'
import './BannerAdd.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const BannerAdd = (banner) => {
  const { Add, handleSubmit} = useForm();
  const [baseImage, setBaseImage] = useState("");
    // const [item_details, setItemDetails] = useState([]);
    // const Setitems = () => {   
    //     axios.get('https://cometh.prelinehealthcare.com/api/admin/postaddbanner/'+ banner).then((res) => {
    //         console.log(res.data, 'success');
                 
    //         setItemDetails(res.data);
    //         console.log('Item_details', item_details);
    //     }).catch((error) => {
    //         console.log(error, 'success');
    //     });
    // }

    // useEffect(() => {
    //     Setitems();
    // }, []);

    const onSubmit = (data, e) => {
        
      console.log("data", data);
      axios.post('https://cometh.prelinehealthcare.com/api/admin/postaddbanner/'+ banner, {
        name: data.name,
        image: data.image,
       
      }
      )
 
 
    }

    const uploadImage = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setBaseImage(base64);
    };
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };


return(
        <div class=" overflow-hidden sm:rounded-lg banneradd">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium  text-gray-900">ADD BANNER DETAILS</h3>
        
        </div>
        <div class="mt-10 sm:mt-0  bg-grey-200">
          <div class="md:grid md:grid-cols-3 md:gap-6 ">
            
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} method="POST" class="w-full">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="name" class="block text-sm  font-medium text-gray-700">Food Name</label>
                        <input type="text" name="name" id="name" class="mt-1 bg-blue-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
    
                      <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium text-gray-700"> Food Image</label>
                                              <div class="flex justify-center">
      <div class="mb-3 w-96">
      <input type="file" onChange={(e) => {uploadImage(e);
        }}
      />
      <br></br>
      <img src={baseImage} height="200px" />
        
      </div>
    </div> 
   
    </div>
 
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button  onClick={() => BannerAdd('Added Succesfully')}class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ADD</button>
                   
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

    export default BannerAdd;