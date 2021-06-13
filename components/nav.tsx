import Link from 'next/link'
import FacebookLogo from './logo/facebook'
import TwitterLogo from './logo/twitter'
import TwitchLogo from './logo/twitch'
import GithubLogo from './logo/github'
import LinkedInLogo from './logo/linkedin'

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between bg-gray-200 dark:bg-darkgray border-b-2 border-darkgray dark:border-white border-opacity-10">
      <div className="flex space-x-8 items-baseline p-3 md:px-4">
        <Link href="/">
          <div className="flex items-center pr-4 cursor-pointer">
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
      <div className="flex space-x-6 p-3 md:px-6">
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
        <Link href="https://twitter.com/UtopiaBeam">
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
    </nav>
  )
}

export default Nav
