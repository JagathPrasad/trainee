import React, { useState } from 'react';
import './Register.css';
//  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
// import { render } from '@testing-library/react';



const Register = () => {
    // constructor(props) {
    //     super(props)


    // }
    this.state = {
        username: '',
        email: '',
        password: ''

    }
    const changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://cometh.prelinehealthcare.com/api/user/getloginuser/984012356', this.changeHandler.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (


        <div className='bg-blue centered' >

            <div className='main'>


                <h2 className='title-rs'><b>Registration</b></h2>
                <br />
                <br />
                <input type="text" name="username" placeholder="Username" onChange={(e) => changeHandler(e)} />
                <br />
                <br />
                <input type="text" name="email" placeholder="Email" onChange={this.changeHandler} />
                <br />
                <br />
                <input type="text" name="password" placeholder="Password" onChange={this.changeHandler} />
                <br />

                <br />
                <div class='flex items-center justify-center'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => submitHandler()}>Register</button>
                </div>
                <div class="text-center pt-3"> <p class="text-dark mb-0">Already have account?<a href="login.html" class="text-primary ms-1">Sign In</a></p></div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center my-3"> <a href="" class="social-login  text-center me-4"> <i class="fa fa-google"></i> </a> <a href="" class="social-login  text-center me-4"> <i class="fa fa-facebook"></i> </a> <a href="" class="social-login  text-center"> <i class="fa fa-twitter"></i> </a> </div>
                </div>
            </div>
        </div>

    );
}

export default Register;