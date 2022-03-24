import './Styles/App.css';
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Views/Home";
import ViewDB from "./Views/ViewDB";
import NavBar from "./Components/NavBar.js";


export default function App() {

  return (
    <div className="app">
      <NavBar />
    </div>
  );
}



