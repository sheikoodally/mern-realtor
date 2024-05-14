import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/home'
import Error from './pages/error'
import About from './pages/about'
import Login from './pages/login'
import Properties from './pages/properties'
import Header from './components/organisms/Header'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(true)

  return (
    <>
      <Header />
      {/* <div className='h-[20px] bg-[#F6F6F6]'/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/properties' element={<Properties />} />
          <Route 
            path='/error'
            element={user === false ? <Navigate to='/' /> : <Error />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
