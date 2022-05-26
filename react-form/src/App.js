import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';

const API_BASE_URL = "http://localhost:9000/k8-hackathon";

function App() {
  const handleSubmit = () => {

    axios.get( "http://localhost:9000/k8-hackathon").then(res=>{alert(`response ${res.data}`)})
  
  }
  return (
    <div className="Basic Form">
      <h1>Kubernetes Form</h1>
      <div>
      <fieldset>
         <label>
           <p>String To Reverse</p>
           <input name="text" />
         </label>
         <label>
           <p>ID to get</p>
           <input name="text" />
         </label>
       </fieldset>
       <button onClick= {()=> handleSubmit()} type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
