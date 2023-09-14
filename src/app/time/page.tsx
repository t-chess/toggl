import { TimeForm } from '@/components/time/TimeForm'
import { Times } from '@/components/time/Times';
import { TimeTable } from '@/components/time/TimeTable';
import { getAllTEs } from '@/serverCalls/timeEntries'
import { TimeEntry } from '../utils/types';

async function getData() {
  // const res = await getAllTEs()
  const res = await getAllTEs().then(response=>response.json());
  return res
}

export const initTEValue: TimeEntry = {
  end: '',
  start: '',
  task: '',
  project_id: 4,
}

export default async function Page() {
  const data = await getData()
  return (
    <>
    <TimeForm {...initTEValue} />
    <Times times={data} />
    </>
  )
}