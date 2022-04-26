
import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css';
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Login = () => {

    // this.setState = {};
    let navigate = useNavigate();
    const goHome = () => {
        debugger;
        navigate("/home");
    };

    const registerChange = () => {
        let path = `/register`;
        navigate(path);
    }

    


    const[user_details, setuserDetails] = useState('');
    const [mobileno, setmobileno] = useState('');
    const [OTP, setotp] = useState('');

    const Getloginuser = (mobileno) => {
        debugger;
        
            //if (true) {
            //alert();
            axios.get('https://cometh.prelinehealthcare.com/api/user/getloginuser/' +mobileno).then((res) => {
                //debugger;
                console.log(res.data, 'success');
                //debugger;
               sessionStorage.setItem('user_details', res.data);
              // goGetuserotp();

            }).catch((error) => {
                console.log(error, 'success');
            });

        
        }

        const Getuserotp = () => {
            debugger;
            
            
                //if (true) {
                //alert();
                axios.get('https://cometh.prelinehealthcare.com/api/user/getloginuser/12345/ef41f8ef-430a-499d-80df-2f6e11e33d75/').then((res) => {
                    //debugger;
                    console.log(res.data, 'success');
                    //debugger;
                   sessionStorage.setItem('user_details', res.data);
                  //  goHome();
    
                }).catch((error) => {
                    console.log(error, 'success');
                });
    
            
            }   

    

    useEffect(() => {
        Getloginuser();
      
        //goHome();

    },
        []);

        

        // if (test == true) 
        //             {
                        
        //         alert("Type OTP")
        //                gotest1()   
        //                  return ()  
        //              }
        //             else  {
        //             alert("NOT Matching")
        //                 } 


    return (

        <div className='bg-white centered'>

            <div className='sub-main'>

                <h1><b>Login Form</b></h1>
                <br />
                <div >
                    
                
                    
                    
                

                    <input id= "test" type="number" placeholder="Enter Mobile No" name="mobile" required onChange={e => {setmobileno(e.target.value); }} />
                    <br />
                    <br />  
                  <button  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => Getloginuser()}>Submit</button>
                    
                </div>
                <br />
            

                <div>
                <input id= "test1" type="password" placeholder="Enter OTP" name="otp" required onChange={(e) => setotp(e.target.value)} />
                <br />
                <br />

                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"onClick={() => Getuserotp()} >Login</button>
                </div>

                {(() => {
            if (test == true) {
                return <Redirect to={test1} />;
            } 
            
          })()}
                <br />

                <a href="forgot-password.html" className="text-primary">Forgot Password?</a>

                <p>
                    Not a member?
                    <span className="line">
                        <button onClick={registerChange}>Create an Account?</button>

                    </span>
                </p>

            </div>
        </div>

    );
}
export default Login;