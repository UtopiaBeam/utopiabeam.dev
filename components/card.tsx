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

  const card = (
    <div className="flex flex-col border-2 dark:border-white border-opacity-10 rounded-md hover:border-opacity-50 cursor-pointer">
      {banner ? (
        <Image
          src={banner.url}
          width={banner.width}
          height={banner.height}
          className="rounded-t"
        />
      ) : null}
      <div className="flex flex-col px-4 py-3 space-y-3">
        <p className="dark:text-gray-500">{formatDate(props.date)}</p>
        <div className="space-x-3 font-mono dark:text-blue-500">
          {props.tags.map(tag => (
            <span key={`${props.title}-${tag}`}>
              #{tag.toLocaleUpperCase()}
            </span>
          ))}
        </div>
        <h2 className="dark:text-gray-100">{props.title}</h2>
        <p className="dark:text-gray-400">{props.description}</p>
      </div>
    </div>
  )

  return props.url ? <Link href={props.url}>{card}</Link> : card
}

export default Card
