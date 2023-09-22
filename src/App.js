import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite } from 'flowbite-react';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { ThemeProvider } from './components/ThemeContext';
import './index.css'

function App() {

  useEffect(() => {
    // Load the user's theme preference from local storage on app load
    const storedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark', storedTheme === 'dark');
  }, []);
  
  return (
    <>
    <ThemeProvider>
    <Flowbite>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
    </ThemeProvider>
    </>
  );
}

export default App;
