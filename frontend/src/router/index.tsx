import { Route, Routes } from 'react-router'
import Home from '../features/home/pages/Home'
import BlogList from '../features/blogs/pages/BlogList'
import Donate from '../features/donate/pages/Donate'
import Profile from '../features/profile/pages/Profile'

function Router() {
  return (
    <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default Router