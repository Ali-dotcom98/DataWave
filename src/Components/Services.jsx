import React from 'react'
import {services} from "../data"
import bg1 from "../assets/bg-2.svg"
import bg2 from "../assets/bg-1.svg"
const Services = () => {
  return (
    <>
        <section className='h-fit bg-Pro5-bg-base text-white px-10 font-poppins space-y-5  py-16'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl text-Pro5-primary font-medium'>Our Services</h1>
                <p className='text-4xl font-medium text-center w-[70%]'>Empowering Your Business with Tailored IT Solutions</p>
            </div>
            <div className='relative z-20 grid grid-cols-3 gap-5 pt-10'>
                {
                    services.map((data)=>(
                        <div className='relative z-20 flex flex-col gap-2 bg-Pro5-bg-base2 p-5 rounded-3xl'>
                            <p className='text-5xl text-Pro5-primary bg-Pro5-primary bg-opacity-5 w-fit p-3 rounded-xl'><data.icon/></p>
                            <h1 className='text-xl font-medium pt-3 pb-1'>{data.title}</h1>
                            <p className='leading-relaxed line-clamp-3 text-Pro5-text-muted'>{data.description}</p>
                            <button className='flex flex-row gap-2 text-Pro5-primary px-9 py-5 items-center'>
                                <h1 className='font-medium text-lg'>Explore</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                            </button>
                        </div>
                    ))
                }
                <div className='absolute z-0 inset-0 overflow-hidden'>
                    <img src={bg2} className='opacity-25' alt="" />
                </div>

            
            </div>

        </section>
    </>
  )
}

export default Services