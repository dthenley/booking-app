import { useState } from 'react';
import './css/App.css';
import Sidebar from './components/Sidebar';
import Services from './components/Services';

export default function App() {
  const [userServices, setUserServices] = useState([]);
  const handleServices = payload =>{
  console.log(payload) 
  setUserServices([
    ...userServices,
    payload
  ])
}

  return (
    <div className="App">
      <h1>
        Booking App 
      </h1>
      <Sidebar
        listOfSelectedServices = {userServices}
      />
      <Services
        handleServices = {handleServices}
      />
    </div>
  );
}

