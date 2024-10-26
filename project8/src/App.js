
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import NoPage from './pages/NoPage';
import Wrapper from './components/Wrapper';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<NoPage />} />




          </Route>

        </Routes>

      </BrowserRouter>


    </>
  )
}

