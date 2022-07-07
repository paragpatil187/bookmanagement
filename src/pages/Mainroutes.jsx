import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Admin from './Admin'
import Books from './Books'
import EditBook from './EditBook'
import SingleBook from './SingleBook'
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books/>}/>
      <Route path="/books/:id"  element={<SingleBook/>}/>
      <Route path="/books/:id/edit"  element={<EditBook/>}/>  
      <Route path="/admin"  element={<Admin/>}/> 
      <Route path="*" element={<h1>Page not found</h1>} /> 



    </Routes>
  )
}

export default Mainroutes