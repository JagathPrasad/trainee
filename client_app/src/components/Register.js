import React, { useState } from 'react';
import '../App.css';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div class="container">
            <div className='bg-blue centered'>
                <h2 className='title-rs'>Registration</h2>
                <div className='main'>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    <label class="custom-control custom-checkbox mt-4">

                        <span class="custom-control-label">Agree the <a href="terms.html">terms and policy</a></span>
                    </label>
                    <br />
                    <br />
                    <div class="container-login100-form-btn"> <a href="index.html" class="login1qq00-form-btn btn-primary"> Register </a> </div>
                    <div class="text-center pt-3"> <p class="text-dark mb-0">Already have account?<a href="login.html" class="text-primary ms-1">Sign In</a></p></div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center my-3"> <a href="" class="social-login  text-center me-4"> <i class="fa fa-google"></i> </a> <a href="" class="social-login  text-center me-4"> <i class="fa fa-facebook"></i> </a> <a href="" class="social-login  text-center"> <i class="fa fa-twitter"></i> </a> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;

