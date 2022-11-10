import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import LogIn from './pages/User/LogIn'
import SignUp from './pages/User/SignUp'
import Account from './pages/User/Account'
import ProtectRoute from './components/ProtectRoute'

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route  path='/login' element = {<LogIn />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/account' element = {
        <ProtectRoute>
          <Account />
        </ProtectRoute>
        } />
        
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
