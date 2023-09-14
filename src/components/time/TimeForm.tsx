"use client"
import { TimeEntry } from "@/app/utils/types";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "../Input";
import { formatDate, getHtmlDatetime } from "@/app/utils/formatDate";
import { createTE, updateTe } from "@/clientCalls/timeEntries";
import { ProjectSelector } from "../ProjectSelector";
import { initTEValue } from "@/app/time/page";
  
  export const TimeForm = (TE:TimeEntry) => {
    const router = useRouter()
    const [timeEntry, setTimeEntry] = useState<TimeEntry>(TE)
  
    if (TE.id===undefined) {
    useEffect(() => {
        if (timeEntry.start  !== '' && timeEntry.end !== '' && timeEntry.task  !== '') {
          createTE(timeEntry)
            .then(() => {
              setTimeEntry(initTEValue)
              router.refresh()
            })
        }
      }, [router, timeEntry])
    } 
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target
      setTimeEntry({ ...timeEntry, [name]: value})
    }
  
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const {name, value} = e.target
      setTimeEntry({ ...timeEntry, [name]: value})
    }

    const update = async () => {
      const res = await updateTe(timeEntry);
      if (res.ok) {
          router.refresh()
      }

    }
    return (
      <form className="flex flex-wrap items-end">
        <Input label="Task" name="task" value={timeEntry.task} onChange={handleChange} />
        <Input label="Start" name="start" value={timeEntry.id===undefined?timeEntry.start:getHtmlDatetime(timeEntry.start)} onChange={handleChange} type="datetime-local" />
        <Input label="End" name="end" value={timeEntry.id===undefined?timeEntry.end:getHtmlDatetime(timeEntry.end)} onChange={handleChange} type="datetime-local" />
        <ProjectSelector name="project_id" value={timeEntry.project_id} handleChange={handleSelectChange} />
        {TE.id!==undefined? (
          <button
            className="btn btn-neutral"
            disabled={!(timeEntry.task&&timeEntry.start&&timeEntry.end&&timeEntry.project_id)}
            onClick={(e) => {e.preventDefault();update()}}
          >Save</button>
        ) : 
        timeEntry.start ? (
          <button
            className="btn btn-neutral"
            disabled={timeEntry.end !== ''}
            onClick={(e) => {e.preventDefault();setTimeEntry({...timeEntry, end: formatDate(new Date())})}}
          >Stop</button>
        ) : (
          <button
            className="btn btn-neutral"
            onClick={(e) => {e.preventDefault();setTimeEntry({...timeEntry, start: formatDate(new Date())})}}
          >Start</button>
        )}
      </form>
    )
  }