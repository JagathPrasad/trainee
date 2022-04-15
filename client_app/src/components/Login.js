
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

    // state = {
    //         Mobileno: '',
    //         password: ''
    //     }


    // const handleFormChange = (e) => {
    //     debugger;
    //     this.setState({
    //         Mobileno: e.target.value,
    //         password: e.target.value
    //     });

    // }

    const [Username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const Getusers = () => {
        debugger;
        if (Username != '' || Username != null && (password != '' || password != null)) {
            //if (true) {
            alert();
            axios.get('https://cometh.prelinehealthcare.com/api/user/getloginuser/984012356').then((res) => {
                //debugger;
                console.log(res.data, 'success');
                //debugger;
                sessionStorage.setItem('user_details', res.data);
                goHome();

            }).catch((error) => {
                console.log(error, 'success');
            });

        }
        else {
            // show ? <h4>Something seriously bad happened.</h4> : null
        }


    }

    useEffect(() => {
        //Getusers();
        //goHome();

    },
        []);


    return (

        <div className='bg-white centered'>

            <div className='sub-main'>

                <h1><b>Login</b></h1>
                <div >

                    <input type="text" placeholder="Enter Username" name="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <br />
                    <input type="password" name="password" placeholder="Enter password" onChange={(e) => setpassword(e.target.value)} />
                    <br />
                    <br />

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => Getusers()}>Login</button>
                </div>

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