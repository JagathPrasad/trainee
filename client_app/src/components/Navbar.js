/*
Created By Anusha
Created On 04-04-2022
Description : To Show Navbar in Dashboard
*/

import './Navbar.css';
import React, { useState, useContext } from 'react';
//import { UserContext } from "../store/user";
import { store } from '../store/user';
//import React, { useCallback, useState,  } from 'react';
//import './Login.js'


const Navbar = (props) => {
  //const { user, setUser } = useContext(UserContext);
  const { state } = useContext(store);
  console.log('asdfasdfsasfafdsafdsadfasdfasdfa', state.userName);
  const [islogged, setLogged] = useState(true);

  const logOut = () => {
    if (islogged == true) {
      sessionStorage.clear();
      // setUser(false);
      //history.push('/Login')
    }
    else {
      sessionStorage.setItem('user_details');
    }

  }

  const username = sessionStorage.getItem('name');

  const setOtherusers = (data) => {
    if (data) {
      sessionStorage.setItem('user', data.name);
      // setUserName({ username: data.name });
      console.log('Data in setusers: ', data);
      //setUser([]);
    } else {
      sessionStorage.setItem('user', null);

    }
  }

  const RenderProfile = () => {
    let userSection = (state.userName);
  }

  return (

    <div className="navbar">
      <div className="topbarwrapper">
        <div className="topleft">
        </div>
        <div className="search">
          <input class="form-control" placeholder="Search for anything....." type="search" />
          <button class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="-10 0 34 34" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {(() => {
          if (state.userName != '') {
            return (<div className="items">
              <div className="item">

                <div class="dropdown">
                  <div class="profile"> <img src={`../profile_fhgfgh.jpg`} className="avatar"></img>
                    <div class="dropdown-content">
                      <ul>
                        <li className="name"><h2> {state.userName}</h2></li>
                        <hr />
                        <li><button>Settings</button></li>
                        <li><button>Profiles</button></li>
                        <li><button onClick={() => { logOut() }}>Logout</button></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>);
          } else {
            return (<div>empty</div>);
          }
        })()}


      </div>
    </div>
  );
}

export default Navbar;
