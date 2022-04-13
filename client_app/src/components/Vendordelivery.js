import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Vendordelivery = () => {
    const [vendordelivery_details, setVendordeliveryDetails] = useState([]);

    const Getvendors = (x) => {
        //alert();
        let vendor_id = '1bab575b-d40f-485a-a038-023747a29e82';
        axios.get('https://cometh.prelinehealthcare.com/api/delivery/getallvendordelivery/' + vendor_id).then((res) => {
            console.log(res, 'success');
            setVendordeliveryDetails(res.data);
            console.log('vendordelivery_details', vendordelivery_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }
    useEffect(() => {
        Getvendors();
    },
        []);

    return (
        <div>
            <Navbar />
            <Sidebar />

            <div class=" container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight text-center text-blue-900">VENDOR DELIVERY DETAILS</h2>
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
                                            Issued / Due
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendordelivery_details.map((x) => {
                                        return (
                                            <tr>

                                            </tr>

                                        );
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>



    )
}

export default Vendordelivery;