import { Route, Routes } from 'react-router'
import Home from '../features/home/pages/Home'
import BlogList from '../features/blogs/pages/BlogList'
import Comments from '../features/comments/pages/Comments'
import Profile from '../features/profile/pages/Profile'
import Login from '../features/auth/pages/Login'
import AdminLayout from '../layout/AdminLayout'
import AnalyticsPage from '../features/admin/pages/AnalyticsPage'
import BlogCreatePage from '../features/admin/pages/BlogCreatePage'
import ProfileEditPage from '../features/admin/pages/ProfileEditPage'

function Router() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/blogs' element={<BlogList />} />
      <Route path='/comments' element={<Comments />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='create-blog' element={<BlogCreatePage />} />
        <Route path='edit-profile' element={<ProfileEditPage />} />
        <Route path='analytics' element={<AnalyticsPage />} />
      </Route>
    </Routes>
  )
}

export default Router