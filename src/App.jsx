import React from 'react';
import './App.css';
import { Navbar } from './components';
import { About, Cakes, Footer, Header, Map } from './container'
const App=() => (
  <div>
    <Navbar />
    <Header />
    <Cakes />
    <About />
    <Map />
    <Footer />
  </div>
)


export default App