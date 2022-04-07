// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import '../App.css';
import './Login.css';
// import AuthContext from "./context/AuthProvider";

// import axios from './api/axios';
// const LOGIN_URL = '/auth';

const Login = () => {
    // const {setAuth} = useContext(AuthContext);
    // const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(
    //             JSON.stringify({ email, password }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withcredentials: true
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data))
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;
    //         // setAuth({email, password, accessToken});
    //         setEmail('');
    //         setPassword('')
    //     }

    //     catch (err) {


    //     }
    // }

    const GoToRegistration = () => {
        //     history.push('register');
        // }
    }
    return (

        <div className='bg-blue centered'>

            <div className='sub-main'>

                <h1>Login</h1>
                <form >

                    <input type="text" placeholder="Enter email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <br />
                    <input type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br />
                    {/* <Link to="/register" className="btn btn-primary">Register</Link> */}
                    <button>Log In</button>
                </form>

                <a href="forgot-password.html" className="text-primary">Forgot Password?</a>
                <br />
                <p>
                    Not a member?
                    <span className="line">
                        <a href="#">Create an Account?</a>

                    </span>
                </p>
            </div>
        </div>

    )

}
export default Login;