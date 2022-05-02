import Footer from './Footer'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { store } from '../store/user';
import React, { useState, useContext } from 'react';

const Layout = (props) => {
    const { state } = useContext(store);
    console.log('asdfasdfsasfafdsafdsadfasdfasdfa', state.user);
    const page = props.page;
    console.log('page', page);
    const renderPage = () => {
        return <div><Navbar />
            <Sidebar /></div>;
    }
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