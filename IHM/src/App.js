import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundColor: `#83caa3` }}>
      <BrowserRouter>
        <Header/>
          <Routes/>
          <img src="/img/footer.png"  width="100%" height="auto" style={{backgroundColor:'#83caa3'}}></img>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
