import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import routes from './routes'
import './App.css';
import './App.sass'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
     
    </div>
  );
}

export default App;
