import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/User';
import Delivery from './components/Delivery';
import Vendordelivery from './components/Vendordelivery';
import Userdelivery from './components/Userdelivery';




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
    { path: "/", element: <Login login_details="aflksdja"/> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/delivery", element: <Delivery /> },
    { path: "/vendordelivery", element: <Vendordelivery /> },
    { path: "/userdelivery", element: <Userdelivery /> },
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
