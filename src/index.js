import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculators from './components/Calculators';
import Quote from './components/Quote';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculators />} />
      <Route path="quotes" element={<Quote />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
