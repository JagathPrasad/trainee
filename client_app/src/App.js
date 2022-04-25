import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/User';
import Payment from './components/Payment';

import Address from './components/Address';
import Order from './components/Order';
//import Payment from './components/Payment';
import Items from './components/Items';
import Itemdetails from './components/Itemdetails';
import Approval from './components/Approvals';
import Delivery from './components/Delivery';
import Subscription from './components/Subscription';
import Vendordelivery from './components/Vendordelivery';
import Userdelivery from './components/Userdelivery';
import Vendors from './components/Vendors';
import Banner from './components/Banner';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";
import Layout from './components/Layout';


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  // return (
  //   <>
  //     {/* <Router /> */}
  //       <Login />

  //     {/* <Route path="/register" Component={Register} /> */}

  //   </>

  // );

  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/payment", element: <Payment /> },
    
    { path: "/address", element: <Address /> },


    { path: "/Order", element: <Order /> },
    { path: "/items", element: <Items /> },
    { path: "/Itemdetails", element: <Itemdetails /> },
    { path: "/Approval", element: <Approval /> },
    { path: "/delivery", element: <Delivery /> },
    { path: "/subscription", element: <Subscription /> },
    { path: "/vendordelivery", element: <Vendordelivery /> },
    { path: "/userdelivery", element: <Userdelivery /> },
    { path: "/Vendors", element: <Vendors /> }, 
    { path: "/Banner", element: <Banner />}  // ...
  ]);
  return routes;
}

// export default App;

const AppWrapper = () => {
  const location = window.location.pathname;
  //location = location.substring(1);
  return (
    <Router>
      <Layout page={location.substring(1)}>
        <App />
      </Layout>
    </Router>
  );
};

export default AppWrapper;
