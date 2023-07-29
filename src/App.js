import React from 'react'

import Routers from "./router/Routers";

console.log("environment variable ATM PIN", process.env.REACT_APP_MY_ATM_PIN)



export default function App() {
    return (
        <div>
            <Routers />
            
        </div>
    );
  }