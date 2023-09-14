"use client"

import { initTEValue } from "@/app/time/page"
import { formatDate } from "@/app/utils/formatDate"
import { TimeEntry } from "@/app/utils/types"
import { deleteTE } from "@/clientCalls/timeEntries"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Dialog } from "../Dialog"
import { TimeForm } from "./TimeForm"

type Props = {
    TEs: TimeEntry[],
    onEdit: (id:number) => void
}

export const TimeTable = ({TEs, onEdit}:Props) => {
    const router = useRouter();
    const onDelete = async (id: number)=> {
        const res = await deleteTE({id:id});
        if (res.ok) {
            router.refresh()
        }
    }
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Task</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Project</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {TEs.map(te=>(
                            <tr key={te.id}>
                                <th>{te.id}</th>
                                <td>{te.task}</td>
                                <td>{formatDate(new Date(te.start))}</td>
                                <td>{formatDate(new Date(te.end))}</td>
                                <td>{te.project_name}</td>
                                <td>
                                    <button onClick={()=>onEdit(te.id!)} className="btn mr-5">edit</button>
                                    <button onClick={()=>onDelete(te.id!)} className="btn">delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}