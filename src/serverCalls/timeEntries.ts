import { generateUrl } from '../app/utils/generate_urls'
import { TimeEntry } from '../app/utils/types'

export const getAllTEs = async () => {
  return await fetch(generateUrl('/time-entries'), {
    cache: "no-store",
  })
}

export const createTE = async (timeEntry: TimeEntry) => {
  return await fetch(generateUrl('/time-entries'), {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  })
}