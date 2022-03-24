import './Styles/App.css';
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Views/Home";
import ViewDBPage from "./Views/ViewDB";
import NavBar from "./Components/navBar.js";


export default function App() {

  return (
    <div className="app">
      <NavBar/>
    </div>
);
}



