import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/User';
import Order from './components/Order';
import Payment from './components/Payment';
import Items from './components/Items';
import Itemdetails from './components/Itemdetails';
import Approval from './components/Approvals';
import Delivery from './components/Delivery';
import Vendordelivery from './components/Vendordelivery';
import Userdelivery from './components/Userdelivery';
import Vendors from './components/Vendors';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


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
    { path: "/", element: <Login login_details="aflksdja" /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/payment", element: <Payment /> },
    { path: "/Order", element: <Order /> },
    { path: "/items", element: <Items /> },
    { path: "/Itemdetails", element: <Itemdetails /> },
    { path: "/Approval", element: <Approval /> },
    { path: "/delivery", element: <Delivery /> },
    { path: "/vendordelivery", element: <Vendordelivery /> },
    { path: "/userdelivery", element: <Userdelivery /> },
    {path:"/Vendors",element:<Vendors/>}
    // ...
  ]);
  return routes;
}

// export default App;

const AppWrapper = () => {
  return (
    <Router >
      <App />
    </Router>
  );
};

export default AppWrapper;
