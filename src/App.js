
import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import {userData} from "./components/UserData"

function App() {
  const [UserData,setUserData]=useState({
    labels:userData.map((data)=>(data.year)),
    datasets:[
      {
        label:"User Gain in Stocks in Lakhs",
        data: userData.map((data)=>(data.usergained)),
        backgroundColor:["#66ff33",
      "blue",
      "red",
      "orange",
      "gray"],
      color:"black",
      borderColor:"black",
      borderWidth:2,
      fontSize:18
      }
    ]
  })



  const [LossData,setLossData]=useState({
    labels:userData.map((data)=>(data.year)),
    datasets:[
      {
        label:"User Loss in Stocks in Lakhs",
        data: userData.map((data)=>(data.userlost)),
        backgroundColor:["red",
      "green",
      "orange",
      "gray",
      "blue",
    ],
      color:"black",
      borderColor:"black",
      borderWidth:2,
      fontSize:18
      }
    ]
  })





  return (
    <div className="App" >
      <div style={{width:700}}>

      <BarChart ChartData={UserData}/>
      {/* <LineChart ChartData={LossData} /> */}
      <BarChart ChartData={LossData} />
      </div>
    </div>
  );
}

export default App;
