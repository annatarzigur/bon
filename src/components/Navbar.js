import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='max-w-screen flex flex-row justify-between items-center px-6 py-3 md:px-12 md:py-4 shadow-sm' >
        <div>
            <Link href="/"><Image src="/logo.jpg" width={48} height={48} alt='' className='object-contain rounded-full'/></Link>
        </div>
        <div className='flex items-center gap-2 md:gap-16 text-[13px] md:text-[20px] font-bold'>
            <Link className='text-[#BD11A4]' href="/onwin-form">Onwin</Link>
           
            <Link className='text-[#2D3847]' href="/tipo-form">Tipobet</Link>
            <Link className='text-[#018100]' href="/saha-form">Sahabet</Link>
        </div>
        

    </div>
  )
}

export default Navbar