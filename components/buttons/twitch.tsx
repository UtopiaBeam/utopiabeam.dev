import Link from 'next/link'

const Twitch: React.FC = () => (
  <Link href="https://www.twitch.tv/utopiabeam">
    <a target="_blank" className="select-none cursor-pointer">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        className="fill-current text-gray-200 hover:text-orange"
      >
        <title>Twitch</title>
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </svg>
    </a>
  </Link>
)

export default Twitch
