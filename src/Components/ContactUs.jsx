import React from 'react'
import {Info} from "../data"

const ContactUs = () => {
  return (
    <>
    <section id='contact' className='h-fit pb-20 relative bg-Pro5-bg-base text-white'>
       
        <div className=' flex items-center justify-center md:px-10 py-10   font-poppins '>
            
            <div className=' md:w-[90%] w-full  h-fit md:h-screen grid grid-cols-1 md:grid-cols-2 px-10 py-24'>
                <div className='z-10 grid grid-rows-3 md:px-5 gap-2 md:mt-0   '>
                  {
                    Info.map((data)=>(
                        <div className='flex flex-row gap-3 items-center '>
                            <h1 className='text-3xl'>{data.icon}</h1>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-medium'>{data.name}</h1>
                                <h2 className='text-text-muted'>{data.desp}</h2>
                                <p className='text-Pro5-primary'>{data.value}</p>
                            </div>
                        </div>
                    ))
                  }
                </div>
                <div className=' p-5 rounded-2xl border border-zinc-400 bg-Pro5-bg-base2 text-white  '>
                    <div className='z-10 flex flex-col items-start justify-start gap-2'>
                    <h1 className='mt-3 flex gap-3  text-2xl md:text-3xl leading-tight  font-medium'>
                        
                        <span className=''>Get in Touch</span>
                    </h1>
                    <p className=' text-start'>
                    Have a project in mind or need expert advice? We're here to
                    help! Reach out to our team for personalized consultations, inquiries, or to start your next big project today.
                    </p>
                    </div>
                    <form action="">
                      <div className=' relative z-10 flex flex-col md:flex-row gap-3 mt-5'>
                        <div className='w-full'>
                       <input 
                        className="p-2 border border-zinc-500 rounded-md bg-Pro5-bg-base text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-white" 
                        type="text" 
                        placeholder="FirstName"
                        />


                        </div>
                        <div className='w-full'>
                        <input 
                        className="p-2 border border-zinc-500 rounded-md bg-Pro5-bg-base text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-white" 
                        type="text" 
                          placeholder="LastName"
                        />

                        </div>
                        
                      </div>
                      <div className='relative z-10  flex flex-col md:flex-row gap-3 mt-5'>
                        <div className='w-full'>
                        <input 
                        className="p-2 border border-zinc-500 rounded-md bg-Pro5-bg-base text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-white" 
                        type="text" 
                          placeholder="Email"
                        />

                        </div>
                        <div className='w-full'>
                        <input 
                        className="p-2 border border-zinc-500 rounded-md bg-Pro5-bg-base text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-white" 
                        type="text" 
                          placeholder="Phone Number"
                        />

                        </div>
                        
                        
                      </div>
                      <div>
                          <textarea 
                          className='relative z-10  p-2 border border-zinc-500 rounded-md bg-Pro5-bg-base text-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-white w-full h-36 mt-5  resize-none ' placeholder='Message' name="" id="" ></textarea>
                        </div>
                      <button className='relative z-10  px-3 py-2 bg-Pro5-primary mt-5 text-white rounded-md w-full'>
                        Send Now
                      </button>
                    </form>
                </div>
                
            </div>
    
          </div>


    </section>
    </>
  )
}

export default ContactUs