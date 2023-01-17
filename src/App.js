import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  //set form to toggle
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
      { //switch forms
        currentForm == "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default App;
