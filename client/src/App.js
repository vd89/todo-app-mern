/** @format */

import React from 'react';
import Selector from './Component/Filter/Selector';
import Footer from './Component/HeaderFooter/Footer';
import Header from './Component/HeaderFooter/Header';
import InputCard from './Component/InputCard/InputCard';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoState from './Component/Context/TodoState';

function App() {
  return (
    <TodoState>
      <Router>
        <Header />
        <InputCard />
        <Selector />
        <Footer />
      </Router>
    </TodoState>
  );
}

export default App;
