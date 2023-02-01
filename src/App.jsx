import React from 'react';
import './App.css';
import { Navbar } from './components';
import { About, Cakes, Footer, Header, Order, Map } from './container'
const App=() => (
  <div>
    <Navbar />
    <Header />
    <Cakes />
    <About />
    <Order />
    <Map />
    <Footer />
  </div>
)


export default App