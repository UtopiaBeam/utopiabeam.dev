import React from 'react'
import { Experience, formatExperienceDate } from '../utils'
import ExternalLink from './buttons/external-link'

interface Props {
  data: Experience
}

const Experience: React.FC<Props> = ({ data }) => {
  const startMonth = formatExperienceDate(data.startDate)
  const endMonth = data.endDate ? formatExperienceDate(data.endDate) : 'Present'

  return (
    <div className="space-y-3">
      <h2>
        {data.title}
        {data.endDate ? null : <span className="text-orange">*</span>}
      </h2>
      {data.url ? <ExternalLink url={data.url} /> : null}
      <p>{`${startMonth} - ${endMonth}`}</p>
      <div
        className="dark:text-gray-300 text-lg space-y-4 leading-loose"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    </div>
  )
}

export default Experience
