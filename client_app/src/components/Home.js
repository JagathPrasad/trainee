import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './home.css';
import { useState } from 'react';
import Chart from "react-apexcharts";
import App from '../App.css';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';

const Home = (props) => {

  console.log('user', props.user);

  //const {name,setName} = useState('tst');

  //var name ="tst";
  //var int = 100;

  const [state, setstate] = useState({
    options: {
      chart: {
        id: "line"
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      yaxis: {
        categories: [0, 50, 100, 150, 200]
      }
    },
    series: [
      {
        name: "Total Order",
        data: [20, 40, 18, 45, 29, 62, 15, 55,20]
      },
      {
        name: "Total Sale",
        data: [31, 25, 59, 14, 38, 15, 25, 33, 25]
      }

    ]

  })
  const series = [73];
  const options = {
    labels: ["Sale"],
  };
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  

  


  return (

        <div>
            <Navbar />
            <Sidebar />
            
            
         <header className="App-header">

    <div ClassName="App-header ">
      <div className="box wrapper " >
        <div className="text "> <p><h5> Total Sales</h5>  <h4>34,567 </h4> <h6>3% Last Month</h6> </p>
         <div className="icon " >
            <svg className="" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
         
        </div>
        
        <div className="text "> <p> <h5>Total Leads </h5>
          <h4> 56,992 </h4><h6>3% Last Month</h6> </p>
          <div className="icon1 ">
            <svg xmlns="http://www.w3.org/2000/svg" class=" icon-size " viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>

        </div>
     
        <div className="text ">
          <p> <h5>Total Profit</h5>
            <h4> $42,567 </h4> <h6>0.5% Last Month</h6> </p>
          <div className="icon2 ">
          <svg   xmlns="http://www.w3.org/2000/svg" className ="icon-size" viewBox="0 0 320 532" height="35px" width="30px">
            <path d="M160 0C177.7 0 192 14.33 192 32V67.68C193.6 67.89 195.1 68.12 196.7 68.35C207.3 69.93 238.9 75.02 251.9 78.31C268.1 82.65 279.4 100.1 275 117.2C270.7 134.3 253.3 144.7 236.1 140.4C226.8 137.1 198.5 133.3 187.3 131.7C155.2 126.9 127.7 129.3 108.8 136.5C90.52 143.5 82.93 153.4 80.92 164.5C78.98 175.2 80.45 181.3 82.21 185.1C84.1 189.1 87.79 193.6 95.14 198.5C111.4 209.2 136.2 216.4 168.4 225.1L171.2 225.9C199.6 233.6 234.4 243.1 260.2 260.2C274.3 269.6 287.6 282.3 295.8 299.9C304.1 317.7 305.9 337.7 302.1 358.1C295.1 397 268.1 422.4 236.4 435.6C222.8 441.2 207.8 444.8 192 446.6V480C192 497.7 177.7 512 160 512C142.3 512 128 497.7 128 480V445.1C127.6 445.1 127.1 444.1 126.7 444.9L126.5 444.9C102.2 441.1 62.07 430.6 35 418.6C18.85 411.4 11.58 392.5 18.76 376.3C25.94 360.2 44.85 352.9 60.1 360.1C81.9 369.4 116.3 378.5 136.2 381.6C168.2 386.4 194.5 383.6 212.3 376.4C229.2 369.5 236.9 359.5 239.1 347.5C241 336.8 239.6 330.7 237.8 326.9C235.9 322.9 232.2 318.4 224.9 313.5C208.6 302.8 183.8 295.6 151.6 286.9L148.8 286.1C120.4 278.4 85.58 268.9 59.76 251.8C45.65 242.4 32.43 229.7 24.22 212.1C15.89 194.3 14.08 174.3 17.95 153C25.03 114.1 53.05 89.29 85.96 76.73C98.98 71.76 113.1 68.49 128 66.73V32C128 14.33 142.3 0 160 0V0z"/></svg>
          </div>


        </div>
       
        <div className="text ">
          <p><h5>Total Cost </h5>
            <h4>$34,789 </h4> <h6>0.2% Last Month</h6> </p>
          <div className="icon3 ">
            <svg xmlns="http://www.w3.org/2000/svg" ClassName='icon-size h-6 w-6' viewBox="-3 -4 25 30" fill="currentColor">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
          </div>
          </div>
        </div>
      
      <div className="heading1">
        <div className="txt1">
          <h5>Total Transcation</h5>
        </div>
      </div>

      <div className="graph ">


        <Chart

          options={state.options}
          series={state.series}
          type="area"
          width="800px"
         
        />


      </div>
      <div className="heading2">
        <div className="txt1">
        
          <h5>Recent Orders</h5>
       
        </div>
      </div>
      <div className="box2">


        <Chart type="radialBar" series={series} options={options} width="100%" height="100%" />


      </div>
          
      <div ClassName="top">
      <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    </div>
    
    </div>
    
    </header>
    <Footer />
    
</div>
  );
}

export default Home;