import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CreateEmployee from './pages/CreateEmployee'
import ListEmployee from './pages/ListEmployee';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/create' element={<CreateEmployee />} />
      <Route path='/list' element={<ListEmployee />} />
    </Routes>
  </Router>
);