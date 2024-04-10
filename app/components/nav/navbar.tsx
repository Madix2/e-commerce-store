import React from 'react'
import Container from '../container'
import Link from 'next/link'
import Image from 'next/image'
import { Redressed } from 'next/font/google'

// const redressed= Redressed({ subsets :['latin',
// weight:["400"]]});
const redressed= Redressed({subsets: ["latin"],
weight: "400"});

function Navbar() {
  return (
    <div className="
        sticky
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
    ">
        <div className="
            py-0
            boarder-b-[1px]
        ">
            <Container>
                <div className="text-sm lg:text lg:flex items-center justify-between gap-3 md-gap-0">
                    <Link href="/" className={'${redressed.className} font-bold text-2xl'}>
                    Adico Technologies
                        {/* <Image className='' width="150" height="150" alt='Adico Technologies logo' src="/favicon.ico"/> */}
                        {/* <img className='w-20 h-20' src="favicon.ico" alt="logo" /> */}
                    </Link>
                    <div className="hidden md:block">
                        <input className='b-2px-green ' type="text" />
                    </div>

                    <div className="flex gap-8 items-center sm:gap-4 md:gap-12">
                        <div>CartCount</div>
                        <div>User Menu</div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar