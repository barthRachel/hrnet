import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import CreateEmployee from './pages/CreateEmployee'
import ListEmployee from './pages/ListEmployee';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<CreateEmployee/>} />
      <Route path='/employee-list' element={<ListEmployee />} />
    </Routes>
  </Router>
);