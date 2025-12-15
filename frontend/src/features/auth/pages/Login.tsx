import Button from "../../../components/Button"
import Input from "../../../components/Input"

function Login() {
  return (
    <div className='w-full min-h-screen overflow-hidden h-screen flex flex-col justify-center items-center'>
    
        <div className='flex flex-col space-y-4 w-full max-w-[400px] p-4'>
        <Input placeholder="Email" type="email"/>
        <Input placeholder="Password" type="password"/>
        <Button placeholder="Login" width="full"/>
      </div>
    </div>
  )
}

export default Login