import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Counter from './components/Counter'
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/Error'
import Home from './components/Home'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} exact/>
          <Route path = "/login" element = {<Login />}/>
          <Route path = "/register" element = {<Register />}/>
          <Route path = "*" element = {<Error />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App