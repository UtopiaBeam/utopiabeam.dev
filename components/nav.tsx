import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <nav className="flex space-x-8 items-baseline p-3 bg-gray-200 dark:bg-darkgray border-b-2 border-darkgray dark:border-white border-opacity-10">
      <Link href="/">
        <div className="flex items-center pr-4 cursor-pointer">
          <h3 className="text-orange font-logo font-bold select-none">{'{'}</h3>
          <h3 className="text-white font-logo font-bold select-none">
            UtopiaBeam
          </h3>
          <h3 className="text-orange font-logo font-bold select-none">{'}'}</h3>
        </div>
      </Link>
      <Link href="/blog">
        <p className="font-mono dark:text-gray-200 select-none cursor-pointer hover:text-orange">
          BLOG
        </p>
      </Link>
      <Link href="/me">
        <p className="font-mono dark:text-gray-200 select-none cursor-pointer hover:text-orange">
          ABOUT ME
        </p>
      </Link>
    </nav>
  )
}

export default Nav
