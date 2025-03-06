import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PageHome from './components/PageHome'
import PageNatural from './components/PageNatural'

 
function App() {

  return (
    <>
      <Header />

      <div className="row">
        <div className="col-md-2">
         <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="content p-3">
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/natural" element={<PageNatural />} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
