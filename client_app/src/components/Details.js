import React from 'react';
import Tabs from "./Tabs";
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './detailtabs.css';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Details = () => {

    const [payment_details, setPaymentDetails] = useState([]);
    const [address_details, setAddressDetails] = useState([]);

    /*
    Created By : Mangai
    Created On : 13-Apr-2022
    Description: To Fetch Payment Detaisl
    */    
    const Getpayment = () => {
        axios.get('https://cometh.prelinehealthcare.com/api/user/getuserpayment/{id}').then((res) => {
            console.log(res, 'success');
        }).catch((error) => {
            console.log(error, 'success');
        });
    }

    useEffect(() => {
        Getpayment();
    }, []);

    
    const Getaddress = (x) => {
      axios.get('https://cometh.prelinehealthcare.com/api/user/getuseraddress/1bab575b-d40f-485a-a038-023747a29e82').then((res) => {
        console.log(res.data, 'success');
        setAddressDetails(res.data);
        //console.log('address_details', address_details);
      }).catch((error) => {
        console.log(error, 'success');
      });
    }
    useEffect(() => {
      Getaddress();
    },
      []);

    return (
      <div>
          <Navbar />
            <Sidebar />
            <center>
                <br></br>
            <h1 class=" text-3xl font-bold leading-tight text-center text-blue-900">Details</h1>
            </center>
        
        <Tabs>
          <div label="Payment" onClick={() => Getpayment()}>
                
                <div class=" container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class=" text-xl font-semibold leading-tight text-center text-blue-900">Payment Details</h2>
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
                                            AMOUNT
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Paid on
                                        </th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                     {payment_details.map((x) => {
                                        return (
                                            <tr>
                                                    x.address
                                                    x.location
                                            </tr>

                                        );
                                    })} 


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>   
            </div>          


          </div>
          <div label="Address" onClick={() => Getaddress()}>
          <div class=" container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-xl font-semibold leading-tight text-center text-blue-900">Address Details</h2>
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
                      Address
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                    >
                      Landmark
                    </th>                   
                  </tr>
                </thead>
                <tbody>
                   {address_details.map((x) => {
                    return(
                    <tr>
                      
                    </tr>
                     
                  );})}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Tabs>
      </div>
    );
    }
  export default Details;