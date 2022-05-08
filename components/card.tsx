import Image from 'next/image'
import Link from 'next/link'
import { Asset, formatDate } from '../utils'

interface Props {
  title: string
  description?: string
  date?: string
  banner?: Asset
  tags?: string[]
  url?: string
}

const Card: React.FC<Props> = props => {
  const { banner } = props

  return (
    <div>
      <div className="thumbnail">
        <Image
          layout="responsive"
          src={banner.url}
          width={banner.width}
          height={banner.height}
        />
      </div>
      <div className="flex flex-col px-4 py-3 space-y-3">
        <p className="dark:text-gray-500">{formatDate(props.date)}</p>
        <div className="space-x-3 font-mono dark:text-blue-500">
          {props.tags.map(tag => (
            <span key={`${props.title}-${tag}`}>
              #{tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>
        <Link href={props.url}>
          <h2 className="dark:text-gray-100 hover:dark:text-orange">
            {props.title}
          </h2>
        </Link>
        <p className="dark:text-gray-400">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
