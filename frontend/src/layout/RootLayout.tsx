import Navbar from '../components/Navbar'
import Router from '../router'

function RootLayout() {
    return (
        <div className='max-w-full flex flex-col justify-center items-center p-2'>
            <div className='max-w-[1920px] w-full lg:p-4  flex-col flex grow'>
                <Navbar />
                <Router />
            </div>
        </div>
    )
}

export default RootLayout