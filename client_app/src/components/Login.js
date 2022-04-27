
import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import '../App.css';
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../store/user';



const Login = () => {

    const { user, setUser } = useContext(UserContext);

    // this.setState = {};
    let navigate = useNavigate();
    const goHome = () => {
        //debugger;
        navigate("/home");
    };

    const registerChange = () => {
        let path = `/register`;
        navigate(path);
    }


    const [islogin, setLogin] = useState(true);


    const [user_details, setuserDetails] = useState('');
    const [mobileno, setmobileno] = useState('');
    const [OTP, setotp] = useState('');

    const Getloginuser = (mobileno) => {
        let user_a = [{ name: 'Jagath', user_id: 'haksdjkjasdlkjk' }];
        setUser(user_a);
        console.log('asdfdas user', user);
        goHome();
        // axios.get('https://cometh.prelinehealthcare.com/api/user/getloginuser/' + mobileno).then((res) => {
        //     //debugger;
        //     console.log(res.data, 'success');
        //     // setLogged(false);
        //     // setuserDetails(res.data);
        //     sessionStorage.setItem('user_details', res.data);
        //     setLogin(false);
        // }).catch((error) => {
        //     console.log(error, 'success');
        // });
    }

    const Getuserotp = () => {

        axios.get('https://cometh.prelinehealthcare.com/api/user/getuserotp/12345/078d1927-d065-4771-9b03-e7934c5dcc9c').then((res) => {

            console.log(res.data, 'success');
            //setuserDetails(res.data);
            sessionStorage.setItem('user_details', res.data);
            goHome();

        }).catch((error) => {
            console.log(error, 'success');
        });

    }

    useEffect(() => {
        //Getuserotp();

        //goHome();

    },
        []);

    return (

        <div className='bg-white centered  m-12'>

            <div className='sub-main rounded'>

                {(() => {
                    if (islogin == true) {
                        return (
                            <div >
                                <h1><b>Login Form</b></h1>
                                <br />
                                <input className='bg-white' placeholder="Enter Mobile No" name="mobile" onChange={e => { setmobileno(e.target.value); }} />
                                <br />
                                <br />
                                <button className=" bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => Getloginuser()}>Login</button>
                                <br />

                                <a href="#" className="text-primary">Forgot Password?</a>
                                <p>
                                    <span className="line">
                                        <button onClick={registerChange}>Create an Account?</button>
                                    </span>
                                </p>
                            </div>
                        );
                    }
                    else {
                        return (
                            <div>
                                <h1><b>One Time Password</b></h1>
                                <br />
                                <input className='bg-white' type="password" placeholder="Enter OTP" name="otp" required onChange={(e) => setotp(e.target.value)} />
                                <br />
                                <br />

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Resend</button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => Getuserotp()} >Submit</button>
                            </div>
                        );
                    }

                })()}








            </div>
        </div>

    );
}
export default Login;