import Footer from './Footer'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { store } from '../store/user';
import React, { useState, useContext, useEffect } from 'react';

const Layout = (props) => {

    const { state, dispatch } = useContext(store);

    console.log('asdfasdfsasfafdsafdsadfasdfasdfa', state.user);
    //read from session storage
    const page = props.page;
    console.log('page', page);
    // const renderPage = () => {
    //     return <div><Navbar />
    //         <Sidebar /></div>;
    // }

    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('user_details'));

        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {
            dispatch({ type: 'ADD_USER', payload: { user: loggedInUser } });
            // goHome();
        }
    }, []);
    return (
        <div>

            {(() => {
                if (state.user != '' && state.user != undefined) {
                    return <div>
                        <Sidebar />
                        <Navbar />
                        {props.children}
                        <Footer />
                    </div>;
                } else {
                    return <div>

                        {props.children}

                    </div>;
                }
            })()}

        </div>
    );
}

export default Layout;