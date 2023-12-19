import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import AuthGuard from './authGuard/authGuard.jsx'
import StudentPage from './Pages/studentPage/index.jsx'
import ProtectedRoute from './protectedRoute/index.jsx'
import StudentGuard from './studentGuard/index.jsx'

function App() {

  return (
    <>
    
    <Routes>
      <Route index path='/' element={<AuthGuard><Login/></AuthGuard>} />
      <Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>} />
      <Route path='/dashboard' element={<StudentGuard><StudentPage/></StudentGuard>} />
      <Route path='*' element={"404page"} />
    </Routes>
    
    
      
    </>
  )
}

export default App
