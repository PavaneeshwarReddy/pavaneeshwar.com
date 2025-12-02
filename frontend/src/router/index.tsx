import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../features/home/services/Home'
import BlogList from '../features/blogs/pages/BlogList'
import Donate from '../features/donate/pages/Donate'

function Router() {
  return (
    <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/donate' element={<Donate/>}/>
    </Routes>
  )
}

export default Router