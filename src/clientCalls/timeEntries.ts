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

export const deleteTE =async (id:object) => {
  return await fetch(generateLocalUrl('/time-entries'), {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({...id, user_name:process.env.NEXT_PUBLIC_USERNAME})
  }) 
}

export const updateTe = async (timeEntry:TimeEntry) => {
  return await fetch(generateLocalUrl('/time-entries'), {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({...timeEntry, user_name:process.env.NEXT_PUBLIC_USERNAME})
  }) 
}