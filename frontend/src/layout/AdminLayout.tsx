import React from 'react'
import { Link, Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div className='flex flex-row w-full mt-12'>
        <div className='w-2/12 flex flex-col space-y-8'>
            <Link to='/admin/create-blog'>Create Blog</Link>
            <Link to='/admin/edit-profile'>Edit Profile</Link>
            <Link to='/admin/analytics'>Analytics</Link>
            <Link to=''>Log out</Link>
        </div>
        <div className='w-10/12'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout