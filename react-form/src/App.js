import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const API_BASE_URL = `http://localhost:9000`;
const API_MESSAGE = (message) => `${API_BASE_URL}/${message}`;
const API_ID = (id) => `${API_BASE_URL}/message/${id}`;

const [message, setMessage] = useState();
const [ID, setID] = useState();

function App() {
  const handleSubmit = () => {
    const URL = (message !== "" ? API_MESSAGE(message) : API_ID(ID))
    axios.get(URL).then(res=>{alert(`response ${res.data}`)})
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleIDChange = (event) => {
    setID(event.target.value);
  };
  return (
    <div className="Basic Form">
      <h1>Kubernetes Form</h1>
      <div>
      <fieldset>
         <label>
           <p>String To Reverse</p>
           <input name="text" value={message} onChange={() => handleMessageChange} />
         </label>
         <label>
           <p>ID to get</p>
           <input name="text" value={ID} onChange={() => handleIDChange} />
         </label>
       </fieldset>
       <button onClick= {()=> handleSubmit()} type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
