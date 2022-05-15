import React, { useEffect, useState } from 'react'
import './BannerAdd.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { baseUrl } from './utility/api_config';



const BannerAdd = (banner) => {
  const { Add, handleSubmit } = useForm();
  const [image64, setImage64] = useState("");
  const [name, setName] = useState(""); 
  const [selectedfile, setSelectedfile] = useState([]);
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

  const onSubmit = (data, e) => {
    let banner = {
      id: '00000000-0000-0000-0000-000000000000',
      name: name,
      image: image64,

    };
    axios.post(baseUrl +'admin/postaddbanner/' + banner)
  }
  const refreshPage = () => {
    window.location.reload();
}
const list = () => {
    console.log('name :', name,  image64);
}

  return (
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
                  <div class="col-span-1 sm:col-span-3">
                                            <label for="name" class="block text-sm  font-medium border-black text-gray-700">Food Name</label>
                                            <input type="text" name="name" id="name" Value={name} onChange={(e) => setName(e.target.value)} class=" mt-1 block w-6/12  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" />
                                        </div>

                                        <div class=" col-span-1 sm:col-span-3">
                                            <label for="image" class="block text-sm font-medium text-gray-700"> Food Image</label>
                                            <input type="file" name="image" id="image" autocomplete="image" onChange={ConvertImageToBase64} class="mt-1 block w-6/12 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>

                  </div>
                </div>
                <div class="px-2 py-2 bg-gray-50 text-right sm:px-4">
                  <button onClick={list} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ADD</button>

                  <button  onClick={refreshPage} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancel</button>

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