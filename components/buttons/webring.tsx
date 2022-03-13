import Link from 'next/link'

const WebRing: React.FC = () => (
  <Link href="https://webring.wonderful.software#utopiabeam.dev">
    <a
      title="วงแหวนเว็บ"
      target="_blank"
      className="select-none cursor-pointer"
    >
      <svg
        role="img"
        viewBox="0 0 416 416"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        className="fill-current dark:text-gray-200 hover:text-orange"
      >
        <title>WebRing</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z"
        />
        <path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z" />
      </svg>
    </a>
  </Link>
)

export default WebRing
