import { generateLocalUrl } from '@/app/utils/generate_urls'
import { TimeEntry } from '@/app/utils/types'

export const createTE = async (timeEntry: TimeEntry) => {
  return await fetch(generateLocalUrl('/time-entries'), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  })
}