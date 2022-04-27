/*
Created By Anusha
Created On 04-04-2022
Description : To Show Navbar in Dashboard
*/

import './Navbar.css';
import React, { useCallback, useState,useContext, useEffect } from 'react';
import { UserContext } from "../store/user";
import React, { useCallback, useState, useHistory } from 'react';
import './Login.js'




const Navbar = (props) => {

  //const user = sessionStorage.getItem("user") ?? '';
  
  
  // const user = JSON.parse(sessionStorage.getItem("user"));
  // if (user != '' && user != null) {

  // }
  
  //const history = useHistory();
  const[islogged, setLogged] = useState(true);
  //const user = JSON.parse(sessionStorage.getItem("user_details"));
  const logOut = () =>
  {(() => {
                  if(islogged == true) {
                      alert('You are now logged out!')
                      sessionStorage.clear();
                      //history.push('/Login')
                  }
                  else {
                    sessionStorage.setItem('user_details');  
                  }
              })}
  const[user_name,setUserName]=useState('Anusha')
  const MyContext = React.createContext();
  const { user, setUser } = useContext(UserContext);
  const username = sessionStorage.getItem('name');

  const setusers = (data) => {
    if(data) {
        sessionStorage.setItem('user', data.name);
        setUserName({username: data.name});
        console.log('Data in setusers: ', data);
        setUser([]);
    } else {
        sessionStorage.setItem('user', null);
        
    }
  }
  return (
    <div className="navbar">
      <div className="topbarwrapper">
        <div className="topleft">
          {/* <span className="logo">Zanex</span> */}
        </div>
        
        <div className="search">
          <input class="form-control" placeholder="Search for anything....." type="search" />
          <button class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="-10 0 34 34" stroke="currentColor" stroke-width="4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="items">
          {/* <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
          <br></br>
          <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div> */}
          <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="navIconBadge"></span>
          </div>
          {/* <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="iconBadge"></span>
          </div> */}
          <div className="item">
          {/* <img src={`../profile_fhgfgh.jpg`} className="avatar"></img> */}
          <div class="dropdown">
        <div class="profile"> <img src={`../profile_fhgfgh.jpg`} className="avatar"></img>
            <div class="dropdown-content">
                <ul>
                <MyContext.Provider value={{ user, setUser: setusers }}>
                    <li className="name"><h2> {user_name}</h2></li>
                    <hr/>
                    <li><button>Settings</button></li>
                    <li><button>Profiles</button></li>
                    <li><button>Inbox</button></li>
                    <li><button>Help</button></li>
                    <li><button>Logout</button></li>
                 </MyContext.Provider>
                    <li><button onClick={logOut()}>Logout</button></li>
                    
                </ul>
            </div>
        </div>
    </div>
             
          </div>
          {/* <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div> */}
          <div className="item">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
       
        </div>

      </div>
    </div>
  );
}

export default Navbar;
