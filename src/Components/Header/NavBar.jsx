import React, { useRef, useState } from 'react'
import {navRoutes , socialHandles} from "../../data"
import Logo from "../../assets/Logo"
import gsap from"gsap"
import { useGSAP } from '@gsap/react'
const NavBar = () => {
    const Elements = useRef()
    useGSAP(()=>{
        const time = gsap.timeline()
        time.from(".Logo",{x:-100 , opacity:0 , duration :1})
        time.from(".Social",{x:100 , opacity:0 , delay :0.3})
        time.from(Elements.current.children , {x:-50 , opacity:0 , delay:0.1 , stagger:0.3 })

    },[])
  return (
    <>
        <nav className='relative  bg-Pro5-bg-base text-white flex flex-row items-center justify-between font-poppins px-4 py-3'>
            <div className='Logo flex flex-row gap-2 items-center'>
                <Logo/>
                <h1 className='text-2xl font-medium'>Datawave</h1>
            </div>
            <div ref={Elements} className='flex flex-row gap-7 text-lg font-medium'>
                {
                    navRoutes.map((data)=>(
                        <div>{data.name}</div>
                    ))
                }
            </div>
            <div className='Social relative z-50 flex flex-row gap-4'>
                {
                    socialHandles.map((data)=>(
                        <div className='bg-Pro5-bg-base text-Pro5-primary p-2 rounded-full'><data.icon/></div>
                    ))
                }
            </div>

        </nav>
    </>
  )
}

export default NavBar