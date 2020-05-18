import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './routes';

function App() {
  return (
    <div className="App" style={{backgroundColor: `#83caa3` }}>
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
