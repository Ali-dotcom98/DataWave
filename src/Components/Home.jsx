import React from 'react'
import Box from "../assets/BoxAnimation"
import bg1 from "../assets/bg-2.svg"
import bg2 from "../assets/bg-1.svg"
import hero from "../assets/hero.png"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
const Home = () => {
  useGSAP(()=>{
    const timeline = gsap.timeline()
    timeline.from(".box",{x:2000 , duration:1, opacity:0})
    .from(".head" ,{y:100 , opacity:0 , duration :0.4},"-=0.2")
    .from(".Img",{y:-50 ,opacity:0 , duration :0.5})
    .from(".Para",{y:100 , opacity:0 , duration: 0.5 },"-=0.1")
    .from(".Btn",{y:100 , opacity:0 , duration: 0.4 })

  },[])
  return (
    <>
    <section className='relative  h-screen bg-Pro5-bg-base font-poppins text-white overflow-x-clip '>
        <div className='absolute z-0 inset-0 scale-75 overflow-hidden'><Box/></div>
        <div className='relative  h-full z-20 grid grid-cols-2 '>
          <div className='col-span-1   pt-32 lg:pt-38 space-y-5 px-10'>
              <button className='bg-Pro5-primary bg-opacity-30 text-Pro5-primary px-3 py-1   rounded-2xl'>
                Digital Innovation And Expression
              </button>
              <h1 className='text-5xl font-bold head'>Build, Innovate, And Transform with Us.</h1>
              <p className='font-medium Para '>
              Datawave brings your ideas to life with custom software, web, and
              mobile solutions. From concept to launch, we drive your business
              forward.
              </p>
              <div className='flex flex-row gap-5 Btn'>
                <button className='bg-Pro5-primary flex flex-row gap-3 items-center px-4 py-3 rounded-3xl'>
                  <h1>Get Started</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </button>
                <button className='bg-Pro5-bg-base2 flex flex-row gap-3 items-center px-4 py-3 rounded-3xl'>
                  <h1>See Our Work</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints"><circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/></svg>
                </button>
              </div>
          </div>
          <div className='box translate-x-10  absolute z-0 bg-Pro5-primary size-96 scale-150 rounded-xl  rotate-45  right-0'> <img src={bg2} className='w-full -translate-x-3 translate-y-24' alt="" /></div>
          <div className='col-span-1 relative  overflow-hidden Img'>
              <img src={hero} className='scale-75  -translate-y-32' alt="" />
          </div>
        </div>
       
     


    </section>
    
    </>
  )
}

export default Home