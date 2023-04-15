'use client'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Logo = () => {
    // const router = useRouter()
  return (
    <Image 
    src={'/images/logo.png'}
    alt='logo' 
    className='hidden md:block cursor-pointer'
    height={100}
    width={100}/>
  )
}

export default Logo