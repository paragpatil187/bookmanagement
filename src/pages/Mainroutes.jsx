import React from 'react'
import {Routes,Route} from 'react-router-dom'
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/books/:id" />
      <Route path="/books/:id/edit" />  
      <Route path="/admin" /> 
      <Route path="*" element={<h1>Page not found</h1>} /> 



    </Routes>
  )
}

export default Mainroutes