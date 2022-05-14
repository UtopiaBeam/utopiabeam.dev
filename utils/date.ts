export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatExperienceDate(date: string): string {
  return new Date(date).toLocaleDateString('th-TH', {
    month: '2-digit',
    year: 'numeric',
  })
}
