import React from 'react';
import {
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import { useUser } from './features/hook'
import './App.css';
import Home from './pages/home'
import ProductList from './pages/product-list'
import ProductDetail from './pages/product-detail'
import Register from './pages/register'
import Login from './pages/login'
import Cart from './pages/card'
import Success from './pages/success'

function App() {
  const { currentUser } = useUser()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={currentUser ? <Navigate to="/"/> : <Login />} />
      <Route path="/register" element={currentUser ? <Navigate to="/"/> : <Register />} />
    </Routes>
  );
}

export default App;
