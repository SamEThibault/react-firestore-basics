import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ViewDBPage from "./Views/ViewDB";
import HomePage from "./Views/Home";

// more info on react router: https://reactrouter.com/docs/en/v6/getting-started/tutorial

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="home" element={<HomePage/>} />
    <Route path="viewdb" element={<ViewDBPage/>} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
