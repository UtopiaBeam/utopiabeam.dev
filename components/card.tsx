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
        <Link href={props.url}>
          <Image
            layout="responsive"
            src={banner.url}
            width={banner.width}
            height={banner.height}
          />
        </Link>
      </div>
      <div className="flex flex-col px-4 py-3 space-y-3">
        <p className="text-gray-500">{formatDate(props.date)}</p>
        <div className="space-x-3 font-mono text-blue-500">
          {props.tags.map(tag => (
            <span key={`${props.title}-${tag}`}>
              #{tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>
        <Link href={props.url}>
          <h2 className="text-gray-100 hover:text-orange">{props.title}</h2>
        </Link>
        <p className="text-gray-400">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
