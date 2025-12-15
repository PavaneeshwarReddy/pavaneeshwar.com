import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='w-full flex flex-row justify-between sticky top-4'>
        <div className="font-bold">
          pavaneeshwar.com
        </div>
        <div className='lg:space-x-16'>
            <Link to={'/'}>Home</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/comments'}>Comments</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/admin'}>Admin</Link>
        </div>
    </div>
  )
}

export default Navbar