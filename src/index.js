import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ViewDB from "./Views/ViewDB";
import Home from "./Views/Home";

// more info on react router: https://reactrouter.com/docs/en/v6/getting-started/tutorial

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="viewdb" element={<ViewDB />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
