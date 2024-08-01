import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './components/pages/All'
import Header from './components/Header'
import Fsd from './components/pages/Fsd'
import Ds from './components/pages/Ds'
import Cyber from './components/pages/Cyber'
import Carrer from './components/pages/Carrer'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <All /> } />
      <Route path='/fsd' element={ <Fsd /> } />
      <Route path='/ds' element={ <Ds/> } />
      <Route path='/cyber' element={ <Cyber/> } />
      <Route path='/carrer' element={ <Carrer /> } />
    </Routes>
    </BrowserRouter>
  )
}
