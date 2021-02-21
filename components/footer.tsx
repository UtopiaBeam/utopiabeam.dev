const Footer: React.FC = () => {
  return (
    <div className="text-center font-mono py-6 dark:bg-darkgray dark:text-gray-400">
      UtopiaBeam © 2019-{new Date().getFullYear()}
    </div>
  )
}

export default Footer
