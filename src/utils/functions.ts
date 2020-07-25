import { useState, useEffect } from 'react'

export function getDateString(dateStr: string) {
  const date = new Date(dateStr)
  const months = [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ษ.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear() +
    543}`
}

export function useMobile() {
  const isClient = typeof window === 'object'

  function checkIsMobile() {
    return isClient ? window.innerWidth <= 420 : false
  }

  const [isMobile, setIsMobile] = useState(checkIsMobile)

  useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize() {
      setIsMobile(checkIsMobile())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
