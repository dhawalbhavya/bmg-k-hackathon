import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('Form submitted successfully.')
  }
  return (
    <div className="Basic Form">
      <h1>Kubernetes Form</h1>
      <form>
      <fieldset>
         <label>
           <p>Input</p>
           <input name="text" />
         </label>
         <label>
           <p>API</p>
           <input name="text" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
