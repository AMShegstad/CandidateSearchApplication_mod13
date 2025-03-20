import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import './index.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default App;