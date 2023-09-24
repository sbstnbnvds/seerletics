import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';

import { Footer } from './components/Footer';

function Store() {
  return (
    <div className="Store">
      <h1>Welcome to our Store</h1>
      <p>Here you can find all our products and services</p>
    </div>
  )
}

export default Store;