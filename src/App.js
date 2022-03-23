import './Styles/App.css';
import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Views/Home";
import ViewDBPage from "./Views/ViewDB";
import {Link} from "react-router-dom";


export default function App() {

  return (
    <div>
    <nav>
      <Link to ="/home"> Home </Link> |{" "}
      <Link to="/viewdb">viewdb</Link>
      </nav>
    </div>
);
}



