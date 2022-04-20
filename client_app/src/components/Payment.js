import React, { useEffect } from 'react'
import { useState, useReducer } from 'react';
//import '../App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Payment.css';


const Payments = () => {

    const [payment_details, setPaymentDetails] = useState([]);
    const [showpopup, setPopup] = useState(false);
    const [bind_details, setDetails] = useState({});
    
    

    const Getpayments = (x) => {
        axios.get('https://cometh.prelinehealthcare.com/api/admin/getallpayments').then((res) => {
            console.log(res.data, 'success');
            setPaymentDetails(res.data);
            console.log('payment_details', payment_details);
        }).catch((error) => {
            console.log(error, 'success');
        });
    }
    useEffect(() => {
        Getpayments();
    },
        []);
        
        const ShowDelete = () => {
            console.log('ShowDelete', showpopup)
            setPopup(true);
        } 
        
        
        

//{renderAll()}
const ShowDetails = (data) => {
    console.log('show details', data);
    //crate html structure for showing details    
    setDetails(data);
    //structure should bind in setDetails
  }  

//   const renderAll = () => {
//     if (payment_details.length > 0) {
//       return payment_details(x =>
//         <div className="col-md-2">
//           <div className="sub-category d-flex align-items-center" onClick={() => payment_details(x.id, x.name)}>
//             <div className="category-img">
//               
//             </div>
//             <div className="ms-3">
//               <h6 className="m-0">{x.name}</h6>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return '';
//     }
//   }


// const AppReducer = (state, action) => {
//             switch (action.type) {
//                 case 'payment_details': {
//                     return {
//                       ...state,
//                       payments: state.payments.map((payment) => {
//                         return (payment.id === action.payment.id) ? action.payment : payment;
//                       })
//                     };
//                   }
//                   default: {
//                     return state;
//                   }
//                 }
//               };          

//               return (
//                 <GlobalContext.Provider value={{
//                   payments: state.payments,
//                   payment_details,
//                 }}>
//                 {children}
//               </GlobalContext.Provider>
//             );
//           };

//           const payment_details = () => {
//             const history = useHistory();
//             const { payment_details, payments } = useContext(GlobalContext);
//           useContext(GlobalContext);
//             const { id } = useParams();
//             const [payment_details, setPaymentDetails] = useState({ id: null, name: '', itemname: '', mobileno: '', amount: '' });
          
            
//             useEffect(() => {
//               const payment_details = payments.find((payment) => payment.id === id);
//               setPaymentDetails(payment_details);
//             }, []);
          
//             const onSubmit = (e) => {
//               payment_details(payment_details), 
//               e.preventDefault();
//               history.push('/');
//             };
          
//             const handleOnChange = (userKey, value) => setSeletedUser({
//               payment_details,
//               [userKey]: value
//             });



















    


        

    return (
        <div>
            <Navbar />
            <Sidebar />

            <div class=" container px-4 sm:px-8">
                <div class="py-8">
                    <div>
                        <h2 class="text-2xl font-semibold leading-tight text-center text-blue-900">Payment list</h2>
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
                                            NAME
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            ITEM_NAME
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            MOBILE NO
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            AMOUNT
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xm font-semibold text-blue-700 uppercase tracking-wider"
                                        >
                                            ACTIONS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payment_details.map((x, index) => {
                                        return (
                                            <tr key={index}>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        {x.name}
                                                    </p>

                                                </div>

                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex">
                                                        <div class="flex-shrink-0 w-10 h-10">
                                                            {x.item_name}

                                                        </div>

                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{x.mobile_no}</p>
                                                    {/* <p class="text-gray-600 whitespace-no-wrap">INR</p> */}
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{x.amount}</p>
                                                    {/* <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p> */}
                                                </td>

                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <button onClick={() => ShowDetails(x)}>
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> 
                                                    </button>
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                    <button onClick={()=>ShowDelete()}>
                                                    <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4/>}"></path></svg>
                                                    {() => {
                                                        if (showpopup) {
                                                          return  <div>

                                                                <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                                                    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                                                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


                                                                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                                                                        <div class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                                                <div class="sm:flex sm:items-start">
                                                                                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                                                                                        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                                                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Delete the Items</h3>
                                                                                        <div class="mt-2">
                                                                                            <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                                                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Confirm</button>
                                                                                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        }
                                                    }}
                                                    </button>


                                                </td>

                                            </tr>

                                        );
                                    })}


                                </tbody>


                            </table>
                        </div>
                        {/* {renderAll} */}
            {/* {bind_details} */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}
export default Payments;

