import { NextPage } from 'next'
import Link from 'next/link'

const Text: React.FC<{ className?: string }> = props => (
  <p
    className={`text-terminal font-mono text-lg lg:text-xl py-3 ${
      props.className ?? ''
    }`}
  >
    {props.children}
  </p>
)

const My404: NextPage = () => {
  return (
    <div className="fixed w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-full md:w-1/2 p-6 md:p-0">
        <Text className="text-center text-xl lg:text-2xl pb-16">
          ----- 404 -----
        </Text>
        <Text>
          $ Oops! looks like you're trying to break this coconut shell.
        </Text>
        <Text>$ There's no way you gonna break it, trust me...</Text>
        <Text>
          $ So why don't just go{' '}
          <Link href="/">
            <a className="text-blue-500">home</a>
          </Link>
          ?
        </Text>
      </div>
    </div>
  )
}

export default My404
