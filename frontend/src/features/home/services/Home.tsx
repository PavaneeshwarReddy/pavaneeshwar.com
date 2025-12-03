function Home() {
  return (
    <div className='min-h-screen overflow-hidden h-screen flex flex-col justify-center'>
      <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
        <div className='space-y-5 lg:w-3/5 w-full'>
          <div className='text-5xl '>Building  systems & <br />
            understanding how they work</div>
          <div className='font-code text-lg'>A space where I share what I build, break, and learn along the way.</div>
          <div className='p-4 bg-black text-white rounded-full w-fit cursor-pointer'>
            Start reading
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 items-stretch justify-center lg:w-2/5 w-full h-full">
          <div className="flex flex-col justify-center items-center h-full bg-black text-white">
            <div className='text-3xl'>12</div>
            <div>Blogs</div>
          </div>

          <div className="flex flex-col justify-center items-center h-full border">
            <div className='text-3xl'>2300</div>
            <div>Views</div>
          </div>

          <div className="flex flex-col justify-center items-center h-full bg-black text-white">
            <div className='text-3xl'>12</div>
            <div>Likes</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home