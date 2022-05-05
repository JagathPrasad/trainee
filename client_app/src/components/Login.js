
import React, { useEffect, useContext, useState } from 'react'
import '../App.css';
import './Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { UserContext } from '../store/user';
import { store } from '../store/user';
import { Route, Redirect } from "react-router-dom";
import { baseUrl } from './utility/api_config';



const Login = () => {
    //let x = api_config();
    console.log('baseUrl', baseUrl);
    // const { username, setUsername } = useContext(UserContext);
    const [islogin, setLogin] = useState(true);
    const [user_details, setuserDetails] = useState('');
    const [mobileno, setmobileno] = useState('');
    const [OTP, setotp] = useState('');
    const [auth, setauth] = useState('');
    const [user_id, setUserId] = useState('');


    // const onusernameChange = (event) => {
    //     setusername(event.target.value)
    //   }

    // const componentDidMount = () => {
    //     if (this.props.authenticated) {
    //       // redirect the user
    //     }
    // }

    const globalState = useContext(store);
    const { dispatch } = globalState;
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




    const Getloginuser = () => {
        //added by jagath for testing
        /*
        //dispatch({ type: 'ADD_USER', payload: { userName: 'Jagath' } });
        //goHome();
        */
       // baseUrl.get(`user/getloginuser/${this.state.mobileno}`).then((res) => {

        axios.get(baseUrl+'user/getloginuser/'+ mobileno).then((res) => {
            //debugger;
            console.log(res.data, 'success');
            // setLogged(false);
            setuserDetails(res.data);
            sessionStorage.setItem('user_details', res.data);
            setUserId(res.data.user_id);
            setLogin(false);

        }).catch((error) => {
            console.log(error, 'success');
        });
    }

    const Getuserotp = () => {

        //API.get(`user/getloginuser/${this.state.OTP}${this.state.user_id}`).then((res) => {
        axios.get(baseUrl+'user/getuserotp/' + OTP + '/' + user_id).then((res) => {

            console.log(res.data, 'success');
            setuserDetails(res.data);
            sessionStorage.setItem('user_details', JSON.stringify(res.data));
            //user Name hardcoded please pass it dynamically
            //dispatch({ type: 'ADD_USER', payload: { userName: 'Jagath' } });//context api updated.
            dispatch({ type: 'ADD_USER', payload: { user: res.data } });//context api updated.
            goHome();

        }).catch((error) => {
            console.log(error, 'success');
        });

    }


    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('user_details');
        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {

            goHome();
        }
    }, []);


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