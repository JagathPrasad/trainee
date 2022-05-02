import Footer from './Footer'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { store } from '../store/user';
import React, { useState, useContext } from 'react';

const Layout = (props) => {
    const { state } = useContext(store);
    console.log('asdfasdfsasfafdsafdsadfasdfasdfa', state.user);
    //read from session storage
    const page = props.page;
    console.log('page', page);
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('user_details');

        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {
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