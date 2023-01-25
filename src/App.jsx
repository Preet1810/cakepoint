import React from 'react';
import './App.css';
import { Navbar } from './components';
import { About, Cakes, Footer, Header, Order, Quotes } from './container'
const App=() => (
  <div>
    <Navbar />
    <Header />
    <Cakes />
    <About />
    <Order />
    <Quotes />
    <Footer />
  </div>
)


export default App