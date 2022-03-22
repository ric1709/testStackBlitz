import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1 onClick={()=>console.log('test')}>Baiaaly</h1>
    </div>
  );
  
}
