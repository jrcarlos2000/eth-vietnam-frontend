import React from 'react';
import './App.css';
import AppRoutes from "./components/routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
export default App;
