// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';
import './Login.css';
import axios from 'axios';
// import AuthContext from "./context/AuthProvider";

// import axios from './api/axios';
// const LOGIN_URL = '/auth';

const Login = (props) => {
    console.log('asdlfjas',props.login_details);
    // const {setAuth} = useContext(AuthContext);
    // const history = useHistory();
    const [emaild, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Getusers = () => {
        axios.get('https://localhost:7101/api/User/getverifyuser/anusha@gmail.com/12345678').then((res) => {
            console.log(res,'success');
        }).catch((error)=> {
            console.log(error, 'success');
        });
    }
    useEffect(()=> {
        Getusers();
    },
    []);
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