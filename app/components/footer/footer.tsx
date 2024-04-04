import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineTwitter } from "react-icons/ai";
import FooterList from './footerlist';
import Link from 'next/link';
function Footer() {
  return (
    <footer className='bg-slate-700 text-slate-200 '>
        <FooterList>
            <h3>Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
        </FooterList>
        <FooterList>
            <h3>Customer Service</h3>
            <Link href="#">Contact us</Link>
            <Link href="#">Returns & Exchange</Link>
        </FooterList>
        {/* Lets go for a <FaBeer />?
        <AiOutlineTwitter /> */}
    </footer>
  )
}

export default Footer