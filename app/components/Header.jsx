"use client"

import NewsfeedBanner from "./NewsfeedBanner"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="newsfeed-wrapper">
        <div className="container">
          <NewsfeedBanner />
        </div>
      </div>      

      <div className="main-header-wrapper">
        <div className="container">
          <div className="main-header">
            <Link href="/"> 
              <Image
                src="/assets/img/Logo-secondary.svg"  
                height={50}
                width={216}
                alt="header-icon"
              />
            </Link>

            <nav>
              <Link className={`${pathname === '/' ? 'activeNav' : ''}`} href="/">Home</Link>
              <Link className={`${pathname === '/about' ? 'activeNav' : ''}`} href="/about">About</Link>
              <Link className={`${pathname === '/team' ? 'activeNav' : ''}`} href="/team">Team</Link>
              <Link className={`${pathname === '/process' ? 'activeNav' : ''}`} href="/process">Process</Link>
              <Link className={`${pathname === '/pricing' ? 'activeNav' : ''}`} href="/pricing">Pricing</Link>
              <Link className={`${pathname === '/blogs' ? 'activeNav' : ''}`} href="/blogs">Blog</Link>
              <Link href="/contact-us"><button  className="secondary-button">
                Contact us</button></Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
