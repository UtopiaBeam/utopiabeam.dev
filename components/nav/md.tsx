import Link from 'next/link'
import React from 'react'
import Facebook from '../buttons/facebook'
import Github from '../buttons/github'
import LinkedIn from '../buttons/linkedin'
import Twitch from '../buttons/twitch'
import WebRing from '../buttons/webring'

const NavMd: React.FC = () => (
  <nav className="hidden md:flex justify-between bg-gray-200 dark:bg-darkgray border-b-2 border-darkgray dark:border-gray-400/50 p-3">
    <div className="flex space-x-8 items-baseline">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <h3 className="text-orange font-logo font-bold select-none">{'{'}</h3>
          <h3 className="text-white font-logo font-bold select-none">
            UtopiaBeam
          </h3>
          <h3 className="text-orange font-logo font-bold select-none">{'}'}</h3>
        </div>
      </Link>
      <Link href="/blog">
        <a className="font-mono dark:text-gray-200 select-none cursor-pointer hover:text-orange">
          BLOG
        </a>
      </Link>
      <Link href="/me">
        <a className="font-mono dark:text-gray-200 select-none cursor-pointer hover:text-orange">
          ABOUT ME
        </a>
      </Link>
    </div>
    <div className="flex space-x-6">
      <WebRing />
      <Facebook />
      <Twitch />
      <Github />
      <LinkedIn />
    </div>
  </nav>
)

export default NavMd
