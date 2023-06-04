import {Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
  <>
     


      <Routes path="/" element={<Home/>}/>
      <Home/>
      <Routes path="/carts" element={<Cart/>}/>

  </>

  );
}

export default App;
