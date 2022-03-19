import './Styles/App.css';
import { React, useState } from 'react';
import Home from './Views/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewDB from "./Views/ViewDB";



export default function App() {

  const [view, setView] = useState("Home");

  // use redux to make the view state global to use setView in other components
   function handleView(viewToSet)
  {
    setView(viewToSet);
  }

  return (
    <div>
    {view === "Home" ? <Home/> : ""}
    {view === "ViewDB" ? <ViewDB/> : ""}
    </div>
 

  );
}

