
function Login() {
  return (
    <div className='w-full min-h-screen overflow-hidden h-screen flex flex-col justify-center items-center'>
    
        <div className='flex flex-col space-y-4 w-full max-w-[400px] p-4'>
        <div className='p-2 border'>
          Get started <br/>
          To join and contribute to my blog please do email your work to pavaneeshwar7077@gmail.com
        </div>
        <input placeholder="Email" className="text-md px-4 py-2 border" type='email' />
        <input placeholder="Password" className="text-md px-4 py-2 border" type='password' />
        <div className='p-4 bg-black text-white w-full cursor-pointer text-center'>
            Login
          </div>
      </div>
    </div>
  )
}

export default Login