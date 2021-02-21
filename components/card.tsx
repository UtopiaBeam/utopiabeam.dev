import Image from 'next/image'
import { Asset, formatDate } from '../services'

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
    <div className="flex flex-col border-2 dark:border-white border-opacity-10 rounded-md hover:border-opacity-50">
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
        <h1 className="dark:text-gray-100">{props.title}</h1>
        <p className="dark:text-gray-400">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
