import Link from 'next/link'
import { useState } from 'react'
import Hamburger from '../buttons/hamburger'
import FacebookLogo from '../logo/facebook'
import TwitterLogo from '../logo/twitter'
import TwitchLogo from '../logo/twitch'
import GithubLogo from '../logo/github'
import LinkedInLogo from '../logo/linkedin'

const NavSm: React.FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className="flex md:hidden justify-between bg-gray-200 dark:bg-darkgray border-b-2 border-darkgray dark:border-white border-opacity-10">
        <Link href="/">
          <div className="flex items-center p-3 cursor-pointer">
            <h3 className="text-orange font-logo font-bold select-none">
              {'{'}
            </h3>
            <h3 className="text-white font-logo font-bold select-none">
              UtopiaBeam
            </h3>
            <h3 className="text-orange font-logo font-bold select-none">
              {'}'}
            </h3>
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
        <div className="flex flex-col dark:bg-black">
          <Link href="/blog">
            <a className="font-mono dark:text-gray-200 select-none cursor-pointer px-6 py-3 border-b-2 border-darkgray dark:border-white border-opacity-10">
              BLOG
            </a>
          </Link>
          <Link href="/me">
            <a className="font-mono dark:text-gray-200 select-none cursor-pointer px-6 py-3 border-b-2 border-darkgray dark:border-white border-opacity-10">
              ABOUT ME
            </a>
          </Link>
          <div className="flex justify-around px-6 py-3 border-b-2 border-darkgray dark:border-white border-opacity-10">
            <Link href="https://www.facebook.com/natchapolsrisang">
              <a target="_blank" className="select-none cursor-pointer">
                <FacebookLogo />
              </a>
            </Link>
            <Link href="https://twitter.com/UtopiaBeam">
              <a target="_blank" className="select-none cursor-pointer">
                <TwitterLogo />
              </a>
            </Link>
            <Link href="https://www.twitch.tv/utopiabeam">
              <a target="_blank" className="select-none cursor-pointer">
                <TwitchLogo />
              </a>
            </Link>
            <Link href="https://github.com/UtopiaBeam">
              <a target="_blank" className="select-none cursor-pointer">
                <GithubLogo />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/natchapol-srisang-3b723b16a">
              <a target="_blank" className="select-none cursor-pointer">
                <LinkedInLogo />
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default NavSm
