import Link from 'next/link'

const NavSm: React.FC = () => {
  return (
    <nav className="flex md:hidden justify-between bg-gray-200 dark:bg-darkgray border-b-2 border-darkgray dark:border-white border-opacity-10">
      <Link href="/">
        <div className="flex items-center p-3 cursor-pointer">
          <h3 className="text-orange font-logo font-bold select-none">{'{'}</h3>
          <h3 className="text-white font-logo font-bold select-none">
            UtopiaBeam
          </h3>
          <h3 className="text-orange font-logo font-bold select-none">{'}'}</h3>
        </div>
      </Link>
    </nav>
  )
}

export default NavSm
