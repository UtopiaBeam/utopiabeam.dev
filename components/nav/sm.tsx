import Link from 'next/link'
import React, { useState } from 'react'
import Hamburger from '../buttons/hamburger'
import Facebook from '../buttons/facebook'
import Github from '../buttons/github'
import LinkedIn from '../buttons/linkedin'
import Twitch from '../buttons/twitch'
import WebRing from '../buttons/webring'
import Logo from '../logo'

const NavSm: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className="flex md:hidden justify-between bg-darkgray border-b-2 border-gray-400/50">
        <Link href="/">
          <div className="flex items-center p-3 cursor-pointer">
            <Logo />
          </div>
        </Link>
        <button
          onClick={() => setOpen(!isOpen)}
          className="px-3 outline-none focus:outline-none"
        >
          <Hamburger />
        </button>
      </nav>
      {isOpen && (
        <div className="flex flex-col bg-black">
          <Link href="/blog">
            <a className="font-mono text-gray-200 select-none cursor-pointer px-6 py-3 border-b-2 border-darkgray border-gray-400/50 border-opacity-10">
              BLOG
            </a>
          </Link>
          <Link href="/me">
            <a className="font-mono text-gray-200 select-none cursor-pointer px-6 py-3 border-b-2 border-darkgray border-gray-400/50 border-opacity-10">
              ABOUT ME
            </a>
          </Link>
          <div className="flex justify-around px-6 py-3 border-b-2 border-darkgray border-gray-400/50 border-opacity-10">
            <WebRing />
            <Facebook />
            <Twitch />
            <Github />
            <LinkedIn />
          </div>
        </div>
      )}
    </>
  )
}

export default NavSm
