import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-purple-700 text-white h-16 px-3'>
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLinks</Link>
      </div>
      <ul className='flex justify-center items-center gap-4' >
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
            <Link href="/shorten"><button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl cursor-pointer'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 font-bold px-3 py-1 rounded-lg shadow-2xl cursor-pointer'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
