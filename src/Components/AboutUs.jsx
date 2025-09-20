import React, { useEffect, useState , useRef } from 'react'
import {OdoMeterContent , whyChooseUs , ourApproaches} from "../data"
import Odometer from 'react-odometerjs';
import bg1 from "../assets/bg-2.svg"
import bg2 from "../assets/bg-1.svg"
import vr from "../assets/vr.png"
import pic1 from "../assets/pic-1.png"
import { div } from 'framer-motion/client';
import { SiWeb3Dotjs } from 'react-icons/si';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



const AboutUs = () => {
    const [value, setvalue] = useState(0)
    const [value1, setvalue1] = useState(0)
    const [value2, setvalue2] = useState(0)
    const target = useRef()
    const target1 = useRef()
    useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section",  
           
        }
        });
    tl.from('.box1',{y:100 , opacity:0, duration:1})
    tl.from('.box2',{y:100 , opacity:0, duration:1}, "-=0.8")
    tl.from('.Img1',{y:100 , opacity:0, duration:1}, "-=0.5")
    tl.from('.Img2',{y:100 , opacity:0, duration:1}, "-=0.5")
    tl.from(target.current.children,{y:100 , opacity:0, duration:1,delay:0.3, stagger:0.3 })
    tl.from([...target1.current.children], {  // Spread operator to convert NodeList to an array
        y: 100, 
        opacity: 0, 
        duration: 1, 
        delay: 0.3, 
        stagger: 0.3,
        scrollTrigger: {
            trigger: target1.current,  // Use target1.current directly
            
        }
    });
    

    },[])


    useEffect(()=>{
        setTimeout(()=>{
            setvalue(OdoMeterContent[0].count)
            setvalue1(OdoMeterContent[1].count)
            setvalue2(OdoMeterContent[2].count)

        },2000)
    },[])

    useGSAP(()=>{

    })
  return (
    <>
        <section className='relative h-fit bg-Pro5-bg-base  text-white font-poppins px-10 py-16'>
            <div className='relative flex flex-row gap-5 my-10 '>
                {
                    OdoMeterContent.map((data ,index)=>(
                        <div className='flex flex-col gap-3 items-center  p-5'>
                            <h1 className='text-xl font-medium'>{data.name}</h1>
                            <h2 className='text-5xl font-medium'><Odometer value={index==0 ? value : index==1 ? value1 : value2}></Odometer></h2> 
                            <p className='capitalize'>{data.sign}</p>
                            <p className='text-center'>{data.label}</p>
                        </div>
                    ))
                }
                <div className='absolute z-0 inset-0  -translate-y-80 '>
                    <img src={bg1} className='scale-50 overflow-hidden'  alt="" />
                </div>

            </div>

            <div className='section  grid grid-cols-3 py-16'>
                <div className='col-span-2  '>
                    <div className='flex flex-row px-6 gap-4'>
                        <div className='box1 bg-Pro5-primary relative h-[90vh] w-[50%] space-y-3 rounded-2xl px-4 py-5'>
                            <h1 className='text-2xl font-bold tracking-wider'>Our Vision</h1>
                            <h2 className='text-lg font-bold'>Transforming Technology into Progress</h2>
                            <p>Our vision is to empower businesses with practical, cutting-edge IT solutions that drive growth, streamline processes, and enhance competitiveness.</p>
                            <div className='absolute z-0 inset-0 translate-y-24'><img src={bg2} alt="" /></div>
                            <div className='Img1 relative z-10 -translate-y-5'>
                                <img src={vr} alt="" />
                            </div>
                        </div>
                        <div className='box2 bg-Pro5-bg-base2 relative h-[90vh] w-[50%] space-y-3 rounded-2xl px-4 py-5'>
                            <h1 className='text-2xl font-bold tracking-wider'>Who We Are</h1>
                            <h2 className='text-lg font-bold'>Your Trusted Technology Partner</h2>
                            <p>We are experienced IT professionals delivering tailored tech solutions to meet each client’s unique goals.</p>
                            <div className='absolute z-0 bottom-0 right-0 -translate-y-5 -translate-x-5 '><div className='bg-Pro5-primary size-32 rounded-full blur-2xl bg-opacity-45 '></div></div>
                            <div className='Img2 relative z-10 -translate-y-5'>
                                <img src={pic1} alt="" />
                            </div>
                        </div>


                    </div>
                    <div ref={target1} className=' relative flex flex-row gap-5 px-6 pt-5'>
                        {
                            whyChooseUs.map((data)=>(
                                <div className='relative z-20 bg-Pro5-bg-base2 rounded-3xl px-4 py-6 flex flex-col items-center justify-center space-y-3 bg-opacity-65'>
                                    <div className='size-16'><img src={data.imageIcon} alt="" /></div>
                                    <h1 className='text-lg font-medium'>{data.title}</h1>
                                    <p className='text-center text-text-muted'>{data.description}</p>
                                </div>
                            ))
                        }
                        <div className='absolute inset-0 z-0'><div className='bg-Pro5-primary w-[60%] h-56 translate-x-48 translate-y-20 blur-3xl opacity-50'></div></div>

                    </div>
                </div>
                <div ref={target} className='col-span-1  px-5 space-y-3'>
                    <h1 className='text-xl'>Our Approach</h1>
                    <div  className='space-y-5'>
                        {
                            ourApproaches.map((data)=>(
                                <div className='flex flex-row gap-3 bg-Pro5-bg-base2 px-3 py-5 rounded-3xl'>
                                    <div className='text-Pro5-primary text-4xl '>
                                        <data.icon/>
                                    </div>
                                    <div>
                                        <h1 className='font-medium text-lg'>{data.title}</h1>
                                        <p className='text-sm font-medium text-text-muted leading-loose'>{data.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='relative  '>
                            <div className='relative z-20 flex flex-col  gap-3  items-center px-4 py-3'>
                                <h1 className='text-center'>Reach out to see how our IT solutions canboost your success.</h1>
                                <button className='bg-Pro5-primary px-4 py-3 rounded-3xl w-fit'>Contact us</button>
                            </div>
                            <div className='absolute inset-0 z-0  -translate-y-12'> <img src={bg2} className='opacity-30' alt="" /></div>
                        </div>
                    </div>
                </div>
                
            </div>
            

        </section>
    </>
  )
}

export default AboutUs