import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AppRouter from './configs/AppRouter';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      
      <AppRouter />

    </div>
    <Footer/>
    </>
  );
}

export default App;
