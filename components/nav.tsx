import Link from 'next/link'

const Nav: React.FC = () => {


  return (
    <nav className="flex items-center p-3 bg-gray-200 dark:bg-grey">
      <Link href="/">
        <>
          <h2 className="text-orange font-logo font-bold select-none">{'{'}</h2>
          <h2 className="text-white font-logo font-bold select-none">
            UtopiaBeam
          </h2>
          <h2 className="pr-6 text-orange font-logo font-bold select-none">
            {'}'}
          </h2>
        </>
      </Link>
      <Link href="/blog">
        <p className="px-4 font-mono uppercase dark:text-gray-200">Blog</p>
      </Link>
      <Link href="/me">
        <p className="px-4 font-mono uppercase dark:text-gray-200">About me</p>
      </Link>
    </nav>
  )
}

export default Nav
